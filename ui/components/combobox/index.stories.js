import * as BaseExamples from './base/example';
import * as AutoCompleteExamples from './autocomplete/example';
import * as DialogExamples from './dialog/example';
import * as GroupedExamples from './grouped/example';
import * as InlineListboxExamples from './deprecated-inline-listbox/example';
import * as MultiEntityExamples from './deprecated-multi-entity/example';
import * as ReadonlyExamples from './deprecated-readonly/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  AutoCompleteExamples,
  DialogExamples,
  GroupedExamples,
  InlineListboxExamples,
  MultiEntityExamples,
  ReadonlyExamples
];

const patternName = 'Combobox';

const storyOptions = {
  defaultDemoStyles: 'height: 19rem;'
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
