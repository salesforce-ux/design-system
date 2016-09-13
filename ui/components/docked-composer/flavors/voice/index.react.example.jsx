/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example';
import { DockedComposerPanel, DockedComposerPanelBody, DockedComposerPanelFooter } from 'ui/components/docked-composer/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'voice-composer-queued',
    label: 'Queued',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Connecting...">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              Connecting...
            </p>
          </div>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--destructive size--1-of-1')}>End Call</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-ringing',
    label: 'Ringing',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Dialing...">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              Dialing...
            </p>
          </div>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--destructive size--1-of-1')}>End Call</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-connected',
    label: 'Connected',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Call in Progress">
        <DockedComposerPanelBody>
          <div className={pf('docked-composer__lead')}>
            <div className={pf('media')}>
              <div className={pf('media__figure')}>
                <span className={pf('avatar avatar--medium')}>
                  <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
                </span>
              </div>
              <div className={pf('media__body')}>
                <p className={pf('text-heading--medium')}>Lei Chan</p>
                <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
                  <li className={pf('item')}>VP of Sales</li>
                  <li className={pf('item ')}>Acme Corporation</li>
                </ul>
              </div>
            </div>
            <p className={pf('col--bump-left text-heading--large')}>5:37</p>
          </div>
          <div className={pf('docked-composer__toolbar')}>
            <ButtonIcon className={pf('button--icon-border-filled button--icon-small')} symbol="unmuted" assistiveText="Mute Yourself" />
          </div>
          <label className={pf('assistive-text')} htmlFor="composer-text-input-1">Take notes</label>
          <textarea id="composer-text-input-1" className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--destructive col--bump-left')}>End Call</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-cancelled',
    label: 'Cancelled',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Cancelling...">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              Cancelling...
            </p>
          </div>
        </DockedComposerPanelBody>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-busy',
    label: 'Busy',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Busy">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              Busy
            </p>
          </div>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--neutral size--1-of-2')}>Follow-Up Later</Button>
          <Button className={pf('button--brand size--1-of-2')}>Call Again</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-failed',
    label: 'Call Failed',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Call Failed">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              Call Failed
            </p>
          </div>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--neutral size--1-of-2')}>Edit Phone Number</Button>
          <Button className={pf('button--brand size--1-of-2')}>Call Again</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-no-answer',
    label: 'No Answer',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - No Answer">
        <DockedComposerPanelBody className={pf('align--absolute-center')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              No Answer
            </p>
          </div>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--neutral size--1-of-2')}>Follow Up Later</Button>
          <Button className={pf('button--brand size--1-of-2')}>Call Again</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-finished',
    label: 'Call Finished',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Call Finished">
        <DockedComposerPanelBody>
          <div className={pf('docked-composer__lead')}>
            <div className={pf('media')}>
              <div className={pf('media__figure')}>
                <span className={pf('avatar avatar--medium')}>
                  <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
                </span>
              </div>
              <div className={pf('media__body')}>
                <p className={pf('text-heading--medium')}>Lei Chan</p>
                <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
                  <li className={pf('item')}>VP of Sales</li>
                  <li className={pf('item ')}>Acme Corporation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={pf('docked-composer__toolbar')}>
            <ButtonIcon className={pf('button--icon-border-filled button--icon-small')} symbol="unmuted" assistiveText="Mute Yourself" />
          </div>
          <label className={pf('assistive-text')} htmlFor="composer-text-input-1">Take notes</label>
          <textarea id="composer-text-input-1" className={pf('docked-composer__input input--bare text-longform grow')} placeholder="Jot down notes here..." />
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--brand col--bump-left')}>Finish Notes</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-incoming',
    label: 'Call Incoming',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan - Incoming Call...">
        <DockedComposerPanelBody className={pf('align--absolute-center size--1-of-1')}>
          <div className={pf('text-align--center align-middle')}>
            <span className={pf('avatar avatar--large')}>
              <img src="/assets/images/avatar2.jpg" alt="Lei Chan" />
            </span>
            <h3 className={pf('text-heading--large')}>Lei Chan</h3>
            <ul className={pf('list--horizontal has-dividers--right text-body--small')}>
              <li className={pf('item')}>VP of Sales</li>
              <li className={pf('item ')}>Acme Corporation</li>
            </ul>
            <p className={pf('text-heading--medium m-top--medium')}>
              (416) 555-1234
            </p>
          </div>
          <div className={pf('p-horizontal--x-small text-align--left size--1-of-1')}>
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
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--brand col--bump-left')}>Finish Notes</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-logged',
    label: 'Log a Call',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel className={pf('is-open')} header="Lei Chan">
        <DockedComposerPanelBody className={pf('docked-composer__body--form')}>
          <fieldset className={pf('form--compound')}>
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
                  <label className={pf('form-element__label')} htmlFor="textarea-input-01">Comments</label>
                  <div className={pf('form-element__control')}>
                    <textarea className={pf('textarea')} id="textarea-input-01" />
                  </div>
                </div>
              </div>
              <div className={pf('form-element__row')}>
                <Lookup className={pf('size--1-of-2')} polymorphic label="Name" placeholder="Search Leads" />
                <Lookup className={pf('size--1-of-2')} polymorphic label="Name" placeholder="Search Accounts" />
              </div>
            </div>
          </fieldset>
        </DockedComposerPanelBody>
        <DockedComposerPanelFooter>
          <Button className={pf('button--brand col--bump-left')}>Save</Button>
        </DockedComposerPanelFooter>
      </DockedComposerPanel>
    </div>
  }
];
