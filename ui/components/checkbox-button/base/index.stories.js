import { storiesOf } from '@storybook/react';
import * as CheckboxButtonExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Checkbox Button/Base', module).add(
  'Base',
  () => CheckboxButtonExamples.default
);

CheckboxButtonExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CheckboxButtonExamples.states, example.id)
  );
});
