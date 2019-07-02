// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledShowcase = styled.div`
  border: 2px solid #eee;

  ${props => props.styles};
`;

class Showcase extends Component {
  render() {
    const { children, style } = this.props;
    return <StyledShowcase styles={style}>{children}</StyledShowcase>;
  }
}

Showcase.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Showcase;
