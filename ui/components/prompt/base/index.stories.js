import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';

import '../../../index.scss';

storiesOf('Components/Prompt/Base', module).add(
  'Base',
  () => BaseExamples.default
);
