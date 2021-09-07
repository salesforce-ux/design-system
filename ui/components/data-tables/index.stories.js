import * as BaseExamples from './base/example';
import * as AdvancedExamples from './advanced/example';
import * as HiddenHeaderExamples from './hidden-header/example';
import * as InlineEditExamples from './inline-edit/example';
import * as ResponsiveExamples from './responsive/example';
import * as FixedHeaderExamples from './fixed-header/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  AdvancedExamples,
  HiddenHeaderExamples,
  InlineEditExamples,
  ResponsiveExamples,
  FixedHeaderExamples
];

const patternName = 'Data Tables';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
