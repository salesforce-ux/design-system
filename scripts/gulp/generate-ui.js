// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from 'lodash';
import Either from 'data.either';
import fs from 'fs';
import markdown from 'markdown-it';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import through from 'through2';
import glob from 'glob';
import {foldMap} from '../ui';
import Status from 'app_modules/site/util/component/status';
import Schema from 'app_modules/ui/util/schema';

export const eachComponent = (schema, callback) =>
  schema.forEach(category => {
    category.components.forEach(callback);
  });

export const addStatus = schema =>
  eachComponent(schema, component =>
    component.status = Status.or(component.flavors.map(x => x.status))
  );

export const addExamplePath = schema =>
  eachComponent(schema, component => {
    component.flavors.forEach(flavor => {
      const examplePath = `${flavor.path}/index.react.example.jsx`;
      try {
        fs.accessSync(path.resolve(__PATHS__.ui, examplePath));
        flavor.examplePath = examplePath;
      } catch(error) { // eslint-disable-line no-empty
      }
    });
  });

export const generateUI = (schema) => {
  schema = schema || Schema({ path: __PATHS__.ui }).generate();
  addStatus(schema);
  addExamplePath(schema);

  // HACK: BACKPORT
  const createParser = require('@salesforce-ux/design-system-parser');
  const comments = glob.sync(path.resolve(__PATHS__.ui, 'components/**/*.scss'))
    .map(scssPath => fs.readFileSync(scssPath, 'utf8')).join('\n');
  const parser = createParser(comments);
  const getVariants = component =>
    foldMap(x => x, [], component)
    .filter(x => x.getIn(['annotations', 'variant']));

  parser.components().forEach(comment => {
    const md = markdown({
      html: true,
      linkify: true
    });
    parser
      .component(comment.get('id'))
      .chain(component =>
        Either
          .fromNullable(schema.find(g => g.id === 'components'))
          .map(group => group.components)
          .chain(components =>
            Either
              .fromNullable(components.find(c => c.id === comment.get('id')))
              .map(legacyComponent =>
                [legacyComponent, component]
              )
          )
      )
      .fold(() => {}, ([legacyComponent, component]) => {
        // Description
        if (component.has('description')) {
          legacyComponent.description = md.render(
            component.get('description')
          );
        }
        // Summary
        if (component.hasIn(['annotations', 'summary'])) {
          legacyComponent.summary = md.render(
            component.getIn(['annotations', 'summary'])
          ).trim().replace(/^<p>/, '<p class="site-text-introduction">');
        }
        // Table
        legacyComponent.table = {
          description: 'This table gives you a quick overview of the SLDS CSS classes that can be applied to this component.',
          classes: []
        };
        const pushTable = c => {
          if (!c.hasIn(['annotations', 'base'])) {
            let item = {
              class: c.getIn(['annotations', 'selector']).replace(/^\./, ''),
              description: c.getIn(['annotations', 'summary'], c.get('description', '')),
              applied: `<code>${c.getIn(['annotations', 'restrict'], '')}</code>`
            };
            if (c.hasIn(['annotations', 'required'])) {
              item.required = c.getIn(['annotations', 'required']);
            }
            if (c.hasIn(['annotations', 'deprecated'])) {
              item.deprecated = c.getIn(['annotations', 'deprecated']);
            }
            legacyComponent.table.classes.push(item);
          }
          if (c.has('restrictees')) {
            c.get('restrictees').forEach(pushTable);
          }
        };
        pushTable(component);
        // Variants
        legacyComponent.flavors.forEach(legacyVariant => {
          Either
            .fromNullable(
              getVariants(component).find(v => v.get('id') === legacyVariant.id)
            )
            .fold(() => {}, variant => {
              // Description
              if (variant.has('description')) {
                legacyVariant.description = md.render(
                  variant.get('description')
                );
              }
            });
        });
      });
  });
  // HACK: BACKPORT

  return schema;
};

gulp.task('generate:ui', () => {
  const stream = through.obj();
  const ui = JSON.stringify(generateUI(), null, 2);
  stream.write(new gutil.File({
    path: 'ui.js',
    contents: new Buffer(`export default ${ui};`)
  }));
  stream.end();
  return stream
    .pipe(gulp.dest(__PATHS__.generated));
});
