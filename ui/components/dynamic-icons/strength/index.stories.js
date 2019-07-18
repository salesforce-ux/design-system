import { storiesOf } from '@storybook/react';
import * as StrengthExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Dynamic Icons/Strength', module).add(
  'Base',
  () => StrengthExamples.default
);

StrengthExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(StrengthExamples.states, example.id)
  );
});
