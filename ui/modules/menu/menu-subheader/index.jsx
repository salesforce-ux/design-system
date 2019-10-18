// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import menuSubheader from '../base/index.scss';

const MenuSubheader = props => {
  const { label, shadow, customization } = props;

  const css = rollupAdoptedStylesheets([common, menuSubheader, customization]);

  return (
    <Shadow.on name="menu-subheader" includes={css} shadow={shadow}>
      <div className="lwc-menu-subheader" role="separator" title={label}>
        <span>{label}</span>
      </div>
    </Shadow.on>
  );
};

MenuSubheader.propTypes = {
  shadow: PropTypes.bool
};

export default MenuSubheader;
