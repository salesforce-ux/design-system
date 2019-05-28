// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import { StyledCodeView } from '../styles/CodeBlock';
import styled from 'styled-components';

const StyledDemo = styled.div`
  ${props => props.styles};
`;

class CodeView extends React.Component {
  renderChildren() {
    const { style } = this.props;

    return (
      <div className="docs-codeblock-example">
        <StyledDemo styles={style}>{this.props.children}</StyledDemo>
      </div>
    );
  }

  render() {
    const { position, toggleCode, children, exampleOnly } = this.props;
    return (
      <StyledCodeView>
        {position === 'bottom' ? this.renderChildren() : null}
        {!exampleOnly && (
          <CodeBlock language="html" toggleCode={toggleCode}>
            {children}
          </CodeBlock>
        )}
        {position === 'top' ? this.renderChildren() : null}
      </StyledCodeView>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.object,
  toggleCode: PropTypes.bool,
  exampleOnly: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
