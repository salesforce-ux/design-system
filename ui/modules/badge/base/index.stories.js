import { storiesOf } from '@storybook/react';
import * as Examples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Badges/Base', module).add('Base', () => Examples.default);

Examples.examples.forEach(example => {
  storiesOf('Modules/Badges/Base', module).add(example.label, () =>
    getDisplayElementById(Examples.examples, example.id)
  );
});
