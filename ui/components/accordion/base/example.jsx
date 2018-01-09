// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionTitleAction
} from '../../expandable-section/base/example';

const referenceId01 = 'accordion-details-01';
const referenceId02 = 'accordion-details-02';
const referenceId03 = 'accordion-details-03';
const referenceId04 = 'accordion-details-04';
const referenceId05 = 'accordion-details-05';

export let Accordion = props => (
  <ul className={classNames('slds-accordion', props.className)}>
    {props.children}
  </ul>
);

export let AccordionSection = props => (
  <li className="slds-accordion__list-item">
    <section
      className={classNames(
        'slds-accordion__section',
        props.isOpen ? 'slds-is-open' : null
      )}
    >
      <div className={classNames('slds-accordion__summary', props.className)}>
        <h3
          className={classNames(
            'slds-text-heading_small slds-accordion__summary-heading',
            props.className
          )}
        >
          <button
            aria-controls={props.referenceId}
            aria-expanded={props.isOpen}
            className="slds-button slds-button_reset slds-accordion__summary-action"
          >
            <SvgIcon
              className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
              sprite="utility"
              symbol="switch"
            />
            <span className="slds-truncate" title={props.summary}>
              {props.summary}
            </span>
          </button>
        </h3>
        <button
          className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none"
          aria-haspopup="true"
        >
          <SvgIcon
            className="slds-button__icon"
            sprite="utility"
            symbol="down"
          />
          <span className="slds-assistive-text">More Options</span>
        </button>
      </div>
      <div
        aria-hidden={!props.isOpen}
        className={classNames('slds-accordion__content', props.className)}
        id={props.referenceId}
      >
        {props.children}
      </div>
    </section>
  </li>
);

export default (
  <Accordion>
    <AccordionSection
      summary="Accordion summary"
      isOpen
      referenceId={referenceId01}
    >
      Accordion details - A
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      isOpen={false}
      referenceId={referenceId02}
    >
      Accordion details - B
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      isOpen={false}
      referenceId={referenceId03}
    >
      Accordion details - C
    </AccordionSection>
  </Accordion>
);

export let states = [
  {
    id: 'section-one-open',
    label: 'Section one open',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId01}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId02}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId03}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'section-two-open',
    label: 'Section two open',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId01}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId02}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId03}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'section-three-open',
    label: 'Section three open',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId01}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId02}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId03}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'multiple-sections-open',
    label: 'Multiple sections open',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId01}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId02}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId03}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'styled',
    label: 'Styled',
    element: (
      <div className="slds-card">
        <Accordion>
          <AccordionSection
            summary="Accordion summary"
            isOpen
            referenceId={referenceId01}
          >
            Accordion details - A
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            isOpen={false}
            referenceId={referenceId02}
          >
            Accordion details - B
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            isOpen={false}
            referenceId={referenceId03}
          >
            Accordion details - C
          </AccordionSection>
        </Accordion>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'nested-accordions',
    label: 'Nested Accordions',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={referenceId01}
        >
          <Accordion>
            <AccordionSection
              summary="Nested accordion summary"
              isOpen
              referenceId={referenceId04}
            >
              Accordion details - A
            </AccordionSection>
            <AccordionSection
              summary="Nested accordion summary"
              isOpen={false}
              referenceId={referenceId05}
            >
              Accordion details - B
            </AccordionSection>
          </Accordion>
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId02}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={false}
          referenceId={referenceId03}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  }
];
