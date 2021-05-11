import * as InputExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [InputExamples];

const patternName = 'Input';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
