import * as BaseExamples from './base/example';
import * as RangeExamples from './range/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, RangeExamples];

const patternName = 'Datepickers';

const storyOptions = {
  defaultDemoStyles: 'height: 28rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
