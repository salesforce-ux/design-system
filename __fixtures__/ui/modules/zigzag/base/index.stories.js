import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import ButtonExample, {
  examples as ButtonExamples,
  states as ButtonStates
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Button', module)
  .addDecorator(withSmartKnobs)
  .add('Base', () => <ButtonExample />);

ButtonExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonExamples, example.id)
  );
});

ButtonStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ButtonStates, example.id)
  );
});
