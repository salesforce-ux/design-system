import { storiesOf } from '@storybook/react';
import * as InlineEditExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Data Tables/Inline Edit', module).add(
  'Base',
  () => InlineEditExamples.default
);

InlineEditExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InlineEditExamples.states, example.id)
  );
});
