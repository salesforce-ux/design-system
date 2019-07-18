import { storiesOf } from '@storybook/react';
import * as NavigationTabBarExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Global Navigation/Navigation Tab Bar',
  module
).add('Base', () => NavigationTabBarExamples.default);

NavigationTabBarExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(NavigationTabBarExamples.states, example.id)
  );
});
