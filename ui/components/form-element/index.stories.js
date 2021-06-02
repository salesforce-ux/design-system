import * as BaseExamples from './base/example';
import * as HorizontalExamples from './horizontal/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, HorizontalExamples];

const patternName = 'Form Element';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
