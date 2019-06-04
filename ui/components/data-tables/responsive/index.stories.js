import { storiesOf } from '@storybook/react';
import * as ResponsiveExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Data Tables/Responsive', module).add(
  'Base',
  () => ResponsiveExamples.default
);

ResponsiveExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ResponsiveExamples.states, example.id)
  );
});
