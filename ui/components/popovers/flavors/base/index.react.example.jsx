/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let Popover = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      className={ classNames('slds-popover', props.className) }
      role="dialog"
      aria-labelledby={ !props.header && props.headerTitle ? headingUniqueId : props.headingId }
      aria-label={ !props.header && !props.headerTitle ? props.title : null }
      aria-describedby={ bodyUniqueId }>
      { props.closeButton ?
        <ButtonIcon
          className={ classNames('slds-button--icon-small slds-float--right slds-popover__close', props.inverse ? 'slds-button--icon-inverse' : 'slds-button--icon') }
          symbol="close"
          assistiveText="Close dialog"
          title="Close dialog"
        />
      : null }
      { !props.header && props.headerTitle ?
        <Header
          id={ headingUniqueId }
          className={ props.headerClassName }
          title={ props.headerTitle || 'Heading Title' }
          symbol={ props.headerIconName }
          assistiveText={ props.headerAssistiveText }
        />
      : props.header }
      <div className={ classNames('slds-popover__body', props.bodyClassName) } id={ bodyUniqueId }>
        {props.children}
      </div>
      { props.footer ?
        <footer className={ classNames('slds-popover__footer', props.footerClassName) }>
          { props.footer }
        </footer>
      : null }
    </section>
  );
};

let Header = props =>
  <header className={ classNames('slds-popover__header', props.className) }>
    { props.symbol ?
      <span className="slds-icon_container slds-m-right--small" title={ props.assistiveText }>
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol={ props.symbol } />
        <span className="slds-assistive-text">{ props.assistiveText }</span>
      </span>
    : null }
    <h2 id={ props.id } className="slds-text-heading--small">{ props.title }</h2>
  </header>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Popover
        className="slds-nubbin--left"
        closeButton={ true }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'header',
    label: 'With Header',
    element:
      <Popover
        className="slds-nubbin--left"
        headerTitle="Header Title"
        closeButton={ true }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  },
  {
    id: 'footer',
    label: 'With Footer',
    element:
      <Popover
        className="slds-nubbin--left"
        footer={ <p>Footer Item</p> }
        closeButton={ true }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Popover>
  }
];
