// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { NavVertical, NavVerticalItem, NavVerticalSection }
  from 'ui/components/vertical-navigation/flavors/base/index.react.example';
import { FormElement } from 'ui/components/form-layout/flavors/element/index.react.example';
import { Input } from 'ui/components/input/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

const inputId01 = 'input-id-01';
const sectionId01 = 'entity-header';
const sectionId02 = 'folder-header';
const sectionId03 = 'all-results';

export default (
  <div className="demo-only" style={{ width: '320px' }}>
    <NavVertical>
      <FormElement
        className="slds-p-horizontal--large"
        label="Filter navigation items"
        inputId={ inputId01 }
        inputIcon="left"
        hideLabel={true}
      >
        <SvgIcon
          className="slds-input__icon slds-input__icon--right slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input type="search" id={ inputId01 } placeholder="Quick Find" />
      </FormElement>
      <NavVerticalSection id={ sectionId01 } title="Reports">
        <NavVerticalItem aria-describedby={ sectionId01 } active={ true }>
          Recent
        </NavVerticalItem>
        <NavVerticalItem aria-describedby={ sectionId01 }>
          Created by Me
        </NavVerticalItem>
        <NavVerticalItem aria-describedby={ sectionId01 }>
          Private Reports
        </NavVerticalItem>
        <NavVerticalItem aria-describedby={ sectionId01 }>
          Public Reports
        </NavVerticalItem>
        <NavVerticalItem aria-describedby={ sectionId01 }>
          All Reports
        </NavVerticalItem>
      </NavVerticalSection>
      <NavVerticalSection id={ sectionId02 } title="Folders">
        <NavVerticalItem aria-describedby={ sectionId02 }>
          Created by Me
        </NavVerticalItem>
        <NavVerticalItem aria-describedby={ sectionId02 }>
          Shared with Me
        </NavVerticalItem>
      </NavVerticalSection>
    </NavVertical>
  </div>
);
