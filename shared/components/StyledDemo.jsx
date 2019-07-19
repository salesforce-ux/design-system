import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class DemoComponent extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

const StyledDemo = styled(DemoComponent)`
  ${props => props.styles};
`;

StyledDemo.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string
};

export default StyledDemo;
