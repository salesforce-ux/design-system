import { storiesOf } from '@storybook/react';
import * as ModalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Modal/Base', module).add(
  'Base',
  () => ModalExamples.default
);

ModalExamples.examples.forEach(example =>
  stories.add(example.label, () =>
    getDisplayElementById(ModalExamples.examples, example.id)
  )
);

ModalExamples.states.forEach(example =>
  stories.add(example.label, () =>
    getDisplayElementById(ModalExamples.states, example.id)
  )
);
