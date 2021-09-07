import * as ExpandableSectionExamples from './expandable-section/example';
import * as ListExamples from './list/example';
import * as QuickfindExamples from './quickfind/example';
import * as RadioGroupExamples from './radio-group/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  ExpandableSectionExamples,
  ListExamples,
  QuickfindExamples,
  RadioGroupExamples
];

const patternName = 'Vertical Navigation';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
