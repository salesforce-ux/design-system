// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export default (
  <div className="demo-only">
    <div className="slds-wizard" role="navigation">
      <ol className="slds-wizard__list">
        <li className="slds-wizard__item slds-is-active">
          <a href="javascript:void(0);" className="slds-wizard__link">
            <span className="slds-wizard__marker" />
            <span
              className="slds-wizard__label slds-text-title_caps slds-truncate"
              title="Navigation"
            >
              Navigation
            </span>
          </a>
        </li>
        <li className="slds-wizard__item slds-is-active">
          <a href="javascript:void(0);" className="slds-wizard__link">
            <span className="slds-wizard__marker" />
            <span
              className="slds-wizard__label slds-text-title_caps slds-truncate"
              title="Actions"
            >
              Actions
            </span>
          </a>
        </li>
        <li className="slds-wizard__item slds-is-active">
          <a href="javascript:void(0);" className="slds-wizard__link">
            <span className="slds-wizard__marker" />
            <span
              className="slds-wizard__label slds-text-title_caps slds-truncate"
              title="Compact Layout"
            >
              Compact Layout
            </span>
          </a>
        </li>
        <li className="slds-wizard__item">
          <a href="javascript:void(0);" className="slds-wizard__link">
            <span className="slds-wizard__marker" />
            <span
              className="slds-wizard__label slds-text-title_caps slds-truncate"
              title="Review"
            >
              Review
            </span>
          </a>
        </li>
        <li className="slds-wizard__item">
          <a href="javascript:void(0);" className="slds-wizard__link">
            <span className="slds-wizard__marker" />
            <span
              className="slds-wizard__label slds-text-title_caps slds-truncate"
              title="Invite"
            >
              Invite
            </span>
          </a>
        </li>
      </ol>
      <span className="slds-wizard__progress">
        <span className="slds-wizard__progress-bar" style={{ width: '50%' }} />
      </span>
    </div>
  </div>
);
