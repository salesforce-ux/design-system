// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// local components
import { Button } from '../buttons/base/example';
import { Checkbox } from '../checkbox/base/example';
import { FormElement } from '../form-element/index';

export const exampleDemoStyles = 'height: 800px;';

export const WelcomeMatContext = props => (
  <div className="demo-only" style={{ height: '800px' }}>
    {props.children}
  </div>
);

WelcomeMatContext.propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * Sample Tile Data
 */
export const sampleTiles = () => [
  {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
  },
  {
    symbol: 'call',
    title: 'Learn About OpenCTI',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
  },
  {
    symbol: 'upload',
    title: 'Power Up the Utility Bar',
    description:
      'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
  },
  {
    symbol: 'magicwand',
    title: 'Customize your view',
    description:
      "Tailor your cases to your team's workflow with custom list views."
  },
  {
    symbol: 'knowledge_base',
    title: 'Share the Knowledge',
    description:
      "Harness your team's collective know-how with our powerful knowledge base."
  }
];

/**
 * Sample Actions
 */
export const WelcomeMatSampleActions = () => (
  <Fragment>
    <Button isBrand>Learn More</Button>
    <div className="slds-m-top_large">
      <FormElement>
        <Checkbox label="Don't show this again" />
      </FormElement>
    </div>
  </Fragment>
);

/**
 * Welcome Mat Info Title Element
 *
 * @param {*} props
 * @prop {string} labelId - aria label id
 * @prop {object} children - children elements
 */
export const WelcomeMatInfoTitle = props => (
  <h2 className="slds-welcome-mat__info-title" id={props.labelId}>
    {props.children}
  </h2>
);

WelcomeMatInfoTitle.propTypes = {
  labelId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

/**
 * Welcome Mat Info Description Element
 *
 * @param {*} props
 * @prop {object} children - children elements
 */
export const WelcomeMatInfoDesc = props => (
  <div className="slds-welcome-mat__info-description slds-text-longform">
    {props.children}
  </div>
);

WelcomeMatInfoDesc.propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * Welcome Mat Info Actions Container
 *
 * @param {*} props
 * @prop {object} children - children elements
 */
export const WelcomeMatInfoActions = props => (
  <div className="slds-welcome-mat__info-actions">
    <WelcomeMatSampleActions />
  </div>
);

WelcomeMatInfoActions.propTypes = {
  children: PropTypes.node
};

/**
 * Welcome Mat Marketing Content Example
 *
 * @param {*} props
 * @prop {string} labelId
 * @prop {string} headline
 * @prop {object} description
 * @prop {object} actions
 */
export const WelcomeMatMarketingContent = props => {
  const { labelId, headline, description, actions } = props;

  return (
    <Fragment>
      <WelcomeMatInfoTitle labelId={labelId}>{headline}</WelcomeMatInfoTitle>
      <WelcomeMatInfoDesc>{description}</WelcomeMatInfoDesc>
      <WelcomeMatInfoActions>{actions}</WelcomeMatInfoActions>
    </Fragment>
  );
};

WelcomeMatMarketingContent.propTypes = {
  labelId: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.object,
  actions: PropTypes.object
};

WelcomeMatMarketingContent.defaultProps = {
  headline: 'The Lightning Experience is here!',
  description: (
    <p>
      Welcome to Lightning Experience, the modern, beautiful user experience
      from Salesforce. With a sales-and service-centric mindset, we focused on
      reinventing the desktop environment to better support your business
      processes.
    </p>
  )
};
