import { storiesOf } from '@storybook/react';
import * as EqExamples from './example';

import '../../../index.scss';

storiesOf('Components/Dynamic Icons/Eq', module).add(
  'Base',
  () => EqExamples.default
);
