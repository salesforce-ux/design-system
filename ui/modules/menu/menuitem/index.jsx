// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../icon';
import Shadow from '../../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import menuitem from '../base/index.scss';

class Menuitem extends Component {
  render() {
    const {
      label,
      url,
      startIconSprite,
      startIconSymbol,
      endIconSprite,
      endIconSymbol,
      startIconPlaceholder,
      endIconPlaceholder,
      checked,
      isAction,
      status,
      disabled,
      role,
      clickable,
      tabIndex,
      shadow,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([common, menuitem, customization]);

    const startIconSpace = startIconPlaceholder || startIconSprite;
    const endIconSpace = endIconPlaceholder || endIconSprite;

    const linkClassNames = {
      'lwc-menuitem_action': isAction,
      'lwc-menuitem_status-success': status === 'success',
      'lwc-menuitem_status-warning': status === 'warning',
      'lwc-menuitem_status-error': status === 'error'
    };

    function handleClick(e) {
      // only prevent clicking if clickable is false
      if (clickable === false) {
        e.preventDefault();
      }
    }

    return (
      <Shadow.on name="menuitem" includes={css} shadow={shadow}>
        <div className="lwc-menuitem">
          <a
            href={url}
            role={role}
            tabIndex={tabIndex}
            className={classNames('lwc-menuitem__content', linkClassNames)}
            aria-disabled={disabled}
            aria-checked={checked}
            onClick={handleClick}
          >
            {checked !== undefined && (
              <span className="lwc-menuitem__check-icon">
                {checked === true && (
                  <Icon size="x-small" sprite="utility" symbol="check" />
                )}
              </span>
            )}

            {startIconSpace && (
              <span className="lwc-menuitem__start-icon">
                {startIconSprite && (
                  <Icon
                    size="x-small"
                    sprite={startIconSprite}
                    symbol={startIconSymbol}
                  />
                )}
              </span>
            )}

            <div className="lwc-menuitem__title" title={label}>
              {label}
            </div>

            {endIconSpace && (
              <span className="lwc-menuitem__end-icon">
                {endIconSprite && (
                  <Icon
                    size="x-small"
                    sprite={endIconSprite}
                    symbol={endIconSymbol}
                  />
                )}
              </span>
            )}
          </a>
        </div>
      </Shadow.on>
    );
  }
}

Menuitem.defaultProps = {
  startIconPlaceholder: false,
  endIconPlaceholder: false,
  role: 'menuitem',
  clickable: false,
  tabIndex: -1
};

Menuitem.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  startIconSprite: PropTypes.string,
  startIconSymbol: PropTypes.string,
  startIconPlaceholder: PropTypes.bool,
  checked: PropTypes.bool,
  isAction: PropTypes.bool,
  status: PropTypes.oneOf(['success', 'warning', 'error']),
  disabled: PropTypes.bool,
  role: PropTypes.oneOf(['menuitem', 'menuitemcheckbox', 'menuitemradio']),
  tabIndex: PropTypes.number,
  clickable: PropTypes.bool,
  shadow: PropTypes.bool
};

export default Menuitem;
