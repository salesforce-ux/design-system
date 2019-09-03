// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import StyledCodeView from '../../../../shared/components/StyledCodeView';
import * as GridExamples from '../example';

const GridCodeView = props => (
  <StyledCodeView
    collection={GridExamples.examples}
    exampleId={props.exampleId}
  />
);

export default GridCodeView;

GridCodeView.propTypes = {
  exampleId: PropTypes.string
};
