import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Base from './base/example';
import * as BorderedFilled from './bordered-filled-container/example';
import * as BorderedInverse from './bordered-inverse/example';
import * as BorderedTransparent from './bordered-transparent-container/example';
import * as Brand from './brand/example';
import * as Inverse from './inverse/example';
import * as Stateful from './stateful/example';
import * as TransparentContainer from './transparent-container/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  Base,
  BorderedFilled,
  BorderedInverse,
  BorderedTransparent,
  Brand,
  Inverse,
  Stateful,
  TransparentContainer
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Button Icons', module).add('Kitchen Sink', () =>
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
