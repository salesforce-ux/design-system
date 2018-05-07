// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { StandardIcon } from '../icons/standard/example';
import classNames from 'classnames';

/**
 * Card Header
 */
export const CardHeader = props => {
  const { className, title, href, symbol, action } = props;

  return (
    <div className={classNames('slds-card__header slds-grid', className)}>
      <header className="slds-media slds-media_center slds-has-flexi-truncate">
        {symbol && (
          <div className="slds-media__figure">
            <StandardIcon
              className="slds-icon_small"
              symbol={symbol}
              assistiveText={symbol}
              title={symbol}
            />
          </div>
        )}
        <div className="slds-media__body">
          <h2 className="slds-card__header-title">
            {href ? (
              <a
                href={href}
                className="slds-card__header-link slds-truncate"
                title={title}
              >
                <span className="slds-text-heading_small">{title}</span>
              </a>
            ) : (
              <span className="slds-truncate" title={title}>
                <span className="slds-text-heading_small">{title}</span>
              </span>
            )}
          </h2>
        </div>
        {action && <div className="slds-no-flex">{action}</div>}
      </header>
    </div>
  );
};

/**
 * Card Body
 */
export const CardBody = props => {
  const { className, hasPadding } = props;

  return (
    <div
      className={classNames(
        'slds-card__body',
        hasPadding && 'slds-card__body_inner',
        className
      )}
    >
      {props.children}
    </div>
  );
};

/**
 * Card Footer
 */
export const CardFooter = props => {
  const { className, linkAssistiveText } = props;

  return (
    <footer className={classNames('slds-card__footer', className)}>
      {props.children && (
        <a className="slds-card__footer-action" href="javascript:void(0);">
          {props.children}
        </a>
      )}
    </footer>
  );
};

class Card extends Component {
  render() {
    const { className, children, hasCardBoundary } = this.props;

    return (
      <article
        className={classNames(
          'slds-card',
          hasCardBoundary && 'slds-card_boundary',
          className
        )}
      >
        {children}
      </article>
    );
  }
}

export default Card;
