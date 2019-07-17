import { storiesOf } from '@storybook/react';
import * as QuickfindExamples from './example';

import '../../../index.scss';

storiesOf('Components/Vertical Navigation/Quickfind', module).add(
  'Base',
  () => QuickfindExamples.default
);
