import { storiesOf } from '@storybook/react';
import * as AvatarExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tiles/Avatar', module);

AvatarExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(AvatarExamples.states, example.id)
  );
});
