import { storiesOf } from '@storybook/react';
import * as ErrorExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Error', module).add(
  'Base',
  () => ErrorExamples.default
);

ErrorExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ErrorExamples.examples, example.id)
  );
});
