import { storiesOf } from '@storybook/react';
import * as PromptExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Prompt', module).add(
  'Base',
  () => PromptExamples.default
);

PromptExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PromptExamples.examples, example.id)
  );
});
