// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
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
    id: 'file-selector-images-draggover',
    label: 'Dragover',
    element: (
      <div className="demo-only" style={{ maxWidth: '320px' }}>
        <FileSelector className="slds-file-selector_images" draggover />
      </div>
    )
  },
  {
    id: 'file-selector-images-draggover-error',
    label: 'Dragover with error',
    element: (
      <div className="demo-only" style={{ maxWidth: '320px' }}>
        <FileSelector
          className="slds-file-selector_images"
          draggoverError
          error
        />
      </div>
    )
  }
];
