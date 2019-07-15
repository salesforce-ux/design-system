import { storiesOf } from '@storybook/react';
import * as EllieExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Dynamic Icons/Ellie', module).add(
  'Base',
  () => EllieExamples.default
);

EllieExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(EllieExamples.states, example.id)
  );
});
