import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonGroupsBaseExamples from './base/example';
import * as ButtonGroupsListExamples from './list/example';
import * as ButtonGroupsRowExamples from './row/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  ButtonGroupsBaseExamples,
  ButtonGroupsListExamples,
  ButtonGroupsRowExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Button Groups', module).add(
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
      page: () => <DocsPage title="Button Groups" Docs={Docs} />
    }
  }
);
