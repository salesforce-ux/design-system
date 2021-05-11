import * as CoverableContentExamples from './coverable-content/example';
import * as LinkExamples from './link/example';
import * as NonCoverableContentExamples from './non-coverable-content/example';
import * as VerticalExamples from './vertical/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  CoverableContentExamples,
  LinkExamples,
  NonCoverableContentExamples,
  VerticalExamples
];

const patternName = 'Visual Picker';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
