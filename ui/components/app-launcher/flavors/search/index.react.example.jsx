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
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';
import { AppLauncherTile } from 'ui/components/app-launcher/flavors/tile/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let AppLauncherModal = props =>
  <Modal aria-labelledby="header43" className={pf('modal--large app-launcher')}>
    <ModalHeader className={pf('app-launcher__header grid grid--align-spread grid--vertical-align-center')}>
      <h2 id="header43" className={pf('text-heading--medium')}>App Launcher</h2>
      <div className={pf('app-launcher__header-search')}>
        <div className={pf('form-element')}>
          <label htmlFor="app-launcher-search" className={pf('form-element__label assistive-text')}>Find an app</label>
          <div className={pf('form-element__control input-has-icon input-has-icon--left')}>
            <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
            <input type="search" className={pf('input')} id="app-launcher-search" placeholder="sales" />
          </div>
        </div>
      </div>
      <button className={pf('button button--neutral')}>App Exchange</button>
    </ModalHeader>
    <ModalContent className={pf('app-launcher__content p-around--medium')}>
      <div className={pf('section is-open')}>
        <div className={pf('section__title')}>
          <button className={pf('button button--icon m-right--small')}>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="switch" />
            <span className={pf('assistive-text')}>Toggle visibility of section</span>
          </button>
          <h3>All Apps</h3>
        </div>
        <div className={pf('section__content')}>
          <ul className={pf('grid grid--pull-padded wrap')}>
            <li className={pf('col--padded grow-none size--1-of-1 medium-size--1-of-3')}>
              <AppLauncherTile objectInitials="SC" figureClass={pf('icon-custom-27')} draggable>
                <span className={pf('text-link')}><mark>Sales</mark> Cloud</span>
                <p>The primary internal Salesforce org. Used to run our...<span className={pf('text-link')}>More</span></p>
              </AppLauncherTile>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={pf('section is-open')}>
        <div className={pf('section__title')}>
          <button className={pf('button button--icon m-right--small')}>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="switch" />
            <span className={pf('assistive-text')}>Toggle visibility of section</span>
          </button>
          <h3>All Items</h3>
        </div>
        <div className={pf('section__content')}>
        <ul className={pf('grid grid--pull-padded wrap')}>
          <li className={pf('col--padded grow-none size--xx-small')}>
            <AppLauncherTile flavor="small" symbol="account">
              <p className={pf('truncate text-link')}><mark>Sales</mark> Invoices</p>
            </AppLauncherTile>
          </li>
          <li className={pf('col--padded grow-none size--xx-small')}>
            <AppLauncherTile flavor="small" symbol="announcement">
              <p className={pf('truncate text-link')}><mark>Sales</mark> Objects</p>
            </AppLauncherTile>
          </li>
        </ul>
        </div>
      </div>
    </ModalContent>
  </Modal>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '800px' }}>
    <AppLauncherModal />
    <div className={pf('backdrop backdrop--open')} />
  </div>
);
