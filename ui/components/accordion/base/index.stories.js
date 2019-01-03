import React from 'react';
import { storiesOf } from '@storybook/react';
import ComponentExample, {
  examples as ComponentExamples,
  states as ComponentStates
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Accordion/Base', module).add(
  'Base',
  () => ComponentExample
);

ComponentExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ComponentExamples, example.id)
  );
});

ComponentStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ComponentStates, example.id)
  );
});
