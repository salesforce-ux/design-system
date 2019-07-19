import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ExpandableSectionExamples from './expandable-section/example';
import * as ListExamples from './list/example';
import * as QuickfindExamples from './quickfind/example';
import * as RadioGroupExamples from './radio-group/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  ExpandableSectionExamples,
  ListExamples,
  QuickfindExamples,
  RadioGroupExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Vertical Navigation', module).add('Kitchen Sink', () =>
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
