import { storiesOf } from '@storybook/react';
import * as PanelsExamples from './example';

import '../../../index.scss';

storiesOf('Components/Popovers/Panels', module).add(
  'Base',
  () => PanelsExamples.default
);
