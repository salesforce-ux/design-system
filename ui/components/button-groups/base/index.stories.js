import { storiesOf } from '@storybook/react';
import * as ButtonGroupsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Groups/Base', module).add(
  'Base',
  () => ButtonGroupsExamples.default
);

ButtonGroupsExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonGroupsExamples.examples, example.id)
  );
});

ButtonGroupsExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonGroupsExamples.states, example.id)
  );
});
