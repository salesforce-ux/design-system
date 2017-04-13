// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { Lookup } from '../../lookups/base/example';
import { DockedComposerPanel } from '../base/example';
import SvgIcon from '../../../../app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'voice-composer-queued',
    label: 'Queued',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - Connecting..."
        footer={<button className="slds-button slds-button--destructive slds-size--1-of-1">End Call</button>}
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            Connecting...
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-ringing',
    label: 'Ringing',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - Dialing..."
        footer={ <button className="slds-button slds-button--destructive slds-size--1-of-1">End Call</button> }
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            Dialing...
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-connected',
    label: 'Connected',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        header="Lei Chan - Call in Progress"
        footer={ <button className="slds-button slds-button--destructive slds-col--bump-left">End Call</button> }
      >
        <div className="slds-docked-composer__lead">
          <div className="slds-media">
            <div className="slds-media__figure">
              <span className="slds-avatar slds-avatar--medium">
                <img
                  alt=""
                  src="/assets/images/avatar2.jpg"
                  title="Lei Chan avatar"
                />
              </span>
            </div>
            <div className="slds-media__body">
              <p className="slds-text-heading--medium">Lei Chan</p>
              <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
                <li className="slds-item">VP of Sales</li>
                <li className="slds-item ">Acme Corporation</li>
              </ul>
            </div>
          </div>
          <p className="slds-col--bump-left slds-text-heading--large">5:37</p>
        </div>
        <div className="slds-docked-composer__toolbar">
          <ButtonIcon
            className="slds-button--icon-border-filled slds-button--icon-small"
            symbol="unmuted"
            assistiveText="Mute Yourself"
            title="Mute Yourself"
            aria-pressed="false"
          />
        </div>
        <label className="slds-assistive-text" htmlFor="composer-text-input-1">Take notes</label>
        <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Jot down notes here..." />
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-cancelled',
    label: 'Cancelled',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - Cancelling..."
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            Cancelling...
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-busy',
    label: 'Busy',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - Busy"
        footer={[
          <button className="slds-button slds-button--neutral slds-size--1-of-2" key={_.uniqueId('follow-up-')}>Follow-Up Later</button>,
          <button className="slds-button slds-button--brand slds-size--1-of-2" key={_.uniqueId('call-again-')}>Call Again</button>
        ]}
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            Busy
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-failed',
    label: 'Call Failed',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - Call Failed"
        footer={[
          <button className="slds-button slds-button--neutral slds-size--1-of-2" key={_.uniqueId('follow-up-')}>Edit Phone Number</button>,
          <button className="slds-button slds-button--brand slds-size--1-of-2" key={_.uniqueId('call-again-')}>Call Again</button>
        ]}
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            Call Failed
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-no-answer',
    label: 'No Answer',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center"
        header="Lei Chan - No Answer"
        footer={[
          <button className="slds-button slds-button--neutral slds-size--1-of-2" key={_.uniqueId('follow-up-')}>Follow-Up Later</button>,
          <button className="slds-button slds-button--brand slds-size--1-of-2" key={_.uniqueId('call-again-')}>Call Again</button>
        ]}
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            No Answer
          </p>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-finished',
    label: 'Call Finished',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        header="Lei Chan - Call Finished"
        footer={ <button className="slds-button slds-button--brand slds-col--bump-left">Finish Notes</button> }
      >
        <div className="slds-docked-composer__lead">
          <div className="slds-media">
            <div className="slds-media__figure">
              <span className="slds-avatar slds-avatar--medium">
                <img
                  alt=""
                  src="/assets/images/avatar2.jpg"
                  title="Lei Chan avatar"
                />
              </span>
            </div>
            <div className="slds-media__body">
              <p className="slds-text-heading--medium">Lei Chan</p>
              <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
                <li className="slds-item">VP of Sales</li>
                <li className="slds-item ">Acme Corporation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slds-docked-composer__toolbar">
          <ButtonIcon
            className="slds-button--icon-border-filled slds-button--icon-small"
            symbol="unmuted"
            assistiveText="Mute Yourself"
            title="Mute Yourself"
            aria-pressed="false"
          />
        </div>
        <label className="slds-assistive-text" htmlFor="composer-text-input-1">Take notes</label>
        <textarea id="composer-text-input-1" className="slds-docked-composer__input slds-input--bare slds-text-longform slds-grow" placeholder="Jot down notes here..." />
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-incoming',
    label: 'Call Incoming',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-align--absolute-center slds-size--1-of-1"
        header="Lei Chan - Incoming Call..."
        footer={ <button className="slds-button slds-button--brand slds-col--bump-left">Finish Notes</button> }
      >
        <div className="slds-text-align--center slds-align-middle">
          <span className="slds-avatar slds-avatar--large">
            <img
              alt=""
              src="/assets/images/avatar2.jpg"
              title="Lei Chan avatar"
            />
          </span>
          <h3 className="slds-text-heading--large">Lei Chan</h3>
          <ul className="slds-list--horizontal slds-has-dividers--right slds-text-body--small">
            <li className="slds-item">VP of Sales</li>
            <li className="slds-item ">Acme Corporation</li>
          </ul>
          <p className="slds-text-heading--medium slds-m-top--medium">
            (416) 555-1234
          </p>
        </div>
        <div className="slds-p-horizontal--x-small slds-text-align--left slds-size--1-of-1">
          <h3 className="slds-m-bottom--x-small">Recent Activity</h3>
          <ul className="slds-has-dividers--around-space">
            <li className="slds-item slds-theme--shade slds-grid">
              <span className="slds-icon_container slds-icon-standard-task slds-m-right--x-small">
                <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="task" />
                <span className="slds-assistive-text">Task</span>
              </span>
              Discussed New Pricing Models
              <span className="slds-col--bump-left">Yesterday</span>
            </li>
            <li className="slds-item slds-theme--shade slds-grid">
              <span className="slds-icon_container slds-icon-standard-email slds-m-right--x-small">
                <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="email" />
                <span className="slds-assistive-text">Email</span>
              </span>
              Re: Updated Proposals
              <span className="slds-col--bump-left">4 Hours Ago</span>
            </li>
            <li className="slds-item slds-theme--shade slds-grid">
              <span className="slds-icon_container slds-icon-standard-note slds-m-right--x-small">
                <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="note" />
                <span className="slds-assistive-text">Note</span>
              </span>
              Discuss Slides for Nov EBC
              <span className="slds-col--bump-left">2 Days Ago</span>
            </li>
          </ul>
        </div>
      </DockedComposerPanel>
    </div>
  },
  {
    id: 'voice-composer-call-logged',
    label: 'Log a Call',
    element:
    <div className="demo-only" style={{ height: '500px' }}>
      <DockedComposerPanel
        className="slds-is-open"
        bodyClassName="slds-docked-composer__body--form"
        header="Lei Chan"
        footer={ <button className="slds-button slds-button--brand slds-col--bump-left">Save</button> }
      >
        <fieldset className="slds-form slds-form--compound">
          <legend className="slds-assistive-text">Log a call</legend>
          <div className="form-element__group">
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
      </DockedComposerPanel>
    </div>
  }
];
