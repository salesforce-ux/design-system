// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import menuSeparator from '../base/index.scss';

const MenuSeparator = props => {
  const { shadow, customization } = props;

  const css = rollupAdoptedStylesheets([common, menuSeparator, customization]);

  return (
    <Shadow.on name="menu-separator" includes={css} shadow={shadow}>
      <div className="lwc-menu-separator" role="separator" />
    </Shadow.on>
  );
};

MenuSeparator.propTypes = {
  shadow: PropTypes.bool
};

export default MenuSeparator;
