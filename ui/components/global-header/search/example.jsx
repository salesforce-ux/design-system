// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { GlobalHeader } from '../base/example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'global-header-search-active',
    label: 'Active',
    element:
      <div className="demo-only" style={{ height: '290px' }}>
        <GlobalHeader expanded />
      </div>,
    script: `
      document.getElementById('global-search-01').focus()
    `
  },
  {
    id: 'global-header-search-typeahead',
    label: 'Typeahead',
    element:
      <div className="demo-only" style={{ height: '340px' }}>
      <GlobalHeader expanded searchingFor="ibm" />
      </div>,
    script: `
      document.getElementById('global-search-01').focus()
    `
  }
];
