/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Anchor = require('ui/components/page-headers/index.react');
const Button = require('ui/components/buttons/index.react');
const Truncate = require('ui/components/lib/truncate/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const MediaObject = require('ui/components/media-objects/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const Heading = require('ui/components/heading/index.react');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const image = (
  <ButtonIcon flavor="icon-bare" sprite="utility" symbol="down" assistiveText="Down" />
);

module.exports = (
  <Anchor flavor="object-home">
    <div className={pf('grid')}>
      {/* Open Left Aligned Heading + Icon Grouping */}
      <div className={pf('col has-flexi-truncate')}>
        <Heading flavor="label">Leads</Heading>
        <div className={pf('grid')}>
          <div className={pf('grid type-focus no-space')}>
            <h1 className={pf('page-header__title truncate')} title="My Leads (truncates)">My Leads (truncates)</h1>
            <ButtonIcon className={pf('shrink-none align-middle m-left--x-small')} flavor="icon-bare" sprite="utility" symbol="down" assistiveText="View More" />
          </div>
          <Button className={pf('shrink-none m-left--large')} flavor="icon-more" aria-haspopup="true">
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="settings" />
            <span className={pf('assistive-text')}>Settings</span>
            <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
          </Button>
          <Button className={pf('button-space-left m-right--medium shrink-none align-middle hide')} flavor="brand" aria-hidden="true">Save</Button>
        </div>
        {/* Close Grid */}
      </div>
      {/* Close Col */}
      {/* Open Right Aligned Icon Grouping */}
      <div className={pf('col no-flex align-bottom')}>
        <div className={pf('grid')}>
          <div className={pf('button-space-left')}>
            <Button flavor="icon-more" aria-haspopup="true">
              <SvgIcon className={pf('button__icon')} sprite="utility" symbol="table" />
              <span className={pf('assistive-text')}>Table</span>
              <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
            </Button>
          </div>
          {/* Close Button */}
          <div className={pf('button-group button-space-left')} role="group">
            <StatefulClass>
              <ButtonIcon
                flavor="icon-border"
                sprite="utility"
                symbol="chart"
                assistiveText="Chart" />
            </StatefulClass>
            <StatefulClass>
            <ButtonIcon
              flavor="icon-border"
              sprite="utility"
              symbol="filterList"
              assistiveText="Filter List" />
            </StatefulClass>
            <Button flavor="icon-more">
              <SvgIcon className={pf('button__icon')} sprite="utility" symbol="sort" />
              <span className={pf('assistive-text')}>Sort</span>
              <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>More</span>
            </Button>
          </div>
          {/* Close Button Group */}
          <div className={pf('button-group')} role="group">
            <Button flavor="neutral">
              New Lead
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
        {/* Close Grid */}
      </div>
      {/* Close Col */}
    </div>
    {/* Close Grid */}
    <Anchor.Detail>10 items • Sorted by Name</Anchor.Detail>
  </Anchor>
);
