import * as BaseExamples from './base/example';
import * as InlineEditExamples from './inline-edit/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, InlineEditExamples];

const patternName = 'List Builder';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
