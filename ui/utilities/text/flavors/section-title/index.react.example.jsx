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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Section = props =>
  <div className={className(pf('section'), props.className)}>
    {props.children}
  </div>;

let SectionContent = props =>
  <div className={className(pf('section__content'), props.className)}>
    {props.children}
  </div>;

let SectionTitle = props =>
  <div className={className(pf('section__title'), props.className)}>
    {props.children}
  </div>;

let SectionTitleAction = props =>
  <h3 href="javascript:void(0);" className={className(pf('section__title-action'), props.className)}>
    <button className={pf('button button--icon-container')}>
      <SvgIcon className={pf('button__icon')} sprite="utility" symbol="switch" />
    </button>
    {props.children}
  </h3>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <SectionTitle>Section Title</SectionTitle>
  </Demo>;

let Closed = props =>
  <Demo>
    <Section>
      <SectionTitle>
        <SectionTitleAction>Section Title</SectionTitleAction>
      </SectionTitle>
      <SectionContent />
    </Section>
  </Demo>;

let Open = props =>
  <Demo>
    <Section className={pf('is-open')}>
      <SectionTitle>
        <SectionTitleAction>Section Title</SectionTitleAction>
      </SectionTitle>
      <SectionContent>
        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.</p>
      </SectionContent>
    </Section>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'section-title',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'section-title-closed',
    label: 'Closed',
    element: <Closed />
  },
  {
    id: 'section-title-open',
    label: 'Open',
    element: <Open />
  }
];
