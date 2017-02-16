// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Navigation = props =>
  <div className={classNames('slds-grid slds-grid--vertical slds-navigation-list-vertical', props.className)}>
    {props.children}
  </div>;

let SectionTitle = props =>
  <h2 className="slds-text-title--caps slds-p-around--medium" id={props.id}>
    {props.children}
  </h2>;

let List = props =>
  <ul className={ props.className }>
    {props.children}
  </ul>;

let Item = props =>
  <li className={ props.className }>
    <a href="javascript:void(0);" className="slds-navigation-list-vertical__action slds-text-link--reset" aria-describedby={props.id}>
      {props.children}
    </a>
  </li>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '320px' }}>
    <Navigation>
      <SectionTitle id="entity-header">Reports</SectionTitle>
      <List>
        <Item id="entity-header" className="slds-is-active">Recent</Item>
        <Item id="entity-header">Created by Me</Item>
        <Item id="entity-header">Private Reports</Item>
        <Item id="entity-header">Public Reports</Item>
        <Item id="entity-header">All Reports</Item>
      </List>
      <SectionTitle id="folder-header">Folders</SectionTitle>
      <List>
        <Item id="folder-header">Created by Me</Item>
        <Item id="folder-header">Shared with Me</Item>
        <Item id="folder-header">All Reports</Item>
      </List>
    </Navigation>
  </div>
);

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <Navigation>
          <SectionTitle id="entity-header">Reports</SectionTitle>
          <List>
            <Item id="entity-header" className="slds-is-active">Recent</Item>
            <Item id="entity-header">Created by Me</Item>
            <Item id="entity-header">Private Reports</Item>
            <Item id="entity-header">Public Reports</Item>
            <Item id="entity-header">All Reports</Item>
          </List>
          <SectionTitle id="folder-header">Folders</SectionTitle>
          <List>
            <Item id="folder-header">Created by Me</Item>
            <Item id="folder-header">Shared with Me</Item>
            <Item id="folder-header">All Reports</Item>
          </List>
        </Navigation>
      </div>
  },
  {
    id: 'shade',
    label: 'Shade',
    element:
      <div className="demo-only" style={{ width: '320px', backgroundColor: '#FAFAFB' }}>
        <Navigation className="slds-navigation-list-vertical--shade">
          <SectionTitle id="search-results">Search Results</SectionTitle>
          <List>
            <Item id="search-results" className="slds-is-active">Top Results</Item>
            <Item id="search-results">Accounts</Item>
            <Item id="search-results">Contacts</Item>
            <Item id="search-results">Opportunities</Item>
            <Item id="search-results">Leads</Item>
            <Item id="search-results">Groups</Item>
            <Item id="search-results">Files</Item>
            <Item id="search-results">Dashboards</Item>
            <Item id="search-results">Reports</Item>
            <Item id="search-results">Feeds</Item>
          </List>
          <SectionTitle id="external-results">External Results</SectionTitle>
          <List>
            <Item id="external-results">App One</Item>
            <Item id="external-results">App Two</Item>
            <Item id="external-results">App Three</Item>
          </List>
        </Navigation>
      </div>
  }
];
