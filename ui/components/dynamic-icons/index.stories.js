import * as EllieExamples from './ellie/example';
import * as EqExamples from './eq/example';
import * as GlobalActionHelpExamples from './global-action-help/example';
import * as ScoreExamples from './score/example';
import * as StrengthExamples from './strength/example';
import * as TrendExamples from './trend/example';
import * as TypingExamples from './typing/example';
import * as WaffleExamples from './waffle/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  EllieExamples,
  EqExamples,
  GlobalActionHelpExamples,
  ScoreExamples,
  StrengthExamples,
  TrendExamples,
  TypingExamples,
  WaffleExamples
];

const patternName = 'Dynamic Icons';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
