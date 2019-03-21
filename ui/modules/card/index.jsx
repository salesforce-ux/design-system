// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import card from './base/index.scss';

export const CardHeader = props => {
  const { title, href, hasActions, actions } = props;

  return (
    <div className="sldswc-card__header">
      <header>
        <h2 className="sldswc-card__header-title">
          {href ? (
            <a href={href} className="sldswc-card__header-link" title={title}>
              <span>{title}</span>
            </a>
          ) : (
            <span title={title}>{title}</span>
          )}
        </h2>
        {hasActions && (
          <div className="sldswc-card__header-actions">
            <slot name="actions">{actions}</slot>
          </div>
        )}
      </header>
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
  const { children, hasFullBleed } = props;
  const computedClassNames = classNames(
    'sldswc-card__body',
    hasFullBleed && 'sldswc-card__body_full-bleed'
  );

  return <div className={computedClassNames}>{children}</div>;
};

CardBody.propTypes = {
  children: PropTypes.node,
  hasFullBleed: PropTypes.bool
};

export const CardFooter = props => {
  const { children } = props;

  return <footer className="sldswc-card__footer">{children}</footer>;
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
    const { title, titleHref, iconName, actions, hasActions } = this.props;
    if (!this.props.title) return;

    return (
      <CardHeader
        title={title}
        href={titleHref}
        iconName={iconName}
        hasActions={hasActions}
        actions={actions}
        key={uniqueId('card-header-')}
      />
    );
  }

  renderBody() {
    const { children, hasFullBleed } = this.props;
    if (!this.props.children) return;

    return (
      <CardBody hasFullBleed={hasFullBleed} key={uniqueId('card-body-')}>
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
    const { custom, children, hasBoundary, isBare } = this.props;
    const computedClassNames = classNames(
      'sldswc-card',
      hasBoundary && 'sldswc-card_boundary',
      isBare && 'sldswc-card_bare'
    );

    console.log('common:', common);
    console.log('card:', card);

    return (
      <Shadow name="card" includes={[common, card]} shadow={this.props.shadow}>
        <article className={computedClassNames}>
          {!custom
            ? [this.renderHeader(), this.renderBody(), this.renderFooter()]
            : children}
        </article>
      </Shadow>
    );
  }
}

Card.defaultProps = {
  footer: (
    <a className="sldswc-card__footer-action" href="javascript:void(0);">
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
  hasFullBleed: PropTypes.bool,
  hasBoundary: PropTypes.bool,
  isBare: PropTypes.bool,
  shadow: PropTypes.bool
};

export default Card;
