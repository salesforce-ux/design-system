import * as BaseExamples from './base/example';
import * as ObjectHomeExamples from './object-home/example';
import * as RecordHomeExamples from './record-home/example';
import * as RecordHomeVerticalExamples from './record-home-vertical/example';
import * as RelatedListExamples from './related-list/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  ObjectHomeExamples,
  RecordHomeExamples,
  RecordHomeVerticalExamples,
  RelatedListExamples
];

const patternName = 'Page Headers';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
