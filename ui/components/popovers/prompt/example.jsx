// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';
import _ from '../../../shared/helpers';
import classNames from 'classnames';
export const demoHeight = 'height: 13rem;';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Footer = props => (
  <div className="slds-grid slds-grid_vertical-align-center">
    {props.dismissButtonLabel && (
      <button className="slds-button slds-button_neutral slds-col_bump-right">
        {props.dismissButtonLabel}
      </button>
    )}
    {props.actionLinkText && (
      <span className="slds-popover_prompt__action-link">
        <a href="#" className="slds-button">
          {props.actionLinkText}
        </a>
      </span>
    )}
    {props.brandButtonLabel && (
      <button className="slds-button slds-button_brand">
        {props.brandButtonLabel}
      </button>
    )}
  </div>
);

export let Icon = props => {
  return (
    <div className="slds-media__figure">
      <span
        className="slds-icon_container"
        title="description of icon when needed"
      >
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-text-default"
          sprite="utility"
          symbol="prompt"
        />
        <span className="slds-assistive-text">Description of icon</span>
      </span>
    </div>
  );
};

export let Prompt = props => {
  const computedPositionClassNames = {
    'slds-popover_prompt_top': props.position === 'top',
    'slds-popover_prompt_top-right': props.position === 'top-right',
    'slds-popover_prompt_top-left': props.position === 'top-left',
    'slds-popover_prompt_bottom': props.position === 'bottom',
    'slds-popover_prompt_bottom-left': props.position === 'bottom-left',
    'slds-popover_prompt_bottom-right': props.position === 'bottom-right'
  };

  return (
    <Popover
      className={classNames(
        'slds-popover_prompt',
        computedPositionClassNames,
        props.className
      )}
      bodyClassName={props.bodyClassName}
      headingId={headingUniqueId}
      footer={
        props.showFooter && (
          <Footer
            dismissButtonLabel="Dismiss"
            actionLinkText="Learn More"
            brandButtonLabel="Save"
          />
        )
      }
      closeButton
    >
      <div className="slds-media">
        {props.symbol && (
          <div className="slds-media__figure">
            <span className="slds-icon_container" title={props.assistiveText}>
              <SvgIcon
                className={classNames(
                  'slds-icon slds-icon_small slds-icon-text-default',
                  props.iconClassName
                )}
                sprite="utility"
                symbol={props.symbol}
              />
              <span className="slds-assistive-text">{props.assistiveText}</span>
            </span>
          </div>
        )}
        <div className="slds-media__body">
          <h2 id={headingUniqueId} className="slds-popover_prompt__heading">
            Prompt title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Popover>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Prompt',
    id: 'prompt-default',
    label: 'Prompt – default',
    element: <Prompt symbol="prompt" />
  }
];

export let examples = [
  {
    context: 'Prompt',
    id: 'top-left',
    label: 'Positioned: top left',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="top-left" />
  },
  {
    context: 'Prompt',
    id: 'top-center',
    label: 'Positioned: top center',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="top" />
  },
  {
    context: 'Prompt',
    id: 'top-right',
    label: 'Positioned: top right',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="top-right" />
  },
  {
    context: 'Prompt',
    id: 'bottom-right',
    label: 'Positioned: bottom right',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="bottom-right" />
  },
  {
    context: 'Prompt',
    id: 'bottom-center',
    label: 'Positioned: bottom center',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="bottom" />
  },
  {
    context: 'Prompt',
    id: 'bottom-left',
    label: 'Positioned: bottom left',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: <Prompt symbol="prompt" showFooter position="bottom-left" />
  },
  {
    context: 'Prompt',
    id: 'brand-with-footer',
    label: 'Prompt: branded with footer',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: (
      <Prompt
        symbol="prompt"
        position="top"
        showFooter
        className="slds-popover_brand"
        iconClassName="slds-popover__icon"
      />
    )
  },
  {
    context: 'Prompt',
    id: 'brand-without-footer',
    label: 'Prompt: branded without footer',
    demoStyles: demoHeight,
    storybookStyles: true,
    element: (
      <Prompt
        symbol="prompt"
        position="top"
        className="slds-popover_brand slds-popover_brand-bottom"
        iconClassName="slds-popover__icon"
      />
    )
  }
];
