import { storiesOf } from '@storybook/react';
import * as FormElementAddressExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Address', module).add(
  'Base',
  () => FormElementAddressExamples.default
);

FormElementAddressExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementAddressExamples.states, example.id)
  );
});
