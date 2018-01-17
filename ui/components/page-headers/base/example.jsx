// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { StandardIcon } from '../../icons/standard/example';

export const PageHeader = props => (
  <div className="slds-page-header">
    <div className="slds-media">
      <div className="slds-media__figure">
        <StandardIcon
          className="slds-page-header__icon"
          symbol="opportunity"
          assistiveText={false}
        />
      </div>
      <div className="slds-media__body">
        <h1
          className="slds-page-header__title slds-truncate slds-align-middle"
          title="Rohde Corp - 80,000 Widgets"
        >
          Rohde Corp - 80,000 Widgets
        </h1>
        <p className="slds-text-body_small slds-line-height_reset">
          Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15
        </p>
      </div>
    </div>
  </div>
);

export default <PageHeader />;
