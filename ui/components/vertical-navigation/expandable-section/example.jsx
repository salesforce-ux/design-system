// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  NavVertical,
  NavVerticalItem,
  NavVerticalSection
} from '../list/example';
import classNames from 'classnames';

const sectionId01 = 'entity-header';
const sectionId02 = 'folder-header';
const sectionId03 = 'all-results';

export let states = [
  {
    id: 'collapsed',
    label: 'Collapsed',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical>
          <NavVerticalSection id={sectionId01} title="Reports">
            <NavVerticalItem aria-describedby={sectionId01} active>
              Recent
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Private Reports
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Public Reports
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection id={sectionId02} title="Folders">
            <NavVerticalItem aria-describedby={sectionId02}>
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Shared with Me
            </NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection title="Folders" collapsed listId={sectionId03}>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item One
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item Two
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item Three
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  },
  {
    id: 'expanded',
    label: 'Expanded',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical>
          <NavVerticalSection id={sectionId01} title="Reports">
            <NavVerticalItem aria-describedby={sectionId01} active>
              Recent
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Private Reports
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              Public Reports
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId01}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection id={sectionId02} title="Folders">
            <NavVerticalItem aria-describedby={sectionId02}>
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Shared with Me
            </NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection title="Folders" expanded listId={sectionId03}>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item One
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item Two
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              Overflow Item Three
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  }
];
