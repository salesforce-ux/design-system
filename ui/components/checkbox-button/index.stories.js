import * as Base from './base/example.jsx';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [Base];

const patternName = 'Checkbox Button';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
