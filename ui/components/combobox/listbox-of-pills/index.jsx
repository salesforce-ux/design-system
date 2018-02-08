// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';

class ListboxOfSelections extends Component {
  constructor() {
    super();
    this.renderSelections = this.renderSelections.bind(this);
  }

  renderSelections(key) {
    const selection = this.props.snapshot[key];
    return (
      <ListboxPillsItem key={key}>
        <ListboxPill label={selection.name} tabIndex={selection.tabIndex}>
          {selection.entityType && (
            <StandardIcon
              containerClassName="slds-pill__icon_container"
              title={selection.entityType}
              assistiveText={selection.entityType}
            />
          )}
        </ListboxPill>
      </ListboxPillsItem>
    );
  }

  render() {
    const { count = 1, isExpanded = false, snapshot } = this.props;
    return (
      <div
        className={classNames(
          'slds-listbox_selection-group',
          isExpanded && 'slds-is-expanded'
        )}
      >
        {count > 2 && isExpanded != true ? (
          <span className="slds-listbox-toggle" aria-hidden>
            <button className="slds-button" tabIndex="-1">
              +6 more
            </button>
          </span>
        ) : null}
        <ListboxPills>
          {Object.keys(snapshot)
            .slice(0, count)
            .map(this.renderSelections)}
        </ListboxPills>
      </div>
    );
  }
}

export default ListboxOfSelections;
