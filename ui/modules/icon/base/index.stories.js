import { storiesOf } from '@storybook/react';
import * as IconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

storiesOf('Modules/Icon/Base', module).add('Base', () => IconExamples.default);

IconExamples.examples.forEach(example => {
  storiesOf('Modules/Icon/Base/Examples', module).add(example.label, () =>
    getDisplayElementById(IconExamples.examples, example.id)
  );
});
