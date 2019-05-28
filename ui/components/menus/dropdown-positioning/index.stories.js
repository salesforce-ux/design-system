import { storiesOf } from '@storybook/react';
import * as DropdownPositioningExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Menus/Dropdown Positioning', module);

DropdownPositioningExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DropdownPositioningExamples.states, example.id)
  );
});
