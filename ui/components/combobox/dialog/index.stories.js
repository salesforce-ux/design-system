import { storiesOf } from '@storybook/react';
import * as DialogExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Combobox/Dialog', module).add(
  'Base',
  () => DialogExamples.default
);

DialogExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DialogExamples.examples, example.id)
  );
});

DialogExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DialogExamples.states, example.id)
  );
});
