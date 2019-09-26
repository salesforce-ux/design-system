import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';
import {
  getDisplayElementById
  // getStoryWrapperDecorator
} from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

const stories = storiesOf('Modules/Tabset/Base', module);

stories.add('Base', () => BaseExamples.default, {
  docs: {
    page: () => <DocsPage title="Tabset" Docs={Docs} />
  }
});

BaseExamples.examples.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(BaseExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Tabset" Docs={Docs} />
      }
    }
  );
});
