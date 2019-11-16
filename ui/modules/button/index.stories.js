import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonBaseExamples from './base/example';
import * as ButtonStatefulExamples from './stateful/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../shared/components/DocsPage';
import Docs from './docs.mdx';

const examples = [ButtonBaseExamples, ButtonStatefulExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Modules/Button/', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Button" Docs={Docs} />
    }
  }
);
