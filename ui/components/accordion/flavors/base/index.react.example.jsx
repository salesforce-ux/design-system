/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import { Section, SectionContent, SectionTitle, SectionTitleAction }
  from 'ui/utilities/text/flavors/section-title/index.react.example';

const referenceId01 = 'accordion-details-01';
const referenceId02 = 'accordion-details-02';
const referenceId03 = 'accordion-details-03';

let Accordion = props =>
  <ul className={ classNames('slds-accordion', props.className) }>
    { props.children }
  </ul>;

let AccordionSection = props =>
  <li className="slds-accordion__list-item">
    <section className={ classNames('slds-accordion__section', props.isOpen ? 'slds-is-open' : null) }>
      <div className={ classNames('slds-accordion__summary', props.className) }>
        <h3 className={ classNames('slds-text-heading--small slds-accordion__summary-heading', props.className) }>
          <button
            aria-controls={ props.referenceId }
            aria-expanded={ props.isOpen }
            className="slds-button slds-button--reset slds-accordion__summary-action"
          >
            <SvgIcon
              className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon--left"
              sprite="utility"
              symbol="switch"
            />
            <span className="slds-truncate" title={ props.summary }>{ props.summary }</span>
          </button>
        </h3>
        <button
          className="slds-button slds-button--icon-border-filled slds-button--icon-x-small slds-shrink-none" aria-haspopup="true"
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
        aria-hidden={ !props.isOpen }
        className={ classNames('slds-accordion__content', props.className) }
        id={ props.referenceId }
      >
        { props.children }
      </div>
    </section>
  </li>;

export default (
  <Accordion>
    <AccordionSection
      summary="Accordion summary"
      isOpen={ true }
      referenceId={ referenceId01 }
    >
      Accordion details - A
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      isOpen={ false }
      referenceId={ referenceId02 }
    >
      Accordion details - B
    </AccordionSection>
    <AccordionSection
      summary="Accordion summary"
      isOpen={ false }
      referenceId={ referenceId03 }
    >
      Accordion details - C
    </AccordionSection>
  </Accordion>
);

export let states = [
  {
    id: 'section-one-open',
    label: 'Section one open',
    element:
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ true }
          referenceId={ referenceId01 }
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId02 }
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId03 }
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
  },
  {
    id: 'section-two-open',
    label: 'Section two open',
    element:
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId01 }
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ true }
          referenceId={ referenceId02 }
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId03 }
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
  },
  {
    id: 'section-three-open',
    label: 'Section three open',
    element:
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId01 }
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ false }
          referenceId={ referenceId02 }
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          isOpen={ true }
          referenceId={ referenceId03 }
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
  },
  {
    id: 'styled',
    label: 'Styled',
    element:
      <div className="slds-card">
        <Accordion>
          <AccordionSection
            summary="Accordion summary"
            isOpen={ true }
            referenceId={ referenceId01 }
          >
            Accordion details - A
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            isOpen={ false }
            referenceId={ referenceId02 }
          >
            Accordion details - B
          </AccordionSection>
          <AccordionSection
            summary="Accordion summary"
            isOpen={ false }
            referenceId={ referenceId03 }
          >
            Accordion details - C
          </AccordionSection>
        </Accordion>
      </div>
  }
];
