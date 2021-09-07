import * as ActionOverflowExamples from './action-overflow/example';
import * as DropdownExamples from './dropdown/example';
import * as DropdownHeightExamples from './dropdown-height/example';
import * as DropdownPositioningExamples from './dropdown-positioning/example';
import * as SubmenuExamples from './submenu/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  ActionOverflowExamples,
  DropdownExamples,
  DropdownHeightExamples,
  DropdownPositioningExamples,
  SubmenuExamples
];

const patternName = 'Menus';

const storyOptions = {
  defaultDemoStyles: 'height: 300px;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
