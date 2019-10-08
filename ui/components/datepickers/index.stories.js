import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as RangeExamples from './range/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [BaseExamples, RangeExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Datepickers', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          styles={`height: 25rem`}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Datepickers" Docs={Docs} />
    }
  }
);
