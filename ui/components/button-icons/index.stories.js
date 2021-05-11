import * as Base from './base/example';
import * as BorderedFilled from './bordered-filled-container/example';
import * as BorderedInverse from './bordered-inverse/example';
import * as BorderedTransparent from './bordered-transparent-container/example';
import * as Brand from './brand/example';
import * as Inverse from './inverse/example';
import * as Stateful from './stateful/example';
import * as TransparentContainer from './transparent-container/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  Base,
  BorderedFilled,
  BorderedInverse,
  BorderedTransparent,
  Brand,
  Inverse,
  Stateful,
  TransparentContainer
];

const patternName = 'Button Icons';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
