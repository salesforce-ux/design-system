// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from '../../../utilities/media-objects/index.react';
import SvgIcon from '../../../shared/svg-icon';

const image = (
  <SvgIcon
    className="slds-icon slds-icon-standard-opportunity"
    sprite="standard"
    symbol="opportunity"
  />
);

export default (
  <div className="slds-page-header" role="banner">
    <MediaObject figureLeft={image}>
      <p
        className="slds-page-header__title slds-truncate"
        title="Rohde Corp - 80,000 Widgets"
      >
        Rohde Corp - 80,000 Widgets
      </p>
      <p className="slds-text-body_small">
        Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15
      </p>
    </MediaObject>
  </div>
);
