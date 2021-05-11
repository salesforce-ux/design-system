import * as BaseExamples from './base/example';
import * as BaseLegacyExamples from './base-legacy/example';
import * as BrandExamples from './brand/example';
import * as EinsteinExamples from './einstein/example';
import * as ErrorExamples from './error/example';
import * as FeatureExamples from './feature/example';
import * as NubbinsExamples from './nubbins/example';
import * as PanelsExamples from './panels/example';
import * as PromptsExamples from './prompt/example';
import * as ThemesExamples from './themes/example';
import * as WalkthroughExamples from './walkthrough/example';
import * as WarningExamples from './warning/example';
import { generateStories } from '../../shared/helpers';

import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  BaseLegacyExamples,
  BrandExamples,
  EinsteinExamples,
  ErrorExamples,
  FeatureExamples,
  NubbinsExamples,
  PanelsExamples,
  PromptsExamples,
  ThemesExamples,
  WalkthroughExamples,
  WarningExamples
];

const patternName = 'Popovers';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
