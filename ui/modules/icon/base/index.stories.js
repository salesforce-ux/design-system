import React from 'react';
import { storiesOf } from '@storybook/react';
import IconExample, { examples as IconExamples } from './example';
import { getDisplayElementById } from '../../../shared/helpers';

const stories = storiesOf('Modules/Icon/Base', module).add('Base', () => (
  <IconExample />
));

IconExamples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(IconExamples, example.id)
  );
});
