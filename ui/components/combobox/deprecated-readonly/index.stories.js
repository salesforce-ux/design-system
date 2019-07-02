import { storiesOf } from '@storybook/react';
import * as ReadonlyExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Combobox/Deprecated Readonly',
  module
).add('Base', () => ReadonlyExamples.default);

ReadonlyExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ReadonlyExamples.states, example.id)
  );
});
