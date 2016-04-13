/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Modal from 'ui/components/modals/index.react';
import Button from 'ui/components/buttons/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

let demoHeight = '32rem';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Prompt = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <Modal isOpen={true} renderInline={true}>
    <div className={pf('modal__menu')}>
      <Button flavor="neutral">Upload from Device</Button>
      <Button flavor="neutral">Select a Salesforce File</Button>
      <Button flavor="neutral">Cancel</Button>
    </div>
  </Modal>
</div>;

let PromptWithHeader = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <Modal isOpen={true} renderInline={true}>
    <Modal.Header
      closeButton={false}
    >
      <h2 className={pf('text-heading--medium')}>
        Select a New Record Type
      </h2>
    </Modal.Header>

    <div className={pf('modal__menu')}>
      <Button flavor="neutral">Simple</Button>
      <Button flavor="neutral">Advanced</Button>
      <Button flavor="neutral">Partner</Button>
      <Button flavor="neutral">Person Accounts</Button>
      <Button flavor="neutral">Cancel</Button>
    </div>
  </Modal>
</div>;

let PromptWithHeaderAndTagline = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <Modal isOpen={true} renderInline={true}>
    <Modal.Header
      closeButton={false}
    >
      <h2 className={pf('text-heading--medium')}>
        Delete Account
      </h2>
      <p className={pf('m-top--x-small')}>
        Are you sure you want to delete this account?
      </p>
    </Modal.Header>

    <div className={pf('modal__menu')}>
      <Button flavor="destructive">Delete</Button>
      <Button flavor="neutral">Cancel</Button>
    </div>
  </Modal>
</div>;

let PromptWithHeaderAndTaglinePlusImage = props =>
<div className="demo-only" style={{height: demoHeight}}>
  <Modal isOpen={true} renderInline={true}>
    <Modal.Header
      closeButton={false}
    >
      <span className={pf('icon_container p-around--x-small icon-action-share-thanks m-bottom--x-small')}>
        <SvgIcon className={pf('icon icon-action-share-thanks icon--medium')} sprite="action" symbol="share_thanks" />
        <span className={pf('assistive-text')}>Share Thanks</span>
      </span>
      <h2 className={pf('text-heading--medium')}>
        Your Feedback is Valuable
      </h2>
      <p className={pf('m-top--x-small')}>
        We&rsquo;re glad to hear you&rsquo;re enjoying the app! Your
        input helps drive our products. Would you mind taking a moment
        to give us feedback through the App Store? We really appreciate
        your support.
      </p>
    </Modal.Header>

    <div className={pf('modal__menu')}>
      <Button flavor="brand">Rate Salesforce1</Button>
      <Button flavor="neutral">No, thanks</Button>
      <Button flavor="neutral">Remind Me Later</Button>
    </div>
  </Modal>
</div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Prompt />
  },
  {
    id: 'with-header',
    label: 'With Header',
    element: <PromptWithHeader />
  },
  {
    id: 'with-header-and-tagline',
    label: 'With Header and Tagline',
    element: <PromptWithHeaderAndTagline />
  },
  {
    id: 'with-header-and-tagline-plus-image',
    label: 'With Header and Tagline + image',
    element: <PromptWithHeaderAndTaglinePlusImage />
  }
];
