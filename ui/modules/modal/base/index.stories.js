import { storiesOf } from '@storybook/react';
import * as ModalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Modal/Base', module).add(
  'Default',
  () => ModalExamples.default
);

ModalExamples.examples.forEach(examples => {
  storiesOf('Modules/Modal/Examples', module).add(examples.label, () =>
    getDisplayElementById(ModalExamples.examples, examples.id)
  );
});
