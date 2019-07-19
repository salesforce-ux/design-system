import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';

import '../../../index.scss';

storiesOf('Components/Toast/Modal Toast', module).add(
  'Base',
  () => BaseExamples.default
);
