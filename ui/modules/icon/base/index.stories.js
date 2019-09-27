import React from 'react';
import { storiesOf } from '@storybook/react';
import * as IconExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Icon/Base', module).add('Base', () => IconExamples.default, {
  docs: {
    page: () => <DocsPage title="Icon" Docs={Docs} />
  }
});

IconExamples.examples.forEach(example => {
  storiesOf('Modules/Icon/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(IconExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Icon" Docs={Docs} />
      }
    }
  );
});
