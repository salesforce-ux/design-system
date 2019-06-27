import { storiesOf } from '@storybook/react';
import * as ActionOverflowExamples from './example';

import '../../../index.scss';

storiesOf('Components/Menus/Action Overflow', module).add(
  'Base',
  () => ActionOverflowExamples.default
);
