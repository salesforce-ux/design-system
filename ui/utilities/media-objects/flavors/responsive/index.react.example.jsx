// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';

const image = (
  <img
    alt="Person name"
    className="slds-avatar--large"
    src="/assets/images/avatar2.jpg"
    title="User avatar"
  />
);

export default (
  <div className="demo-only slds-size--3-of-4">
    <MediaObject figureLeft={image} flavor="responsive">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
    </MediaObject>
  </div>
);
