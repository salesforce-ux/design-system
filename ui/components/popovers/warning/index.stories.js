import { storiesOf } from '@storybook/react';
import * as WarningExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Warning', module).add(
  'Base',
  () => WarningExamples.default
);

WarningExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(WarningExamples.examples, example.id)
  );
});
