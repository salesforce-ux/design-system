import * as ButtonExamples from './base/example';
import * as IconExamples from './with-icon/example';
import * as StatefulExamples from './stateful/example';
import * as DualStatefulExamples from './dual-stateful/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  ButtonExamples,
  DualStatefulExamples,
  StatefulExamples,
  IconExamples
];

const patternName = 'Buttons';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
