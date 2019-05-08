// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { FileSelector } from '../base/example';

export default (
  <div className="demo-only" style={{ maxWidth: '320px' }}>
    <FileSelector className="slds-file-selector_images" />
  </div>
);

export let states = [
  {
    id: 'file-selector-images-error',
    label: 'Error',
    element: (
      <div className="demo-only" style={{ maxWidth: '320px' }}>
        <FileSelector className="slds-file-selector_images" error />
      </div>
    )
  },
  {
    id: 'file-selector-images-dragover',
    label: 'Dragover',
    element: (
      <div className="demo-only" style={{ maxWidth: '320px' }}>
        <FileSelector className="slds-file-selector_images" dragover />
      </div>
    )
  },
  {
    id: 'file-selector-images-dragover-error',
    label: 'Dragover with error',
    element: (
      <div className="demo-only" style={{ maxWidth: '320px' }}>
        <FileSelector
          className="slds-file-selector_images"
          dragoverError
          error
        />
      </div>
    )
  }
];
