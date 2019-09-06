import { storiesOf } from '@storybook/react';
import * as AccordionExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import Docs from '../docs.mdx';

import '../../../index.scss';

const stories = storiesOf('Components/Accordion/Base', module).add(
  'Base',
  () => AccordionExamples.default,
  { docs: { page: Docs } }
);

AccordionExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AccordionExamples.examples, example.id)
  );
});

AccordionExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AccordionExamples.states, example.id)
  );
});
