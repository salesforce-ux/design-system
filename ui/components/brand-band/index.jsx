// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';

let tokenValue = '#eef4ff'; // BRAND_BACKGROUND_PRIMARY from design-tokens/aliases/color-palettes.yml

export const BrandBand = props => (
  <div
    className={classNames(
      'slds-brand-band',
      {
        'slds-brand-band_small': props.size === 'small',
        'slds-brand-band_medium': props.size === 'medium',
        'slds-brand-band_large': props.size === 'large',
        'slds-brand-band_none': props.size === 'none'
      },
      {
        'slds-brand-band_group': props.image === 'group',
        'slds-brand-band_user': props.image === 'user'
      }
    )}
  />
);

class Page extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: '20rem',
          backgroundColor: tokenValue,
          position: 'relative',
          zIndex: '1'
        }}
      >
        <BrandBand {...this.props} />
      </div>
    );
  }
}

export default Page;
