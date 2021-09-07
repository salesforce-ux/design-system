import * as NavigationBarExamples from './navigation-bar/example';
import * as NavigationTabBarExamples from './navigation-tab-bar/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [NavigationBarExamples, NavigationTabBarExamples];

const patternName = 'Global Navigation';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
