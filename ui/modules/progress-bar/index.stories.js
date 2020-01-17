import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../shared/components/DocsPage';
import Docs from './docs.mdx';

import '../../index.scss';

const examples = [BaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Modules/Progress Bar', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component, demoStyles, demoProps }) => (
        <StoryFrame
          component={component}
          label={label}
          styles={demoStyles}
          key={`kitchen-sink-${label}-${idx}`}
          demoProps={demoProps}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Progress Bar" Docs={Docs} />
    }
  }
);
