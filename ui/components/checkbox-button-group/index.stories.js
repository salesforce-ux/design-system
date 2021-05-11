import * as Base from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [Base];

const patternName = 'Checkbox Button Group';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
