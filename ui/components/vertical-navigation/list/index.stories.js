import { storiesOf } from '@storybook/react';
import * as ListExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Components/Vertical Navigation/List', module).add(
  'Base',
  () => ListExamples.default
);

ListExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ListExamples.examples, example.id)
  );
});

ListExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ListExamples.states, example.id)
  );
});
