import { storiesOf } from '@storybook/react';
import * as SubmenuExamples from './example';

import '../../../index.scss';

storiesOf('Components/Menus/Submenu', module).add(
  'Base',
  () => SubmenuExamples.default
);
