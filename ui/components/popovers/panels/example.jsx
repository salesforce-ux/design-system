// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import MediaObject from '../../../utilities/media-objects/index.react';
import { ButtonIcon } from '../../button-icons/base/example';


const iconHeader = (
  <span className="slds-icon_container slds-icon-standard-account">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="account" />
    <span className="slds-assistive-text">Tesla Motors</span>
  </span>
);
const iconOpportunity = (
  <span className="slds-icon_container slds-icon-standard-opportunity">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="opportunity" />
    <span className="slds-assistive-text">Opportunities</span>
  </span>
);
const iconCases = (
  <span className="slds-icon_container slds-icon-standard-case">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="case" />
    <span className="slds-assistive-text">Cases</span>
  </span>
);

const ViewAll = () =>
  <dd className="slds-m-top--x-small slds-text-align--right"><a href="javascript:void(0);" title="View all Opportunities">View All</a></dd>;

export default (
  <section
    aria-labelledby="panel-heading-id"
    className="slds-popover slds-popover--panel slds-nubbin--left-top"
    role="dialog"
  >
    <ButtonIcon
      className="slds-button--icon slds-button--icon-small slds-float--right slds-popover__close"
      symbol="close"
      assistiveText="Close dialog"
      title="Close dialog"
    />
    <div className="slds-popover__header">

      <header className="slds-media slds-media--center slds-m-bottom--small">
        <span className="slds-icon_container slds-icon-standard-account slds-media__figure">
          <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="account" />
        </span>
        <div className="slds-media__body">
          <h2 className="slds-text-heading--medium slds-hyphenate" id="panel-heading-id"><a href="javascript:void(0);">Tesla Motors</a></h2>
        </div>
      </header>

      {/* Additional Info */}
      <footer className="slds-grid slds-wrap slds-grid--pull-padded">

        <div className="slds-p-horizontal--small slds-size--1-of-2 slds-p-bottom--x-small">
          <dl>
            <dt><p className="slds-text-title--caps slds-truncate" title="Billing Address">Billing Address</p></dt>
            <dd>
              <p className="slds-truncate" title="3500 Deer Creek Rd.">3500 Deer Creek Rd.</p>
              <p className="slds-truncate" title="Palo Alto, CA 94304">Palo Alto, CA 94304</p>
            </dd>
          </dl>
        </div>

        <div className="slds-p-horizontal--small slds-size--1-of-2 slds-p-bottom--x-small">
          <dl>
            <dt><p className="slds-text-title--caps slds-truncate" title="Phone">Phone</p></dt>
            <dd><a href="javascript:void(0);">212-345-3485</a></dd>
          </dl>
        </div>

        <div className="slds-p-horizontal--small slds-size--1-of-2 slds-p-bottom--x-small">
          <dl>
            <dt><p className="slds-text-title--caps slds-truncate" title="Website">Website</p></dt>
            <dd><a href="javascript:void(0);">teslamotors.com</a></dd>
          </dl>
        </div>

        <div className="slds-p-horizontal--small slds-size--1-of-2 slds-p-bottom--x-small">
          <dl>
            <dt><p className="slds-text-title--caps slds-truncate" title="Account Owner">Account Owner</p></dt>
            <dd><a href="javascript:void(0);">Jeff Maguire</a></dd>
          </dl>
        </div>

      </footer>
    </div>
    <div className="slds-popover__body">
      <dl className="slds-popover__body-list">
        <dt className="slds-m-bottom--small">
          <MediaObject figureLeft={iconOpportunity} flavor="center">
            <p className="slds-text-heading--small slds-hyphenate">Opportunities (2+)</p>
          </MediaObject>
        </dt>
        {/* Opportunity One */}
        <dd className="slds-m-top--x-small">
          <p className="slds-truncate" title="Tesla - Mule ESB">
            <a href="javascript:void(0);">Tesla - Mule ESB</a>
          </p>
          <dl className="slds-list--horizontal slds-wrap slds-text-body--small">
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Value">Value</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="$500,000">$500,000</dd>
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Close Date">Close Date</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="Dec 15, 2015">Dec 15, 2015</dd>
          </dl>
        </dd>
        {/* Opportunity Two */}
        <dd className="slds-m-top--x-small">
          <p className="slds-truncate" title="Tesla - Anypoint Studios">
            <a href="javascript:void(0);">Tesla - Anypoint Studios</a>
          </p>
          <dl className="slds-list--horizontal slds-wrap slds-text-body--small">
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Value">Value</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="$60,000">$60,000</dd>
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Close Date">Close Date</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="Jan 15, 2016">Jan 15, 2016</dd>
          </dl>
        </dd>
        <ViewAll />
      </dl>

      <dl className="slds-popover__body-list">
        <dt className="slds-m-bottom--small">
          <MediaObject figureLeft={iconCases} flavor="center">
            <p className="slds-text-heading--small slds-hyphenate">Cases (1)</p>
          </MediaObject>
        </dt>
        {/* Case One */}
        <dd className="slds-m-top--x-small">
          <p className="slds-truncate" title="Tesla - Anypoint Studios">
            <a href="javascript:void(0);">Tesla - Anypoint Studios</a>
          </p>
          <dl className="slds-list--horizontal slds-wrap slds-text-body--small">
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Value">Value</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="$60,000">$60,000</dd>
            <dt className="slds-item--label slds-text-color--weak slds-truncate" title="Close Date">Close Date</dt>
            <dd className="slds-item--detail slds-text-color--weak slds-truncate" title="Jan 15, 2016">Jan 15, 2016</dd>
          </dl>
        </dd>
        <ViewAll />
      </dl>
    </div>
  </section>
);
