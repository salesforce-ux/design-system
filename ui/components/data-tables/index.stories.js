import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as AdvancedExamples from './advanced/example';
import * as HiddenHeaderExamples from './hidden-header/example';
import * as InlineEditExamples from './inline-edit/example';
import * as ResponsiveExamples from './responsive/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  AdvancedExamples,
  HiddenHeaderExamples,
  InlineEditExamples,
  ResponsiveExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Data Tables', module).add(
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
      page: () => <DocsPage title="Data Tables" Docs={Docs} />
    }
  }
);
