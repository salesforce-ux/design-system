import { storiesOf } from '@storybook/react';
import * as CustomExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Color Picker/Custom Only', module).add(
  'Base',
  () => CustomExamples.default
);

CustomExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CustomExamples.states, example.id)
  );
});
