import * as BaseExamples from './base/example';
import * as CustomLogicExamples from './custom-logic/example';
import * as FiltersExamples from './filters/example';
import * as FormulaExamples from './formula/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  CustomLogicExamples,
  FiltersExamples,
  FormulaExamples
];

const patternName = 'Expression';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
