import { storiesOf } from '@storybook/react';
import * as ButtonIconsMenuExamples from './example';

import '../../../index.scss';

storiesOf('Components/Button Icons/Menu', module).add(
  'Base',
  () => ButtonIconsMenuExamples.default
);
