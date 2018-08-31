// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import { Table } from '../data-tables';

export const TreeGrid = props => {
  return (
    <Table
      hasHiddenHeader={props.hasHiddenHeader}
      isBordered={props.isBordered}
      isEditable
      isFixedLayout={props.isFixedLayout}
      isResizable={props.isResizable}
      selectionType={props.selectionType}
      type="treegrid"
    >
      {props.children}
    </Table>
  );
};
TreeGrid.propTypes = {
  children: PropTypes.node,
  hasHiddenHeader: PropTypes.bool,
  isBordered: PropTypes.bool,
  isFixedLayout: PropTypes.bool,
  isResizable: PropTypes.bool,
  selectionType: PropTypes.string
};
