// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { ButtonGroup } from '../../button-groups/base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const HeaderAction = props => (
  <div className="slds-einstein-header__actions">
    <ButtonGroup>
      <ButtonIcon
        className="slds-button_icon-border-filled"
        symbol="email"
        assistiveText="Email"
        title="Email"
        aria-pressed="false"
      />
      <ButtonIcon
        className="slds-button_icon-border-filled"
        symbol="edit"
        assistiveText="Edit"
        title="Edit"
        aria-pressed="false"
      />
    </ButtonGroup>
  </div>
);

export const EinsteinHeader = props => (
  <div
    className={classNames('slds-grid slds-einstein-header', props.className)}
  >
    {props.closeButton ? (
      <ButtonIcon
        className={classNames(
          'slds-button_icon-small slds-float_right slds-popover__close',
          props.inverse ? 'slds-button_icon-inverse' : 'slds-button_icon'
        )}
        symbol="close"
        assistiveText="Close dialog"
        title="Close dialog"
      />
    ) : null}
    <header
      className={classNames(
        'slds-media slds-media_center slds-has-flexi-truncate'
      )}
    >
      <div className="slds-grid slds-grid_vertical-align-center slds-size_3-of-4 slds-medium-size_2-of-3">
        {props.symbol ? (
          <div className="slds-media__figure">
            <span
              className={
                'slds-icon_container slds-icon-utility-' + props.symbol
              }
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol={props.symbol}
              />
            </span>
          </div>
        ) : null}
        <div className="slds-media__body">
          <h2
            className="slds-truncate"
            id={props.headingId}
            title={props.headerTitle || 'Einstein'}
          >
            {props.hasLink ? (
              <a
                href="javascript:void(0);"
                className="slds-card__header-link"
                title={props.headerTitle || 'Einstein'}
              >
                <span className="slds-text-heading_small">
                  {props.headerTitle || 'Einstein'}
                </span>
              </a>
            ) : (
              <span className="slds-text-heading_small">
                {props.headerTitle || 'Einstein'}
              </span>
            )}
          </h2>
        </div>
      </div>
      <div className="slds-einstein-header__figure slds-size_1-of-4 slds-medium-size_1-of-3" />
    </header>
    {props.actions && <HeaderAction />}
  </div>
);
