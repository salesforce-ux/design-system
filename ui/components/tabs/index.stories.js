import * as BaseExamples from './base/example';
import * as MobileStackExamples from './mobile-stack/example';
import * as ScrollingExamples from './scrolling/example';
import * as SubTabsExamples from './sub-tabs/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  MobileStackExamples,
  ScrollingExamples,
  SubTabsExamples
];

const patternName = 'Tabs';

const storyOptions = {
  defaultDemoStyles: 'min-height: 10rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
