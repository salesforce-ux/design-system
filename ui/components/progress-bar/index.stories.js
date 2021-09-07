import * as BaseExamples from './base/example';
import * as VerticalExamples from './vertical/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, VerticalExamples];

const patternName = 'Progress Bar';

const storyOptions = {
  defaultDemoStyles: 'height: 6rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
