// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { Popover } from '../../popovers/base/example';
import { ListboxList, Footer } from '../../dynamic-menu/base/example';

class GlobalFavorites extends Component {
  render() {
    return (
      <Popover
        className="slds-nubbin_top slds-dynamic-menu"
        bodyClassName="slds-p-horizontal_none"
        title="My Favorites"
        footer={<Footer />}
        style={{ position: 'absolute', left: '-8rem', top: '36px' }}
      >
        <ListboxList length={this.props.numberOfFavorites} />
      </Popover>
    );
  }
}

export default GlobalFavorites;
