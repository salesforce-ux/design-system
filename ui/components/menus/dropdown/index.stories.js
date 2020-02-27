import { storiesOf } from '@storybook/react';
import * as DropdownExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Components/Menus/Dropdown', module).add(
  'Base',
  () => DropdownExamples.default
);

DropdownExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DropdownExamples.examples, example.id)
  );
});
