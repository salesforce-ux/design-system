import * as BaseExamples from './base/example';
import * as InfoOnlyExamples from './info-only/example';
import * as SplashExamples from './splash/example';
import * as TrailheadConnectedExamples from './trailhead-connected/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  InfoOnlyExamples,
  SplashExamples,
  TrailheadConnectedExamples
];

const patternName = 'Welcome Mat';

const storyOptions = {
  defaultDemoStyles: 'height: 48rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
