import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Button/Base', module).add(
  'Base',
  () => ButtonExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Button" Docs={Docs} />
    }
  }
);

ButtonExamples.states.forEach(example => {
  storiesOf('Modules/Button/Base/States', module).add(
    example.label,
    () => getDisplayElementById(ButtonExamples.states, example.id),
    {
      docs: {
        page: () => <DocsPage title="Button" Docs={Docs} />
      }
    }
  );
});

ButtonExamples.examples.forEach(example => {
  storiesOf('Modules/Button/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(ButtonExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Button" Docs={Docs} />
      }
    }
  );
});
