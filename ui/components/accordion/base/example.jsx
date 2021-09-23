// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import uniqueId from 'lodash.uniqueid';
import Accordion, { AccordionSection } from '../';
import { ActionOverflow } from '../../../components/menus/action-overflow/example';
import Card from '../../cards/';

export const AccordionExample = () => (
  <Accordion>
    <AccordionSection
      summary="Accordion summary"
      isOpen
      referenceId={uniqueId('referenceId-')}
    >
      Accordion details - A
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      referenceId={uniqueId('referenceId-')}
    >
      Accordion details - B
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      referenceId={uniqueId('referenceId-')}
    >
      Accordion details - C
    </AccordionSection>
  </Accordion>
);

export default <AccordionExample />;

export let states = [
  {
    id: 'section-one-open',
    label: 'Section one open',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
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
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
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
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
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
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  }
];

export let examples = [
  {
    id: 'long-heading-truncated',
    label: 'Long Section Heading with Truncation for larger screens',
    demoStyles: 'max-width: 500px;',
    storybookStyles: true,
    element: (
      <Card>
        <Accordion>
          <AccordionSection
            summary="Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary"
            isOpen
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - A
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - B
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - C
          </AccordionSection>
        </Accordion>
      </Card>
    )
  },
  {
    id: 'nested-accordions',
    label: 'Nested Accordions',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          <Accordion>
            <AccordionSection
              summary="Nested accordion summary"
              isOpen
              referenceId={uniqueId('referenceId-')}
            >
              Accordion details - A
            </AccordionSection>
            <AccordionSection
              summary="Nested accordion summary"
              referenceId={uniqueId('referenceId-')}
            >
              Accordion details - B
            </AccordionSection>
          </Accordion>
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'styled',
    label: 'Wrapped in Card',
    element: (
      <div className="slds-card">
        <Accordion>
          <AccordionSection
            summary="Accordion summary"
            isOpen
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - A
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - B
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            referenceId={uniqueId('referenceId-')}
          >
            Accordion details - C
          </AccordionSection>
        </Accordion>
      </div>
    )
  },
  {
    id: 'has-action-overflow',
    label: 'Has Action Overflow Menu',
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          actionMenu={
            <ActionOverflow position="right" dropdownIsOpen={false} />
          }
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          actionMenu={
            <ActionOverflow position="right" dropdownIsOpen={false} />
          }
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          actionMenu={
            <ActionOverflow position="right" dropdownIsOpen={false} />
          }
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'section-background-color',
    label: 'Accordion Section - Background Color',
    demoStyles: '--slds-c-accordion-summary-color-background: lightblue',
    storybookStyles: true,
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  },
  {
    id: 'section-background-color',
    label: 'Accordion Section - Text Color',
    demoStyles:
      '--slds-c-accordion-heading-text-color: green; --slds-c-accordion-heading-text-color-hover: red',
    storybookStyles: true,
    element: (
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId={uniqueId('referenceId-')}
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    )
  }
];
