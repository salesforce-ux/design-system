import * as BaseExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const patternName = 'App Launcher';

generateStories(patternName, examples, ['examples', 'states'], Docs);
