import { storiesOf } from '@storybook/react';
import * as LinkExamples from './example';

import '../../../index.scss';

storiesOf('Components/Visual Picker/Link', module).add(
  'Base',
  () => LinkExamples.default
);
