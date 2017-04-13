// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent } from '../../modals/base/example';
import { AppLauncherTile } from '../tile/example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '6rem', paddingLeft: '.5rem', paddingRight: '.5rem' }}>
    <AppLauncherTile flavor="small" objectInitials="SC" figureClass="slds-icon-custom-27">
      <span className="slds-truncate slds-text-link" title="Sales Cloud">Sales Cloud</span>
    </AppLauncherTile>
  </div>
);
