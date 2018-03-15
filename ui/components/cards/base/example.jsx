// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import ButtonIcon from '../../button-icons/';
import { TileMedia } from '../../tiles/base/example';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';

const headerActionOverflow = (
  <button
    className="slds-button slds-button_icon-border-filled slds-button_icon-x-small"
    aria-haspopup="true"
  >
    <SvgIcon className="slds-button__icon" sprite="utility" symbol="down" />
    <span className="slds-assistive-text">More Options</span>
  </button>
);

const headerAction = (
  <button className="slds-button slds-button_neutral">New</button>
);

const headerSearch = (
  <div className="slds-input-has-icon slds-input-has-icon_left slds-size_1-of-3">
    <SvgIcon
      className="slds-input__icon slds-icon-text-default"
      sprite="utility"
      symbol="search"
    />
    <label htmlFor="text-input-01" className="slds-assistive-text">
      Find in List
    </label>
    <input
      id="text-input-01"
      className="slds-input"
      type="text"
      placeholder="Find in List"
    />
  </div>
);

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Card = props => (
  <article className={classNames('slds-card', props.className)}>
    {props.children}
  </article>
);

export let CardHeader = props => (
  <div className={classNames('slds-card__header slds-grid', props.className)}>
    <header
      className={classNames(
        'slds-media slds-media_center slds-has-flexi-truncate',
        props.search ? 'slds-size_1-of-3' : null
      )}
    >
      {props.symbol ? (
        <div className="slds-media__figure">
          <span
            className={'slds-icon_container slds-icon-standard-' + props.symbol}
            title="description of icon when needed"
          >
            <SvgIcon
              className="slds-icon slds-icon_small"
              sprite="standard"
              symbol={props.symbol}
            />
          </span>
        </div>
      ) : null}
      <div className="slds-media__body">
        <h2>
          <a
            href="javascript:void(0);"
            className="slds-card__header-link slds-truncate"
            title={props.title || 'Card Header'}
          >
            {props.children}
          </a>
        </h2>
      </div>
    </header>
    {props.search ? headerSearch : null}
    <div
      className={classNames(
        'slds-no-flex',
        props.search ? 'slds-size_1-of-3' : null
      )}
    >
      {props.actions == 'overflow' ? (
        <ButtonIcon
          className="slds-button_icon-border-filled slds-button_icon-x-small"
          symbol="down"
          title="More Options"
          assistiveText="More Options"
          aria-haspopup="true"
        />
      ) : (
        headerAction
      )}
    </div>
  </div>
);

export let CardBody = props => (
  <div className={classNames('slds-card__body', props.className)}>
    {props.children}
  </div>
);

export let CardFooter = props => (
  <footer className={classNames('slds-card__footer', props.className)}>
    {props.children}
  </footer>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Card>
    <CardHeader symbol="contact" title="Card Header" actions>
      <span className="slds-text-heading_small">Card Header</span>
    </CardHeader>
    <CardBody className="slds-card__body_inner">
      Card Body (custom goes in here)
    </CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

export let states = [
  {
    id: 'empty',
    label: 'Empty',
    element: (
      <Card>
        <CardHeader symbol="contact" title="Card Header" actions>
          <span className="slds-text-heading_small">Card Header</span>
        </CardHeader>
        <CardBody />
        <CardFooter />
      </Card>
    )
  }
];

export let examples = [
  {
    id: 'related-list-table',
    label: 'With data-table',
    element: (
      <Card>
        <CardHeader symbol="contact" title="Contacts (1)" actions>
          <span className="slds-text-heading_small">Contacts (1)</span>
        </CardHeader>
        <CardBody>
          <table className="slds-table slds-table_fixed-layout slds-table_bordered slds-no-row-hover slds-table_cell-buffer">
            <thead>
              <tr className="slds-text-title_caps">
                <th scope="col">
                  <div className="slds-truncate" title="Name">
                    Name
                  </div>
                </th>
                <th scope="col">
                  <div className="slds-truncate" title="Company">
                    Company
                  </div>
                </th>
                <th scope="col">
                  <div className="slds-truncate" title="Title">
                    Title
                  </div>
                </th>
                <th scope="col">
                  <div className="slds-truncate" title="Email">
                    Email
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="slds-hint-parent">
                <th scope="row">
                  <div className="slds-truncate" title="Adam Choi">
                    <a href="javascript:void(0);">Adam Choi</a>
                  </div>
                </th>
                <td>
                  <div className="slds-truncate" title="Company One">
                    Company One
                  </div>
                </td>
                <td>
                  <div className="slds-truncate" title="Director of Operations">
                    Director of Operations
                  </div>
                </td>
                <td>
                  <div className="slds-truncate" title="adam@company.com">
                    adam@company.com
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
          <a className="slds-card__footer-action" href="javascript:void(0);">
            View All <span className="slds-assistive-text">entity type</span>
          </a>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'related-list-tiles',
    label: 'With tiles',
    element: (
      <Card>
        <CardHeader actions title="Contacts (3)" symbol="contact">
          <span className="slds-text-heading_small">Contacts (3)</span>
        </CardHeader>
        <CardBody>
          <ul className="slds-card__body_inner slds-grid slds-wrap slds-grid_pull-padded">
            <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
              <TileMedia
                actions
                className="slds-card__tile"
                media={
                  <StandardIcon
                    className="slds-icon_small"
                    symbol="contact"
                    assistiveText="Contact"
                  />
                }
                title="Related Record Title 1"
              />
            </li>
            <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
              <TileMedia
                actions
                className="slds-card__tile"
                media={
                  <StandardIcon
                    className="slds-icon_small"
                    symbol="contact"
                    assistiveText="Contact"
                  />
                }
                title="Related Record Title 1"
              />
            </li>
            <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
              <TileMedia
                actions
                className="slds-card__tile"
                media={
                  <StandardIcon
                    className="slds-icon_small"
                    symbol="contact"
                    assistiveText="Contact"
                  />
                }
                title="Related Record Title 1"
              />
            </li>
          </ul>
        </CardBody>
        <CardFooter>
          <a className="slds-card__footer-action" href="javascript:void(0);">
            View All <span className="slds-assistive-text">entity type</span>
          </a>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'nested-cards',
    label: 'Nested cards',
    element: (
      <Card>
        <CardHeader actions symbol="contact" title="Outer Card Header">
          <span className="slds-text-heading_small">Outer Card Header</span>
        </CardHeader>
        <CardBody className="slds-card__body_inner">
          <Card>
            <CardHeader actions symbol="contact" title="Card Header">
              <span className="slds-text-heading_small">Card Header</span>
            </CardHeader>
            <CardBody className="slds-card__body_inner">
              <p>
                This is a card inside an `.slds-card` to show how styling is
                removed when cards are nested inside each other.
              </p>
            </CardBody>
            <CardFooter>
              <a
                className="slds-card__footer-action"
                href="javascript:void(0);"
              >
                View All{' '}
                <span className="slds-assistive-text">entity type</span>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader actions symbol="contact" title="Card Header">
              <span className="slds-text-heading_small">Card Header</span>
            </CardHeader>
            <CardBody className="slds-card__body_inner">
              <p>
                This is a card inside an `.slds-card` to show how styling is
                removed when cards are nested inside each other.
              </p>
            </CardBody>
            <CardFooter>
              <a
                className="slds-card__footer-action"
                href="javascript:void(0);"
              >
                View All{' '}
                <span className="slds-assistive-text">entity type</span>
              </a>
            </CardFooter>
          </Card>
          <Card className="slds-card_boundary">
            <CardHeader actions symbol="contact" title="Card Header">
              <span className="slds-text-heading_small">Card Header</span>
            </CardHeader>
            <CardBody className="slds-card__body_inner">
              <p>
                This is a card inside an `.slds-card` to illustrate how
                `.slds-card_boundary` adds a rounded border when desired.
              </p>
            </CardBody>
            <CardFooter>
              <a
                className="slds-card__footer-action"
                href="javascript:void(0);"
              >
                View All{' '}
                <span className="slds-assistive-text">entity type</span>
              </a>
            </CardFooter>
          </Card>
          <Card className="slds-card_boundary">
            <CardHeader actions symbol="contact" title="Card Header">
              <span className="slds-text-heading_small">Card Header</span>
            </CardHeader>
            <CardBody className="slds-card__body_inner">
              <p>
                This is a card inside an `.slds-card` to illustrate how
                `.slds-card_boundary` adds a rounded border when desired.
              </p>
            </CardBody>
            <CardFooter>
              <a
                className="slds-card__footer-action"
                href="javascript:void(0);"
              >
                View All{' '}
                <span className="slds-assistive-text">entity type</span>
              </a>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter>
          <a className="slds-card__footer-action" href="javascript:void(0);">
            View All <span className="slds-assistive-text">entity type</span>
          </a>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'card-wrapper',
    label: 'Wrapped cards',
    element: (
      <div className="slds-card-wrapper">
        <header>
          <h2 className="slds-text-heading_medium">
            Outer card wrapper header
          </h2>
        </header>
        <Card>
          <CardHeader actions symbol="contact" title="Card Header">
            <span className="slds-text-heading_small">Card Header</span>
          </CardHeader>
          <CardBody className="slds-card__body_inner">
            <p>
              This is a card inside an `.slds-card-wrapper` to show how styling
              is removed when cards are nested inside.
            </p>
          </CardBody>
          <CardFooter>
            <a className="slds-card__footer-action" href="javascript:void(0);">
              View All <span className="slds-assistive-text">entity type</span>
            </a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader actions symbol="contact" title="Card Header">
            <span className="slds-text-heading_small">Card Header</span>
          </CardHeader>
          <CardBody className="slds-card__body_inner">
            <p>
              This is a card inside an `.slds-card-wrapper` to show how styling
              is removed when cards are nested inside.
            </p>
          </CardBody>
          <CardFooter>
            <a className="slds-card__footer-action" href="javascript:void(0);">
              View All <span className="slds-assistive-text">entity type</span>
            </a>
          </CardFooter>
        </Card>
        <Card className="slds-card_boundary">
          <CardHeader actions symbol="contact" title="Card Header">
            <span className="slds-text-heading_small">Card Header</span>
          </CardHeader>
          <CardBody className="slds-card__body_inner">
            <p>
              This is a card inside an `.slds-card-wrapper` to illustrate how
              `.slds-card_boundary` adds a rounded border when desired.
            </p>
          </CardBody>
          <CardFooter>
            <a className="slds-card__footer-action" href="javascript:void(0);">
              View All <span className="slds-assistive-text">entity type</span>
            </a>
          </CardFooter>
        </Card>
        <Card className="slds-card_boundary">
          <CardHeader actions symbol="contact" title="Card Header">
            <span className="slds-text-heading_small">Card Header</span>
          </CardHeader>
          <CardBody className="slds-card__body_inner">
            <p>
              This is a card inside an `.slds-card-wrapper` to illustrate how
              `.slds-card_boundary` adds a rounded border when desired.
            </p>
          </CardBody>
          <CardFooter>
            <a className="slds-card__footer-action" href="javascript:void(0);">
              View All <span className="slds-assistive-text">entity type</span>
            </a>
          </CardFooter>
        </Card>
      </div>
    )
  }
];
