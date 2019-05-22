import { storiesOf } from '@storybook/react';
import * as CustomLogicExamples from './example';

import '../../../index.scss';

storiesOf('Components/Expression/Custom Logic', module).add(
  'Base',
  () => CustomLogicExamples.default
);
