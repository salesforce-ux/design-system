// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import WelcomeMat from '../';
import { WelcomeMatMarketingContent } from '../helpers';

export const Context = props => (
  <div className="demo-only" style={{ height: '800px' }}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

Context.propTypes = {
  children: PropTypes.node.isRequired
};

export default (
  <WelcomeMat
    content={({ labelId }) => <WelcomeMatMarketingContent labelId={labelId} />}
    isInfoOnly
  />
);
