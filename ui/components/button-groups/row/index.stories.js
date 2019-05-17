import { storiesOf } from '@storybook/react';
import * as ButtonGroupsRowExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button Groups/Row', module).add(
  'Base',
  () => ButtonGroupsRowExamples.default
);

ButtonGroupsRowExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonGroupsRowExamples.examples, example.id)
  );
});
