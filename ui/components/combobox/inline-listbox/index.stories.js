import { storiesOf } from '@storybook/react';
import * as InlineListboxExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Combobox/Inline Listbox', module).add(
  'Base',
  () => InlineListboxExamples.default
);

InlineListboxExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InlineListboxExamples.states, example.id)
  );
});
