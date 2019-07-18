import { storiesOf } from '@storybook/react';
import * as TrendExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Dynamic Icons/Trend', module).add(
  'Base',
  () => TrendExamples.default
);

TrendExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(TrendExamples.states, example.id)
  );
});
