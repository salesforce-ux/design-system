import { storiesOf } from '@storybook/react';
import * as GlobalActionHelpExamples from './example';

import '../../../index.scss';

storiesOf('Components/Dynamic Icons/Global Action Help', module).add(
  'Base',
  () => GlobalActionHelpExamples.default
);
