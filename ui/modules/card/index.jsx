import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';

import '../common/index.scss';
import './base/index.scss';

export const CardHeader = props => {
  const { title, href, symbol, hasActions, actions } = props;

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
          <div className="sldswc-card__header-actions">{actions}</div>
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
  symbol: PropTypes.string,
  hasActions: PropTypes.bool,
  actions: PropTypes.node
};

export const CardBody = props => {
  const { children, hasPadding } = props;
  const computedClassNames = classNames(
    'sldswc-card__body',
    hasPadding && 'sldswc-card__body_inner'
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
  const { children, linkTabIndex } = props;

  return (
    <footer className="sldswc-card__footer">
      {children && (
        <a
          className="sldswc-card__footer-action"
          href="javascript:void(0);"
          tabIndex={linkTabIndex}
        >
          {children}
        </a>
      )}
    </footer>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node,
  linkTabIndex: PropTypes.number
};

class Card extends Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  renderHeader() {
    const { title, href, symbol, hasActions, actions } = this.props;
    if (!this.props.title) return;
    return (
      <CardHeader
        title={title}
        href={href}
        symbol={symbol}
        hasActions={hasActions}
        actions={actions}
        key={uniqueId('cardheader-')}
      />
    );
  }

  renderBody() {
    const { children, bodyHasPadding } = this.props;
    if (!this.props.children) return;

    return (
      <CardBody hasPadding={bodyHasPadding} key={uniqueId('cardbody-')}>
        {children}
      </CardBody>
    );
  }

  renderFooter() {
    const { footer, footerLinkTabIndex } = this.props;
    if (!this.props.footer) return;

    return (
      <CardFooter
        linkTabIndex={footerLinkTabIndex}
        key={uniqueId('cardfooter-')}
      >
        {footer}
      </CardFooter>
    );
  }

  render() {
    const { custom, children, hasCardBoundary } = this.props;
    const computedClassNames = classNames(
      'sldswc-card',
      hasCardBoundary && 'sldswc-card_boundary'
    );
    return (
      <article className={computedClassNames}>
        {!custom
          ? [this.renderHeader(), this.renderBody(), this.renderFooter()]
          : children}
      </article>
    );
  }
}

Card.propTypes = {
  custom: PropTypes.bool,
  title: PropTypes.string,
  href: PropTypes.string,
  symbol: PropTypes.string,
  hasActions: PropTypes.bool,
  actions: PropTypes.node,
  children: PropTypes.node,
  bodyHasPadding: PropTypes.bool,
  hasCardBoundary: PropTypes.bool,
  footer: PropTypes.node,
  footerLinkTabIndex: PropTypes.number
};

export default Card;
