import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../ui/shared/helpers';
import CodeView from "../shared/components/CodeView";
import {
  getComponents,
  getComponentVariants,
  getUtils,
  getComponentsByCriteria
} from '../shared/utils/annotations';
import { makeTitle } from '../shared/utils/text-formatting';
import DocsPage from './components/DocsPage';

const createComponentStories = type => {
  let componentList;

  switch (type) {
    case 'mobile':
      componentList = getComponentsByCriteria([
        { path: ['annotations', 'layout'] }
      ]);
      break;

    default:
      componentList = getComponents();
  }

  // create stories for each component / variant from example files
  componentList.forEach(component => {
    const Docs = require(`../ui/components/${component}/docs.mdx`).default;

    const componentTitle = makeTitle(component);
    const variants = getComponentVariants(component);

    // try to load the kitchen sink
    try {
      require(`../ui/components/${component}/index.stories.js`);
    } catch (e) {
      console.warn(`Component Kitchen Sink not found for ${componentTitle}`);
    }

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
        // defaults when default example is basic without metadata
        let defaultExample = () => examples.default;
        let defaultExampleParams = undefined;

        // if we have an array for the default example definition
        if (Array.isArray(examples.default)) {
          defaultExample = () =>
            getDisplayElementById(examples.default, examples.default[0].id);
          defaultExampleParams = getExampleStoryParams(
            getStoryWrapperDecorator(examples.default[0])
          );
        }

        // generate default example story
        storiesOf(storyTitle, module).add(
          variantTitle,
          defaultExample,
          defaultExampleParams,
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
      const utilWithCodeStory = storiesOf(
        `Utilities (with code)/${utilTitle}`,
        module
      );
      const DocsComponent = () => <DocsPage title={utilTitle} Docs={Docs} />;

      examples.examples.forEach((example) => {
        utilStory.add(
          example.label,
          () => getDisplayElementById(examples.examples, example.id),
          {
            docs: {
              page: DocsComponent,
            },
          }
        );
      });

      examples.examples.forEach(example => {
        const element = getDisplayElementById(examples.examples, example.id);
        const UtilStoryWithCode = () => {
          // Check if the examples file has a Context component defined
          // If it exists, wrap the element with Context to provide necessary styling
          // If not, return the element as is
          return examples.Context ? (
            <examples.Context>{element}</examples.Context>
          ) : (
            element
          );
        };

        utilWithCodeStory.add(
          example.label,
          () => {
            return (
              <CodeView
                toggleCode={false}
                // if the example has a Context, use the element as the code example
                {...(examples.Context ? { codeExample: element } : {})}
              >
                <UtilStoryWithCode />
              </CodeView>
            );
          },
          {
            docs: {
              page: DocsComponent,
            },
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

/**
 * This function uses our annotations-based ui.json to programmatically add
 * stories from our example files.
 */
export const mobileStories = () => {
  // load mobile stories (layout === responsive || adaptive)
  createComponentStories('mobile');
};
