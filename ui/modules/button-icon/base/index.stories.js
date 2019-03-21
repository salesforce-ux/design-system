import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIconExample, {
  states as ButtonIconStates,
  examples as ButtonIconExamples
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/ButtonIcon/Base', module).add(
  'Default',
  () => <ButtonIconExample />
);

ButtonIconStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconStates, example.id)
  );
});

ButtonIconExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonIconExamples, example.id)
  );
});
