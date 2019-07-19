import { storiesOf } from '@storybook/react';
import * as SwatchesExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Color Picker/Swatches Only', module).add(
  'Base',
  () => SwatchesExamples.default
);

SwatchesExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(SwatchesExamples.states, example.id)
  );
});
