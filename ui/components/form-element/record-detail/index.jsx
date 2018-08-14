// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import ButtonIcon from '../../button-icons/';
import { FormElement, FormElementStatic } from '../';
import { Avatar } from '../../avatar/base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const RecordDetailRow = props => (
  <div className="slds-grid slds-gutters_small">{props.children}</div>
);

const RecordDetailItem = props => (
  <div
    className={classNames('slds-col', 'slds-has-flexi-truncate', 'slds-grid')}
    role="listitem"
  >
    {props.children}
  </div>
);

const RecordDetailField = props => {
  const {
    isRequired,
    hasTooltip,
    type,
    label,
    value,
    avatar,
    link,
    timestamp,
    hasInlineEdit
  } = props;

  return (
    <FormElement
      isViewMode
      labelContent={label}
      isEditable={hasInlineEdit}
      hasHint
      isRequired={isRequired}
      hasTooltip={hasTooltip}
      isStacked={type === 'textarea'}
    >
      <FormElementStatic isLongform={type === 'textarea'}>
        {avatar && (
          <Avatar className="slds-avatar_x-small slds-avatar_circle slds-m-right_xx-small">
            <img alt={value} src={avatar} title={value} />
          </Avatar>
        )}
        {link ? (
          <a href="javascript:void(0);">
            {typeof value === 'object'
              ? value.map(option => (
                  <React.Fragment key={option}>
                    {option}
                    <br />
                  </React.Fragment>
                ))
              : value}
          </a>
        ) : typeof value === 'object' ? (
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

class RecordDetail extends Component {
  render() {
    const {
      className,
      snapshot,
      isViewMode,
      direction,
      hasInlineEdit
    } = this.props;

    return (
      <div
        className={classNames('slds-form', `slds-form_${direction}`, className)}
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

export default RecordDetail;
