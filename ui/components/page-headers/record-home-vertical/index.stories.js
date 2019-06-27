import { storiesOf } from '@storybook/react';
import * as RecordHomeVerticalExamples from './example';

import '../../../index.scss';

storiesOf('Components/Page Headers/Record Home Vertical', module).add(
  'Base',
  () => RecordHomeVerticalExamples.default
);
