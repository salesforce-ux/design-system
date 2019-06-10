import { storiesOf } from '@storybook/react';
import * as ListExamples from './example';

import '../../../index.scss';

storiesOf('Components/Tiles/List', module).add(
  'Base',
  () => ListExamples.default
);
