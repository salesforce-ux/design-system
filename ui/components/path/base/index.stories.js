import { storiesOf } from '@storybook/react';
import * as PathExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Path/Base', module).add(
  'Base',
  () => PathExamples.default
);

PathExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(PathExamples.states, example.id)
  );
});
