import { storiesOf } from '@storybook/react';
import * as PostExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Feeds/Post', module).add(
  'Base',
  () => PostExamples.default
);

PostExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PostExamples.examples, example.id)
  );
});

PostExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PostExamples.states, example.id)
  );
});
