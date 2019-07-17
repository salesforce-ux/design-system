import { storiesOf } from '@storybook/react';
import * as DetailExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Panels/Detail', module).add(
  'Base',
  () => DetailExamples.default
);

DetailExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(DetailExamples.states, example.id)
  );
});
