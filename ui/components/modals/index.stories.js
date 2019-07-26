import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [BaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'examples',
  'states'
]);

storiesOf('Components/Modal', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        styles={BaseExamples.exampleDemoStyles}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
