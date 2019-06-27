import { storiesOf } from '@storybook/react';
import * as ImageExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/File Selector/Image', module).add(
  'Base',
  () => ImageExamples.default
);

ImageExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ImageExamples.states, example.id)
  );
});
