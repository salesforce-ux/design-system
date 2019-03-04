import React from 'react';
import { storiesOf } from '@storybook/react';
import AccordionExample, {
  examples as AccordionExamples,
  states as AccordionStates
} from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Accordion/Base', module).add(
  'Base',
  () => <AccordionExample />
);

AccordionExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AccordionExamples, example.id)
  );
});

AccordionStates.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AccordionStates, example.id)
  );
});
