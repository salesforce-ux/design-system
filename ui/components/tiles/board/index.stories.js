import { storiesOf } from '@storybook/react';
import * as BoardExamples from './example';

import '../../../index.scss';

storiesOf('Components/Tiles/Board', module).add(
  'Base',
  () => BoardExamples.default
);
