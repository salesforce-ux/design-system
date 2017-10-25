// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Checkbox } from '../../checkbox/base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Tile = props => (
  <article
    className={classNames(
      'slds-tile',
      props.className,
      props.actions ? 'slds-hint-parent' : null
    )}
  >
    {props.actions ? (
      <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
        <h3
          className="slds-tile__title slds-truncate"
          title={props.title || 'Title'}
        >
          <a href="javascript:void(0);">{props.title || 'Title'}</a>
        </h3>
        <div className="slds-shrink-none">
          <ButtonIcon
            className="slds-button_icon-border-filled slds-button_icon-x-small"
            iconClassName="slds-button__icon_hint"
            symbol="down"
            aria-haspopup="true"
            assistiveText="More options"
            title="More options"
          />
        </div>
      </div>
    ) : (
      <h3
        className="slds-tile__title slds-truncate"
        title={props.title || 'Title'}
      >
        <a href="javascript:void(0);">{props.title || 'Title'}</a>
      </h3>
    )}
    <div className="slds-tile__detail">
      {props.children ? props.children : <Detail />}
    </div>
  </article>
);

export let TileMedia = props => (
  <article
    className={classNames(
      'slds-tile slds-media',
      props.className,
      props.actions ? 'slds-hint-parent' : null
    )}
  >
    {props.media ? (
      <div className="slds-media__figure">{props.media}</div>
    ) : null}
    <div className="slds-media__body">
      {props.actions ? (
        <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
          <h3
            className="slds-tile__title slds-truncate"
            title={props.title || 'Title'}
          >
            <a href="javascript:void(0);">{props.title || 'Title'}</a>
          </h3>
          <div className="slds-shrink-none">
            <ButtonIcon
              className="slds-button_icon-border-filled slds-button_icon-x-small"
              iconClassName="slds-button__icon_hint"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More options"
              title="More options"
            />
          </div>
        </div>
      ) : (
        <h3
          className="slds-tile__title slds-truncate"
          title={props.title || 'Title'}
        >
          <a href="javascript:void(0);">{props.title || 'Title'}</a>
        </h3>
      )}
      <div className="slds-tile__detail">
        {props.children ? props.children : <Detail />}
      </div>
    </div>
  </article>
);

let Detail = props => (
  <dl className="slds-list_horizontal slds-wrap">
    <dt
      className="slds-item_label slds-text-color_weak slds-truncate"
      title="First Label"
    >
      First Label:
    </dt>
    <dd
      className="slds-item_detail slds-truncate"
      title="Description for first label"
    >
      Description for first label
    </dd>
    <dt
      className="slds-item_label slds-text-color_weak slds-truncate"
      title="Second Label"
    >
      Second Label:
    </dt>
    <dd
      className="slds-item_detail slds-truncate"
      title="Description for second label"
    >
      Description for second label
    </dd>
  </dl>
);

const icon = (
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon
      className="slds-icon slds-icon-standard-groups"
      sprite="standard"
      symbol="groups"
    />
  </span>
);

const avatar = (
  <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
    <img
      alt=""
      src="/assets/images/avatar2.jpg"
      title="Lexee L. Jackson avatar"
    />
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '30rem' }}>
    <Tile title="Salesforce UX" />
  </div>
);

export let examples = [
  {
    id: 'with-action',
    label: 'Default with actions',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <Tile title="Salesforce UX" actions />
      </div>
    )
  },
  {
    id: 'with-icon',
    label: 'With icon',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Salesforce UX" media={icon} />
      </div>
    )
  },
  {
    id: 'with-avatar',
    label: 'With avatar',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Lexee L. Jackson" media={avatar} />
      </div>
    )
  },
  {
    id: 'task',
    label: 'Task',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <TileMedia
          title="Contact Trammel Crow Company"
          media={
            <Checkbox
              label="Did you complete the task: Contact Trammel Crow Company?"
              hideLabel
            />
          }
        >
          <p className="slds-truncate" title="Assignee">
            Assignee
          </p>
        </TileMedia>
      </div>
    )
  },
  {
    id: 'article',
    label: 'Article',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>by Steve Author</p>
          <ul className="slds-list_horizontal slds-has-dividers_right">
            <li className="slds-item">Breaking News</li>
            <li className="slds-item">1 day ago</li>
          </ul>
        </Tile>
      </div>
    )
  },
  {
    id: 'article-liker-bar',
    label: 'Article With like bar',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>
            ...an introduction for beginners about climbing ropes and how they
            can use...
          </p>
          <ul className="slds-list_horizontal slds-has-dividers_right slds-m-top_xx-small">
            <li className="slds-item">000001296</li>
            <li className="slds-item">Published</li>
            <li className="slds-item">How to Guide</li>
          </ul>
          <p>Last Modified: 1/14/16</p>
          <ul className="slds-list_horizontal slds-m-top_xx-small">
            <li className="slds-m-right_small">
              <button
                className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
                aria-pressed="false"
              >
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="like"
                />
                <span className="slds-assistive-text">Upvote</span>
              </button>
              <span className="slds-align-middle">1320</span>
            </li>
            <li>
              <button
                className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
                aria-pressed="false"
              >
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="dislike"
                />
                <span className="slds-assistive-text">Downvote</span>
              </button>
              <span className="slds-align-middle">362</span>
            </li>
          </ul>
        </Tile>
      </div>
    )
  },
  {
    id: 'board',
    label: 'Board',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <ul className="slds-has-dividers_around-space">
          <li className="slds-item">
            <Tile title="Anypoint Connectors" className="slds-tile_board">
              <p className="slds-text-heading_medium">$500,000</p>
              <p className="slds-truncate" title="Company One">
                <a href="javascript:void(0);">Company One</a>
              </p>
              <p className="slds-truncate" title="Closing 9/30/2015">
                Closing 9/30/2015
              </p>
            </Tile>
          </li>
          <li className="slds-item">
            <Tile title="Cloudhub" className="slds-tile_board">
              <p className="slds-text-heading_medium">$185,000</p>
              <p className="slds-truncate" title="Company Two">
                <a href="javascript:void(0);">Company Two</a>
              </p>
              <p
                className="slds-truncate slds-has-alert"
                title="Closing 12/15/2015"
              >
                Closing 12/15/2015
              </p>
              <span
                className="slds-icon_container slds-tile_board__icon"
                title="description of icon when needed"
              >
                <SvgIcon
                  className="slds-icon slds-icon-text-warning slds-icon_x-small"
                  sprite="utility"
                  symbol="warning"
                />
                <span className="slds-assistive-text">Warning Icon</span>
              </span>
            </Tile>
          </li>
          <li className="slds-item">
            <Tile title="600 Widgets" className="slds-tile_board">
              <p className="slds-text-heading_medium">$35,000</p>
              <p className="slds-truncate" title="Company Three">
                <a href="javascript:void(0);">Company Three</a>
              </p>
              <p className="slds-truncate" title="Closing 10/12/2015">
                Closing 10/12/2015
              </p>
            </Tile>
          </li>
        </ul>
      </div>
    )
  }
];
