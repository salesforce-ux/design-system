import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';
import {
  getDisplayElementById,
  getStoryWrapperDecorator
} from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Modules/Spinner/Base', module);

BaseExamples.examples.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(BaseExamples.examples, example.id),
    getStoryWrapperDecorator(example)
  );
});
