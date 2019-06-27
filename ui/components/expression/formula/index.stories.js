import { storiesOf } from '@storybook/react';
import * as FormulaExamples from './example';

import '../../../index.scss';

storiesOf('Components/Expression/Formula', module).add(
  'Base',
  () => FormulaExamples.default
);
