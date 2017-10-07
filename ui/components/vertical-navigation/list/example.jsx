// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example.jsx';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';
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

export let NavVertical = props => (
  <nav
    className={classNames('slds-nav-vertical', props.className)}
    aria-label="Sub page"
  >
    {props.children}
  </nav>
);

export let NavVerticalItem = props => (
  <li
    className={classNames(
      'slds-nav-vertical__item',
      { 'slds-is-active': props.active },
      props.className
    )}
  >
    <a
      href="javascript:void(0);"
      className="slds-nav-vertical__action"
      aria-describedby={props['aria-describedby']}
      aria-current={props.active ? 'page' : null}
    >
      {props.children}
    </a>
  </li>
);

export let NavVerticalSection = props => {
  let hasExpando = props.collapsed || props.expanded;
  let isNavVerticalRadioSet = props.isNavVerticalRadioSet;
  let hasExpandoContent = null;
  let noExpandoContent = null;

  if (isNavVerticalRadioSet) {
    hasExpandoContent = <div>{props.children}</div>;
  } else {
    hasExpandoContent = <ul>{props.children}</ul>;
  }

  if (isNavVerticalRadioSet) {
    noExpandoContent = <div>{props.children}</div>;
  } else {
    noExpandoContent = <ul id={props.listId}>{props.children}</ul>;
  }

  return (
    <div
      className={classNames(
        hasExpando
          ? 'slds-nav-vertical__overflow'
          : 'slds-nav-vertical__section',
        props.className
      )}
    >
      {!hasExpando && !isNavVerticalRadioSet && props.title ? (
        <h2
          id={props.id}
          className={classNames(
            'slds-nav-vertical__title slds-text-title_caps'
          )}
        >
          {props.title}
        </h2>
      ) : null}
      {hasExpando ? (
        <button
          className="slds-button slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow"
          aria-controls={props.listId}
          aria-expanded={props.expanded ? 'true' : 'false'}
        >
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="chevronright"
          />
          <span className="slds-nav-vertical__action-text">
            {props.collapsed ? 'Show More' : 'Show Less'}
            <span className="slds-assistive-text">{props.title}</span>
          </span>
        </button>
      ) : null}
      {hasExpando ? (
        <div
          id={props.listId}
          className={classNames({
            'slds-hide': props.collapsed,
            'slds-show': props.expanded
          })}
        >
          {hasExpandoContent}
        </div>
      ) : (
        noExpandoContent
      )}
    </div>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
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
        <NavVerticalItem aria-describedby={sectionId02}>
          All Reports
        </NavVerticalItem>
      </NavVerticalSection>
    </NavVertical>
  </div>
);

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

export let examples = [
  {
    id: 'compact',
    label: 'Compact',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical className="slds-nav-vertical_compact">
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
            <NavVerticalItem aria-describedby={sectionId02}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  },
  {
    id: 'items-with-icons',
    label: 'Items with icon',
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
              <UtilityIcon
                symbol="open_folder"
                containerClassName="slds-line-height_reset"
                className="slds-icon-text-default slds-icon_x-small slds-m-right_x-small"
                assistiveText="Folder"
              />
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              <UtilityIcon
                symbol="open_folder"
                containerClassName="slds-line-height_reset"
                className="slds-icon-text-default slds-icon_x-small slds-m-right_x-small"
                assistiveText="Folder"
              />
              Shared with Me
            </NavVerticalItem>
            <NavVerticalItem aria-describedby={sectionId02}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  },
  {
    id: 'items-with-notifications',
    label: 'Items with notification',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical>
          <NavVerticalSection id={sectionId01} title="Reports">
            <NavVerticalItem aria-describedby={sectionId01} active>
              Recent
              <span className="slds-badge slds-col_bump-left">
                <span className="slds-assistive-text">:</span>
                3
                <span className="slds-assistive-text">New Items</span>
              </span>
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
            <NavVerticalItem aria-describedby={sectionId02}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  },
  {
    id: 'shade',
    label: 'Shaded Background',
    element: (
      <div
        className="demo-only"
        style={{ width: '320px', backgroundColor: '#FAFAFB' }}
      >
        <NavVertical className="slds-nav-vertical_shade">
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
            <NavVerticalItem aria-describedby={sectionId02}>
              All Reports
            </NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  },
  {
    id: 'quickfind',
    label: 'Quickfind',
    element: (
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
    )
  }
];
