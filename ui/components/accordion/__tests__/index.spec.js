/* eslint-env jest */
import React from 'react';
import { Accordion, AccordionSection } from '../base/example';
import createHelpers from '../../../../jest.helpers';

const referenceId01 = 'accordion-details-01';
const referenceId02 = 'accordion-details-02';
const referenceId03 = 'accordion-details-03';
const referenceId04 = 'accordion-details-04';
const referenceId05 = 'accordion-details-05';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a base accordion', () =>
  matchesMarkup(
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
  ));

it('renders an accordion with section one open', () =>
  matchesMarkup(
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
  ));

it('renders an accordion with section two open', () =>
  matchesMarkup(
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
  ));

it('renders an accordion with section three open', () =>
  matchesMarkup(
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
  ));

it('renders an accordion with multiple sections open', () =>
  matchesMarkup(
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
  ));

it('renders a styled accordion', () =>
  matchesMarkup(
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
  ));

it('renders a nested accordion', () =>
  matchesMarkup(
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
  ));
