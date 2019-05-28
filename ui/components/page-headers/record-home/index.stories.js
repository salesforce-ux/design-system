import { storiesOf } from '@storybook/react';
import * as RecordHomeExamples from './example';

import '../../../index.scss';

storiesOf('Components/Page Headers/Record Home', module).add(
  'Base',
  () => RecordHomeExamples.default
);
