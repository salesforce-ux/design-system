// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import menu from './base/index.scss';

class Menu extends Component {
  render() {
    const {
      children,
      shadow,
      title,
      selectionType,
      hasActions,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([common, menu, customization]);

    // set child element's role based on selection type
    let childElements = children;

    // only change role value if passed a selection type
    if (selectionType !== undefined) {
      // update role prop for all child elements
      childElements = React.Children.map(childElements, child => {
        if (child === undefined) return child;

        return React.cloneElement(child, {
          // set role value based on selection type
          role:
            selectionType === 'single' ? 'menuitemradio' : 'menuitemcheckbox',
          checked:
            child.props.checked === undefined ? false : child.props.checked,
          shadow: child.props.shadow
        });
      });
    }

    // only set as action menuitem if defined as an actions menu
    if (hasActions === true) {
      // toggle isAction for all child elements
      childElements = React.Children.map(childElements, child => {
        if (child === undefined) return child;

        return React.cloneElement(child, {
          // set isAction based on passed in value
          isAction: hasActions,
          shadow: child.props.shadow
        });
      });
    }

    return (
      <Shadow.on name="menu" includes={css} shadow={shadow}>
        <div className="lwc-menu" role="menu" aria-label={title}>
          <slot>{childElements}</slot>
        </div>
      </Shadow.on>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  selectionType: PropTypes.oneOf(['single', 'multiple']),
  hasActions: PropTypes.bool,
  shadow: PropTypes.bool
};

export default Menu;
