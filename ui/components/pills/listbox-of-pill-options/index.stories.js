import { storiesOf } from '@storybook/react';
import * as ListboxExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Pills/Listbox of Pill Options',
  module
).add('Base', () => ListboxExamples.default);

ListboxExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ListboxExamples.examples, example.id)
  );
});
