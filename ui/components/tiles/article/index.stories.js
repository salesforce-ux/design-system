import { storiesOf } from '@storybook/react';
import * as ArticleExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tiles/Article', module);

ArticleExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ArticleExamples.states, example.id)
  );
});
