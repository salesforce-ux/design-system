import * as BaseExamples from './base/example';
import * as CommentExamples from './comment/example';
import * as PostExamples from './post/example';
import * as PostAttachmentsExamples from './post-with-attachments/example';
import * as PostCommentsExamples from './post-with-comments/example';
import * as PostQuestionExamples from './post-with-question/example';
import * as SmallColumnExamples from './small-column/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  CommentExamples,
  PostExamples,
  PostAttachmentsExamples,
  PostCommentsExamples,
  PostQuestionExamples,
  SmallColumnExamples
];

const patternName = 'Feeds';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
