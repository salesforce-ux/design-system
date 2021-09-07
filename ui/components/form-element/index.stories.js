import * as BaseExamples from './base/example';
import * as AddressExamples from './address/example';
import * as CompoundExamples from './compound/example';
import * as HorizontalExamples from './horizontal/example';
import * as StackedExamples from './stacked/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  HorizontalExamples,
  AddressExamples,
  CompoundExamples,
  StackedExamples,
];

const patternName = 'Form Element';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
