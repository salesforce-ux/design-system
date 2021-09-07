// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import FileSelector from '../';

// Example exports
export default <FileSelector files />;

export let states = [
  {
    id: 'file-selector-files-error',
    label: 'Error',
    element: <FileSelector files error />
  },
  {
    id: 'file-selector-files-dragover',
    label: 'Dragover',
    element: (
      <FileSelector files dragover />
    )
  },
  {
    id: 'file-selector-files-dragover-error',
    label: 'Dragover with error',
    element: (
      <FileSelector
        files
        dragoverError
        error
      />
    )
  }
];
