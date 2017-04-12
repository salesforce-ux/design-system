// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/dropdown/example';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import { TileMedia } from 'ui/components/tiles/base/example';
import { StandardIcon } from 'ui/components/icons/standard/example';
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
          <a href="javascript:void(0);" className="slds-card__header-link slds-truncate" title={props.children}>{ props.children }</a>
        </h2>
      </div>
    </header>
    { props.search ? headerSearch : null }
    <div className={classNames('slds-no-flex', props.search ? 'slds-size--1-of-3' : null)}>
      { props.actions == 'overflow' ?
        <ButtonIcon
          className="slds-button--icon-border-filled slds-button--icon-x-small"
          symbol="down"
          title="More Options"
          assistiveText="More Options"
          aria-haspopup="true"
        />
      : headerAction }
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

export default (
  <Card>
    <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
    <CardBody className="slds-card__body--inner">Card Body (custom goes in here)</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

export let states = [
  {
    id: 'empty',
    label: 'Empty',
    element:
      <Card>
        <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Card Header</span></CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
  }
];

export let examples = [
  {
    id: 'related-list-table',
    label: 'With data-table',
    element:
    <Card>
      <CardHeader symbol="contact" actions><span className="slds-text-heading--small">Contacts (1)</span></CardHeader>
      <CardBody>
        <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
          <thead>
            <tr className="slds-text-title--caps">
              <th scope="col"><div className="slds-truncate" title="Name">Name</div></th>
              <th scope="col"><div className="slds-truncate" title="Company">Company</div></th>
              <th scope="col"><div className="slds-truncate" title="Title">Title</div></th>
              <th scope="col"><div className="slds-truncate" title="Email">Email</div></th>
            </tr>
          </thead>
          <tbody>
            <tr className="slds-hint-parent">
              <th scope="row"><div className="slds-truncate" title="Adam Choi"><a href="javascript:void(0);">Adam Choi</a></div></th>
              <td><div className="slds-truncate" title="Company One">Company One</div></td>
              <td><div className="slds-truncate" title="Director of Operations">Director of Operations</div></td>
              <td><div className="slds-truncate" title="adam@company.com">adam@company.com</div></td>
            </tr>
          </tbody>
        </table>
      </CardBody>
      <CardFooter><a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a></CardFooter>
    </Card>
  },
  {
    id: 'related-list-tiles',
    label: 'With tiles',
    element:
    <Card>
      <CardHeader actions symbol="contact">
        <span className="slds-text-heading--small">Contacts (3)</span>
      </CardHeader>
      <CardBody>
        <ul className="slds-card__body--inner slds-grid slds-wrap slds-grid--pull-padded">
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={ <StandardIcon className="slds-icon--small" symbol="contact" assistiveText="Contact" /> }
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={ <StandardIcon className="slds-icon--small" symbol="contact" assistiveText="Contact" /> }
              title="Related Record Title 1"
            />
          </li>
          <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
            <TileMedia
              actions
              className="slds-card__tile"
              media={ <StandardIcon className="slds-icon--small" symbol="contact" assistiveText="Contact" /> }
              title="Related Record Title 1"
            />
          </li>
        </ul>
      </CardBody>
      <CardFooter>
        <a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a>
      </CardFooter>
    </Card>
  }
];
