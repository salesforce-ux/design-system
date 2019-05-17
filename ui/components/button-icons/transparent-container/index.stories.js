import { storiesOf } from '@storybook/react';
import * as ButtonIconsTransparentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Icons/Transparent', module).add(
  'Base',
  () => ButtonIconsTransparentExamples.default
);

ButtonIconsTransparentExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsTransparentExamples.examples, example.id)
  );
});

ButtonIconsTransparentExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsTransparentExamples.states, example.id)
  );
});
