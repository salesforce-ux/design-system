import { storiesOf } from '@storybook/react';
import * as TrailheadConnectedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Welcome Mat/Trailhead Connected',
  module
).add('Base', () => TrailheadConnectedExamples.default);

TrailheadConnectedExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(TrailheadConnectedExamples.examples, example.id)
  );
});
