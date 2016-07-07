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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Tile = props =>
  <div className={className(pf('tile'), props.className, props.actions ? pf('hint-parent') : null)}>
    { props.actions ?
      <div className={pf('grid grid--align-spread has-flexi-truncate')}>
        <p className={pf('truncate')} title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </p>
        <ButtonIcon
          className={pf('shrink-none')}
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </div>
    :
      <p className={pf('truncate')} title={ props.title || 'Title' }>
        <a href="javascript:void(0);">{ props.title || 'Title' }</a>
      </p>
    }
    <div className={pf('tile__detail text-body--small')}>
      { props.children }
    </div>
  </div>;

export let TileMedia = props =>
  <div className={className(pf('tile media'), props.className, props.actions ? pf('hint-parent') : null)}>
    { props.media ?
      <div className={pf('media__figure')}>
        { props.media }
      </div>
    : null }
    <div className={pf('media__body')}>
      { props.actions ?
        <div className={pf('grid grid--align-spread has-flexi-truncate')}>
          <p className={pf('truncate')} title={ props.title || 'Title' }>
            <a href="javascript:void(0);">{ props.title || 'Title' }</a>
          </p>
          <ButtonIcon
            className={pf('shrink-none')}
            flavor="icon-border-filled,icon-x-small"
            iconFlavor="hint,small"
            sprite="utility"
            symbol="down"
            assistiveText="Show More" />
        </div>
      :
        <p className={pf('truncate')} title={ props.title || 'Title' }>
          <a href="javascript:void(0);">{ props.title || 'Title' }</a>
        </p>
      }
      <div className={pf('tile__detail text-body--small')}>
        { props.children }
      </div>
    </div>
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile',
    label: 'Default',
    element:
      <Tile title="Salesforce UX">
        <p className={pf('truncate')}>26 Members</p>
      </Tile>
  },
  {
    id: 'tile-with-action',
    label: 'Default with actions',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Salesforce UX" actions>
          <p className={pf('truncate')}>26 Members</p>
        </Tile>
      </div>
  }
];
