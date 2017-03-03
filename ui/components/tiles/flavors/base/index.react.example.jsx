// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Tile = props =>
  <article className={classNames('slds-tile', props.className, props.actions ? 'slds-hint-parent' : null)}>
    { props.actions ?
      <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
        <h3 className="slds-truncate" title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </h3>
        <div className="slds-shrink-none">
          <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" iconClassName="slds-button__icon--hint" symbol="down" aria-haspopup="true" assistiveText="More options" title="More options" />
        </div>
      </div>
    :
      <h3 className="slds-truncate" title={ props.title || 'Title' }>
        <a href="javascript:void(0);">{ props.title || 'Title' }</a>
      </h3>
    }
    <div className="slds-tile__detail slds-text-body--small">
      { props.children ? props.children : <Detail /> }
    </div>
  </article>;

export let TileMedia = props =>
  <article className={classNames('slds-tile slds-media', props.className, props.actions ? 'slds-hint-parent' : null)}>
    { props.media ?
      <div className="slds-media__figure">
        { props.media }
      </div>
    : null }
    <div className="slds-media__body">
      { props.actions ?
        <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
          <h3 className="slds-truncate" title={ props.title || 'Title' }>
            <a href="javascript:void(0);">{ props.title || 'Title' }</a>
          </h3>
          <div className="slds-shrink-none">
            <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" iconClassName="slds-button__icon--hint" symbol="down" aria-haspopup="true" assistiveText="More options" title="More options" />
          </div>
        </div>
      :
        <h3 className="slds-truncate" title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </h3>
      }
      <div className="slds-tile__detail slds-text-body--small">
        { props.children ? props.children : <Detail /> }
      </div>
    </div>
  </article>;

let Detail = props =>
  <dl className="slds-list--horizontal slds-wrap">
    <dt className="slds-item--label slds-text-color--weak slds-truncate" title="First Label">First Label:</dt>
    <dd className="slds-item--detail slds-truncate" title="Description for first label">Description for first label</dd>
    <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Second Label">Second Label:</dt>
    <dd className="slds-item--detail slds-truncate" title="Description for second label">Description for second label</dd>
  </dl>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '30rem' }}>
        <Tile title="Salesforce UX" />
      </div>
  },
  {
    id: 'tile-with-action',
    label: 'Default with actions',
    element:
      <div className="demo-only" style={{ width: '30rem' }}>
        <Tile title="Salesforce UX" actions />
      </div>
  }
];
