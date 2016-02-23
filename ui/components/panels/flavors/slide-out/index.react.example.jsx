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
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only grid')} {...props} style={{ height: '800px', maxWidth: '420px' }}>
    {props.children}
  </div>;

let Checkbox = props =>
  <label className={className(pf('checkbox'), props.className)} htmlFor={props.id}>
    <input name="checkbox" type="checkbox" id={props.id} disabled={props.disabled} />
    <span className={pf('checkbox--faux')}>
      {props.children}
    </span>
  </label>;

let Panel = props =>
  <div className={className(pf('panel grid grid--vertical nowrap'), props.className)}>
    {props.children}
  </div>;

let PanelBody = props =>
  <div className={pf('form--stacked grow scrollable--y')}>
    {props.children}
  </div>;

let PanelSection = props =>
  <div className={className(pf('panel__section'), props.className)}>
    {props.children}
  </div>;

let Tile = props =>
  <div className={pf('media tile')}>
    <div className={pf('media__figure')}>
      <Checkbox id="completed" />
    </div>
    <div className={pf('media__body')}>
      <p className={pf('tile__title truncate text-heading--small')}>
        <a href="#void">Follow up on '15 contact</a>
      </p>
      <div className={pf('tile__detail text-body--small')}>
        <p className={pf('truncate')}>Jun 18</p>
        <div className={pf('button-group m-top--small')} role="group">
          <Button flavor="neutral" className={pf('grow')}>Edit</Button>
          <Button flavor="neutral" className={pf('grow')}>Follow Up</Button>
          <Button flavor="neutral" className={pf('grow')}>Delete</Button>
          <ButtonIcon
            flavor="icon-border-filled"
            className={pf('toggle-visibility')}
            sprite="utility"
            symbol="down"
            assistiveText="More Actions"/>
        </div>
      </div>
    </div>
  </div>;

let FormElementStatic = props =>
  <div className={pf('form-element hint-parent has-divider--bottom')}>
    <span className={pf('form-element__label')}>{props.label}</span>
    <div className={pf('form-element__control')}>
      <span className={pf('form-element__static')}>{props.text}</span>
    </div>
  </div>;

let FormElementStaticInline = props =>
  <div className={pf('form-element hint-parent has-divider--bottom')}>
    <ButtonIcon
      flavor="icon-bare"
      className={pf('float--right')}
      iconFlavor="hint,small"
      sprite="utility"
      symbol="edit"
      assistiveText="Edit this Field"/>
    <span className={pf('form-element__label')}>{props.label}</span>
    <div className={pf('form-element__control')}>
      <span className={pf('form-element__static')}>{props.text}</span>
    </div>
  </div>;

let FormElementStaticLonform = props =>
  <div className={pf('form-element hint-parent has-divider--bottom')}>
    <span className={pf('form-element__label')}>{props.label}</span>
    <div className={pf('form-element__control')}>
      <span className={pf('form-element__static text-longform')}>{props.text}</span>
    </div>
  </div>;

let FormElementStaticLonformInline = props =>
  <div className={pf('form-element hint-parent has-divider--bottom')}>
    <ButtonIcon
      flavor="icon-bare"
      className={pf('float--right')}
      iconFlavor="hint,small"
      sprite="utility"
      symbol="edit"
      assistiveText="Edit this Field"/>
    <span className={pf('form-element__label')}>{props.label}</span>
    <div className={pf('form-element__control')}>
      <span className={pf('form-element__static text-longform')}>{props.text}</span>
    </div>
  </div>;

let FormElement = props =>
  <div className={pf('form-element')}>
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control')}>
      {props.children}
    </div>
  </div>;

let Lookup = props =>
  <div className={pf('form-element lookup has-selection')} data-select="single" data-scope="single" data-typeahead="false">
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control')}>
      {props.children}
    </div>
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <Panel>
      <PanelBody>
        <PanelSection className={pf('has-divider--bottom')}>
          <Tile />
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Task Information</h3>
          <FormElementStatic label="Subject" text="Follow up on '15 Contract" />
          <FormElementStatic label="Due Date" text="6/18/16" />
          <FormElementStatic label="Assigned TO" text="Jason Dewar" />
          <FormElementStatic label="Name" text="Adam Choi" />
          <FormElementStatic label="Related To" text="Tesla Cloudhub + Anypoint Connectors" />
          <FormElementStaticLonform label="Comments" text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Additional Information</h3>
          <FormElementStatic label="Status" text="Not Started" />
          <FormElementStatic label="Priority" text="Normal" />
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>;

let StateB = props =>
  <Demo>
    <Panel>
      <PanelBody>
        <PanelSection className={pf('has-divider--bottom')}>
          <Tile />
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Task Information</h3>
          <FormElementStaticInline label="Subject" text="Follow up on '15 Contract" />
          <FormElementStaticInline label="Due Date" text="6/18/16" />
          <FormElementStaticInline label="Assigned TO" text="Jason Dewar" />
          <FormElementStaticInline label="Name" text="Adam Choi" />
          <FormElementStaticInline label="Related To" text="Tesla Cloudhub + Anypoint Connectors" />
          <FormElementStaticLonformInline label="Comments" text="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Additional Information</h3>
          <FormElementStaticInline label="Status" text="Not Started" />
          <FormElementStaticInline label="Priority" text="Normal" />
        </PanelSection>
      </PanelBody>
    </Panel>
  </Demo>;

let StateC = props =>
  <Demo>
    <Panel>
      <PanelBody>
        <PanelSection className={pf('has-divider--bottom')}>
          <Tile />
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Task Information</h3>
          <FormElement label="Subject" id="text-input-01">
            <input className={pf('input')} id="text-input-01" defaultValue="Follow up on '15 Contract" />
          </FormElement>
          <FormElement label="Due Date" id="date-input-01">
            <input className={pf('input')} id="date-input-01" defaultValue="6/18/16" />
          </FormElement>
          <Lookup label="Assigned To" id="text-input-02">
            <div className={pf('pill_container show')}>
              <a href="#void" className={pf('pill')}>
                <SvgIcon className={pf('icon icon-standard-avatar pill__icon')} sprite="standard" symbol="avatar" />
                <span className={pf('pill__label')}>Jason Dewar</span>
                <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
              </a>
            </div>
          </Lookup>
          <Lookup label="Name" id="text-input-03">
            <div className={pf('pill_container show')}>
              <a href="#void" className={pf('pill')}>
                <SvgIcon className={pf('icon icon-standard-avatar pill__icon')} sprite="standard" symbol="avatar" />
                <span className={pf('pill__label')}>Adam Choi</span>
                <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
              </a>
            </div>
          </Lookup>
          <Lookup label="Related To" id="text-input-04">
            <div className={pf('pill_container show')}>
              <a href="#void" className={pf('pill')}>
                <SvgIcon className={pf('icon icon-standard-account pill__icon')} sprite="standard" symbol="account" />
                <span className={pf('pill__label')}>Tesla Cloudhub + Anypoint Connectors</span>
                <ButtonIcon className={pf('pill__remove')} flavor="icon-bare" sprite="utility" symbol="close" assistiveText="Remove" />
              </a>
            </div>
          </Lookup>
          <FormElement label="Comments" id="text-input-05">
            <textarea className={pf('textarea')} id="text-input-05" defaultValue="Adam was open to doing more business in the 4th quarter. Follow up with marketing demo and email templates." />
          </FormElement>
        </PanelSection>
        <PanelSection>
          <h3 className={pf('text-heading--small m-bottom--medium')}>Additional Information</h3>
          <FormElement label="Status" id="non-text-input-01">
            <div className={pf('select_container')}>
              <select className={pf('select')} id="non-text-input-01">
                <option>Not Started</option>
              </select>
            </div>
          </FormElement>
          <FormElement label="Priority" id="non-text-input-02">
            <div className={pf('select_container')}>
              <select className={pf('select')} id="non-text-input-02">
                <option>Normal</option>
              </select>
            </div>
          </FormElement>
        </PanelSection>
      </PanelBody>
      <div className={pf('panel__actions has-divider--top')}>
        <div className={pf('grid grid--align-center x-small-buttons--horizontal')}>
          <Button type="button" flavor="neutral">Cancel</Button>
          <Button type="button" flavor="brand">Save</Button>
        </div>
      </div>
    </Panel>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'panel-form',
    label: 'Default',
    element: <StateA />
  },
  {
    id: 'panel-form-edit-mode',
    label: 'Form with Inline Edit',
    element: <StateB />
  },
  {
    id: 'panel-form-edit-mode-active',
    label: 'Form with Inline Edit Active',
    element: <StateC />
  }
];
