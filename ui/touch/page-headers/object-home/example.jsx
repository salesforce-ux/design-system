// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from '../../../utilities/media-objects/index.react';
import SvgIcon from '../../../shared/svg-icon';

const Image = (
  <SvgIcon
    className="slds-icon slds-icon-standard-opportunity"
    sprite="standard"
    symbol="opportunity"
  />
);

const Button = <button className="slds-button slds-button_neutral">New</button>;

export default (
  <div className="slds-page-header" role="banner">
    <MediaObject flavor="center" figureLeft={Image} figureRight={Button}>
      <p
        className="slds-page-header__title slds-truncate"
        title="Rohde Corp - 80,000 Widgets"
      >
        Opportunities
      </p>
    </MediaObject>
  </div>
);
