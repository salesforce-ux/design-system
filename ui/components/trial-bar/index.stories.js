import * as HeaderExamples from './header/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [HeaderExamples];

const patternName = 'Trial Bar';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
