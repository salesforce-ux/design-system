// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Section = props =>
  <div className={classNames('slds-section', props.className)}>
    {props.children}
  </div>;

export let SectionContent = props =>
  <div
    aria-hidden={!props.isOpen}
    className={classNames('slds-section__content', props.className)}
    id={props.referenceId}
  >
    {props.children}
  </div>;

export let SectionTitle = props =>
  <h3 className={classNames('slds-section__title', props.className)}>
    {props.children}
  </h3>;

export let SectionTitleAction = props =>
  <button
    aria-controls={props.referenceId}
    aria-expanded={props.isOpen}
    className="slds-button slds-section__title-action"
  >
    <SvgIcon className="slds-section__title-action-icon slds-button__icon slds-button__icon--left" sprite="utility" symbol="switch" />
    <span className="slds-truncate">{props.children}</span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'section-title-closed',
    label: 'Closed',
    element:
      <Section>
        <SectionTitle>
          <SectionTitleAction isOpen={false} referenceId="contentClosed">
            Section Title
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen={false} referenceId="contentClosed" />
      </Section>
  },
  {
    id: 'section-title-open',
    label: 'Open',
    element:
      <Section className="slds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen={true} referenceId="contentOpen">
            Section Title
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen={true} referenceId="contentOpen">
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
        </SectionContent>
      </Section>
  },
  {
    id: 'shade',
    label: 'Non-collapsable',
    element:
      <Section className="slds-is-open">
        <SectionTitle className="slds-theme--shade">
          <span className="slds-truncate slds-p-horizontal--small">Section Title</span>
        </SectionTitle>
        <SectionContent isOpen={true}>
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
        </SectionContent>
      </Section>
  }
];
