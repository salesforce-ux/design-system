// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

import { Table } from '../data-tables';

export const TreeGrid = ({
  ariaLabel,
  ariaLabelledBy,
  children,
  hasHiddenHeader,
  isBordered,
  isFixedLayout,
  isResizable,
  selectionType
}) => {
  return (
    <Table
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
      hasHiddenHeader={hasHiddenHeader}
      isBordered={isBordered}
      isEditable
      isFixedLayout={isFixedLayout}
      isResizable={isResizable}
      selectionType={selectionType}
      type="treegrid"
    >
      {children}
    </Table>
  );
};
TreeGrid.propTypes = {
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.node,
  hasHiddenHeader: PropTypes.bool,
  isBordered: PropTypes.bool,
  isFixedLayout: PropTypes.bool,
  isResizable: PropTypes.bool,
  selectionType: PropTypes.string
};
