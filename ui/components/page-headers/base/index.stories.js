import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';

import '../../../index.scss';

storiesOf('Components/Page Headers/Base', module).add(
  'Base',
  () => BaseExamples.default
);
