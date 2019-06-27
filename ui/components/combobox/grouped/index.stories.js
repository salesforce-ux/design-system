import { storiesOf } from '@storybook/react';
import * as GroupedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Combobox/Grouped', module).add(
  'Base',
  () => GroupedExamples.default
);

GroupedExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(GroupedExamples.states, example.id)
  );
});
