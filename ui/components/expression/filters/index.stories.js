import { storiesOf } from '@storybook/react';
import * as FiltersExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Expression/Filters', module).add(
  'Base',
  () => FiltersExamples.default
);

FiltersExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FiltersExamples.examples, example.id)
  );
});
