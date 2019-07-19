import { storiesOf } from '@storybook/react';
import * as SplashExamples from './example';

import '../../../index.scss';

storiesOf('Components/Welcome Mat/Splash', module).add(
  'Base',
  () => SplashExamples.default
);
