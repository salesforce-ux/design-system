import { storiesOf } from '@storybook/react';
import * as ButtonGroupsListExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Groups/List', module).add(
  'Base',
  () => ButtonGroupsListExamples.default
);

ButtonGroupsListExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonGroupsListExamples.examples, example.id)
  );
});

ButtonGroupsListExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonGroupsListExamples.states, example.id)
  );
});
