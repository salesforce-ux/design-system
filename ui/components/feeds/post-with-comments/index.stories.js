import { storiesOf } from '@storybook/react';
import * as PostCommentsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Feeds/Post with Comments', module).add(
  'Base',
  () => PostCommentsExamples.default
);

PostCommentsExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PostCommentsExamples.states, example.id)
  );
});
