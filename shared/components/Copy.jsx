// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../ui/shared/svg-icon/';
import { StyledButton } from '../styles/CodeBlock';

const isCopySupported = () =>
  document &&
  document.queryCommandSupported &&
  document.queryCommandSupported('copy');

class Copy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    this.setState({
      show: isCopySupported()
    });
  }
  componentWillUnmount() {
    window.clearTimeout(this.copyTimer);
  }
  copyToClipboard() {
    const range = document.createRange();
    const selection = window.getSelection();
    this.copyNode.innerText =
      typeof this.props.text === 'function'
        ? this.props.text()
        : this.props.text;
    range.selectNode(this.copyNode);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    if (selection.removeRange) {
      selection.removeRange(range);
    } else {
      selection.removeAllRanges();
    }
    this.setState(
      {
        copied: true
      },
      () => {
        this.copyTimer = window.setTimeout(() => {
          this.setState({
            copied: false
          });
        }, 1000);
      }
    );
  }
  renderButton() {
    const { copied } = this.state;
    const title = copied ? 'Copied' : 'Copy to Clipboard';
    return (
      <StyledButton onClick={() => this.copyToClipboard()} title={title}>
        <SvgIcon
          sprite="utility"
          symbol={copied ? 'check' : 'copy_to_clipboard'}
        />
        <span aria-live="polite" hidden>
          {title}
        </span>
      </StyledButton>
    );
  }
  render() {
    if (!this.state.show) return null;
    return (
      <React.Fragment>
        {this.renderButton()}
        <pre
          aria-hidden="true"
          hidden
          ref={node => {
            this.copyNode = node;
          }}
        />
      </React.Fragment>
    );
  }
}

export default Copy;
