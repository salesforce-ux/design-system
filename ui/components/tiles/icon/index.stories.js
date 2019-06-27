import { storiesOf } from '@storybook/react';
import * as IconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tiles/Icon', module);

IconExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(IconExamples.states, example.id)
  );
});
