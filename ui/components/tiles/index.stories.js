import * as BaseExamples from './base/example';
import * as ArticleExamples from './article/example';
import * as AvatarExamples from './avatar/example';
import * as BoardExamples from './board/example';
import * as IconExamples from './icon/example';
import * as ListExamples from './list/example';
import * as TaskExamples from './task/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  ArticleExamples,
  AvatarExamples,
  BoardExamples,
  IconExamples,
  ListExamples,
  TaskExamples
];

const patternName = 'Tiles';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
