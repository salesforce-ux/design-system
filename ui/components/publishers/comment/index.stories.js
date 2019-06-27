import { storiesOf } from '@storybook/react';
import * as CommentExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Publishers/Comment', module).add(
  'Base',
  () => CommentExamples.default
);

CommentExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(CommentExamples.examples, example.id)
  );
});
