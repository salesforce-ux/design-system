import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';

import '../../../index.scss';

storiesOf('Components/Feeds/Base', module).add(
  'Base',
  () => BaseExamples.default
);
