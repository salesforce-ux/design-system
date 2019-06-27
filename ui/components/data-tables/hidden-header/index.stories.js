import { storiesOf } from '@storybook/react';
import * as HiddenHeaderExamples from './example';

import '../../../index.scss';

storiesOf('Components/Data Tables/Hidden Header', module).add(
  'Base',
  () => HiddenHeaderExamples.default
);
