import React from 'react';
import { storiesOf } from '@storybook/react';
import CardExample, { CardExampleCustom } from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/Card/Base', module)
  .add('Base', () => <CardExample />)
  .add('Custom', () => <CardExampleCustom />);
