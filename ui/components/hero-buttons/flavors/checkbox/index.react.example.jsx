// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Fieldset, Legend, FormElementControl } from 'ui/components/radio-group/flavors/base/index.react.example';
import { HeroButton } from 'ui/components/hero-buttons/flavors/base/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'checkbox-with-coverable',
    label: 'Coverable Content Button',
    element:
      <Fieldset>
        <Legend>Legend Label</Legend>
        <FormElementControl>
          <HeroButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'checkbox-with-noncoverable',
    label: 'Non-coverable Content Button',
    element:
    <Fieldset>
      <Legend>Radio Group Label</Legend>
      <FormElementControl>
        <HeroButton type="checkbox">
          <span className="slds-hero__button-figure-text slds-align--absolute-center">
            <span className="slds-text-heading--large slds-text-color--default" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
        </HeroButton>
        <HeroButton type="checkbox">
          <span className="slds-hero__button-figure-text slds-align--absolute-center">
            <span className="slds-text-heading--large slds-text-color--default" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
        </HeroButton>
        <HeroButton type="checkbox">
          <span className="slds-hero__button-figure-text slds-align--absolute-center">
            <span className="slds-text-heading--large slds-text-color--default" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
        </HeroButton>
      </FormElementControl>
    </Fieldset>
  },
  {
    id: 'checkbox-large-buttons',
    label: 'Large Button',
    element:
      <Fieldset>
        <Legend>Legend Label</Legend>
        <FormElementControl>
          <HeroButton largeButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton largeButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton largeButton type="checkbox" icon symbol="user" label="label">
          </HeroButton>
        </FormElementControl>
      </Fieldset>
  }
];
