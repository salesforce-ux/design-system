import * as PathExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [PathExamples];

const patternName = 'Path';

const storyOptions = {
  eyes: {
    waitBeforeScreenshot: '.docs-mobile_frame.slds-resize-done'
  }
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
