import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonExamples from './base/example';
import * as IconExamples from './with-icon/example';
import * as StatefulExamples from './stateful/example';
import * as DualStatefulExamples from './dual-stateful/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  ButtonExamples,
  DualStatefulExamples,
  StatefulExamples,
  IconExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Button', module).add('Kitchen Sink', () =>
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
