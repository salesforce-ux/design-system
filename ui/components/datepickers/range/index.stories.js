import { storiesOf } from '@storybook/react';
import * as RangeExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Datepickers/Range', module).add(
  'Base',
  () => RangeExamples.default
);

RangeExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(RangeExamples.states, example.id)
  );
});
