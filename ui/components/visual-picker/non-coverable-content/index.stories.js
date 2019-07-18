import { storiesOf } from '@storybook/react';
import * as NonCoverableContentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Visual Picker/Non-Coverable Content',
  module
).add('Base', () => NonCoverableContentExamples.default);

NonCoverableContentExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(NonCoverableContentExamples.states, example.id)
  );
});
