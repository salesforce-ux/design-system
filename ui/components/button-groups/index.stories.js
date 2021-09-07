import * as ButtonGroupsBaseExamples from './base/example';
import * as ButtonGroupsListExamples from './list/example';
import * as ButtonGroupsRowExamples from './row/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  ButtonGroupsBaseExamples,
  ButtonGroupsListExamples,
  ButtonGroupsRowExamples
];

const patternName = 'Button Groups';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
