// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import classNames from 'classnames';

const headerActionOverflow = (
  <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true">
    <SvgIcon className="slds-button__icon" sprite="utility" symbol="down" />
    <span className="slds-assistive-text">More Options</span>
  </button>
);

const headerAction = (
  <button className="slds-button slds-button--neutral">New</button>
);

const headerSearch = (
  <div className="slds-input-has-icon slds-input-has-icon--left slds-size--1-of-3">
    <SvgIcon className="slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
    <label htmlFor="text-input-01" className="slds-assistive-text">Find in List</label>
    <input id="text-input-01" className="slds-input" type="text" placeholder="Find in List" />
  </div>
);

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Card = props =>
  <article className={classNames('slds-card', props.className)}>
    { props.children }
  </article>;

export let CardHeader = props =>
  <div className={classNames('slds-card__header slds-grid', props.className)}>
    <header className={classNames('slds-media slds-media--center slds-has-flexi-truncate', props.search ? 'slds-size--1-of-3' : null)}>
      { props.symbol ?
        <div className="slds-media__figure">
          <span className={'slds-icon_container slds-icon-standard-' + props.symbol} title="description of icon when needed">
            <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol={ props.symbol } />
            </span>
        </div> : null }
      <div className="slds-media__body">
        <h2>
          <a href="javascript:void(0);" className="slds-card__header-link slds-truncate">{ props.children }</a>
        </h2>
      </div>
    </header>
    { props.search ? headerSearch : null }
    <div className={classNames('slds-no-flex', props.search ? 'slds-size--1-of-3' : null)}>
      { props.actions == 'overflow' ? headerActionOverflow : headerAction }
    </div>
  </div>;

export let CardBody = props =>
  <div className={classNames('slds-card__body', props.className)}>
    { props.children }
  </div>;

export let CardFooter = props =>
  <footer className={classNames('slds-card__footer', props.className)}>
    { props.children }
  </footer>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'card',
    label: 'Default',
    element:
      <div className="demo-only demo-only--center-card-body">
        <Card>
          <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
          <CardBody>Card Body (custom goes in here)</CardBody>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      </div>
  },
  {
    id: 'card-empty',
    label: 'Empty',
    element:
      <Card>
        <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
  }
];
