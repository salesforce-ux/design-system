import { storiesOf } from '@storybook/react';
import * as MultiEntityExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Lookups/Multi-Entity', module).add(
  'Base',
  () => MultiEntityExamples.default
);

MultiEntityExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(MultiEntityExamples.states, example.id)
  );
});
