import React from 'react';
import { storiesOf } from '@storybook/react';
import * as CardExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Card/Base', module).add('Base', () => CardExamples.default, {
  docs: {
    page: () => <DocsPage title="Card" Docs={Docs} />
  }
});

CardExamples.states.forEach(example => {
  storiesOf('Modules/Card/Base/States', module).add(
    example.label,
    () => getDisplayElementById(CardExamples.states, example.id),
    {
      docs: {
        page: () => <DocsPage title="Card" Docs={Docs} />
      }
    }
  );
});

CardExamples.examples.forEach(example => {
  storiesOf('Modules/Card/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(CardExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Card" Docs={Docs} />
      }
    }
  );
});
