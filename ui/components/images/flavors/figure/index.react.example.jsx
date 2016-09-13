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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Image = props =>
  <figure className={className('slds-image', props.className)}>
    <a href="javascript:void(0);" className={className('slds-image__crop', props.cropClass)}>
      { props.overlay ? <div className="slds-image--overlay"></div> : null }
      { props.image ?
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" /> :
        <span className="slds-image__icon slds-icon_container" title={ props.symbol || 'unknown file type' }>
          <SvgIcon className="slds-icon" sprite="doctype" symbol={ props.symbol || 'unknown' } />
          <span className="slds-assistive-text">{ props.title || 'Image Title' }</span>
        </span>
      }
    </a>
    { props.actions ?
      <ButtonGroup className="slds-image__actions">
        <ButtonIcon className="slds-button--icon-border-filled" symbol="download" assistiveText="Download" />
        <ButtonIcon className="slds-button--icon-border-filled" symbol="down" assitiveText="More Actions" />
      </ButtonGroup> : null }
    <figcaption className={className('slds-image__title', props.titleClass)}>
      { props.symbol ?
      <span className="slds-icon_container slds-m-right--x-small" title={ props.symbol || 'unknown file type' }>
        <SvgIcon className="slds-icon slds-icon--x-small" sprite="doctype" symbol={ props.symbol || 'unknown' } />
        <span className="slds-assistive-text">{ props.symbol || 'unknown file type' }</span>
      </span>: null }
      <span className="slds-image__text slds-truncate" title={ props.title || 'Image Title' }>
        { props.title || 'Image Title' }
        { props.overlay ? <span className="slds-assistive-text">more files</span> : null }
      </span>
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
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className="slds-image--card"
          cropClass="slds-image__crop--16-by-9"
          titleClass="slds-image__title--card"
          image />
      </div>
  },
  {
    id: 'figure-overlay',
    label: 'Overlay',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className="slds-image--card"
          cropClass="slds-image__crop--16-by-9"
          titleClass="slds-image__title--overlay slds-align--absolute-center slds-text-heading--large"
          title="22+"
          image
          overlay />
      </div>
  }
];
