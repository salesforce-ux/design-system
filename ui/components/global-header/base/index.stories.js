import { storiesOf } from '@storybook/react';
import * as GlobalHeaderExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Global Header/Base', module).add(
  'Base',
  () => GlobalHeaderExamples.default
);

GlobalHeaderExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(GlobalHeaderExamples.states, example.id)
  );
});
