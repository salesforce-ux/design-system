// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import CodeClass from 'app_modules/site/components/code-class';

export default (
  <div className="demo-only demo-visibility">
    <div className="slds-x-small-show">Show on 320px and up</div>
    <div className="slds-x-small-show-only">Show only between 320px and 479px</div>
    <div className="slds-max-x-small-hide">Hide on 319px and down</div>

    <div className="slds-small-show">Show on 480px and up</div>
    <div className="slds-small-show-only">Show only between 480px and 767px</div>
    <div className="slds-max-small-hide">Hide on 479px and down</div>

    <div className="slds-medium-show">Show on 768px and up</div>
    <div className="slds-medium-show-only">Show only between 768px and 1023px</div>
    <div className="slds-max-medium-hide">Hide on 1023px and down</div>

    <div className="slds-large-show">Show on 1024px and up</div>
  </div>
);
