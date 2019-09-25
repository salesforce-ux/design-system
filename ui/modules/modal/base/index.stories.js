import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ModalExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Modal/Base', module).add(
  'Default',
  () => ModalExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Modal" Docs={Docs} />
    }
  }
);

ModalExamples.examples.forEach(examples => {
  storiesOf('Modules/Modal/Examples', module).add(
    examples.label,
    () => getDisplayElementById(ModalExamples.examples, examples.id),
    {
      docs: {
        page: () => <DocsPage title="Button" Docs={Docs} />
      }
    }
  );
});
