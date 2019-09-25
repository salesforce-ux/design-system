import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonIconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Button Icon/Base', module).add(
  'Default',
  () => ButtonIconExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Button Icon" Docs={Docs} />
    }
  }
);

ButtonIconExamples.states.forEach(example => {
  storiesOf('Modules/Button Icon/Base/States', module).add(
    example.label,
    () => getDisplayElementById(ButtonIconExamples.states, example.id),
    {
      docs: {
        page: () => <DocsPage title="Button Icon" Docs={Docs} />
      }
    }
  );
});

ButtonIconExamples.examples.forEach(example => {
  storiesOf('Modules/Button Icon/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(ButtonIconExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Button Icon" Docs={Docs} />
      }
    }
  );
});
