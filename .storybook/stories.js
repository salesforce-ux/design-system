import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../ui/shared/helpers';
import {
  getComponents,
  getComponentVariants,
  getUtils
} from '../shared/utils/annotations';
import { makeTitle } from '../shared/utils/text-formatting';
import DocsPage from './components/DocsPage';

const createComponentStories = () => {
  const componentList = getComponents();

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

      const getStoriesByCategory = (category, categoryExamples) => {
        categoryExamples.forEach(example => {
          storiesOf(`${storyTitle}/${category}`, module).add(
            example.label,
            () => getDisplayElementById(categoryExamples, example.id),
            getExampleStoryParams(getStoryWrapperDecorator(example), {
              docs: {
                page: DocsComponent
              }
            })
          );
        });
      };

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

        if (examples.examples)
          getStoriesByCategory('Examples', examples.examples);

        if (examples.states) getStoriesByCategory('States', examples.states);
      }
    });
  });
};

const createUtilStories = () => {
  const utils = getUtils();

  utils.forEach(util => {
    const Docs = require(`../ui/utilities/${util}/docs.mdx`).default;
    const utilTitle = makeTitle(util);
    let examples;

    try {
      examples = require(`../ui/utilities/${util}/example`);
    } catch (e) {
      console.warn(`Component Examples not found for ${utilTitle}`);
    }

    if (examples && examples.examples) {
      const utilStory = storiesOf(`Utilities/${utilTitle}`, module);
      const DocsComponent = () => <DocsPage title={utilTitle} Docs={Docs} />;

      examples.examples.forEach(example => {
        utilStory.add(
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
  });
};

/**
 * This function uses our annotations-based ui.json to programmatically add
 * stories from our example files.
 */
export default () => {
  // load component files / kitchen sinks
  const req = require.context('../ui/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  createComponentStories();
  createUtilStories();
};
