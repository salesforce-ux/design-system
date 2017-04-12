// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import {UtilityIcon} from 'ui/components/icons/flavors/base/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let VisualPickerMediaObject = props =>
  <a
    href="javascript:void(0);"
    className={classNames(
      'slds-box slds-box_link slds-box--x-small slds-media',
      props.className
    )}
  >
    <div className="slds-media__figure slds-media__figure_fixed-width slds-align--absolute-center slds-m-left--xx-small">
      <UtilityIcon
        className="slds-icon-text-default"
        symbol="knowledge_base"
      />
    </div>
    <div className="slds-media__body slds-border--left slds-p-around--small">
      {props.children}
    </div>
  </a>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{width: '24rem'}}>
    <VisualPickerMediaObject symbol="user">
      <h2 className="slds-truncate slds-text-heading--small" title="Share the knowledge">Share the knowledge</h2>
      <p className="slds-m-top--small">Harness your team's collective know-how with our powerful knowledge base</p>
    </VisualPickerMediaObject>
  </div>
);
