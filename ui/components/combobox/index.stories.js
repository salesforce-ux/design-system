import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as DialogExamples from './dialog/example';
import * as GroupedExamples from './grouped/example';
import * as InlineListboxExamples from './deprecated-inline-listbox/example';
import * as MultiEntityExamples from './deprecated-multi-entity/example';
import * as ReadonlyExamples from './deprecated-readonly/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  DialogExamples,
  GroupedExamples,
  InlineListboxExamples,
  MultiEntityExamples,
  ReadonlyExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Combobox', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          styles={`height: 17rem;`}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Combobox" Docs={Docs} />
    }
  }
);
