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
import { ButtonGroup } from 'ui/components/button-groups/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/buttons/flavors/icon/index.react.example';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Image = props =>
  <figure className={className(pf('image'), props.className)}>
    <div className={className(pf('image__crop'), props.cropClass)}>
      { props.image ?
        <img src="/assets/images/placeholder-img@16x9.jpg" alt={ props.title || 'Image Title' } /> :
        <span className={pf('image__icon icon_container')} title={ props.symbol + ' file type' || 'unknown file type' }>
          <SvgIcon className={pf('icon')} sprite="doctype" symbol={ props.symbol || 'unknown' } />
          <span className={pf('assistive-text')}>{ props.symbol + ' file type' || 'unknown file type' }</span>
        </span>
      }
      { props.actions ?
        <ButtonGroup className={pf('image__actions')}>
          <ButtonIcon className={pf('button--icon-border-filled')} symbol="download" assistiveText="Download" />
          <ButtonIcon className={pf('button--icon-border-filled')} symbol="down" assitiveText="More Actions" />
        </ButtonGroup> : null }
    </div>
    <figcaption className={className(pf('image__title'), props.titleClass)}>
      { props.symbol ?
      <span className={pf('icon_container m-right--x-small')} title={ props.symbol + ' file type' || 'unknown file type' }>
        <SvgIcon className={pf('icon icon--x-small')} sprite="doctype" symbol={ props.symbol || 'unknown' } />
        <span className={pf('assistive-text')}>{ props.symbol + ' file type' || 'unknown file type' }</span>
      </span>: null }
      <span className={pf('truncate')} title={ props.title || 'Image Title' }>{ props.title || 'Image Title' }</span>
    </figcaption>
  </figure>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'figure-card',
    label: 'Card',
    element:
      <div className="demo-only" style={{ width: '50%' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--card')}
          image />
      </div>
  },
  {
    id: 'figure-overlay',
    label: 'Overlay',
    element:
      <div className="demo-only" style={{ width: '50%' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--overlay align--absolute-center')}
          image />
      </div>
  }
];
