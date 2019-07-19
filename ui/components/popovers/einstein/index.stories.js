import { storiesOf } from '@storybook/react';
import * as EinsteinExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Einstein', module).add(
  'Base',
  () => EinsteinExamples.default
);

EinsteinExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(EinsteinExamples.states, example.id)
  );
});
