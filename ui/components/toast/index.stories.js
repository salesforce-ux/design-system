import * as BaseExamples from './base/example';
import * as ModalToastExamples from './modal-toast/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, ModalToastExamples];

const patternName = 'Toast';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
