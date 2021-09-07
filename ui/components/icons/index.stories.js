import * as BaseExamples from './base/example';
import * as ActionExamples from './action/example';
import * as CustomExamples from './custom/example';
import * as DoctypeExamples from './doctype/example';
import * as StandardExamples from './standard/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  ActionExamples,
  CustomExamples,
  DoctypeExamples,
  StandardExamples
];

const patternName = 'Icons';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
