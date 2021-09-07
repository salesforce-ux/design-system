import * as BaseExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const patternName = 'Datetime Picker';

const storyOptions = {
  defaultDemoStyles: 'height: 26rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
