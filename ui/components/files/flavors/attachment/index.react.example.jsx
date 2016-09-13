/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import { Image } from 'ui/components/images/flavors/figure/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let AttachmentLink = props =>
  <a href="javascript:void(0);" className={pf('media box grow text-link--reset')}>
    <div className={pf('media__figure medium-show')}>
      <div className={pf('image size--small')}>
        <div className={pf('image__crop image__crop--16-by-9')}>
          <img src="/assets/images/placeholder-img@16x9.jpg" alt={ props.title || 'Image Title' } />
        </div>
      </div>
    </div>
    <div className={pf('media__body')}>
      <h3 className={pf('text-heading--small')}>{ props.articleTitle || 'Article Title' }</h3>
      <p>{ props.articleDescription || 'Article Description' }</p>
      <span className={pf('text-body--small')}>{ props.articleTitle || 'http://www.linkurl.com' }</span>
    </div>
  </a>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'attachment-link',
    label: 'Link',
    element:
      <AttachmentLink
        articleTitle="Maui By Air The Best Way Around The Island"
        articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt." />
  },
  {
    id: 'attachment-file-with-image',
    label: 'File with image',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--card')}
          symbol="image"
          image />
      </div>
  },
  {
    id: 'attachment-file-no-image',
    label: 'File with no image',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--card')}
          symbol="pdf"
          title="Proposal.pdf" />
      </div>
  },
  {
    id: 'attachment-file-with-actions',
    label: 'File with actions',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <Image
          className={pf('image--card')}
          cropClass={pf('image__crop--16-by-9')}
          titleClass={pf('image__title--card')}
          symbol="image"
          actions
          image />
      </div>
  }
];
