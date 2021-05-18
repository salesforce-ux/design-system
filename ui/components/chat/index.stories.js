import * as BaseExamples from './base/example';
import * as PastExamples from './past/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, PastExamples];

const patternName = 'Chat';

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
