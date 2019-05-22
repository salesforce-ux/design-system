import { storiesOf } from '@storybook/react';
import * as ObjectHomeExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Page Headers/Object Home', module);

ObjectHomeExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ObjectHomeExamples.examples, example.id)
  );
});
