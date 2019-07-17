import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Toast/Base', module).add(
  'Base',
  () => BaseExamples.default
);

BaseExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(BaseExamples.examples, example.id)
  );
});

BaseExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(BaseExamples.states, example.id)
  );
});
