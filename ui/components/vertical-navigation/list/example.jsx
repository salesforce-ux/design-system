// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { PropTypes } from 'prop-types';
import { UtilityIcon } from '../../icons/base/example.jsx';
import { FormElement } from '../../form-element';
import Input from '../../input/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Button } from '../../buttons/base/example';
import { IsDependentOn } from '../../../shared/helpers';

const inputId01 = 'input-id-01';
const sectionId01 = 'entity-header';
const sectionId02 = 'folder-header';
const sectionId03 = 'search-results';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let NavVertical = props => (
  <nav
    className={classNames('slds-nav-vertical', {
      'slds-nav-vertical_compact': props.isCompact,
      'slds-nav-vertical_shade': props.isShaded
    })}
    aria-label="Sub page"
  >
    {props.children}
  </nav>
);

NavVertical.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isCompact: PropTypes.bool,
  isShaded: PropTypes.bool
};

export let NavVerticalItem = props => (
  <li
    className={classNames(
      'slds-nav-vertical__item',
      { 'slds-is-active': props.active },
      props.className
    )}
  >
    <a
      href="#"
      className="slds-nav-vertical__action"
      aria-current={props.active}
      onClick={e => e.preventDefault()}
    >
      {props.children}
    </a>
  </li>
);

NavVerticalItem.propTypes = {
  active: PropTypes.oneOf([
    true,
    undefined,
    'page',
    'step',
    'location',
    'date',
    'time'
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};

NavVerticalItem.defaultProps = {
  active: undefined
};

export let NavVerticalSection = props => {
  const {
    children,
    className,
    collapsed,
    expanded,
    headerId,
    isNavVerticalRadioSet,
    listId,
    title
  } = props;
  let hasExpandableSection = collapsed || expanded;
  let sectionContent = null;

  if (isNavVerticalRadioSet) {
    sectionContent = <div>{children}</div>;
  } else {
    sectionContent = <ul aria-describedby={headerId}>{children}</ul>;
  }

  return (
    <div
      className={classNames(
        hasExpandableSection
          ? 'slds-nav-vertical__overflow'
          : 'slds-nav-vertical__section',
        className
      )}
    >
      {!hasExpandableSection && !isNavVerticalRadioSet && title && (
        <h2 id={headerId} className="slds-nav-vertical__title">
          {title}
        </h2>
      )}
      {hasExpandableSection && (
        <Button
          className="slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow"
          aria-controls={listId}
          aria-expanded={expanded ? 'true' : 'false'}
        >
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="chevronright"
          />
          <span className="slds-nav-vertical__action-text">
            {collapsed ? 'Show More' : 'Show Less'}
            <span className="slds-assistive-text">{title}</span>
          </span>
        </Button>
      )}
      {hasExpandableSection ? (
        <div
          id={listId}
          className={classNames({
            'slds-hide': collapsed,
            'slds-show': expanded
          })}
        >
          {sectionContent}
        </div>
      ) : (
        sectionContent
      )}
    </div>
  );
};

NavVerticalSection.defaultProps = {
  headerId: 'header-id-1'
};

NavVerticalSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapsed: IsDependentOn('listId', PropTypes.bool),
  expanded: IsDependentOn('listId', PropTypes.bool),
  headerId: PropTypes.string.isRequired,
  isNavVerticalRadioSet: PropTypes.bool,
  listId: PropTypes.string,
  title: PropTypes.string
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical>
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  }
];

export let states = [
  {
    id: 'collapsed',
    label: 'Collapsed',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <NavVertical>
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection
            title="Folders"
            collapsed
            listId={sectionId03}
            headerId={sectionId02}
          >
            <NavVerticalItem>Overflow Item One</NavVerticalItem>
            <NavVerticalItem>Overflow Item Two</NavVerticalItem>
            <NavVerticalItem>Overflow Item Three</NavVerticalItem>
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
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection
            title="Folders"
            expanded
            listId={sectionId03}
            headerId={sectionId02}
          >
            <NavVerticalItem>Overflow Item One</NavVerticalItem>
            <NavVerticalItem>Overflow Item Two</NavVerticalItem>
            <NavVerticalItem>Overflow Item Three</NavVerticalItem>
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
        <NavVertical isCompact>
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
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
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>
              <UtilityIcon
                symbol="open_folder"
                containerClassName="slds-line-height_reset"
                className="slds-icon-text-default slds-icon_x-small slds-m-right_x-small"
                assistiveText="Folder"
                title="Folder"
              />
              Created by Me
            </NavVerticalItem>
            <NavVerticalItem>
              <UtilityIcon
                symbol="open_folder"
                containerClassName="slds-line-height_reset"
                className="slds-icon-text-default slds-icon_x-small slds-m-right_x-small"
                assistiveText="Folder"
                title="Folder"
              />
              Shared with Me
            </NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
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
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>
              Recent
              <span className="slds-badge slds-col_bump-left">
                <span className="slds-assistive-text">:</span>3
                <span className="slds-assistive-text">New Items</span>
              </span>
            </NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
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
        <NavVertical isShaded>
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
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
            formElementClassName="slds-p-horizontal_large"
            labelContent="Filter navigation items"
            inputId={inputId01}
            hasLeftIcon
            hasHiddenLabel
          >
            <UtilityIcon
              className="slds-input__icon slds-input__icon_right slds-icon-text-default"
              symbol="search"
              title={false}
              assistiveText={false}
            />
            <Input type="search" id={inputId01} placeholder="Quick Find" />
          </FormElement>
          <NavVerticalSection headerId={sectionId01} title="Reports">
            <NavVerticalItem active>Recent</NavVerticalItem>
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Private Reports</NavVerticalItem>
            <NavVerticalItem>Public Reports</NavVerticalItem>
            <NavVerticalItem>All Reports</NavVerticalItem>
          </NavVerticalSection>
          <NavVerticalSection headerId={sectionId02} title="Folders">
            <NavVerticalItem>Created by Me</NavVerticalItem>
            <NavVerticalItem>Shared with Me</NavVerticalItem>
          </NavVerticalSection>
        </NavVertical>
      </div>
    )
  }
];
