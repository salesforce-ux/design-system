import React from 'react';
import { storiesOf } from '@storybook/react';
import * as CoverableContentExamples from './coverable-content/example';
import * as LinkExamples from './link/example';
import * as NonCoverableContentExamples from './non-coverable-content/example';
import * as VerticalExamples from './vertical/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  CoverableContentExamples,
  LinkExamples,
  NonCoverableContentExamples,
  VerticalExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Visual Picker', module).add(
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
      page: () => <DocsPage title="Visual Picker" Docs={Docs} />
    }
  }
);
