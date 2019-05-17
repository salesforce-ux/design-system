import { storiesOf } from '@storybook/react';
import * as ButtonStatefulExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button/Stateful', module).add(
  'Base',
  () => ButtonStatefulExamples.default
);

ButtonStatefulExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonStatefulExamples.states, example.id)
  );
});
