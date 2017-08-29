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

    return (
      <div className="slds-vertical-tabs">
        <ul
          className="slds-vertical-tabs__nav"
          role="tablist"
          aria-orientation="vertical"
        >
          {this.props.tabs.map((tab, index) => {
            const isActive = index === currentTabIndex ? 'slds-is-active' : '';
            const tabIndex = index === currentTabIndex ? 0 : -1;
            const isAriaSelected = index === currentTabIndex ? 'true' : 'false';
            const ariaControlId = `slds-vertical-tabs-${index}`;
            const tabNavId = `slds-vertical-tabs-${index}__nav`;

            return (
              <li
                className={classNames('slds-vertical-tabs__nav-item', isActive)}
                title={tab.label}
                role="presentation"
                key={tabNavId}
              >
                <a
                  className="slds-vertical-tabs__link"
                  href="javascript:void(0)"
                  role="tab"
                  tabIndex={tabIndex}
                  aria-selected={isAriaSelected}
                  aria-controls={ariaControlId}
                  id={tabNavId}
                  onClick={this.handleTabClick}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>

        {this.props.tabs.map((tab, index) => {
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
              {this.props.tabs[currentTabIndex].content}
            </div>
          );
        })}
      </div>
    );
  }
}

let exampleTabs = [
  {
    label: 'Tab 1',
    content: (
      <div className="slds-text-longform">
        <h3 className="slds-text-heading_medium">Tab Title</h3>
        <p>Content for Tab 1</p>
        <p>Lorem ipsum dolor...</p>
        <p>Lorem ipsum dolor...</p>
      </div>
    )
  },
  {
    label: 'Tab 2',
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 2</p>
      </div>
    )
  },
  {
    label: 'Tab 3 has a really long label and can wrap or truncate',
    content: (
      <div className="slds-text-longform">
        <p>Content for Tab 3</p>
      </div>
    )
  }
];

export default <VerticalTabs tabs={exampleTabs} />;
