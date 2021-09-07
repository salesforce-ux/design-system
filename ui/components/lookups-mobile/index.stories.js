import * as FauxInputExamples from './faux-input/example';
import * as MobileLookupsListbox from './listbox/example';
import * as MobileLookupsCombobox from './combobox/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [
  FauxInputExamples,
  MobileLookupsListbox,
  MobileLookupsCombobox
];

const patternName = 'Mobile Lookups';

generateStories(patternName, examples, ['default', 'examples', 'states'], Docs);
