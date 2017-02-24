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
    id: 'radio-with-coverable',
    label: 'Coverable Content Button',
    element:
      <Fieldset>
        <Legend>Legend Label</Legend>
        <FormElementControl>
          <HeroButton type="radio" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton type="radio" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton type="radio" icon symbol="user" label="label">
          </HeroButton>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'radio-with-noncoverable',
    label: 'Non-coverable Content Button',
    element:
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
        <HeroButton type="radio">
          <span className="slds-align--absolute-center">
            <span className="slds-icon_container" title="description of icon when needed">
              <SvgIcon className="slds-icon slds-icon-action-user slds-icon--large" sprite="action" symbol="user" />
              <span className="slds-assistive-text">Provide description of icon</span>
            </span>
            <span className="slds-text-heading--large slds-text-color--default slds-m-top--small" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
          </HeroButton>
          <HeroButton type="radio">
            <span className="slds-align--absolute-center">
              <span className="slds-icon_container" title="description of icon when needed">
                <SvgIcon className="slds-icon slds-icon-action-user slds-icon--large" sprite="action" symbol="user" />
                <span className="slds-assistive-text">Provide description of icon</span>
              </span>
              <span className="slds-text-heading--large slds-text-color--default slds-m-top--small" title="Label">$300</span>
              <span className="slds-text-title">description of text</span>
            </span>
          </HeroButton>
          <HeroButton type="radio">
            <span className="slds-align--absolute-center">
              <span className="slds-icon_container" title="description of icon when needed">
                <SvgIcon className="slds-icon slds-icon-action-user slds-icon--large" sprite="action" symbol="user" />
                <span className="slds-assistive-text">Provide description of icon</span>
              </span>
              <span className="slds-text-heading--large slds-text-color--default slds-m-top--small" title="Label">$300</span>
              <span className="slds-text-title">description of text</span>
            </span>
          </HeroButton>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'radio-large-button',
    label: 'Large Button',
    element:
      <Fieldset>
        <Legend>Legend Label</Legend>
        <FormElementControl>
          <HeroButton largeButton type="radio" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton largeButton type="radio" icon symbol="user" label="label">
          </HeroButton>
          <HeroButton largeButton type="radio" icon symbol="user" label="label">
          </HeroButton>
        </FormElementControl>
      </Fieldset>
  }
];
