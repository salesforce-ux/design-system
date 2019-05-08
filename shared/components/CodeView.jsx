// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import classNames from 'classnames';
import _ from '../../ui/shared/helpers';
import styled from 'styled-components';

const StyledDemo = styled.div`
  ${props => props.styles};
`;

class CodeView extends React.Component {
  renderChildren() {
    const { style, isViewport } = this.props;

    return (
      <div className="docs-codeblock-example">
        <StyledDemo styles={style}>{this.props.children}</StyledDemo>
      </div>
    );
  }

  render() {
    const { position, toggleCode, children } = this.props;
    return (
      <div className={classNames('docs-codeblock')}>
        {position === 'bottom' ? this.renderChildren() : null}
        <CodeBlock language="html" toggleCode={toggleCode}>
          {children}
        </CodeBlock>
        {position === 'top' ? this.renderChildren() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.object,
  isViewport: PropTypes.bool,
  toggleCode: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
