// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../buttons/base/example';
import SvgIcon from '../../shared/svg-icon';
import Heading from '../../shared/heading';

const Accordion = props => (
  <ul className="slds-accordion">
    {props.children}
  </ul>
);

Accordion.propTypes = {
  children: PropTypes.node
};

const AccordionSection = props => {
  // Sets default Accordion Section state based on isOpen prop
  const isAccordionSectionOpen = props.isOpen;
  const [isActive, isActiveState] = useState(isAccordionSectionOpen);

  // Toggle Accordion Section state via class on click
  const toggleAccordionSection = e => {
    e.stopPropagation();
    isActiveState(!isActive);
  };

  const isHidden = !isActive;

  const renderActionMenu = () => {
    return React.cloneElement(props.actionMenu);
  }

  return (
    <li className="slds-accordion__list-item">
      <section
        className={classNames(
          'slds-accordion__section',
          isActive && 'slds-is-open'
        )}
      >
        <div className="slds-accordion__summary">
          <Heading level="2" className="slds-accordion__summary-heading">
            <Button
              aria-controls={props.referenceId}
              aria-expanded={isActive}
              title={props.summary}
              isReset
              className="slds-accordion__summary-action"
              onClick={toggleAccordionSection}
            >
              <SvgIcon
                className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                sprite="utility"
                symbol="switch"
              />

              <span className="slds-accordion__summary-content">
                {props.summary}
              </span>
            </Button>
          </Heading>

          {props.actionMenu && renderActionMenu()}
        </div>
        <div
          hidden={isHidden}
          className="slds-accordion__content"
          id={props.referenceId}
        >
          {props.children}
        </div>
      </section>
    </li>
  )
};

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  referenceId: PropTypes.string,
  summary: PropTypes.string,
  // TODO: create custom PropTypes check for specific component(s)
  actionMenu: PropTypes.node,
  children: PropTypes.node
};

AccordionSection.defaultProps = {
  isOpen: false
};

export { AccordionSection };
export default Accordion;
