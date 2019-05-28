import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Publishers/Base', module).add(
  'Base',
  () => BaseExamples.default
);

BaseExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(BaseExamples.examples, example.id)
  );
});
