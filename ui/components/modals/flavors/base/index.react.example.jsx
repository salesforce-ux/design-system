/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
    <div className="slds-backdrop slds-backdrop--open" />
  </div>;

export let Modal = props =>
  <section
    role="dialog"
    tabIndex="-1"
    {...props}
    aria-describedby={ props['aria-describedby'] || 'modal-content-id-1' }
    className={classNames('slds-modal slds-fade-in-open', props.className)}
  >
    <div className="slds-modal__container">
      {props.children}
    </div>
  </section>;

export let ModalHeader = props =>
  <header className={classNames('slds-modal__header', props.className)}>
    {props.closeButton != 'false' ?
      <ButtonIcon
        className="slds-modal__close slds-button--icon-inverse"
        iconClassName="slds-button__icon--large"
        symbol="close"
        title="Close"
        assistiveText="Close" /> : null }
    {props.children}
  </header>;

export let ModalContent = props =>
  <div className={classNames('slds-modal__content', props.className)} id={ props['aria-describedby'] || 'modal-content-id-1' }>
    {props.children}
  </div>;

export let ModalFooter = props =>
  <footer className={classNames('slds-modal__footer', props.className)}>
    {props.children}
  </footer>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '640px'}}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Taglines = props =>
  <Demo style={{height: '640px'}}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-text-heading--medium">Modal Header</h2>
        <p className="slds-m-top--x-small">
          Here&rsquo;s a tagline if you need it. It is allowed to extend
          across mulitple lines, so I&rsquo;m making up content to show that
          to you. It is allowed to <a href="javascript:void(0);">contain links or be a link</a>.
        </p>
      </ModalHeader>
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Large = props =>
  <Demo style={{height: '640px'}}>
    <Modal className="slds-modal--large" aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Directional = props =>
  <Demo style={{height: '640px'}}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
      <ModalFooter className="slds-modal__footer--directional">
        <button className="slds-button slds-button--neutral">Skip This Step</button>
        <button className="slds-button slds-button--brand">Save &#38; Next</button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Headless = props =>
  <Demo style={{height: '640px'}}>
    <Modal aria-label="Meaningful description of the modal content">
      <ModalHeader className="slds-modal__header slds-modal__header--empty" />
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Save</button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Footless = props =>
  <Demo style={{height: '640px'}}>
    <Modal aria-labelledby="modal-heading-01">
      <ModalHeader>
        <h2 id="modal-heading-01" className="slds-text-heading--medium">Modal Header</h2>
      </ModalHeader>
      <ModalContent className="slds-p-around--medium">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
          nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </ModalContent>
    </Modal>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'taglines',
    label: 'Taglines',
    element: <Taglines />
  },
  {
    id: 'large',
    label: 'Large',
    element: <Large />
  },
  {
    id: 'directional',
    label: 'Directional',
    element: <Directional />
  },
  {
    id: 'headless',
    label: 'Header empty',
    element: <Headless />
  },
  {
    id: 'footless',
    label: 'Footer removed',
    element: <Footless />
  }
];
