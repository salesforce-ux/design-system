import { storiesOf } from '@storybook/react';
import * as PostAttachmentsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Feeds/Post with Attachments', module);

PostAttachmentsExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PostAttachmentsExamples.states, example.id)
  );
});
