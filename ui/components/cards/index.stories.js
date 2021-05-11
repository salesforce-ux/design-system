import * as BaseExamples from './base/example';
import * as EinsteinExamples from './einstein/example';
import * as WrapperExamples from './wrapper/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, EinsteinExamples, WrapperExamples];

const patternName = 'Cards';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
