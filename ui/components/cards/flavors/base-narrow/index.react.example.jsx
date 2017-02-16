// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Card, CardHeader, CardBody, CardFooter } from 'ui/components/cards/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'card-narrow',
    label: 'Default',
    element:
      <div className="demo-only demo-only--center-card-body" style={{ minWidth: '320px', maxWidth: '360px' }}>
        <Card className="slds-card--narrow">
          <CardHeader symbol="contact" actions="overflow"><span className="slds-text-heading--small">Card Header</span></CardHeader>
          <CardBody>Card Body (custom goes in here)</CardBody>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      </div>
  },
  {
    id: 'card-narrow-empty',
    label: 'Empty',
    element:
      <div className="demo-only" style={{ minWidth: '320px', maxWidth: '360px' }}>
        <Card className="slds-card--narrow">
          <CardHeader symbol="contact" actions="overflow"><span className="slds-text-heading--small">Card Header</span></CardHeader>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
  }
];
