import React from 'react';
import { storiesOf } from '@storybook/react';
import IconPrimitiveExample from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/IconPrimitive/Base', module).add(
  'Base',
  () => <IconPrimitiveExample />
);
