// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { Button } from '../../buttons/base/example';

export let Tooltip = props => (
  <div
    className={classNames('slds-popover slds-popover_tooltip', props.className)}
    role="tooltip"
    id={props.id}
    style={props.style}
  >
    <div className="slds-popover__body">
      {props.children}
      {props.hasLearnMore && (
        <div className="slds-m-top_x-small" aria-hidden="true">
          Click{' '}
          <UtilityIcon
            className="slds-icon slds-icon_xx-small"
            symbol="info"
            assistiveText="Help"
            title="Help"
          />{' '}
          to learn more.
        </div>
      )}
    </div>
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasLearnMore: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object
};

export default (
  <div
    style={{ paddingLeft: '2rem', paddingTop: '5rem', position: 'relative' }}
  >
    <a href="javascript:void(0)" aria-describedby="help">
      Help Text
    </a>
    <Tooltip
      className="slds-nubbin_bottom-left"
      id="help"
      style={{ position: 'absolute', top: '-4px', left: '35px' }}
    >
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    </Tooltip>
  </div>
);

export let examples = [
  {
    id: 'link',
    label: 'As an icon link',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '6.75rem',
          position: 'relative'
        }}
      >
        <a href="javascript:void(0)" aria-describedby="help">
          <UtilityIcon
            className="slds-icon slds-icon_xx-small slds-icon-text-default"
            symbol="info"
            assistiveText="Click here to learn more"
            title={false}
          />
        </a>
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          hasLearnMore
          style={{ position: 'absolute', top: '-4px', left: '15px' }}
        >
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </Tooltip>
      </div>
    )
  },
  {
    id: 'button-icon',
    label: 'As a Button Icon',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <ButtonIcon
          className="slds-button slds-button_icon"
          symbol="info"
          aria-describedby="help"
          assistiveText="Help"
          title="Help"
        />
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '15px' }}
        >
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </Tooltip>
      </div>
    )
  },
  {
    id: 'button',
    label: 'As a Button',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button isNeutral aria-describedby="help">
          Button
        </Button>
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '45px' }}
        >
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </Tooltip>
      </div>
    )
  }
];
