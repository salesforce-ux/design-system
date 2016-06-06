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

export let AppLauncherTile = props =>
  <a href="javascript:void(0);" className={className(pf('app-launcher__tile text-link--reset'), props.className, props.flavor == 'small' ? pf('app-launcher__tile--small') : null, props.draggable ? pf('is-draggable') : null)}>
    <div className={className(pf('app-launcher__tile-figure'), props.flavor == 'small' ? pf('app-launcher__tile-figure--small') : null)}>
      { props.symbol ? <SvgIcon className={pf('icon icon-standard-' + props.symbol + ' icon--large')} sprite="standard" symbol={ props.symbol } /> :
        <span className={className(pf('avatar avatar--medium align--absolute-center'), props.figureClass)}>{props.objectInitials}</span>
      }
      { props.draggable ?
        <span className={pf('icon_container')} title="Drag item to a new location">
          <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="rows" />
          <span className={pf('assistive-text')}>Drag item to a new location</span>
        </span> : null}
    </div>
    <div className={className(pf('app-launcher__tile-body'), props.flavor == 'small' ? pf('app-launcher__tile-body--small') : null)}>
      {props.children}
    </div>
  </a>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'app-launcher-tile',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <AppLauncherTile objectInitials="SC" figureClass={pf('icon-custom-27')}>
          <span className={pf('text-link')}>Sales Cloud</span>
          <p>The primary internal Salesforce org. Used to run our...<span className={pf('text-link')}>More</span></p>
        </AppLauncherTile>
      </div>
  },
  {
    id: 'app-launcher-tile-draggable',
    label: 'Draggable',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <AppLauncherTile objectInitials="SC" figureClass={pf('icon-custom-27')} draggable>
          <span className={pf('text-link')}>Sales Cloud</span>
          <p>The primary internal Salesforce org. Used to run our...<span className={pf('text-link')}>More</span></p>
        </AppLauncherTile>
      </div>
  }
];
