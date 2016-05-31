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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Lorem from 'react-lorem-component';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
    <div className={pf('backdrop backdrop--open')} />
  </div>;

export let Modal = props =>
  <div className={className(pf('modal fade-in-open'), props.className)}
    aria-hidden="false"
    role="dialog">

    <div className={pf('modal__container')}>
      {props.children}
    </div>
  </div>;

export let ModalHeader = props =>
  <div className={className(pf('modal__header'), props.className)} {...props}>
    <ButtonIcon className={pf('modal__close')}
      flavor="icon-inverse"
      iconFlavor="large"
      sprite="action"
      symbol="close"
      assistiveText="Close">
    </ButtonIcon>
    {props.children}
  </div>;

export let ModalContent = props =>
  <div className={className(pf('modal__content'), props.className)}>
    {props.children}
  </div>;

export let ModalFooter = props =>
  <div className={className(pf('modal__footer'), props.className)}>
    {props.children}
  </div>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '640px'}}>
    <Modal>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Modal Header</h2>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
      <ModalFooter>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Taglines = props =>
  <Demo style={{height: '640px'}}>
    <Modal>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Modal Header</h2>
        <p className={pf('m-top--x-small')}>
          Here&rsquo;s a tagline if you need it. It is allowed to extend
          across mulitple lines, so I&rsquo;m making up content to show that
          to you. It is allowed to <a href="javascript:void(0);">contain links or be a link</a>.
        </p>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
      <ModalFooter>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Large = props =>
  <Demo style={{height: '640px'}}>
    <Modal className={pf('modal--large')}>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Modal Header</h2>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
      <ModalFooter>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Directional = props =>
  <Demo style={{height: '640px'}}>
    <Modal>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Modal Header</h2>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
      <ModalFooter className={pf('modal__footer--directional')}>
        <Button flavor="neutral">Skip This Step</Button>
        <Button flavor="neutral,brand">Save &#38; Next</Button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Headless = props =>
  <Demo style={{height: '640px'}}>
    <Modal>
      <ModalHeader className={pf('modal__header modal__header--empty')}>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
      <ModalFooter>
        <Button flavor="neutral">Cancel</Button>
        <Button flavor="neutral,brand">Save</Button>
      </ModalFooter>
    </Modal>
  </Demo>;

let Footless = props =>
  <Demo style={{height: '640px'}}>
    <Modal>
      <ModalHeader>
        <h2 className={pf('text-heading--medium')}>Modal Header</h2>
      </ModalHeader>
      <ModalContent className={pf('p-around--medium')}><Lorem count={2} paragraphLowerBound={5} /></ModalContent>
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
    id: 'Directional',
    label: 'Directional',
    element: <Directional />
  },
  {
    id: 'Headless',
    label: 'Header empty',
    element: <Headless />
  },
  {
    id: 'Footless',
    label: 'Footer removed',
    element: <Footless />
  }
];
