import { storiesOf } from '@storybook/react';
import * as ButtonIconsStatefulExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Icons/Stateful', module).add(
  'Base',
  () => ButtonIconsStatefulExamples.default
);

ButtonIconsStatefulExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconsStatefulExamples.states, example.id)
  );
});
