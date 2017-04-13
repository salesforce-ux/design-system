// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let AttachmentLink = props =>
  <a href="javascript:void(0);" className="slds-media slds-box slds-grow slds-text-link--reset">
    <div className="slds-media__figure slds-medium-show">
      <div className="slds-file slds-size--small">
        <div className="slds-file__crop slds-file__crop--16-by-9">
          <img src="/assets/images/placeholder-img@16x9.jpg" alt={props.title || 'Image Title'} />
        </div>
      </div>
    </div>
    <div className="slds-media__body">
      <h3 className="slds-text-heading--small">{ props.articleTitle || 'Article Title' }</h3>
      <p>{ props.articleDescription || 'Article Description' }</p>
      <span className="slds-text-body--small">{ props.articleTitle || 'http://www.linkurl.com' }</span>
    </div>
  </a>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <AttachmentLink
    articleTitle="Maui By Air The Best Way Around The Island"
    articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  />
);
