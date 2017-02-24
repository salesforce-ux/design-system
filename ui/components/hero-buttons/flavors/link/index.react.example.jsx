// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let HeroTileButton = props =>
  <div className="slds-hero">
    <a href="javascript:void(0);" className={classNames('slds-hero-tile slds-text-link--reset slds-align--absolute-center slds-p-vertical--x-small', props.className)}>
      <div className="slds-p-around--small">
        <span className="slds-icon_container" title="description of icon when needed">
          <SvgIcon className={'slds-icon slds-icon-standard-' + props.symbol + ' slds-icon--large'} sprite="standard" symbol={ props.symbol } />
          <span className="slds-assistive-text">Provide description of icon</span>
        </span>
      </div>
      <div className="slds-hero-tile__body">
        {props.children}
      </div>
    </a>
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{width: '24rem'}}>
    <HeroTileButton symbol="user">
      <h2 className="slds-truncate slds-text-heading--small" title="Label">Tile Button Title</h2>
      <p className="slds-m-top--small">Here is a description of what will go inside of the tile button.</p>
    </HeroTileButton>
  </div>
);
