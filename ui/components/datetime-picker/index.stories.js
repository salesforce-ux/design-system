import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'states',
  'examples'
]);

storiesOf('Components/Datetime Picker', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component, demoStyles }) => (
        <StoryFrame
          component={component}
          label={label}
          styles={demoStyles || 'height: 26rem;'}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Datetime Picker" Docs={Docs} />
    }
  }
);
