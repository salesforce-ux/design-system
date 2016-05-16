/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Heading from 'app_modules/site/components/page/heading';
import PageBody from 'app_modules/site/components/page/body';
import StickyNav from 'app_modules/site/components/sticky/nav';
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';
import g from 'app_modules/global';

export default (
  <PageBody anchorTitle="iOS" contentClassName={pf('grid wrap')}>
    <StickyNav>
      <div className={pf('site-menu--jump-links')}>
        <ul className={pf('list--vertical has-block-links')}>
          <li><a href="#setup">Setup</a></li>
          <li>
            <a href="#usage">Usage</a>
            <ul>
              <li><a href="#colors">Colors</a></li>
              <li><a href="#fonts">Fonts and Text Sizes</a></li>
              <li><a href="#icons">Icons</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </StickyNav>

    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--5-of-6 large-order--1')}>
      <div className={pf('container--large')}>

        <p className="site-text-introduction">
          Use our iOS integration to style your native iOS applications
          to be consistent with the <span className="site-nowrap">{g.displayName}</span>.
        </p>

        <p>The <a href="https://github.com/salesforce-ux/design-system-ios">{g.displayName} iOS Static Library</a> includes:</p>

        <ul>
          <li>Compiled Design Tokens</li>
          <li>The Salesforce Sans Font</li>
          <li>The {g.displayName} Icons</li>
          <li>Helper Classes</li>
        </ul>

        <Heading type="h2" id="setup" className={pf('site-text-heading--large')}>
          Setup
        </Heading>

        <p>Add this to your Podfile:</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`

pod 'DesignSystem'

        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <p>Then run:</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`

pod install

        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <Heading type="h2" id="usage" className={pf('site-text-heading--large')}>
          Usage
        </Heading>

        <p>While we encourage a holistic integration of the entire design system,
        you are free to include as many or as few of the following modules
        as you need in your app. Each module will import a small subset
        of design tokens or icons.</p>
      </div>

      <Heading type="h3" id="colors" className={pf('site-text-heading--medium')}>
        Colors
      </Heading>

      <h4 className="site-text-heading--label">Text Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsColorText:SLDSColorTextInverse];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Background Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsBackgroundColor:SLDSColorBackgroundAltInverse];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Border Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsBorderColor:SLDSColorBorderBrand];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Button Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsButtonColor:SLDSColorBtnBackgroundButtonBrand];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Input Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsInputColor:SLDSColorInputBackgroundInputActive];

        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Messaging Colors</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsMessagingColor:SLDSColorMsgBackgroundSuccess];
        `}</CodeBlock>
      </div>

      <Heading type="h3" id="fonts" className={pf('site-text-heading--medium')}>
        Fonts and Text Sizes
      </Heading>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIFont* lightFont = [UIFont sldsFontLightWithSize:SLDSFontSizeXLarge];

UIFont* regularFont = [UIFont sldsFontRegularWithSize:SLDSFontSizeXLarge];

UIFont* strongFont = [UIFont sldsFontStrongWithSize:SLDSFontSizeXLarge];
        `}</CodeBlock>
      </div>

      <Heading type="h3" id="icons" className={pf('site-text-heading--medium')}>
        Icons
      </Heading>

      <h4 className="site-text-heading--label">Action Icons</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* actionIcon = [UIImage sldsIconAction:SLDSIconActionApproval withSize:SLDSSquareIconSmall];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Custom Icons</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* customIcon = [UIImage sldsIconCustom:SLDSIconCustom1 withSize:SLDSSquareIconSmall];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Standard Icons</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* standardIcon = [UIImage sldsIconStandard:SLDSIconStandardAccount withSize:SLDSSquareIconSmall];
        `}</CodeBlock>
      </div>

      <h4 className="site-text-heading--label">Utility Icons</h4>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* utilityIcon = [UIImage sldsIconUtility:SLDSIconUtilityAnnouncement withSize:SLDSSquareIconSmall];
        `}</CodeBlock>
      </div>
    </div>
  </PageBody>
);
