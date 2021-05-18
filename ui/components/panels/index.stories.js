import * as BaseExamples from './base/example';
import * as DetailExamples from './detail/example';
import * as FilteringExamples from './filtering/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, DetailExamples, FilteringExamples];

const patternName = 'Panels';

const storyOptions = {
  isFullBleed: true
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
