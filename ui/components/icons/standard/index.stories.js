import { storiesOf } from '@storybook/react';
import * as StandardExamples from './example';

import '../../../index.scss';

storiesOf('Components/Icons/Standard', module).add(
  'Base',
  () => StandardExamples.default
);
