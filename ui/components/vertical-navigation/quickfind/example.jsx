// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  NavVertical,
  NavVerticalItem,
  NavVerticalSection
} from '../list/example';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

const inputId01 = 'input-id-01';
const sectionId01 = 'entity-header';
const sectionId02 = 'folder-header';
const sectionId03 = 'all-results';

export default (
  <div className="demo-only" style={{ width: '320px' }}>
    <NavVertical>
      <FormElement
        className="slds-p-horizontal_large"
        label="Filter navigation items"
        inputId={inputId01}
        inputIcon="left"
        hideLabel
      >
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input type="search" id={inputId01} placeholder="Quick Find" />
      </FormElement>
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
    </NavVertical>
  </div>
);
