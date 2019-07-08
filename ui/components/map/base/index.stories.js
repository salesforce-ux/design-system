import { storiesOf } from '@storybook/react';
import * as MapExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Map/Base', module).add(
  'Base',
  () => MapExamples.default
);

MapExamples.examples.forEach(example =>
  stories.add(example.label, () =>
    getDisplayElementById(MapExamples.examples, example.id)
  )
);

MapExamples.states.forEach(example =>
  stories.add(example.label, () =>
    getDisplayElementById(MapExamples.states, example.id)
  )
);
