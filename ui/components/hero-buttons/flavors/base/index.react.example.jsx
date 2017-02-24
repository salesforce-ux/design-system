// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Fieldset, Legend, FormElementControl } from 'ui/components/radio-group/flavors/base/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let HeroButton = props => {
  const uniqueId = _.uniqueId('hero-button-');

  return (
    <div className={classNames('slds-hero slds-hero-button', props.largeButton ? 'slds-hero-button_large' : 'slds-hero-button_medium' )}>
      <input type={props.type} id={ uniqueId } name="options" defaultChecked={props.checked} disabled={props.disabled} />
      <label htmlFor={ uniqueId }>
      { props.icon ?
        <span className={classNames('slds-hero-button__figure slds-hero-button__icon', props.className)}>
          <span className="slds-hero-selected">
            <span className="slds-icon_container" title="description of icon when needed">
              <SvgIcon className={'slds-icon slds-align--absolute-center slds-icon-action-check slds-icon--large'} sprite="action" symbol="check" />
              <span className="slds-assistive-text">Provide description of icon</span>
            </span>
          </span>
          <span className="slds-hero-not-selected">
            <span className="slds-icon_container" title="description of icon when needed">
              <SvgIcon className={'slds-icon slds-align--absolute-center slds-icon-action-' + props.symbol + ' slds-icon--large'} sprite="action" symbol={ props.symbol } />
              <span className="slds-assistive-text">Provide description of icon</span>
            </span>
          </span>
        </span>
        :
        <span className={classNames('slds-hero-button__figure slds-hero-button__text', props.className)}>
          {props.children}
        </span>
      }
      { props.label ?
        <span className="slds-hero-button__body slds-truncate" title="Label">{props.label}</span>
        : null
      }
        { !props.icon ?
            <span className="slds-icon_container slds-hero-button__text-check">
              <SvgIcon className="slds-icon slds-icon-text-check slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
          : null
        }
      </label>
    </div>
  );
};

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
        <HeroButton type="radio">
          <span className="slds-align--absolute-center">
            <span className="slds-text-heading--large slds-text-color--default" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
        </HeroButton>
        <HeroButton type="radio">
          <span className="slds-align--absolute-center">
            <span className="slds-text-heading--large slds-text-color--default" title="Label">$300</span>
            <span className="slds-text-title">description of text</span>
          </span>
        </HeroButton>
        <HeroButton type="radio">
          <span className="slds-align--absolute-center">
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
