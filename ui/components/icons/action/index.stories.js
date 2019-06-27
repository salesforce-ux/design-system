import { storiesOf } from '@storybook/react';
import * as ActionExamples from './example';

import '../../../index.scss';

storiesOf('Components/Icons/Action', module).add(
  'Base',
  () => ActionExamples.default
);
