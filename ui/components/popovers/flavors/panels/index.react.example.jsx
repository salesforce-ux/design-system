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
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


const iconHeader = (
  <span className={pf('icon_container icon-standard-account')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="account" />
    <span className={pf('assistive-text')}>Tesla Motors</span>
  </span>
);
const iconOpportunity = (
  <span className={pf('icon_container icon-standard-opportunity')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="opportunity" />
    <span className={pf('assistive-text')}>Opportunities</span>
  </span>
);
const iconCases = (
  <span className={pf('icon_container icon-standard-case')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="case" />
    <span className={pf('assistive-text')}>Cases</span>
  </span>
);

const ViewAll = () =>
  <dd className={pf('m-top--x-small text-align--right')}><a href="javascript:void(0);" title="View all Opportunities">View All</a></dd>;

export default (
  <div className={pf('popover popover--panel nubbin--left-top')} role="dialog">

    <div className={pf('popover__header')}>

      <MediaObject figureLeft={iconHeader} flavor="center" className={pf('m-bottom--small')}>
        <a href="javascript:void(0);" className={pf('text-heading--medium')}>Tesla Motors</a>
      </MediaObject>

      {/* Additional Info */}
      <div className={pf('grid wrap grid--pull-padded')}>

        <div className={pf('col--padded size--1-of-2 p-bottom--x-small')}>
          <dl>
            <dt><p className={pf('text-heading--label truncate')}>Billing Address</p></dt>
            <dd>
              <p className={pf('truncate')}>3500 Deer Creek Rd.</p>
              <p className={pf('truncate')}>Palo Alto, CA 94304</p>
            </dd>
          </dl>
        </div>

        <div className={pf('col--padded size--1-of-2 p-bottom--x-small')}>
          <dl>
            <dt><p className={pf('text-heading--label truncate')}>Phone</p></dt>
            <dd><a href="javascript:void(0);">212-345-3485</a></dd>
          </dl>
        </div>

        <div className={pf('col--padded size--1-of-2 p-bottom--x-small')}>
          <dl>
            <dt><p className={pf('text-heading--label truncate')}>Website</p></dt>
            <dd><a href="javascript:void(0);">teslamotors.com</a></dd>
          </dl>
        </div>

        <div className={pf('col--padded size--1-of-2 p-bottom--x-small')}>
          <dl>
            <dt><p className={pf('text-heading--label truncate')}>Account Owner</p></dt>
            <dd><a href="javascript:void(0);">Jeff Maguire</a></dd>
          </dl>
        </div>

      </div>
    </div>
    <div className={pf('popover__body')}>
      <dl className={pf('popover__body-list')}>
        <dt className={pf('m-bottom--small')}>
          <MediaObject figureLeft={iconOpportunity} flavor="center">
            <p className={pf('text-heading--small')}>Opportunities (2+)</p>
          </MediaObject>
        </dt>
        {/* Opportunity One */}
        <dd className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="javascript:void(0);">Tesla - Mule ESB</a>
          </p>
          <div className={pf('tile__detail')}>
            <dl className={pf('dl--horizontal text-body--small')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Value</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>$500,000</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Close Date</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>Dec 15, 2015</p>
              </dd>
            </dl>
          </div>
        </dd>
        {/* Opportunity Two */}
        <dd className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="javascript:void(0);">Tesla - Anypoint Studios</a>
          </p>
          <div className={pf('tile__detail')}>
            <dl className={pf('dl--horizontal text-body--small')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Value</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>$60,000</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Close Date</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>Jan 15, 2016</p>
              </dd>
            </dl>
          </div>
        </dd>
        <ViewAll />
      </dl>

      <dl className={pf('popover__body-list')}>
        <dt className={pf('m-bottom--small')}>
          <MediaObject figureLeft={iconCases} flavor="center">
            <p className={pf('text-heading--small')}>Cases (1)</p>
          </MediaObject>
        </dt>
        {/* Case One */}
        <dd className={pf('tile')}>
          <p className={pf('tile__title truncate')}>
            <a href="javascript:void(0);">Tesla - Anypoint Studios</a>
          </p>
          <div className={pf('tile__detail')}>
            <dl className={pf('dl--horizontal text-body--small')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Value</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>$60,000</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')}>Close Date</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')}>Jan 15, 2016</p>
              </dd>
            </dl>
          </div>
        </dd>
        <ViewAll />
      </dl>
    </div>
  </div>
);
