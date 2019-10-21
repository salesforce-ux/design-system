import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonMenuBaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../shared/components/DocsPage';
import Docs from './docs.mdx';

const examples = [ButtonMenuBaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'examples',
  'states'
]);

storiesOf('Modules/Button Menu/', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ id, label, demoStyles, component }) => {
        return (
          <StoryFrame
            component={component}
            label={label}
            styles={demoStyles}
            key={`kitchen-sink-${id}-${idx}`}
          />
        );
      })
    ),
  {
    docs: {
      page: () => <DocsPage title="Button Menu" Docs={Docs} />
    }
  }
);
