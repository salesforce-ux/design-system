// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../buttons/base/example';
import { UtilityIcon } from '../../icons/base/example';
import { Spinner } from '../../spinners/base/example';
import listboxData from './listbox-data.json';

const MobileLookupsListbox = props => {
  let data;

  if (props.listItemState === 'selected') {
    data = listboxData.selected;
  } else if (props.listItemState === 'typing') {
    data = listboxData.typing;
  } else {
    data = listboxData.default;
  }

  return (
    <div
      id={props.listboxId}
      className="slds-mobile-lookup__listbox_container"
      role="listbox"
      aria-labelledby={props.listboxlabelledBy}
    >
      {props.listItemState === 'typing' && (
        <Button isStretch className="slds-mobile-lookup__listbox_trigger">
          Show All Results
          <UtilityIcon
            className="slds-icon_x-small slds-icon-text-default"
            symbol="search"
            assistiveText="Search for term: "
            title="Search for term: "
          />
        </Button>
      )}
      <ul className="slds-mobile-lookup__listbox" role="presentation">
        <li role="presentation">
          <div className="slds-mobile-lookup__listbox-option slds-mobile-lookup__listbox-option_heading">
            <span>{props.headingText}</span>
          </div>
        </li>
        {data.map((person, index) => (
          <li role="presentation" key={index}>
            <div
              id={`option${index}`}
              className="slds-mobile-lookup__listbox-option"
              role="option"
            >
              <span className="slds-mobile-lookup__listbox_text_container">
                <span className="slds-mobile-lookup__listbox_text">
                  {props.listItemState === 'default' && `${person.name}`}
                  {props.listItemState !== 'default' && (
                    <Fragment>
                      <mark>{person.mark}</mark>
                      {person.name}
                    </Fragment>
                  )}
                </span>
                <span className="slds-mobile-lookup__listbox_meta">
                  {person.title}
                </span>
              </span>
              {person.selected && (
                <span className="slds-mobile-lookup__listbox_icon_container">
                  <UtilityIcon
                    assistiveText={false}
                    className="slds-icon_x-small"
                    containerClassName="slds-current-color"
                    symbol="check"
                    title={false}
                  />
                </span>
              )}
            </div>
          </li>
        ))}
        {props.isLoading && (
          <li
            role="presentation"
            className="slds-mobile-lookup__listbox_loader"
          >
            <Spinner className="slds-spinner_x-small" />
          </li>
        )}
      </ul>
    </div>
  );
};

MobileLookupsListbox.propTypes = {
  headingText: PropTypes.string,
  listItemState: PropTypes.oneOf(['default', 'selected', 'typing']),
  listboxId: PropTypes.string,
  listboxlabelledBy: PropTypes.string,
  isLoading: PropTypes.bool
};

MobileLookupsListbox.defaultProps = {
  headingText: 'Recent Items',
  listItemState: 'default',
  listboxId: 'listbox-id-1'
};

export default MobileLookupsListbox;
