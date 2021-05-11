import * as BaseExamples from './base/example';
import * as ImageExamples from './image/example';
import * as IntegratedExamples from './integrated/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, ImageExamples, IntegratedExamples];

const patternName = 'File Selector';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
