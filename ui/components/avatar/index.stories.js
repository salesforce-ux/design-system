import * as BaseExamples from './base/example';
import * as InitialsExamples from './initials/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, InitialsExamples];

const patternName = 'Avatar';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
