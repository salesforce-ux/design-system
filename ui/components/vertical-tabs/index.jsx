// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex: 0
    };
  }

  render() {
    const { currentTabIndex } = this.state;
    const { itemFocused, tabs } = this.props;

    return (
      <div className="slds-vertical-tabs">
        <ul
          className="slds-vertical-tabs__nav"
          role="tablist"
          aria-orientation="vertical"
        >
          {tabs.map((tab, index) => {
            const isActive =
              index === currentTabIndex && !itemFocused ? 'slds-is-active' : '';
            const hasFocus =
              index === currentTabIndex && itemFocused ? 'slds-has-focus' : '';
            const tabIndex = index === currentTabIndex ? 0 : -1;
            const isAriaSelected = index === currentTabIndex ? 'true' : 'false';
            const ariaControlId = `slds-vertical-tabs-${index}`;
            const tabNavId = `slds-vertical-tabs-${index}__nav`;

            return (
              <li
                className={classNames(
                  'slds-vertical-tabs__nav-item',
                  isActive,
                  hasFocus
                )}
                title={tab.label}
                role="presentation"
                key={tabNavId}
              >
                <a
                  className="slds-vertical-tabs__link"
                  href="#"
                  role="tab"
                  tabIndex={tabIndex}
                  aria-selected={isAriaSelected}
                  aria-controls={ariaControlId}
                  id={tabNavId}
                  onClick={e => e.preventDefault()}
                >
                  <span className="slds-vertical-tabs__left-icon">
                    {tab.leftIcon}
                  </span>
                  <span className="slds-truncate" title={tab.label}>
                    {tab.label}
                  </span>
                  <span className="slds-vertical-tabs__right-icon">
                    {tab.rightIcon}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {tabs.map((tab, index) => {
          const tabContentId = `slds-vertical-tabs-${index}`;
          const showHideClass =
            index === currentTabIndex ? 'slds-show' : 'slds-hide';
          const ariaLabelledBy = `slds-vertical-tabs-${index}__nav`;

          return (
            <div
              className={classNames(
                'slds-vertical-tabs__content',
                showHideClass
              )}
              id={tabContentId}
              role="tabpanel"
              aria-labelledby={ariaLabelledBy}
              key={tabContentId}
            >
              {tabs[currentTabIndex].content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default VerticalTabs;
