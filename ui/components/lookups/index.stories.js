import * as BaseExamples from './base/example';
import * as AdvancedModalExamples from './advanced-modal/example';
import * as MultiEntityExamples from './multi-entity/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples, AdvancedModalExamples, MultiEntityExamples];

const patternName = 'Lookups';

const storyOptions = {
  defaultDemoStyles: 'min-height: 20em;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
