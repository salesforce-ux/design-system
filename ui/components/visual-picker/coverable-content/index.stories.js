import { storiesOf } from '@storybook/react';
import * as CoverableContentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Visual Picker/Coverable Content',
  module
).add('Base', () => CoverableContentExamples.default);

CoverableContentExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CoverableContentExamples.examples, example.id)
  );
});

CoverableContentExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CoverableContentExamples.states, example.id)
  );
});
