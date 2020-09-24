// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../ui/shared/svg-icon/';

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
    const assistiveText = copied ? 'Copied' : '';
    return (
      <React.Fragment>
        <button
          className={classnames(
            'doc-copy-to-clipboard',
            'slds-button',
            this.props.className
          )}
          onClick={() => this.copyToClipboard()}
          aria-label="Copy to Clipboard"
          title="Copy to Clipboard"
        >
          <SvgIcon
            sprite="utility"
            symbol={copied ? 'check' : 'copy_to_clipboard'}
            className="slds-button__icon"
          />
        </button>
        <span aria-live="polite" className="slds-assistive-text">
          {assistiveText}
        </span>
      </React.Fragment>
    );
  }

  render() {
    if (!this.state.show) return null;
    return (
      <span className={this.props.containerClassName}>
        {this.renderButton()}
        <pre
          aria-hidden="true"
          className="slds-assistive-text"
          ref={node => {
            this.copyNode = node;
          }}
        />
      </span>
    );
  }
}

export default Copy;
