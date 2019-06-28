import { storiesOf } from '@storybook/react';
import * as ComponentExamples from './example';

import '../../../index.scss';

storiesOf('Components/Progress Indicator/Modal', module).add(
  'Base',
  () => ComponentExamples.default
);
