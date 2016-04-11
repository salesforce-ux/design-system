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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { Panel } from 'ui/components/panels/flavors/detail/index.react.example';
import { PanelBody } from 'ui/components/panels/flavors/detail/index.react.example';
import { PanelSection } from 'ui/components/panels/flavors/detail/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only grid')} style={{ height: '800px', maxWidth: '420px', overflow: 'hidden' }}>
    {props.children}
  </div>;

export let Filters = props =>
  <div className={className(pf('filters'), props.className)}>
    {props.children}
  </div>;

export let FiltersHeader = props =>
  <div className={className(pf('filters__header grid has-divider--bottom-space'), props.className)}>
    { props.children }
  </div>;

export let FiltersBody = props =>
  <div className={pf('filters__body')}>
    {props.children}
  </div>;

export let FiltersFooter = props =>
  <div className={pf('filters__footer grid shrink-none')}>
    <a href="#void">Add Filter</a>
    <a href="#void" className={pf('col--bump-left')}>Remove All</a>
  </div>;

export let FilterObject = props =>
  <li className={pf('list__item')}>
    <div className={className(pf('filters__item grid grid--vertical-align-center'), props.className)}>
      <a href="#void" className={pf('grow has-blur-focus')}>
        {props.type ? (<p className={pf('text-body--small')}>{props.type}</p>) : null }
        <p>{props.children}</p>
      </a>
      { props.removable ? removeButton : null }
    </div>
    { props.errorMessage ? (<p className={pf('text-color--error m-top--xx-small')}>{props.errorMessage}</p>) : null }
  </li>;

const removeButton = (
  <ButtonIcon
    flavor="icon-bare,icon-small"
    iconFlavor="hint"
    sprite="utility"
    symbol="close"
    assistiveText="Remove" />
);

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Panel className={pf('panel--filters')}>
      <PanelBody className={pf('grid grid--vertical')}>
        <Filters>
          <FiltersHeader>
            <h4 className={pf('align-middle text-heading--small')}>Filter</h4>
            <ButtonIcon
              flavor="icon-bare,icon-small"
              className="col--bump-left"
              sprite="utility"
              symbol="forward"
              assistiveText="Close Filter Panel" />
          </FiltersHeader>
          <FiltersBody>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <p className={pf('text-body--small m-vertical--x-small')}>Matching all these filters</p>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Created Date" removable>equals THIS WEEK</FilterObject>
              <FilterObject type="List Price" removable>greater than "500"</FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>;

let NewFilter = props =>
  <Demo>
    <Panel className={pf('panel--filters')}>
      <PanelBody className={pf('grid grid--vertical')}>
        <Filters>
          <FiltersHeader className={pf('grid--align-spread')}>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="brand">Save</Button>
          </FiltersHeader>
          <FiltersBody>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <p className={pf('text-body--small m-vertical--x-small')}>Matching all these filters</p>
            <ul className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Created Date" removable>equals THIS WEEK</FilterObject>
              <FilterObject type="List Price" removable>greater than "500"</FilterObject>
              <FilterObject className={pf('is-new')} removable>New Filter</FilterObject>
            </ul>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>;

let ErrorPanel = props =>
  <Demo>
    <Panel className={pf('panel--filters')}>
      <PanelBody className={pf('grid grid--vertical')}>
        <Filters>
          <FiltersHeader className={pf('grid--align-spread')}>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="brand">Save</Button>
          </FiltersHeader>
          <FiltersBody>
            <div className={pf('text-color--error m-bottom--x-small')} aria-live="assertive">Filters could not be applied. Please fix the validation errors below.</div>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <p className={pf('text-body--small m-vertical--x-small')}>Matching all these filters</p>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Created Date" removable>equals THIS WEEK</FilterObject>
              <FilterObject type="List Price" removable>greater than "500"</FilterObject>
              <FilterObject className={pf('has-error')} type="Stage" errorMessage="Error Message" removable>equals "Red"</FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>;

let Locked = props =>
  <Demo>
    <Panel className={pf('panel--filters')}>
      <PanelBody className={pf('grid grid--vertical')}>
        <Filters>
          <FiltersHeader>
            <h4 className={pf('align-middle text-heading--small')}>Filter</h4>
            <ButtonIcon
              flavor="icon-bare,icon-small"
              className="col--bump-left"
              sprite="utility"
              symbol="forward"
              assistiveText="Close Filter Panel" />
          </FiltersHeader>
          <FiltersBody>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <p className={pf('text-body--small m-vertical--x-small')}>Matching all these filters</p>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject type="Created Date" removable>equals THIS WEEK</FilterObject>
              <FilterObject type="List Price" removable>greater than "500"</FilterObject>
            </ol>
            <p className={pf('text-body--small m-vertical--x-small grid')}>
              Locked Filters
              <SvgIcon className={pf('icon icon--x-small icon-text-default m-left--x-small')} sprite="utility" symbol="lock" />
            </p>
            <ol className={pf('list--vertical list--vertical-space')}>
              <FilterObject className={pf('is-locked')} type="Name">equals "ACME"</FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'filtering-default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'filtering-new-object',
    label: 'New filter',
    element: <NewFilter />
  },
  {
    id: 'filtering-error',
    label: 'Error',
    element: <ErrorPanel />
  },
  {
    id: 'filtering-locked',
    label: 'Locked Filters',
    element: <Locked />
  }
];
