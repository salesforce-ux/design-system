// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';
import Shadow from '../../../shared/shadow';

import commonStyles from '../../common/index.scss';
import tabStyles from '../base/index.scss';

class Tab extends Component {
  render() {
    const css = rollupAdoptedStylesheets([commonStyles, tabStyles]);

    return (
      <Shadow.on name="tab" includes={css} shadow={this.props.shadow}>
        <div
          id={this.props.tabId}
          className={classNames('lwc-tab lwc-is-active', {
            'lwc-tab__scoped': this.props.variant === 'scoped',
            'lwc-tab__vertical': this.props.variant === 'vertical'
          })}
          aria-labelledby={this.props.labelledby}
          role="tabpanel"
        >
          {this.props.children}
        </div>
      </Shadow.on>
    );
  }
}

Tab.propTypes = {
  label: PropTypes.string,
  startIcon: PropTypes.shape({
    sprite: PropTypes.string,
    symbol: PropTypes.string
  }),
  startIconAltText: PropTypes.string,
  startIconColor: PropTypes.string,
  sprite: PropTypes.string,
  endIcon: PropTypes.shape({
    symbol: PropTypes.string
  }),
  endIconAltText: PropTypes.string,
  endIconColor: PropTypes.string,
  labelledby: PropTypes.string,
  variant: PropTypes.oneOf(['base', 'scoped', 'vertical'])
};

export default Tab;
