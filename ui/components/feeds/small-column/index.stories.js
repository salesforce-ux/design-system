import { storiesOf } from '@storybook/react';
import * as SmallColumnExamples from './example';

import '../../../index.scss';

storiesOf('Components/Feeds/Small Column', module).add(
  'Base',
  () => SmallColumnExamples.default
);
