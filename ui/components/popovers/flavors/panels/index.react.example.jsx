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
import MediaObject from 'ui/utilities/media-objects/index.react';


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
  <section className="slds-popover slds-popover--panel slds-nubbin--left-top" role="dialog">

    <div className="slds-popover__header">

      <header className="slds-media slds-media--center slds-m-bottom--small">
        <span className="slds-icon_container slds-icon-standard-account slds-media__figure">
          <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="account" />
          <span className="slds-assistive-text">Tesla Motors</span>
        </span>
        <div className="slds-media__body">
          <p className="slds-text-heading--medium slds-hyphenate"><a href="javascript:void(0);">Tesla Motors</a></p>
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
          <p className="slds-truncate">
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
