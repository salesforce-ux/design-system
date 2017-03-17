// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import { StandardIcon } from 'ui/components/icons/flavors/standard/index.react.example';

export default (
  <div className="slds-page-header">
    <MediaObject figureLeft={<StandardIcon symbol="opportunity" assistiveText={false} />}>
      <h1 className="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">
        Rohde Corp - 80,000 Widgets
      </h1>
      <p className="slds-text-body--small slds-line-height--reset">
        Mark Jaeckal
        &bull;
        Unlimited Customer
        &bull;
        11/13/15
      </p>
    </MediaObject>
  </div>
);
