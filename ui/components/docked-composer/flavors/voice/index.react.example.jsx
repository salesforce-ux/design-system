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
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props} style={{ height: '500px' }}>
    {props.children}
  </div>;

const DialingIcon = (
  <span className="slds-icon_container slds-icon-standard-call">
    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="call" />
    <span className="slds-assistive-text">Call Icon</span>
  </span>
);

const UserImage = (
  <span className="slds-avatar slds-avatar--medium">
    <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
  </span>
);

let DockedComposer = props =>
  <div {...props} className={className('slds-docked-composer slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

let ComposerHeader = props =>
  <header className="slds-docked-composer__header slds-grid slds-grid--align-spread slds-shrink-none">
    <MediaObject figureLeft={DialingIcon} flavor="center">
      <h2 id="dialog-heading-id" aria-live="polite" aria-atomic="true">{props.children}</h2>
    </MediaObject>
    <div className="slds-docked-composer__actions">
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="minimize_window" assistiveText="Minimize window" />
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="expand_alt" assistiveText="Expand Composer" />
      <ButtonIcon className="slds-button--icon slds-button--icon-inverse" symbol="close" assistiveText="Close" />
    </div>
  </header>;

let ComposerBody = props =>
  <div className={className('slds-docked-composer__body slds-col slds-grid slds-grid--vertical slds-nowrap', props.className)}>
    {props.children}
  </div>;

let ComposerFooter = props =>
  <footer className="slds-docked-composer__footer slds-shrink-none">
    {props.children}
  </footer>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'voice-composer-queued',
    label: 'Queued',
    element:
      <Demo>
        <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
          <ComposerHeader>Lei Chan - Connecting...</ComposerHeader>
          <ComposerBody className="slds-grid--align-center">
            <div className="slds-text-align--center slds-scrollable--y">
              <span className="slds-avatar slds-avatar--large">
                <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
              </span>
              <h3 className="slds-text-heading--large">Lei Chan</h3>
              <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
                <li className="slds-item">VP of Sales</li>
                <li className="slds-item ">Acme Corporation</li>
              </ul>
              <p className="slds-text-heading--medium slds-m-top--medium">
                Connecting...
              </p>
            </div>
          </ComposerBody>
          <ComposerFooter>
            <Button flavor="destructive" className="slds-size--1-of-1">End Call</Button>
          </ComposerFooter>
        </DockedComposer>
      </Demo>
  },
  {
    id: 'voice-composer-ringing',
    label: 'Ringing',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Dialing...</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              Dialing...
            </p>
          </div>
        </ComposerBody>
        <ComposerFooter>
          <Button flavor="destructive" className="slds-size--1-of-1">End Call</Button>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-connected',
    label: 'Connected',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Call in Progress</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-docked-composer__lead slds-grid slds-grid--align-spread slds-shrink-none slds-scrollable--y">
            <MediaObject figureLeft={UserImage}>
              <p className="slds-text-heading--medium">Lei Chan</p>
              <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
                <li className="slds-item">VP of Sales</li>
                <li className="slds-item ">Acme Corporation</li>
              </ul>
            </MediaObject>
            <p className="slds-text-heading--large">5:37</p>
          </div>
          <div className="slds-docked-composer__toolbar slds-shrink-none slds-grid slds-grid--align-spread">
            <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-small" symbol="unmuted" assistiveText="Mute Yourself" />
          </div>
          <label className="slds-assistive-text" htmlFor="composer-text-input-1">Take notes</label>
          <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Jot down notes here..." />
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-float--right">
            <Button flavor="destructive">End Call</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-cancelled',
    label: 'Cancelled',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Cancelling...</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              Cancelling...
            </p>
          </div>
        </ComposerBody>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-busy',
    label: 'Busy',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Busy</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              Busy
            </p>
          </div>
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-grid">
            <Button flavor="neutral" className="slds-size--1-of-2">Follow-Up Later</Button>
            <Button flavor="brand" className="slds-size--1-of-2">Call Again</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-failed',
    label: 'Failed',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Call Failed</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              Call Failed
            </p>
          </div>
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-grid">
            <Button flavor="neutral" className="slds-size--1-of-2">Edit Phone Number</Button>
            <Button flavor="brand" className="slds-size--1-of-2">Call Again</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-missed',
    label: 'No Answer',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - No Answer</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              No Answer
            </p>
          </div>
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-grid">
            <Button flavor="neutral" className="slds-size--1-of-2">Follow-Up Later</Button>
            <Button flavor="brand" className="slds-size--1-of-2">Call Again</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-finished',
    label: 'Finished',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Call Finished</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-docked-composer__lead slds-grid slds-grid--align-spread slds-shrink-none slds-scrollable--y">
            <MediaObject figureLeft={UserImage}>
              <p className="slds-text-heading--medium">Lei Chan</p>
              <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
                <li className="slds-item">VP of Sales</li>
                <li className="slds-item ">Acme Corporation</li>
              </ul>
            </MediaObject>
          </div>
          <div className="slds-docked-composer__toolbar slds-shrink-none slds-grid slds-grid--align-spread">
            <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-small" symbol="unmuted" assistiveText="Mute Yourself" />
          </div>
          <label className="slds-assistive-text" htmlFor="composer-text-input-1">Take notes</label>
          <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Jot down notes here..." />
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-float--right">
            <Button flavor="brand">Finished Notes</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-incoming-call',
    label: 'Incoming Call',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan - Incoming Call...</ComposerHeader>
        <ComposerBody className="slds-grid--align-center">
          <div className="slds-text-align--center slds-scrollable--y">
            <span className="slds-avatar slds-avatar--large">
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className="slds-text-heading--large">Lei Chan</h3>
            <ul className="slds-list--horizontal slds-grid--align-center slds-has-dividers--right slds-text-body--small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading--medium slds-m-top--medium">
              (416) 555-1234
            </p>
            <div className="slds-p-horizontal--x-small slds-text-align--left">
              <p className="slds-m-bottom--x-small">Recent Activity</p>
              <ul className="slds-has-dividers--around-space">
                <li className="slds-item slds-theme--shade slds-grid">
                  <span className="slds-icon_container slds-icon-standard-task slds-m-right--x-small">
                    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="task" />
                    <span className="slds-assistive-text">Task Icon</span>
                  </span>
                  Discussed New Pricing Models
                  <span className="slds-col--bump-left">Yesterday</span>
                </li>
                <li className="slds-item slds-theme--shade slds-grid">
                  <span className="slds-icon_container slds-icon-standard-email slds-m-right--x-small">
                    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="email" />
                    <span className="slds-assistive-text">Task Icon</span>
                  </span>
                  Re: Updated Proposals
                  <span className="slds-col--bump-left">4 Hours Ago</span>
                </li>
                <li className="slds-item slds-theme--shade slds-grid">
                  <span className="slds-icon_container slds-icon-standard-note slds-m-right--x-small">
                    <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="note" />
                    <span className="slds-assistive-text">Task Icon</span>
                  </span>
                  Discuss Slides for Nov EBC
                  <span className="slds-col--bump-left">2 Days Ago</span>
                </li>
              </ul>
            </div>
          </div>
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-grid">
            <Button flavor="neutral" className="slds-size--1-of-2">Dismiss</Button>
            <Button flavor="brand" className="slds-size--1-of-2">Answer</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  },
  {
    id: 'single-composer-log-call',
    label: 'Log a Call',
    element:
    <Demo>
      <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className="slds-is-open">
        <ComposerHeader>Lei Chan</ComposerHeader>
        <ComposerBody className="slds-docked-composer__body--form">
          <fieldset className="slds-form--compound slds-scrollable--y">
            <legend className="slds-assistive-text">Log a call</legend>
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="text-input-01">Subject</label>
                  <div className="slds-form-element__control">
                    <input className="slds-input" type="text" id="text-input-01" />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="textarea-input-01">Comments</label>
                  <div className="slds-form-element__control">
                    <textarea className="slds-textarea" id="textarea-input-01" />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <Lookup className="slds-size--1-of-2" polymorphic label="Name" placeholder="Search Leads" />
                <Lookup className="slds-size--1-of-2" polymorphic label="Name" placeholder="Search Accounts" />
              </div>
            </div>
          </fieldset>
        </ComposerBody>
        <ComposerFooter>
          <div className="slds-float--right slds-grid slds-grid--align-end slds-size--1-of-2 slds-text-align--right">
            <Button flavor="brand">Save</Button>
          </div>
        </ComposerFooter>
      </DockedComposer>
    </Demo>
  }
];
