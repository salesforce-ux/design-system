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
import Truncate from 'ui/components/lib/truncate/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Heading from 'ui/components/heading/index.react';
import StatefulClass from 'ui/components/lib/stateful.react';
import { prefix as pf } from 'app_modules/ui/util/component';


const icon = (
    <SvgIcon className={pf('button__icon button__icon--right no-flex')} sprite="utility" symbol="down" assistiveText="Down" />
);

const image = (
  <span className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon-standard-lead')} sprite="standard" symbol="lead" />
  </span>
);

export default (
  <div className={pf('page-header page-header--object-home')} role="banner">
    <div className={pf('grid')}>
      {/* Open Left Aligned Heading + Icon Grouping */}
      <div className={pf('col has-flexi-truncate')}>
        <MediaObject figureLeft={image} className={pf('no-space grow')}>
          <Heading className={pf('line-height--reset')} flavor="label">Leads</Heading>
          <button className={pf('button type-focus m-right--small grid truncate')} aria-haspopup="true">
            <div className={pf('grid grid--vertical-align-center truncate')}>
              <h1 className={pf('page-header__title truncate')} title="this should match My Leads">My Leads</h1>
              {icon}
            </div>
          </button>
        </MediaObject>
      </div>
      {/* Close Col */}
      {/* Open Right Aligned Icon Grouping */}
      <div className={pf('col no-flex grid align-top p-bottom--xx-small')}>
        <div className={pf('button-group')} role="group">
          <Button flavor="neutral">
            New Lead
          </Button>
          <Button flavor="neutral">
            Import Leads
          </Button>
          <div className={pf('button--last')}>
            <ButtonIcon
            flavor="icon-border-filled"
            sprite="utility"
            symbol="down"
            assistiveText="More Actions" />
          </div>
        </div>
        {/* Close Button Group */}
      </div>
      {/* Close Col */}
    </div>
    {/* Close Grid */}
    <div className={pf('grid')}>
      <div className={pf('col align-bottom')}>
        <p className={pf('text-body--small')}>10 items &bull; Sorted by Name</p>
      </div>
      <div className={pf('col no-flex grid align-bottom')}>
        <div className={pf('dropdown-trigger dropdown-trigger--click m-left--x-small')} aria-expanded="false">
          <Button flavor="icon-more" aria-haspopup="true">
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
            <span className={pf('assistive-text')}>List View Controls</span>
            <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
          </Button>
        </div>
        <Button className={pf('hide m-left--xx-small')} flavor="brand" aria-hidden="true">Save List</Button>
        <div className={pf('dropdown-trigger dropdown-trigger--click m-left--xx-small')} aria-expanded="false">
          <Button flavor="icon-more" aria-haspopup="true">
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="table" />
            <span className={pf('assistive-text')}>Displays</span>
            <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
          </Button>
        </div>
        <ButtonIcon
              flavor="icon-border"
              sprite="utility"
              symbol="edit"
              className={pf('m-left--xx-small')}
              assistiveText="Edit List" />
          <ButtonIcon
              flavor="icon-border"
              sprite="utility"
              symbol="refresh"
              assistiveText="Refresh" />
        <div className={pf('button-group')} role="group">
          <StatefulClass>
            <ButtonIcon
              flavor="icon-border"
              sprite="utility"
              symbol="chart"
              assistiveText="Charts" />
          </StatefulClass>
          <StatefulClass>
            <ButtonIcon
              flavor="icon-border"
              sprite="utility"
              symbol="filterList"
              assistiveText="Filters" />
          </StatefulClass>
        </div>
      </div>
    </div>
  </div>
);
