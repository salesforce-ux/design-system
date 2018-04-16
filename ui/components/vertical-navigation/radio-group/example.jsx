// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example.jsx';
import { NavVerticalSection } from '../list/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

const inputId01 = 'input-id-01';
const sectionId01 = 'entity-header';
const sectionId02 = 'folder-header';
const sectionId03 = 'search-results';
const sectionId04 = 'external-results';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let NavVerticalFieldset = props => (
  <fieldset
    className={classNames(
      'slds-nav-vertical',
      { 'slds-nav-vertical_shade': props.shaded },
      { 'slds-nav-vertical_compact': props.compact }
    )}
  >
    <legend className="slds-nav-vertical__title slds-text-title_caps">
      Reports
    </legend>
    {props.children}
  </fieldset>
);

export let NavVerticalItemRadio = props => (
  <span className={classNames('slds-nav-vertical__item', props.className)}>
    <input
      defaultChecked={props.checked}
      type="radio"
      id={props.id}
      value={props.id}
      name="example"
    />
    <label className="slds-nav-vertical__action" htmlFor={props.id}>
      <span className="slds-nav-vertical_radio-faux">{props.children}</span>
    </label>
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export const Context = props => (
  <div className="demo-only" style={{ width: '320px' }}>
    {props.children}
  </div>
);

export const NavVerticalRadioSet = props => (
  <NavVerticalSection id={sectionId01} title="Reports" isNavVerticalRadioSet>
    <NavVerticalFieldset>
      <NavVerticalItemRadio checked id="recent">
        Recent
      </NavVerticalItemRadio>
      <NavVerticalItemRadio id="created-by-me">
        Created by Me
      </NavVerticalItemRadio>
      <NavVerticalItemRadio id="private-reports">
        Private Reports
      </NavVerticalItemRadio>
      <NavVerticalItemRadio id="public-reports">
        Public Reports
      </NavVerticalItemRadio>
      <NavVerticalItemRadio id="all-reports">All Reports</NavVerticalItemRadio>
    </NavVerticalFieldset>
  </NavVerticalSection>
);

export default <NavVerticalRadioSet />;

export let examples = [
  {
    id: 'compact',
    label: 'Compact',
    element: (
      <NavVerticalSection
        id={sectionId01}
        title="Reports"
        isNavVerticalRadioSet
      >
        <NavVerticalFieldset compact>
          <NavVerticalItemRadio checked id="recent">
            Recent
          </NavVerticalItemRadio>
          <NavVerticalItemRadio id="created-by-me">
            Created by Me
          </NavVerticalItemRadio>
          <NavVerticalItemRadio id="private-reports">
            Private Reports
          </NavVerticalItemRadio>
          <NavVerticalItemRadio id="public-reports">
            Public Reports
          </NavVerticalItemRadio>
          <NavVerticalItemRadio id="all-reports">
            All Reports
          </NavVerticalItemRadio>
        </NavVerticalFieldset>
      </NavVerticalSection>
    )
  },
  {
    id: 'shade',
    label: 'Shaded Background',
    element: (
      <div className="demo-only" style={{ backgroundColor: '#FAFAFB' }}>
        <NavVerticalSection
          id={sectionId01}
          title="Reports"
          isNavVerticalRadioSet
        >
          <NavVerticalFieldset shaded>
            <NavVerticalItemRadio checked id="recent">
              Recent
            </NavVerticalItemRadio>
            <NavVerticalItemRadio id="created-by-me">
              Created by Me
            </NavVerticalItemRadio>
            <NavVerticalItemRadio id="private-reports">
              Private Reports
            </NavVerticalItemRadio>
            <NavVerticalItemRadio id="public-reports">
              Public Reports
            </NavVerticalItemRadio>
            <NavVerticalItemRadio id="all-reports">
              All Reports
            </NavVerticalItemRadio>
          </NavVerticalFieldset>
        </NavVerticalSection>
      </div>
    )
  }
];
