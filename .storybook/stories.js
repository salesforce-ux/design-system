import React from 'react';
import { storiesOf } from '@storybook/react';
import { getDisplayElementById } from '../ui/shared/helpers';
import {
  getComponents,
  getComponentVariants
} from '../shared/utils/annotations';
import { makeTitle } from '../shared/utils/text-formatting';
import DocsPage from './components/DocsPage';

/**
 * This function uses our annotations-based ui.json to programmatically add
 * stories from our example files.
 */
export default () => {
  const componentList = getComponents();

  // load component files / kitchen sinks
  const req = require.context('../ui/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  // create stories for each component / variant from example files
  componentList.forEach(component => {
    const Docs = require(`../ui/components/${component}/docs.mdx`).default;

    const componentTitle = makeTitle(component);
    const variants = getComponentVariants(component);

    // load each component variant
    variants.forEach(variant => {
      const variantTitle = makeTitle(variant);
      const storyTitle = `Components/${componentTitle}/${variantTitle}`;
      let examples;

      const DocsComponent = () => (
        <DocsPage title={componentTitle} Docs={Docs} />
      );

      try {
        examples = require(`../ui/components/${component}/${variant}/example`);
      } catch (e) {
        console.warn(
          `Component Examples not found for ${componentTitle} - ${variantTitle}`
        );
      }

      if (examples) {
        storiesOf(storyTitle, module).add(
          variantTitle,
          () => examples.default,
          {
            docs: {
              page: DocsComponent
            }
          }
        );

        if (examples.examples) {
          examples.examples.forEach(example => {
            storiesOf(`${storyTitle}/Examples`, module).add(
              example.label,
              () => getDisplayElementById(examples.examples, example.id),
              {
                docs: {
                  page: DocsComponent
                }
              }
            );
          });
        }

        if (examples.states) {
          examples.states.forEach(example => {
            storiesOf(`${storyTitle}/States`, module).add(
              example.label,
              () => getDisplayElementById(examples.states, example.id),
              {
                docs: {
                  page: DocsComponent
                }
              }
            );
          });
        }
      }
    });
  });
};
