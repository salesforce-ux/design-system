// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import _ from '../../ui/shared/helpers';

class CodeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDensitySettingId: 'comfy'
    };
  }

  componentDidMount() {
    // Listen for the density change event from any of the CodeViews
    // on the page to update the setting for all CodeViews
    document.addEventListener('densityChange', e => {
      if (e.detail !== this.state.currentDensitySettingId) {
        this.updateDensityState(e.detail);
      }
    });
  }

  updateDensityState(newDensitySettingId) {
    this.setState({
      currentDensitySettingId: newDensitySettingId
    });
  }

  // Dispatch an event to tell design-system-site that
  // the density setting has been changed
  handleDensityChange(newDensitySettingId) {
    let densityChangeEvent = new window.CustomEvent('densityChange', {
      detail: newDensitySettingId
    });
    document.dispatchEvent(densityChangeEvent);
  }

  renderChildren() {
    const { style, hasDensityRadioButtons } = this.props;
    const uniqueIdComfy = _.uniqueId('density-radio-comfy-');
    const uniqueIdCompact = _.uniqueId('density-radio-compact-');
    const uniqueIdForName = _.uniqueId('density-radio-name-');

    return (
      <div className="docs-codeblock-example">
        {hasDensityRadioButtons && (
          <fieldset className="slds-form-element docs-codeview__density-bar">
            <legend className="slds-assistive-text slds-form-element__legend slds-form-element__label">
              UI Variable Density Setting
            </legend>
            <div className="slds-form-element__control docs-codeview__density-bar-form">
              <span className="slds-radio">
                <input
                  type="radio"
                  id={uniqueIdComfy}
                  name={uniqueIdForName}
                  value={uniqueIdComfy}
                  checked={this.state.currentDensitySettingId === 'comfy'}
                  onChange={this.handleDensityChange.bind(
                    this,
                    'comfy',
                    'slds-large'
                  )}
                />
                <label className="slds-radio__label" htmlFor={uniqueIdComfy}>
                  <span className="slds-radio_faux" />
                  <span className="slds-form-element__label">Comfy</span>
                </label>
              </span>
              <span className="slds-radio">
                <input
                  type="radio"
                  id={uniqueIdCompact}
                  name={uniqueIdForName}
                  value={uniqueIdCompact}
                  checked={this.state.currentDensitySettingId === 'compact'}
                  onChange={this.handleDensityChange.bind(
                    this,
                    'compact',
                    'slds-var-spacing'
                  )}
                />
                <label className="slds-radio__label" htmlFor={uniqueIdCompact}>
                  <span className="slds-radio_faux" />
                  <span className="slds-form-element__label">Compact</span>
                </label>
              </span>
            </div>
          </fieldset>
        )}
        <div style={style}>{this.props.children}</div>
      </div>
    );
  }

  render() {
    const { position, toggleCode } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.renderChildren() : null}
        <CodeBlock language="html" toggleCode={toggleCode}>
          {this.props.children}
        </CodeBlock>
        {position === 'top' ? this.renderChildren() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  hasDensityRadioButtons: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.object,
  toggleCode: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
