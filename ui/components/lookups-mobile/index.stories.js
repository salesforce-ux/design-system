import React from 'react';
import { storiesOf } from '@storybook/react';
import * as FauxInputExamples from './faux-input/example';
import * as MobileLookupsListbox from './listbox/example';
import * as MobileLookupsCombobox from './combobox/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  FauxInputExamples,
  MobileLookupsListbox,
  MobileLookupsCombobox
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Mobile Lookups', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component, demoStyles }) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${label}-${idx}`}
          styles={demoStyles}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Mobile Lookups" Docs={Docs} />
    }
  }
);
