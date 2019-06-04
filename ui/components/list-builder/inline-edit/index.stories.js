import { storiesOf } from '@storybook/react';
import * as InlineEditExamples from './example';

import '../../../index.scss';

storiesOf('Components/List Builder/Inline Edit', module).add(
  'Base',
  () => InlineEditExamples.default
);
