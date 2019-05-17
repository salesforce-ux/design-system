import { storiesOf } from '@storybook/react';
import * as CheckboxButtonGroupExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Checkbox Button Group/Base', module).add(
  'Base',
  () => CheckboxButtonGroupExamples.default
);

CheckboxButtonGroupExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxButtonGroupExamples.states, example.id)
  );
});
