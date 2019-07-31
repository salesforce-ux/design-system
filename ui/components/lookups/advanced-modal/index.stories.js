import { storiesOf } from '@storybook/react';
import * as AdvancedModalExamples from './example';

import '../../../index.scss';

storiesOf('Components/Lookups/Advanced Modal', module).add(
  'Base',
  () => AdvancedModalExamples.default
);
