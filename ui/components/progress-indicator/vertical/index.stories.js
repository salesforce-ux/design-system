import { storiesOf } from '@storybook/react';
import * as ComponentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Progress Indicator/Vertical', module).add(
  'Base',
  () => ComponentExamples.default
);

ComponentExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ComponentExamples.examples, example.id)
  );
});

ComponentExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ComponentExamples.states, example.id)
  );
});
