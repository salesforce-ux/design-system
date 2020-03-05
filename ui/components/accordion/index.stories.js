import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Base from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [Base];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Accordion', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ demoStyles, label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          styles={demoStyles || null}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Accordion" Docs={Docs} />
    }
  }
);
