import * as BaseExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const patternName = 'Map';

const storyOptions = {
  defaultDemoStyles: 'min-height: 500px;',
  isFullBleed: true,
  eyes: {
    ignoreRegions: [
      { selector: '.slds-map' }
    ]
  }
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
