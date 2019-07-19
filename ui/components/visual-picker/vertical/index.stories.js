import { storiesOf } from '@storybook/react';
import * as VerticalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Visual Picker/Vertical', module).add(
  'Base',
  () => VerticalExamples.default
);

VerticalExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(VerticalExamples.states, example.id)
  );
});
