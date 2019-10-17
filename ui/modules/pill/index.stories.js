import React from 'react';
import { storiesOf } from '@storybook/react';
import * as PillBaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../shared/components/DocsPage';
import Docs from './docs.mdx';

const examples = [PillBaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'states',
  'examples'
]);

storiesOf('Modules/Pill/', module).add(
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
      page: () => <DocsPage title="Pill" Docs={Docs} />
    }
  }
);
