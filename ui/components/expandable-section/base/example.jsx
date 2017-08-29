// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const referenceId = 'expando-unique-id';

/* -----------------------------------------------------------------------------
    Public
----------------------------------------------------------------------------- */
export let Section = props => (
  <div className={classNames('slds-section', props.className)}>
    {props.children}
  </div>
);

export let SectionContent = props => (
  <div
    aria-hidden={props.isOpen ? 'false' : 'true'}
    className={classNames('slds-section__content', props.className)}
    id={props.referenceId}
  >
    {props.children}
  </div>
);

export let SectionTitle = props => (
  <h3 className={classNames('slds-section__title', props.className)}>
    {props.children}
  </h3>
);

export let SectionTitleAction = props => (
  <button
    aria-controls={props.referenceId}
    aria-expanded={props.isOpen ? 'true' : 'false'}
    className="slds-button slds-section__title-action"
  >
    <SvgIcon
      className="slds-section__title-action-icon slds-button__icon slds-button__icon_left"
      sprite="utility"
      symbol="switch"
    />
    <span className="slds-truncate" title={props.children}>
      {props.children}
    </span>
  </button>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <Section className="slds-is-open">
    <SectionTitle>
      <SectionTitleAction referenceId={referenceId} isOpen>
        Section Title
      </SectionTitleAction>
    </SectionTitle>
    <SectionContent referenceId={referenceId} isOpen>
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna
        mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.
      </p>
    </SectionContent>
  </Section>
);

export let examples = [
  {
    id: 'non-collapsable',
    label: 'Non-collapsable',
    element: (
      <Section className="slds-is-open">
        <SectionTitle className="slds-theme_shade">
          <span
            className="slds-truncate slds-p-horizontal_small"
            title="Section Title"
          >
            Section Title
          </span>
        </SectionTitle>
        <SectionContent isOpen>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus
            eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
            pharetra augue.
          </p>
        </SectionContent>
      </Section>
    )
  }
];

export let states = [
  {
    id: 'closed',
    label: 'Closed',
    element: (
      <Section>
        <SectionTitle>
          <SectionTitleAction referenceId={referenceId}>
            Section Title
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent referenceId={referenceId}>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus
            eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
            pharetra augue.
          </p>
        </SectionContent>
      </Section>
    )
  }
];
