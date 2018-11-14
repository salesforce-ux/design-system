import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonIcon from '../button-icons/';
import { Trigger } from '../menus/dropdown/example';
import MediaObject from '../../utilities/media-objects/index.react';
import { StandardIcon } from '../icons/standard/example';

const EntityIcon = props => (
  <StandardIcon
    symbol={props.type}
    className="slds-page-header__icon"
    assistiveText={props.assistiveText}
    title={props.title}
  />
);
EntityIcon.propTypes = {
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  type: PropTypes.string.isRequired
};

export const PageHeader = props => (
  <div
    className={classNames('slds-page-header', {
      'slds-page-header_vertical': props.isVertical,
      'slds-page-header_related-list': props.isRelatedList,
      'slds-page-header_record-home': props.isRecordHome
    })}
  >
    {props.children}
  </div>
);
PageHeader.propTypes = {
  children: PropTypes.node,
  isRelatedList: PropTypes.bool,
  isVertical: PropTypes.bool,
  isRecordHome: PropTypes.bool
};

export const PageHeaderRow = props => (
  <div
    className={classNames('slds-page-header__row', {
      'slds-page-header__row_gutters': props.hasGutters
    })}
  >
    {props.children}
  </div>
);
PageHeaderRow.propTypes = {
  children: PropTypes.node,
  hasGutters: PropTypes.bool
};

export const PageHeaderColumn = props => (
  <div
    className={classNames({
      'slds-page-header__col-actions': props.type === 'actions',
      'slds-page-header__col-controls': props.type === 'controls',
      'slds-page-header__col-details': props.type === 'details',
      'slds-page-header__col-meta': props.type === 'meta',
      'slds-page-header__col-title': props.type === 'title'
    })}
  >
    {props.children}
  </div>
);
PageHeaderColumn.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export const PageHeaderTitle = props => (
  <MediaObject
    figureLeft={
      props.symbol && (
        <EntityIcon
          assistiveText={!props.objectName ? props.symbol : false}
          title={!props.objectName ? props.symbol : false}
          type={props.symbol}
        />
      )
    }
  >
    <div className="slds-page-header__name">
      <div className="slds-page-header__name-title">
        <h1>
          {props.objectName && !props.metaText ? (
            <span>{props.objectName}</span>
          ) : null}
          <span
            className={classNames(
              'slds-page-header__title',
              !props.isVertical && 'slds-truncate',
              props.isVertical && 'slds-hyphenate'
            )}
            title={props.titleText}
          >
            {props.titleText}
          </span>
        </h1>
      </div>
      {props.hasSwitcher && (
        <div className="slds-page-header__name-switcher">
          <Trigger
            triggerIcon={
              <ButtonIcon
                aria-haspopup="true"
                assistiveText="Switch list view"
                className="slds-button_icon-small"
                iconClassName="slds-icon_x-small"
                symbol="down"
                title="Switch list view"
              />
            }
          />
        </div>
      )}
    </div>
    {props.metaText && (
      <p className="slds-page-header__name-meta">{props.metaText}</p>
    )}
  </MediaObject>
);
PageHeaderTitle.propTypes = {
  symbol: PropTypes.string,
  objectName: PropTypes.string,
  hasSwitcher: PropTypes.bool,
  metaText: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  isVertical: PropTypes.bool
};

export const PageHeaderMetaText = props => (
  <p className="slds-page-header__meta-text">{props.children}</p>
);
PageHeaderMetaText.propTypes = {
  children: PropTypes.node
};

export const PageHeaderControls = props => (
  <div className="slds-page-header__controls">{props.children}</div>
);
PageHeaderControls.propTypes = {
  children: PropTypes.node
};

export const PageHeaderControl = props => (
  <div className="slds-page-header__control">{props.children}</div>
);
PageHeaderControl.propTypes = {
  children: PropTypes.node
};

export const PageHeaderDetailRow = props => (
  <ul className="slds-page-header__detail-row">{props.children}</ul>
);
PageHeaderDetailRow.propTypes = {
  children: PropTypes.node
};

export const PageHeaderDetailList = props => (
  <ul className="slds-page-header__detail-list">{props.children}</ul>
);
PageHeaderDetailList.propTypes = {
  children: PropTypes.node
};

export const PageHeaderDetailItem = props => (
  <li className="slds-page-header__detail-block">{props.children}</li>
);
PageHeaderDetailItem.propTypes = {
  children: PropTypes.node
};

export const PageHeaderDetailListItem = props => (
  <li className="slds-page-header__detail-item">{props.children}</li>
);
PageHeaderDetailListItem.propTypes = {
  children: PropTypes.node
};

export const PageHeaderDetailTitle = props => (
  <div
    className={classNames(
      'slds-text-title',
      !props.isVertical && 'slds-truncate'
    )}
    title={props.title}
  >
    {props.children}
  </div>
);
PageHeaderDetailTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isVertical: PropTypes.bool
};

export const PageHeaderDetailBody = props => (
  <div
    className={!props.isVertical ? 'slds-truncate' : null}
    title={props.title}
  >
    {props.children}
  </div>
);
PageHeaderDetailBody.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isVertical: PropTypes.bool
};
