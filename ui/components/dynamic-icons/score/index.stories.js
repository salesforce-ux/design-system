import { storiesOf } from '@storybook/react';
import * as ScoreExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Dynamic Icons/Score', module).add(
  'Base',
  () => ScoreExamples.default
);

ScoreExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ScoreExamples.states, example.id)
  );
});
