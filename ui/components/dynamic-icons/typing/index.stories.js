import { storiesOf } from '@storybook/react';
import * as TypingExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Dynamic Icons/Typing', module).add(
  'Base',
  () => TypingExamples.default
);

TypingExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(TypingExamples.states, example.id)
  );
});
