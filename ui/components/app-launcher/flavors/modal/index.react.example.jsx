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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let AppLauncherTile = props =>
  <div className={className(pf('app-launcher__tile'), props.className, props.flavor == 'small' ? pf('app-launcher__tile--small') : pf('box theme--default'))}>
    <div className={className(pf('app-launcher__tile-figure'), props.flavor == 'small' ? pf('app-launcher__tile-figure--small box--border theme--default') : pf('has-divider--right'))}>
      { props.symbol ? <SvgIcon className={pf('icon icon-standard-' + props.symbol + ' icon--large')} sprite="standard" symbol={ props.symbol } /> :
        <a href="#void" className={className(pf('avatar avatar--medium align--absolute-center'), props.figureClass)} tabIndex="-1">{props.objectInitials}</a>
      }
    </div>
    <div className={className(pf('app-launcher__tile-body'), props.flavor == 'small' ? pf('app-launcher__tile-body--small') : null)}>
      {props.children}
    </div>
  </div>;

let AppLauncherModal = props =>
  <Modal className={pf('modal--large app-launcher')}>
    <ModalHeader className={pf('app-launcher__header grid grid--align-spread grid--vertical-align-center')}>
      <h2 className={pf('text-heading--medium')}>App Launcher</h2>
      <div className={pf('app-launcher__header-search')}>
        <div className={pf('form-element')}>
          <label htmlFor="app-launcher-search" className={pf('form-element__label assistive-text')}>Find an app</label>
          <div className={pf('form-element__control input-has-icon input-has-icon--left')}>
            <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
            <input type="search" className={pf('input')} id="app-launcher-search" placeholder="Find an app" />
          </div>
        </div>
      </div>
      <button className={pf('button button--neutral')}>App Exchange</button>
    </ModalHeader>
    <ModalContent className={pf('app-launcher__body p-around--medium')}>
      <div className={pf('section is-open')}>
        <div className={pf('section__title')}>
          <button className={pf('button button--icon-container')}>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="switch" />
          </button>
          <h3 href="#void" className={pf('section__title-action')}>All Apps</h3>
        </div>
        <div className={pf('section__content')}>
          <ul className={pf('grid wrap')}>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile objectInitials="SC" figureClass={pf('icon-custom-27')}>
                <a href="#void">Sales Cloud</a>
                <p>The primary internal Salesforce org. Used to run our business...<a href="#void">More</a></p>
              </AppLauncherTile>
            </li>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile className={pf('box--border theme--default')} objectInitials="MC" figureClass={pf('icon-custom-59')}>
                <a href="#void">Marketing Cloud</a>
                <p>Salesforce Marketing Cloud lets businesses of any size grow...<a href="#void">More</a></p>
              </AppLauncherTile>
            </li>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile objectInitials="HR" figureClass={pf('icon-custom-10')}>
                <a href="#void">HR Concierge</a>
                <p>Community for managing employee benefits and time off.</p>
              </AppLauncherTile>
            </li>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile objectInitials="SC" figureClass={pf('icon-custom-27')}>
                <a href="#void">Sales Cloud</a>
                <p>The primary internal Salesforce org. Used to run our business...<a href="#void">More</a></p>
              </AppLauncherTile>
            </li>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile objectInitials="MC" figureClass={pf('icon-custom-59')}>
                <a href="#void">Marketing Cloud</a>
                <p>Salesforce Marketing Cloud lets businesses of any size grow...<a href="#void">More</a></p>
              </AppLauncherTile>
            </li>
            <li className={pf('size--1-of-3 p-around--x-small')}>
              <AppLauncherTile objectInitials="HR" figureClass={pf('icon-custom-10')}>
                <a href="#void">HR Concierge</a>
                <p>Community for managing employee benefits and time off.</p>
              </AppLauncherTile>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={pf('section is-open')}>
        <div className={pf('section__title')}>
          <button className={pf('button button--icon-container')}>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="switch" />
          </button>
          <h3 href="#void" className={pf('section__title-action')}>All Items</h3>
        </div>
        <div className={pf('section__content')}>
          <ul className={pf('grid wrap')}>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="account">
                <a href="#void" className={pf('truncate')}>Accounts</a>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="announcement">
                <div className={pf('truncate')}>
                  <a href="#void" className={pf('tr3uncate')}>Announcements</a>
                </div>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="approval">
                <a href="#void" className={pf('truncate')}>Approvals</a>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="campaign">
                <a href="#void" className={pf('truncate')}>Campaigns</a>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="case">
                <a href="#void" className={pf('truncate')}>Cases</a>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="coaching">
                <a href="#void" className={pf('truncate')}>Coaching</a>
              </AppLauncherTile>
            </li>
            <li className={pf('size--xx-small')}>
              <AppLauncherTile flavor="small" symbol="contact">
                <a href="#void" className={pf('truncate')}>Contacts</a>
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

export let states = [
  {
    id: 'app-launcher-modal',
    label: 'Base',
    element:
      <div className="demo-only" style={{ height: '640px' }}>
        <AppLauncherModal />
        <div className={pf('backdrop backdrop--open')} />
      </div>
  }
];
