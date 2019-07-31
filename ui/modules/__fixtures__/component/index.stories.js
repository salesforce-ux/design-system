import { storiesOf } from '@storybook/react';
import * as ComponentFixtures from './';

storiesOf('Modules/__fixtures__', module).add(
  'Base',
  () => ComponentFixtures.default
);
