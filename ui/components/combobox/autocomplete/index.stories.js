import { storiesOf } from '@storybook/react';
import * as AutoCompleteExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Combobox/Autocomplete', module).add(
  'Base',
  () => AutoCompleteExamples.default
);

AutoCompleteExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AutoCompleteExamples.states, example.id)
  );
});

AutoCompleteExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AutoCompleteExamples.examples, example.id)
  );
});
