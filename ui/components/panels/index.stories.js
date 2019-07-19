import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as DetailExamples from './detail/example';
import * as FilteringExamples from './filtering/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [BaseExamples, DetailExamples, FilteringExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Panels', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
