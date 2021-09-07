import * as BaseExamples from './base/example';
import * as ModalExamples from './modal/example';
import * as VerticalExamples from './vertical/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, ModalExamples, VerticalExamples];

const patternName = 'Progress Indicator';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
