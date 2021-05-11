import * as CheckboxExamples from './base/example';
import * as CheckboxFormElementExamples from './form-element/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [CheckboxExamples, CheckboxFormElementExamples];

const patternName = 'Checkbox';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
