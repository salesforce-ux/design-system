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
const BreadCrumbs = require('ui/components/breadcrumbs/index.react');
const {Crumb} = BreadCrumbs;
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const Control = require('ui/components/lib/control/flavors/popover');
const Popover = require('ui/components/lib/popover/index.react');
const Menu = require('ui/components/dropdowns/index.react');
const Heading = require('ui/components/heading/index.react');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
  <div className='demo-only' style={{height: '400px'}}>
    <Anchor flavor="object-home">
      <BreadCrumbs className={pf('m-bottom--xx-small')}>
        <Crumb href="#">Accounts</Crumb>
        <Crumb href="#">Company One</Crumb>
      </BreadCrumbs>
      <div className={pf('grid')}>
        <div className={pf('col has-flexi-truncate')}>
          <Heading flavor="medium" className={pf('truncate')} title="Contacts (will truncate)">Contacts (will truncate)</Heading>
        </div>
        <div className={pf('col no-flex align-bottom')}>
          <div className={pf('grid')}>
            <div className={pf('button-space-left')} aria-haspopup="true">
              <Control trigger="click" placement="bottom" target="#menu1">
                <Button flavor="icon-more" aria-haspopup="true">
                  <SvgIcon className={pf('button__icon')} sprite="utility" symbol="table" />
                  <span className={pf('assistive-text')}>Table</span>
                  <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
                </Button>
              </Control>
              <Popover id="menu1" visible={false}>
                <div className={pf('dropdown dropdown--small ')}>
                  <div className={pf('dropdown__header')}>
                    <span className={pf('text-heading--label')}>Display As</span>
                  </div>
                  <ul className={pf('dropdown__list')} role="menu">
                    <li className={pf('dropdown__item is-selected')} aria-selected="true">
                      <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
                        <p>
                          <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
                          Table
                        </p>
                        <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="table" />
                      </a>
                    </li>
                    <li className={pf('dropdown__item')}>
                      <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
                        <p>
                          <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
                          Cards
                        </p>
                        <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="kanban" />
                      </a>
                    </li>
                    <li className={pf('dropdown__item')}>
                      <a href="javascript:void(0)" className={pf('truncate')} role="menuitemradio">
                        <p>
                          <SvgIcon className={pf('icon icon--selected icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="check" />
                          Compact List
                        </p>
                        <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="side_list" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Popover>
            </div>
            <div className={pf('button-group button-space-left')}>
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
            <div className={pf('button-group')}>
              <Button flavor="neutral">
               Add Contact
              </Button>
              <Control trigger="click" placement="bottom" target="#menu2">
              <div className={pf('button--last')}>
              <ButtonIcon
              flavor="icon-border-filled"
              sprite="utility"
              symbol="down"
              assistiveText="More Actions" />
              </div>
              </Control>
              <Popover id="menu2" visible={false}>
                <Menu className={pf('dropdown--right')} style={{marginRight: '-1rem'}}>
                  <Menu.List isSelectable={false}>
                    <Menu.Item href="#rename">Action Item One</Menu.Item>
                    <Menu.Item href="#share">Action Item One</Menu.Item>
                  </Menu.List>
                </Menu>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <Anchor.Detail>10 items, sorted by name</Anchor.Detail>
    </Anchor>
  </div>
);

exports.code = (
  <div className='demo-only' style={{height: '400px'}}>
    <Anchor flavor="object-home">
      <BreadCrumbs className={pf('m-bottom--xx-small')}>
        <Crumb href="#">Accounts</Crumb>
        <Crumb href="#">Company One</Crumb>
      </BreadCrumbs>
      <div className={pf('grid')}>
        <div className={pf('col has-flexi-truncate')}>
          <Heading flavor="medium" className={pf('truncate')} title="Contacts (will truncate)">Contacts (will truncate)
          </Heading>
        </div>
        <div className={pf('col no-flex align-bottom')}>
          <div className={pf('grid')}>
            <div className={pf('button-space-left')} aria-haspopup="true">
              <Control trigger="click" placement="bottom" target="#menu1">
                <Button flavor="icon-more" aria-haspopup="true">
                  <SvgIcon className={pf('button__icon')} sprite="utility" symbol="table" />
                  <span className={pf('assistive-text')}>Table</span>
                  <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
                </Button>
              </Control>
              <Popover id="menu1" visible={false}>
              <Menu className={pf('dropdown--small')}>
                <Menu.Header>
                  <Menu.Title>Display As</Menu.Title>
                </Menu.Header>
                <Menu.List>
                  <Menu.Item className={pf('is-selected')} href="#rename">
                    <SvgIcon className={pf('icon icon--small icon--left')} sprite="standard" symbol="task2" />
                    Table <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="table" />
                  </Menu.Item>
                  <Menu.Item href="#share">
                    Cards <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="kanban" />
                  </Menu.Item>
                  <Menu.Item href="#delete">
                    Compact List <SvgIcon className={pf('icon icon--small icon--right')} sprite="utility" symbol="side_list" />
                  </Menu.Item>
                </Menu.List>
              </Menu>
              </Popover>
            </div>
            <div className={pf('button-group button-space-left')}>
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
            <div className={pf('button-group')}>
              <Button flavor="neutral">
               Add Contact
              </Button>
              <Control trigger="click" placement="bottom" target="#menu2">
              <div className={pf('button--last')}>
              <ButtonIcon
              flavor="icon-border-filled"
              sprite="utility"
              symbol="down"
              assistiveText="More Actions" />
              </div>
              </Control>
              <Popover id="menu2" visible={false}>
                <Menu className={pf('dropdown--right dropdown--medium')} style={{marginRight: '-1rem'}}>
                  <Menu.List>
                    <Menu.Item href="#rename">Action Item One</Menu.Item>
                    <Menu.Item href="#share">Action Item One</Menu.Item>
                  </Menu.List>
                </Menu>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <Anchor.Detail>10 items, sorted by name</Anchor.Detail>
    </Anchor>
  </div>
);
