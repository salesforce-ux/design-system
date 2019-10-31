// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Icon from '../icon';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import card from './base/index.scss';

export const CardHeader = props => {
  const {
    title,
    href,
    hasActions,
    actions,
    children,
    showSource,
    hideSourceOf
  } = props;

  return (
    <div className="lwc-card__header">
      {!children ? (
        <header>
          <div className="lwc-card__header-figure">
            <Icon
              sprite="standard"
              symbol="account"
              showSource={showSource}
              hideSourceOf={hideSourceOf}
            />
          </div>
          <h2 className="lwc-card__header-title">
            {href ? (
              <a href={href} className="lwc-card__header-link" title={title}>
                <span>{title}</span>
              </a>
            ) : (
              <span title={title}>{title}</span>
            )}
          </h2>
          {hasActions && (
            <div className="lwc-card__header-actions">
              <slot name="actions">{actions}</slot>
            </div>
          )}
        </header>
      ) : (
        children
      )}
    </div>
  );
};

CardHeader.defaultProps = {
  title: 'Card Title'
};

CardHeader.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  actions: PropTypes.node,
  hasActions: PropTypes.bool
};

export const CardBody = props => {
  const { children, hasPadding } = props;
  const computedClassNames = classNames(
    'lwc-card__body',
    hasPadding && 'lwc-card__body_padded'
  );

  return <div className={computedClassNames}>{children}</div>;
};

CardBody.defaultProps = {
  hasPadding: true
};

CardBody.propTypes = {
  children: PropTypes.node,
  hasPadding: PropTypes.bool
};

export const CardFooter = props => {
  const { children } = props;

  return <footer className="lwc-card__footer">{children}</footer>;
};

CardFooter.propTypes = {
  children: PropTypes.node
};

class Card extends Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  renderHeader() {
    const {
      title,
      titleHref,
      iconName,
      actions,
      hasActions,
      showSource,
      hideSourceOf
    } = this.props;
    if (!this.props.title) return;

    return (
      <CardHeader
        title={title}
        href={titleHref}
        iconName={iconName}
        hasActions={hasActions}
        actions={actions}
        key={uniqueId('card-header-')}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      />
    );
  }

  renderBody() {
    const { children, hasPadding } = this.props;
    if (!this.props.children) return;

    return (
      <CardBody hasPadding={hasPadding} key={uniqueId('card-body-')}>
        {children}
      </CardBody>
    );
  }

  renderFooter() {
    const { footer } = this.props;
    if (!this.props.footer) return;

    return (
      <CardFooter key={uniqueId('card-footer-')}>
        <slot name="footer">{footer}</slot>
      </CardFooter>
    );
  }

  render() {
    const {
      custom,
      children,
      hasBoundary,
      isBare,
      shadow,
      showSource,
      hideSourceOf,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([common, card, customization]);

    const computedClassNames = classNames(
      'lwc-card',
      hasBoundary && 'lwc-card_boundary',
      isBare && 'lwc-card_bare'
    );

    return (
      <Shadow.on
        name="card"
        includes={css}
        shadow={shadow}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        <article className={computedClassNames}>
          {!custom
            ? [this.renderHeader(), this.renderBody(), this.renderFooter()]
            : children}
        </article>
      </Shadow.on>
    );
  }
}

Card.defaultProps = {
  footer: (
    <a className="lwc-card__footer-action" href="javascript:void(0);">
      View All
    </a>
  )
};

Card.propTypes = {
  custom: PropTypes.bool,
  // Slots
  actions: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
  // Properties
  title: PropTypes.string,
  titleHref: PropTypes.string,
  iconName: PropTypes.string,
  hasActions: PropTypes.bool,
  hasPadding: PropTypes.bool,
  hasBoundary: PropTypes.bool,
  isBare: PropTypes.bool,
  // Shadow
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

export default Card;
