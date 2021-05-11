import * as BaseExamples from './base/example';
import * as CustomExamples from './custom-only/example';
import * as PredefinedExamples from './predefined-only/example';
import * as SwatchesExamples from './swatches-only/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  CustomExamples,
  PredefinedExamples,
  SwatchesExamples
];

const patternName = 'Color Picker';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
