// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export default (
  <button className="slds-button slds-button_icon slds-icon-help">
    <svg
      className="slds-button__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -12 78.5 110"
      aria-labelledby="title"
      role="presentation"
    >
      <defs>
        <mask id="questionMark" x="0" y="0" width="78.5" height="110">
          <path
            d="M46.8,70.4H37a2.7,2.7,0,0,1-2.7-2.7V64.8A19.6,19.6,0,0,1,47.4,46.4a14.6,14.6,0,0,0,6.2-4.1c9.8-11.7.8-25.8-10.9-26.2a15.7,15.7,0,0,0-11.5,4.4,13.7,13.7,0,0,0-4.5,8.6,2.8,2.8,0,0,1-2.9,2.1H14a2.8,2.8,0,0,1-2.9-3.1A31.8,31.8,0,0,1,20.5,8.8,32,32,0,0,1,43.3,0a31.3,31.3,0,0,1,9.6,60.7A4.4,4.4,0,0,0,50,64.6v2.9a3,3,0,0,1-3.1,2.9Zm3.1,20.5a3,3,0,0,1-2.9,3H37.2A3,3,0,0,1,34.3,91V81.2a3,3,0,0,1,2.9-2.9H47a3,3,0,0,1,2.9,2.9Z"
            transform="translate(-2.5 0)"
            fill="#aab4be"
          />
        </mask>
      </defs>
      <title id="title">help</title>
      <g>
        <circle cy="45" cx="45" r="60" />
        <circle className="slds-icon-help_hover" cy="45" cx="45" r="60" />
        <circle className="slds-icon-help_focus" cy="45" cx="45" r="60" />
      </g>
    </svg>
    <span className="slds-assistive-text">help</span>
  </button>
);
