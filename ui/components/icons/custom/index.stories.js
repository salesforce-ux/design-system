import { storiesOf } from '@storybook/react';
import * as CustomExamples from './example';

import '../../../index.scss';

storiesOf('Components/Icons/Custom', module).add(
  'Base',
  () => CustomExamples.default
);
