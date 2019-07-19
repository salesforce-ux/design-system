import { storiesOf } from '@storybook/react';
import * as PostQuestionExamples from './example';

import '../../../index.scss';

storiesOf('Components/Feeds/Post with Question', module).add(
  'Base',
  () => PostQuestionExamples.default
);
