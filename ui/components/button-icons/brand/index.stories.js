import { storiesOf } from '@storybook/react';
import * as ButtonIconsBrandExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Icons/Brand', module).add(
  'Base',
  () => ButtonIconsBrandExamples.default
);

ButtonIconsBrandExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsBrandExamples.states, example.id)
  );
});
