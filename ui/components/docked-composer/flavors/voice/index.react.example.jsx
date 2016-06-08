/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Menu from 'ui/components/menus/index.react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props} style={{ height: '500px' }}>
    {props.children}
  </div>;

const DialingIcon = (
  <span className={pf('icon_container icon-standard-call')}>
    <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="call" />
    <span className={pf('assistive-text')}>Call Icon</span>
  </span>
);

const RecordIcon = (
  <ButtonIcon
    flavor="icon-bare"
    iconFlavor="large"
    className={pf('icon-record')}
    sprite="utility"
    symbol="record"
    assistiveText="Stop Recording" />
);

const UserImage = (
  <span className={pf('avatar avatar--medium')}>
    <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
  </span>
);

let DockedComposer = props =>
  <div {...props} className={className(pf('docked-composer grid grid--vertical nowrap'), props.className)}>
    {props.children}
  </div>;

let ComposerHeader = props =>
  <header className={pf('docked-composer__header grid grid--align-spread shrink-none')}>
    <MediaObject figureLeft={DialingIcon} flavor="center">
      <h2 id="dialog-heading-id" aria-live="polite" aria-atomic="true">{props.children}</h2>
    </MediaObject>
    <div className={pf('docked-composer__actions')}>
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="minimize_window"
        assistiveText="Minimize window" />
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="expand_alt"
        assistiveText="Expand Composer" />
      <ButtonIcon
        flavor="icon-bare,icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
    </div>
  </header>;

let ComposerBody = props =>
  <div className={className(pf('docked-composer__body col grid grid--vertical nowrap'), props.className)}>
    {props.children}
  </div>;

let ComposerFooter = props =>
  <footer className={pf('docked-composer__footer shrink-none')}>
    {props.children}
  </footer>;

let LookupMulti = props =>
  <div className={className(pf('form-element lookup'), props.className)} data-select="multi" data-scope="multi">
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control lookup__search-control grid box--border')}>
      <div className={pf('dropdown-trigger--click align-middle m-left--x-small shrink-none')}>
        <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
        <ButtonIcon className={pf('button-space-left shrink-none')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Filter" />
      </div>
      <div className={pf('grid grow')}>
        <input id={props.id} className={pf('lookup__search-input input--bare grow')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder={props.placeholder} defaultValue={props.value} />
      </div>
    </div>
    {props.children}
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Connecting...</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            Connecting...
          </p>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <Button flavor="destructive" className={pf('size--1-of-1')}>End Call</Button>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateB = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Dialing...</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            Dialing...
          </p>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <Button flavor="destructive" className={pf('size--1-of-1')}>End Call</Button>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateC = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Call in Progress</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('docked-composer__lead grid grid--align-spread shrink-none scrollable--y')}>
          <MediaObject figureLeft={UserImage}>
            <p className={pf('text-heading--medium')}>Lei Chan</p>
            <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
          </MediaObject>
          <p className={pf('text-heading--large')}>5:37</p>
        </div>
        <div className={pf('docked-composer__toolbar shrink-none grid grid--align-spread')}>
          <ButtonIcon
            flavor="icon-border-filled,icon-small"
            sprite="utility"
            symbol="unmuted"
            assistiveText="Mute Yourself" />
        </div>
        <label className={pf('assistive-text')} htmlFor="composer-text-input-1">Take notes</label>
        <textarea id="composer-text-input-1" className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('float--right')}>
          <Button flavor="destructive">End Call</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateD = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Cancelling...</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            Cancelling...
          </p>
        </div>
      </ComposerBody>
    </DockedComposer>
  </Demo>;

let StateE = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Busy</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            Busy
          </p>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('grid')}>
          <Button flavor="neutral" className={pf('size--1-of-2')}>Follow-Up Later</Button>
          <Button flavor="brand" className={pf('size--1-of-2')}>Call Again</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateF = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Call Failed</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            Call Failed
          </p>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('grid')}>
          <Button flavor="neutral" className={pf('size--1-of-2')}>Edit Phone Number</Button>
          <Button flavor="brand" className={pf('size--1-of-2')}>Call Again</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateG = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - No Answer</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            No Answer
          </p>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('grid')}>
          <Button flavor="neutral" className={pf('size--1-of-2')}>Follow-Up Later</Button>
          <Button flavor="brand" className={pf('size--1-of-2')}>Call Again</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateH = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Call Finished</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('docked-composer__lead grid grid--align-spread shrink-none scrollable--y')}>
          <MediaObject figureLeft={UserImage}>
            <p className={pf('text-heading--medium')}>Lei Chan</p>
            <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
          </MediaObject>
        </div>
        <div className={pf('docked-composer__toolbar shrink-none grid grid--align-spread')}>
          <ButtonIcon
            flavor="icon-border-filled,icon-small"
            sprite="utility"
            symbol="unmuted"
            assistiveText="Mute Yourself" />
        </div>
        <label className={pf('assistive-text')} htmlFor="composer-text-input-1">Take notes</label>
        <textarea id="composer-text-input-1" className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('float--right')}>
          <Button flavor="brand">Finished Notes</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateI = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan - Incoming Call...</ComposerHeader>
      <ComposerBody className={pf('slds-grid--align-center')}>
        <div className={pf('text-align--center scrollable--y')}>
          <span className={pf('avatar avatar--large')}>
            <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
          </span>
          <h3 className={pf('text-heading--large')}>Lei Chan</h3>
          <ul className={pf('list--horizontal grid--align-center has-dividers--right text-body--small')}>
            <li className={pf('item')}>VP of Sales</li>
            <li className={pf('item ')}>Acme Corporation</li>
          </ul>
          <p className={pf('text-heading--medium m-top--medium')}>
            (416) 555-1234
          </p>
          <div className={pf('p-horizontal--x-small text-align--left')}>
            <p className={pf('m-bottom--x-small')}>Recent Activity</p>
            <ul className={pf('has-dividers--around-space')}>
              <li className={pf('item theme--shade grid')}>
                <span className={pf('icon_container icon-standard-task m-right--x-small')}>
                  <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="task" />
                  <span className={pf('assistive-text')}>Task Icon</span>
                </span>
                Discussed New Pricing Models
                <span className={pf('col--bump-left')}>Yesterday</span>
              </li>
              <li className={pf('item theme--shade grid')}>
                <span className={pf('icon_container icon-standard-email m-right--x-small')}>
                  <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="email" />
                  <span className={pf('assistive-text')}>Task Icon</span>
                </span>
                Re: Updated Proposals
                <span className={pf('col--bump-left')}>4 Hours Ago</span>
              </li>
              <li className={pf('item theme--shade grid')}>
                <span className={pf('icon_container icon-standard-note m-right--x-small')}>
                  <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="note" />
                  <span className={pf('assistive-text')}>Task Icon</span>
                </span>
                Discuss Slides for Nov EBC
                <span className={pf('col--bump-left')}>2 Days Ago</span>
              </li>
            </ul>
          </div>
        </div>
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('grid')}>
          <Button flavor="neutral" className={pf('size--1-of-2')}>Dismiss</Button>
          <Button flavor="brand" className={pf('size--1-of-2')}>Answer</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

let StateJ = props =>
  <Demo>
    <DockedComposer role="dialog" aria-labelledby="dialog-heading-id" className={pf('is-open')}>
      <ComposerHeader>Lei Chan</ComposerHeader>
      <ComposerBody className={pf('docked-composer__body--form')}>
        <fieldset className={pf('form--compound scrollable--y')}>
          <legend className={pf('assistive-text')}>Log a call</legend>
          <div className={pf('form-element__group')}>
            <div className={pf('form-element__row')}>
              <div className={pf('form-element')}>
                <label className={pf('form-element__label')} htmlFor="text-input-01">Subject</label>
                <div className={pf('form-element__control')}>
                  <input className={pf('input')} type="text" id="text-input-01" />
                </div>
              </div>
            </div>
            <div className={pf('form-element__row')}>
              <div className={pf('form-element')}>
                <label className={pf('form-element__label')} htmlFor="text-input-01">Comments</label>
                <div className={pf('form-element__control')}>
                  <textarea className={pf('textarea')} id="textrea-input-01" />
                </div>
              </div>
            </div>
            <div className={pf('form-element__row')}>
              <LookupMulti label="Name" placeholder="Search Leads" id="lookup-01" className={pf('size--1-of-2')} />
              <LookupMulti label="Related To" placeholder="Search Accounts" id="lookup-02" className={pf('size--1-of-2')} />
            </div>
          </div>
        </fieldset>
      </ComposerBody>
      <ComposerFooter>
        <div className={pf('float--right grid grid--align-end size--1-of-2 text-align--right')}>
          <Button flavor="brand">Save</Button>
        </div>
      </ComposerFooter>
    </DockedComposer>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'voice-composer-queued',
    label: 'Queued',
    element: <StateA />
  },
  {
    id: 'voice-composer-ringing',
    label: 'Ringing',
    element: <StateB />
  },
  {
    id: 'single-composer-connected',
    label: 'Connected',
    element: <StateC />
  },
  {
    id: 'single-composer-cancelled',
    label: 'Cancelled',
    element: <StateD />
  },
  {
    id: 'single-composer-busy',
    label: 'Busy',
    element: <StateE />
  },
  {
    id: 'single-composer-failed',
    label: 'Failed',
    element: <StateF />
  },
  {
    id: 'single-composer-missed',
    label: 'No Answer',
    element: <StateG />
  },
  {
    id: 'single-composer-finished',
    label: 'Finished',
    element: <StateH />
  },
  {
    id: 'single-composer-incoming-call',
    label: 'Incoming Call',
    element: <StateI />
  },
  {
    id: 'single-composer-log-call',
    label: 'Log a Call',
    element: <StateJ />
  }
];
