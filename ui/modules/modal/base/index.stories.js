import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalExample, {
  examples as ModalExamples,
  states as ModalStates
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Modal/Base', module).add('Base', () => <ModalExample />);

ModalExamples.forEach(example => {
  storiesOf('Modules/Modal/Examples', module).add(example.label, () =>
    getDisplayElementById(ModalExamples, example.id)
  );
});

ModalStates.forEach(example => {
  storiesOf('Modules/Modal/States', module).add(example.label, () =>
    getDisplayElementById(ModalStates, example.id)
  );
});
