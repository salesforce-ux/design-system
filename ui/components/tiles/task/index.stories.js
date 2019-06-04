import { storiesOf } from '@storybook/react';
import * as TaskExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tiles/Task', module);

TaskExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(TaskExamples.states, example.id)
  );
});
