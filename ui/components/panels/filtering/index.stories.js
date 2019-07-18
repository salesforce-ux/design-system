import { storiesOf } from '@storybook/react';
import * as FilteringExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Panels/Filtering', module).add(
  'Base',
  () => FilteringExamples.default
);

FilteringExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FilteringExamples.states, example.id)
  );
});
