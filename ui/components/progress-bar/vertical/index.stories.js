import { storiesOf } from '@storybook/react';
import React from 'react';
import * as VerticalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Progress Bar/Vertical', module).add(
  'Base',
  () => VerticalExamples.default
);

VerticalExamples.states.map(example => {
  stories.add(example.label, () => (
    <div style={{ height: '12rem' }}>
      {getDisplayElementById(VerticalExamples.states, example.id)}
    </div>
  ));
});
