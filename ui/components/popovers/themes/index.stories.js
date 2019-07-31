import { storiesOf } from '@storybook/react';
import * as ThemesExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Themes', module);

ThemesExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ThemesExamples.states, example.id)
  );
});
