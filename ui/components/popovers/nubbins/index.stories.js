import { storiesOf } from '@storybook/react';
import * as NubbinsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Nubbins', module);

NubbinsExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(NubbinsExamples.states, example.id)
  );
});
