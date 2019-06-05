import { storiesOf } from '@storybook/react';
import * as DropdownHeightExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Menus/Dropdown Height', module);

DropdownHeightExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DropdownHeightExamples.states, example.id)
  );
});
