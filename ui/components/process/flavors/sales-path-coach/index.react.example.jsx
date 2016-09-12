/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import className from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Coach = props =>
  <div className="slds-path-coach">
    {props.children}
  </div>;

let Path = props =>
  <div className="slds-grid">
    {props.children}
  </div>;

let Trigger = props =>
  <ButtonIcon className="slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small" symbol="chevrondown" assistiveText="Open" />;

let Triggerup = props =>
  <ButtonIcon className="slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small slds-flip--vertical" symbol="chevrondown" assistiveText="Close" />;

let Action = props =>
  <Button flavor="brand" className={className('slds-path__mark-complete slds-no-flex slds-m-horizontal--small', props.className)}>
    {props.children}
  </Button>;

let Tabsmain = props =>
  <div className="slds-tabs--path" role="application">
    <ul className="slds-tabs--path__nav"  role="tablist">
      {props.children}
    </ul>
  </div>;

let Tab = props => {
  const uniqueId = _.uniqueId('tabs-path-');
  return (
    <li className={className('slds-tabs--path__item', props.className)} role="presentation">
      <a className="slds-tabs--path__link" id={uniqueId} aria-controls="content-path-1" aria-selected="false" tabIndex="-1" role="tab" href="javascript:void(0);" aria-live="assertive">
        {props.children}
      </a>
    </li>
  );
};

let Coachcontent1 = props =>
  <div id="content-path-1" className="slds-tabs--path__content slds-hide" role="tabpanel" aria-labelledby="tab-path-1">
    <h2>Item One Content</h2>
  </div>;

let Coachcontent2 = props =>
  <div id="content-path-2" className="slds-tabs--path__content slds-hide" role="tabpanel" aria-labelledby="tab-path-2">
    <h2>Item Two Content</h2>
  </div>;

let Coachcontent3 = props =>
  <div id="content-path-3" className={className('slds-tabs--path__content', props.className)} role="tabpanel" aria-labelledby="tab-path-3">
    <div className="slds-grid slds-grid--align-spread">
      <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
        <div className="slds-grid slds-grid--align-spread">
          <h2 className="slds-text-title--caps slds-p-bottom--small">Key Fields This Stage</h2>
          <span className="slds-text-body--small"><a href="javascript:void(0);">Edit</a></span>
        </div>
        <dl className="slds-dl--horizontal">
          <dt className="slds-coach__item slds-dl--horizontal__label">Expected Budget</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail">$10,000</dd>
          <dt className="slds-coach__item slds-dl--horizontal__label">Lead Source</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail">Marketing and Web Referral</dd>
          <dt className="slds-coach__item slds-dl--horizontal__label">Support Engineer</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail"><a href="javascript:void(0);">Jack Arthur</a></dd>
        </dl>
      </div>
      <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
        <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">Guidance for Success</h2>
        <div className="slds-text-longform slds-p-top--medium">
          <p>Regularly cross-sell related products using <a href="javascript:void(0);">cross-sell tactics and principles</a>.</p>
          <p>Prepare demo deck using the <a href="javascript:void(0);">latest template</a> and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.</p>
          <p>Look up <a href="javascript:void(0);">needs analysis principles</a> and review selling plan with Sales Engineer.</p>
        </div>
      </div>
    </div>
  </div>;

let Coachcontent4 = props =>
  <div id="content-path-4" className={className('slds-tabs--path__content', props.className)} role="tabpanel" aria-labelledby="tab-path-4">
    <div className="slds-grid slds-grid--align-spread">
      <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
        <div className="slds-grid slds-grid--align-spread">
          <h2 className="slds-text-title--caps slds-p-bottom--small">Key Fields This Stage</h2>
          <span className="slds-text-body--small"><a href="javascript:void(0);">Edit</a></span>
        </div>
        <dl className="slds-dl--horizontal">
          <dt className="slds-coach__item slds-dl--horizontal__label">Build State</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail">In Motion</dd>
          <dt className="slds-coach__item slds-dl--horizontal__label">Expected Sign Date</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail">-</dd>
          <dt className="slds-coach__item slds-dl--horizontal__label">Key Buyer</dt>
          <dd className="slds-coach__value slds-dl--horizontal__detail"><a href="javascript:void(0);">-</a></dd>
        </dl>
      </div>
      <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
        <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">Guidance for Success</h2>
        <div className="slds-text-longform slds-p-top--medium">
          <p>Check out the latest Negotiation and Review tactics on our <a href="javascript:void(0);">online portal here</a>.</p>
          <p>Review Quote with the Legal and Marketing team and be sure to approve with Exec.</p>
          <p>Set up at time to delivery schedule and check with Inventory.</p>
        </div>
      </div>
    </div>
  </div>;

let Coachcontent5 = props =>
  <div id="content-path-5" className="slds-tabs--path__content slds-hide" role="tabpanel" aria-labelledby="tab-path-5">
    <h2>Item Five Content</h2>
  </div>;

let Tooltip = props =>
  <div className="slds-popover slds-popover--tooltip slds-nubbin--top" role="tooltip">
    <div className="slds-popover__body">10 days in Needs Analysis</div>
  </div>
;

///////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let StateA = props =>
  <Path>
    <Tabsmain>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Contacted</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Open</span>
      </Tab>
      <Tab className="slds-is-current">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Unqualified</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Nurturing</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Closed</span>
      </Tab>
    </Tabsmain>
    <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
    Mark Status as Complete</Action>
  </Path>;

let StateB = props =>
  <Path>
    <Trigger />
    <Tabsmain>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Contacted</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Open</span>
      </Tab>
      <Tab className="slds-is-current">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Unqualified</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Nurturing</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Closed</span>
      </Tab>
    </Tabsmain>
    <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
    Mark Status as Complete</Action>
  </Path>;

let StateC = props =>
  <Path>
    <Trigger />
    <Tabsmain>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Contacted</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Open</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Stage Three</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Stage Four</span>
      </Tab>
      <Tab className="slds-is-complete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          <span className="slds-assistive-text">Stage Complete</span>
        </span>
        <span className="slds-tabs--path__title">Stage Five</span>
      </Tab>
      <Tab className="slds-is-current">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Unqualified</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Nurturing</span>
      </Tab>
      <Tab className="slds-is-incomplete">
        <span className="slds-tabs--path__stage">
          <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
        </span>
        <span className="slds-tabs--path__title">Closed</span>
      </Tab>
    </Tabsmain>
    <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
    Mark Status as Complete</Action>
  </Path>;

let StateD = props =>
  <Demo>
    <Coach>
      <Path>
        <Triggerup />
        <Tabsmain>
          <Tab className="slds-is-complete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </Tab>
          <Tab className="slds-is-complete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </Tab>
          <Tab className="slds-is-current">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </Tab>
          <Tab className="slds-is-incomplete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </Tab>
          <Tab className="slds-is-incomplete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </Tab>
        </Tabsmain>
        <Action><SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="check" />
          Mark Status as Complete</Action>
      </Path>
      <Coachcontent1 />
      <Coachcontent2 />
      <Coachcontent3 className="slds-show"></Coachcontent3>
      <Coachcontent4 className="slds-hide"></Coachcontent4>
      <Coachcontent5 />
    </Coach>
  </Demo>;

let StateE = props =>
  <Demo>
    <Coach>
      <Path>
        <Triggerup />
        <Tabsmain>
          <Tab className="slds-is-complete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </Tab>
          <Tab className="slds-is-complete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </Tab>
          <Tab className="slds-is-current">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </Tab>
          <Tab className="slds-is-incomplete slds-is-active">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </Tab>
          <Tab className="slds-is-incomplete">
            <span className="slds-tabs--path__stage">
              <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </Tab>
        </Tabsmain>
        <Action className="slds-path__mark-current">
          Mark as Current Stage</Action>
      </Path>
      <Coachcontent1 />
      <Coachcontent2 />
      <Coachcontent3 className="slds-hide"></Coachcontent3>
      <Coachcontent4 className="slds-show"></Coachcontent4>
      <Coachcontent5 />
    </Coach>
  </Demo>;

let StateF = props =>
  <Demo>
    <Path>
      <Trigger />
      <Tabsmain>
        <Tab className="slds-is-incomplete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </Tab>
        <Tab className="slds-is-incomplete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </Tab>
        <Tab className="slds-is-incomplete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </Tab>
        <Tab className="slds-is-incomplete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </Tab>
        <Tab className="slds-is-lost">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Closed Lost</span>
        </Tab>
      </Tabsmain>
      <Action>Change Closed State</Action>
    </Path>
  </Demo>;

let StateG = props =>
  <Demo>
    <Path>
      <Trigger />
      <Tabsmain>
        <Tab className="slds-is-complete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Contacted</span>
        </Tab>
        <Tab className="slds-is-complete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
            <span className="slds-assistive-text">Stage Complete</span>
          </span>
          <span className="slds-tabs--path__title">Open</span>
        </Tab>
        <Tab className="slds-is-complete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Unqualified</span>
        </Tab>
        <Tab className="slds-is-complete">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Nurturing</span>
        </Tab>
        <Tab className="slds-is-complete slds-is-won">
          <span className="slds-tabs--path__stage">
            <SvgIcon className="slds-icon slds-icon--x-small" sprite="utility" symbol="check" />
          </span>
          <span className="slds-tabs--path__title">Closed Won</span>
        </Tab>
      </Tabsmain>
      <Action>Change Closed State</Action>
    </Path>
  </Demo>;


///////////////////////////////////////////////
// Export
//////////////////////////////////////////////


export let states = [
  {
    id: 'without-coaching',
    label: 'Without Coaching',
    element: <StateA />
  },
  {
    id: 'with-coaching',
    label: 'With Coaching Available',
    element: <StateB />
  },
  {
    id: 'current-coaching',
    label: 'Current Stage Coaching Visible',
    element: <StateD />
  },
  {
    id: 'different-coaching',
    label: 'With Different Stage Selected',
    element: <StateE />
  },
  {
    id: 'lost',
    label: 'Lost',
    element: <StateF />
  },
  {
    id: 'won',
    label: 'Won',
    element: <StateG />
  }
];
