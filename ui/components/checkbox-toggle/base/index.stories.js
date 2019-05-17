import { storiesOf } from '@storybook/react';
import * as CheckboxToggleExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Checkbox Toggle/Base', module).add(
  'Base',
  () => CheckboxToggleExamples.default
);

CheckboxToggleExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxToggleExamples.states, example.id)
  );
});
