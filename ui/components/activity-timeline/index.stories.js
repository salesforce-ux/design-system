import * as BaseExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const patternName = 'Activity Timeline';

const storyOptions = {
  eyes: {
    waitBeforeScreenshot: 1500
  }
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
