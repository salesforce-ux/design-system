import { storiesOf } from '@storybook/react';
import * as RelatedListExamples from './example';

import '../../../index.scss';

storiesOf('Components/Page Headers/Related List', module).add(
  'Base',
  () => RelatedListExamples.default
);
