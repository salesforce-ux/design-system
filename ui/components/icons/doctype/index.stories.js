import { storiesOf } from '@storybook/react';
import * as DoctypeExamples from './example';

import '../../../index.scss';

storiesOf('Components/Icons/Doctype', module).add(
  'Base',
  () => DoctypeExamples.default
);
