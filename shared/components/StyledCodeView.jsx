// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeView from './CodeView';
import {
  getDisplayElementById,
  getDemoStylesById
} from '../../ui/shared/helpers';

const StyledCodeView = props => (
  <CodeView demoStyles={getDemoStylesById(props.collection, props.exampleId)}>
    {getDisplayElementById(props.collection, props.exampleId)}
  </CodeView>
);

export default StyledCodeView;

StyledCodeView.propTypes = {
  collection: PropTypes.array,
  exampleId: PropTypes.string
};
