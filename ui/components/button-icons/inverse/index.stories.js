import { storiesOf } from '@storybook/react';
import * as ButtonIconsInverseExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Icons/Inverse', module).add(
  'Base',
  () => ButtonIconsInverseExamples.default
);

ButtonIconsInverseExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsInverseExamples.examples, example.id)
  );
});

ButtonIconsInverseExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsInverseExamples.states, example.id)
  );
});
