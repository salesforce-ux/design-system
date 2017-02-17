// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';


export default (
  <div className="slds-text-longform">
    <p>The quick brown fox jumps over the lazy dog.</p>
    <p>The quick brown fox jumps over the lazy dog.</p>
    <h3 className="slds-text-heading--small">Heading</h3>
    <ul>
      <li>The quick brown fox jumps over the lazy dog.</li>
      <li>The quick brown fox jumps over the lazy dog.
        <ul>
          <li>The quick brown fox jumps over the lazy dog.</li>
          <li>The quick brown fox jumps over the lazy dog.
            <ul>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <h3 className="slds-text-heading--small">Heading</h3>
    <ol>
      <li>The quick brown fox jumps over the lazy dog.</li>
      <li>The quick brown fox jumps over the lazy dog.
        <ol>
          <li>The quick brown fox jumps over the lazy dog.</li>
          <li>The quick brown fox jumps over the lazy dog.
            <ol>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>The quick brown fox jumps over the lazy dog.</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
);
