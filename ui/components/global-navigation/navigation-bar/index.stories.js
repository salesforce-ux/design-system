import { storiesOf } from '@storybook/react';
import * as NavigationBarExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Global Navigation/Navigation Bar',
  module
).add('Base', () => NavigationBarExamples.default);

NavigationBarExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(NavigationBarExamples.states, example.id)
  );
});
