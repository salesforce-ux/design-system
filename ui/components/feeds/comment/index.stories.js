import { storiesOf } from '@storybook/react';
import * as CommentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Feeds/Comment', module).add(
  'Base',
  () => CommentExamples.default
);

CommentExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CommentExamples.states, example.id)
  );
});
