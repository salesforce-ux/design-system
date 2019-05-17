import { storiesOf } from '@storybook/react';
import * as ButtonWithIconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Button/WIth Icon', module).add(
  'Base',
  () => ButtonWithIconExamples.default
);

ButtonWithIconExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonWithIconExamples.examples, example.id)
  );
});

ButtonWithIconExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonWithIconExamples.states, example.id)
  );
});
