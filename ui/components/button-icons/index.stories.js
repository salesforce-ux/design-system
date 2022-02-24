import * as BaseExamples from './base/example';
import * as BorderedFilledExamples from './bordered-filled-container/example';
import * as BorderedInverseExamples from './bordered-inverse/example';
import * as BorderedTransparentExamples from './bordered-transparent-container/example';
import * as BrandExamples from './brand/example';
import * as ButtonMenuExamples from './menu/example';
import * as InverseExamples from './inverse/example';
import * as StatefulExamples from './stateful/example';
import * as SizingExamples from './sizing/example';
import * as TransparentContainerExamples from './transparent-container/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  BorderedFilledExamples,
  BorderedInverseExamples,
  BorderedTransparentExamples,
  BrandExamples,
  ButtonMenuExamples,
  InverseExamples,
  SizingExamples,
  StatefulExamples,
  TransparentContainerExamples
];

const patternName = 'Button Icons';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
