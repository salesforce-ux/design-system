// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Panel, { PanelPlayground, HeaderDeprecated } from '../';
import { ActionOverflow } from '../../menus/dropdown/example';

export default <PanelPlayground />;

// overflow: hidden hides bleeding box-shadow (demo only)
const sharedDemoStyles = `
  background-color: #fafaf9;
  overflow: hidden;
`;

export let examples = [
  {
    id: 'with-centered-title',
    label: 'With Centered Title',
    element: <PanelPlayground hasCenterTitle />
  },
  {
    id: 'with-truncated-title',
    label: 'With Truncated Title',
    element: (
      <PanelPlayground title="Panel Header with a really, really long name" />
    )
  },
  {
    id: 'with-secondary-actions',
    label: 'With Secondary Actions',
    demoStyles: `${sharedDemoStyles} height: 240px;`,
    storybookStyles: true,
    element: (
      <Panel
        size="medium"
        title="Panel Header"
        docked="left"
        invoke="toggle"
        headerActions={<ActionOverflow position="right" size="small" isOpen />}
      >
        A panel body accepts any layout or component
      </Panel>
    )
  },
  {
    id: 'with-drilled-in-left',
    label: 'With Drilled-In State - Position Left',
    demoStyles: `${sharedDemoStyles} height: 200px;`,
    storybookStyles: true,
    element: (
      <Panel size="medium" title="Panel Header" docked="left" invoke="drill-in">
        A panel body accepts any layout or component
      </Panel>
    )
  },
  {
    id: 'with-drilled-in-left-secondary-actions',
    label: 'With Drilled-In State & Secondary Actions - Position left',
    demoStyles: `${sharedDemoStyles} height: 200px;`,
    storybookStyles: true,
    element: (
      <Panel
        size="medium"
        title="Panel Header"
        docked="left"
        invoke="drill-in"
        headerActions={<ActionOverflow size="small" position="right" isOpen />}
      >
        A panel body accepts any layout or component
      </Panel>
    )
  },
  {
    id: 'with-drilled-in-right',
    label: 'With Drilled-In State - Position Right',
    demoStyles: `${sharedDemoStyles} height: 200px;`,
    storybookStyles: true,
    element: (
      <Panel
        size="medium"
        title="Panel Header"
        docked="right"
        invoke="drill-in"
      >
        A panel body accepts any layout or component
      </Panel>
    )
  },
  {
    id: 'drawer',
    label: 'Open as a drawer',
    element: <PanelPlayground drawer />
  },
  {
    id: 'deprecated-panel-header',
    label: 'DEPRECATED - Panel Header',
    element: (
      <Panel size="medium" docked="left" headerSlot={<HeaderDeprecated />}>
        A panel body accepts any layout or component
      </Panel>
    )
  }
];
