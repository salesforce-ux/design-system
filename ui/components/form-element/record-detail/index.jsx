// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../button-icons/';
import { FormElement, FormElementStatic } from '../';
import { Avatar } from '../../avatar/base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

export const RecordDetailRow = props => (
  <div className="slds-form__row">{props.children}</div>
);

RecordDetailRow.propTypes = {
  children: PropTypes.node
};

export const RecordDetailItem = props => (
  <div className="slds-form__item" role="listitem">
    {props.children}
  </div>
);

RecordDetailItem.propTypes = {
  children: PropTypes.node
};

export const RecordDetailField = props => {
  const {
    isRequired,
    hasTooltip,
    type,
    label,
    value,
    avatar,
    link,
    timestamp,
    hasInlineEdit,
    isHorizontal,
    isStacked,
    column
  } = props;

  return (
    <FormElement
      isViewMode
      labelContent={label}
      isEditable={hasInlineEdit}
      hasHint
      isRequired={isRequired}
      hasTooltip={hasTooltip}
      isHorizontal={isHorizontal}
      isStacked={isStacked}
      column={column}
    >
      <FormElementStatic isLongform={type === 'textarea'}>
        {avatar && (
          <Avatar className="slds-avatar_x-small slds-avatar_circle slds-m-right_xx-small">
            <img alt={value} src={avatar} title={value} />
          </Avatar>
        )}
        {link ? (
          <a href="#" onClick={e => e.preventDefault()}>
            {typeof value === 'object'
              ? value.map(option => (
                  <React.Fragment key={option}>
                    {option}
                    <br />
                  </React.Fragment>
                ))
              : value}
          </a>
        ) : typeof value === 'object' &&
          type !== 'richtext' &&
          type !== 'checkbox' ? (
          value.map(option => (
            <React.Fragment key={option}>
              {option}
              <br />
            </React.Fragment>
          ))
        ) : (
          value
        )}
        {timestamp && <React.Fragment>, {timestamp}</React.Fragment>}
      </FormElementStatic>
      {hasInlineEdit && (
        <ButtonIcon
          iconClassName="slds-button__icon_hint"
          symbol="edit"
          assistiveText={`Edit: ${label}`}
          title={`Edit: ${label}`}
        />
      )}
    </FormElement>
  );
};

RecordDetailField.propTypes = {
  isRequired: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  avatar: PropTypes.string,
  link: PropTypes.bool,
  timestamp: PropTypes.string,
  hasInlineEdit: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isStacked: PropTypes.bool,
  column: PropTypes.number
};

class RecordDetail extends Component {
  render() {
    const {
      snapshot,
      isViewMode,
      direction,
      hasInlineEdit,
      isDeprecated
    } = this.props;
    return (
      <div
        className={classNames(
          'slds-form',
          isDeprecated && `slds-form_${direction}`
        )}
        role="list"
      >
        {isViewMode
          ? snapshot.rows.map(row => (
              <RecordDetailRow key={_.uniqueId(row.fields.length)}>
                {Object.keys(row.fields).map(field => (
                  <RecordDetailItem key={row.fields[field].label}>
                    {row.fields[field].type && (
                      <RecordDetailField
                        type={row.fields[field].type}
                        label={row.fields[field].label}
                        value={row.fields[field].value}
                        isRequired={row.fields[field].isRequired}
                        hasTooltip={row.fields[field].hasTooltip}
                        avatar={row.fields[field].avatar}
                        link={row.fields[field].link}
                        timestamp={row.fields[field].timestamp}
                        hasInlineEdit={hasInlineEdit}
                        isHorizontal={
                          !isDeprecated && direction === 'horizontal'
                        }
                        isStacked={!isDeprecated && direction === 'stacked'}
                        column={row.fields[field].column}
                      />
                    )}
                  </RecordDetailItem>
                ))}
              </RecordDetailRow>
            ))
          : snapshot.rows.map((row, i) => (
              <RecordDetailRow key={_.uniqueId(`detail-row-${i}-`)}>
                {Object.keys(row.fields).map(field => (
                  <RecordDetailItem key={row.fields[field].label}>
                    {row.fields[field].component && row.fields[field].component}
                  </RecordDetailItem>
                ))}
              </RecordDetailRow>
            ))}
      </div>
    );
  }
}

RecordDetail.propTypes = {
  snapshot: PropTypes.object,
  isViewMode: PropTypes.bool,
  direction: PropTypes.string,
  hasInlineEdit: PropTypes.bool,
  isDeprecated: PropTypes.bool
};

export default RecordDetail;
