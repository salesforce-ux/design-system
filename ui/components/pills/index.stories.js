import * as BaseExamples from './base/example';
import * as ListboxExamples from './listbox-of-pill-options/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, ListboxExamples];

const patternName = 'Pills';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
