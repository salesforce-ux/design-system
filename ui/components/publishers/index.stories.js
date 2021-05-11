import * as BaseExamples from './base/example';
import * as CommentExamples from './comment/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, CommentExamples];

const patternName = 'Publishers';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
