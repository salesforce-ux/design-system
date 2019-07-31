import { storiesOf } from '@storybook/react';
import * as WrapperExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Cards/Wrapper', module).add(
  'Base',
  () => WrapperExamples.default
);

WrapperExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(WrapperExamples.examples, example.id)
  );
});
