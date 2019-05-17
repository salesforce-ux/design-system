import { storiesOf } from '@storybook/react';
import * as ButtonIconsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Icons/Base', module).add(
  'Base',
  () => ButtonIconsExamples.default
);

ButtonIconsExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsExamples.examples, example.id)
  );
});

ButtonIconsExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsExamples.states, example.id)
  );
});
