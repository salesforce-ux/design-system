// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import ButtonIcon from '../../button-icons/';
import { Avatar } from '../../avatar/base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const RecordDetailRow = props => (
  <div className="slds-grid slds-gutters_small">{props.children}</div>
);

const RecordDetailItem = props => (
  <div className="slds-col slds-has-flexi-truncate slds-grid" role="listitem">
    {props.children}
  </div>
);

const RecordDetailField = props => {
  const { type, label, value, avatar, link, timestamp } = props;

  return (
    <div
      className={classNames(
        'slds-form-element slds-form-element_readonly slds-form-element_edit slds-hint-parent',
        type === 'textarea' && 'slds-form-element_stacked'
      )}
    >
      <span className="slds-form-element__label">{label}</span>
      <div className="slds-form-element__control">
        <div
          className={classNames(
            'slds-form-element__static',
            type === 'textarea' && 'slds-text-longform'
          )}
        >
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
        </div>
        <ButtonIcon
          iconClassName="slds-button__icon_hint"
          symbol="edit"
          assistiveText={`Edit: ${label}`}
          title={`Edit: ${label}`}
        />
      </div>
    </div>
  );
};

class RecordDetail extends Component {
  render() {
    const { className, snapshot, isViewMode, direction } = this.props;

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
                        avatar={row.fields[field].avatar}
                        link={row.fields[field].link}
                        timestamp={row.fields[field].timestamp}
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
