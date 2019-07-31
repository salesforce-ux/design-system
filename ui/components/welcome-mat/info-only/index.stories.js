import { storiesOf } from '@storybook/react';
import * as InfoOnlyExamples from './example';

import '../../../index.scss';

storiesOf('Components/Welcome Mat/Info-Only', module).add(
  'Base',
  () => InfoOnlyExamples.default
);
