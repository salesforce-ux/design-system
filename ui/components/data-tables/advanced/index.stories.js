import { storiesOf } from '@storybook/react';
import * as AdvancedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Data Tables/Advanced', module).add(
  'Base',
  () => AdvancedExamples.default
);

AdvancedExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AdvancedExamples.examples, example.id)
  );
});

AdvancedExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AdvancedExamples.states, example.id)
  );
});
