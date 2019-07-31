import { storiesOf } from '@storybook/react';
import * as WaffleExamples from './example';

import '../../../index.scss';

storiesOf('Components/Dynamic Icons/Waffle', module).add(
  'Base',
  () => WaffleExamples.default
);
