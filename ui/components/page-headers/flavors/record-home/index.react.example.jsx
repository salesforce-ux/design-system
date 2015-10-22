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
const Heading = require('ui/components/heading/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const MediaObject = require('ui/components/media-objects/index.react');
const Control = require('ui/components/lib/control/flavors/popover');
const Popover = require('ui/components/lib/popover/index.react');
const Menu = require('ui/components/dropdowns/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const image = (
  <SvgIcon className={pf('icon icon--large icon-standard-user')} sprite="standard" symbol="user" />
);

exports.preview = (
  <div className='demo-only' style={{height: '400px'}}>
    <Anchor flavor="home">
      <div className={pf('grid')}>
        <div className={pf('col has-flexi-truncate')}>
          <MediaObject figureLeft={image}>
            <Heading flavor="label">Record Type</Heading>
            <div className={pf('grid')}>
              <Heading flavor="medium" className={pf('m-right--small truncate align-middle')} title="Record Title (truncates)">Record Title (truncates)</Heading>
              <div className={pf('shrink-none')}>
                <StatefulClass>
                  <Button flavor="neutral" className={pf('not-selected')} aria-live="assertive">
                    <span className={pf('text-not-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />Follow</span>
                    <span className={pf('text-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />Following</span>
                    <span className={pf('text-selected-focus')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />Unfollow</span>
                  </Button>
                </StatefulClass>
              </div>
            </div>
          </MediaObject>
        </div>
        <div className={pf('col no-flex align-bottom')}>
          <div className={pf('button-group button-space-left')} role="group">
            <Button flavor="neutral">
             Edit
            </Button>
            <Button flavor="neutral">
             Delete
            </Button>
            <Button flavor="neutral">
             Clone
            </Button>
            <Control trigger="click" placement="bottom" target="#menu1">
              <div className={pf('button--last')}>
              <ButtonIcon
                flavor="icon-border-filled"
                className={pf('toggle-visibility')}
                sprite="utility"
                symbol="down"
                assistiveText="More" />
              </div>
            </Control>
            <Popover id="menu1" visible={false}>
              <Menu className={pf('dropdown--right dropdown--nubbin-top')} style={{marginRight: '-1rem'}}>
                <Menu.Header>
                  <Menu.Title>List View Controls</Menu.Title>
                </Menu.Header>
                <Menu.List isSelectable={false}>
                  <Menu.Item href="#rename">Rename...</Menu.Item>
                  <Menu.Item href="#share">Share...</Menu.Item>
                  <Menu.Item href="#delete">Delete</Menu.Item>
                  <Menu.Item href="#save">Save</Menu.Item>
                  <Menu.Item href="#save_as">Save As...</Menu.Item>
                  <Menu.Item href="#discard">Discard Changes to List</Menu.Item>
                </Menu.List>
              </Menu>
            </Popover>
          </div>
        </div>
      </div>
      <Anchor.DetailRow>
        <Anchor.DetailItem>
          <Anchor.DetailLabel>
            <p className={pf('text-heading--label truncate')} title="Field 1">Field 1</p>
          </Anchor.DetailLabel>
          <Anchor.DetailBody>
            <p className={pf('text-body--regular truncate')} title="Description that demonstrates truncation with a long text field">
              Description that demonstrates truncation with a long text field
            </p>
          </Anchor.DetailBody>
        </Anchor.DetailItem>

        <Control trigger="click" placement="bottom" target="#menu2">
          <Anchor.DetailItem>
            <Anchor.DetailLabel>
              <p className={pf('text-heading--label truncate')} title="Field 2 (3)">Field 2 (3)
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="down"
                assistiveText="More Actions" />
              </p>
            </Anchor.DetailLabel>
            <Anchor.DetailBody>
              <p className={pf('text-body--regular')}>Multiple Values</p>
            </Anchor.DetailBody>
            <Popover id="menu2" visible={false}>
              <Menu className={pf('dropdown--large dropdown--nubbin-top')} style={{marginTop: '-.5rem'}}>
                <dl className={pf('p-left--small')}>
                  <dt className={pf('text-heading--label')}>Field Label</dt>
                  <dd>Description of the Field Label</dd>
                </dl>
              </Menu>
            </Popover>
          </Anchor.DetailItem>
        </Control>
        <Anchor.DetailItem>
          <Anchor.DetailLabel>
            <p className={pf('text-heading--label truncate')} title="Field 3">Field 3</p>
          </Anchor.DetailLabel>
          <Anchor.DetailBody>
            <a href="#">Hyperlink</a>
          </Anchor.DetailBody>
        </Anchor.DetailItem>
        <Anchor.DetailItem>
          <Anchor.DetailLabel>
            <p className={pf('text-heading--label truncate')} title="Field 4">Field 4</p>
          </Anchor.DetailLabel>
          <Anchor.DetailBody>
            <p>
              <Truncate amount={45} title="Description (2-line truncation—must use JS to truncate.)">
                Description (2-line truncation—must use JS to truncate.)
              </Truncate>
            </p>
          </Anchor.DetailBody>
        </Anchor.DetailItem>
      </Anchor.DetailRow>
    </Anchor>
  </div>
);

exports.code = (
  <Anchor flavor="home">
    <div className={pf('grid')}>
      <div className={pf('col has-flexi-truncate')}>
        <MediaObject figureLeft={image}>
          <Heading flavor="label">Record Type</Heading>
          <div className={pf('grid')}>
            <Heading flavor="medium" className={pf('m-right--small truncate align-middle')} title="Record Title">Record Title</Heading>
            <div className={pf('col shrink-none')}>
              <Button flavor="neutral" className={pf('not-selected')} aria-live="assertive">
                <span className={pf('text-not-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />Follow</span>
                <span className={pf('text-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />Following</span>
                <span className={pf('text-selected-focus')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />Unfollow</span>
              </Button>
            </div>
          </div>
        </MediaObject>
      </div>
      <div className={pf('col no-flex align-bottom')}>
        <div className={pf('button-group')} role="group">
          <Button flavor="neutral">
           Edit
          </Button>
          <Button flavor="neutral">
           Delete
          </Button>
          <Button flavor="neutral">
           Clone
          </Button>
          <div className={pf('button--last')}>
            <ButtonIcon
              flavor="icon-border-filled"
              sprite="utility"
              symbol="down"
              assistiveText="More" />
          </div>
        </div>
      </div>
    </div>
    <Anchor.DetailRow>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('truncate')} title="Field 1">Field 1</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p className={pf('text-body--regular truncate')} title="Description that demonstrates truncation with a long text field">
            Description that demonstrates truncation with a long text field
          </p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field2 (3)">Field 2 (3)
          <ButtonIcon
            flavor="icon-bare"
            iconFlavor="small"
            sprite="utility"
            symbol="down"
            assistiveText="More Actions" />
          </p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p className={pf('text-body--regular')}>Multiple Values</p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field 3">Field 3</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <a href="#">Hyperlink</a>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field 4">Field 4</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p>
            <Truncate amount={50}>
              Description (2-line truncation—must use JS to truncate.)
            </Truncate>
          </p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
    </Anchor.DetailRow>
  </Anchor>
);

