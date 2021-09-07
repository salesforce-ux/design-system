import * as BaseExamples from './base/example';
import * as ToolbarExamples from './toolbar/example';
import { DEMO_STYLES } from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, ToolbarExamples];

const patternName = 'Builder Header';

const storyOptions = {
  defaultDemoStyles: DEMO_STYLES
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
