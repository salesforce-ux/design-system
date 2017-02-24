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
import g from 'app_modules/global';



export default (
  <PageBody anchorTitle="iOS">
    <div className="slds-grid slds-wrap">
      <StickyNav>
        <div className="site-menu--jump-links">
          <ul className="slds-list--vertical slds-has-block-links">
            <li><a href="#setup">Setup</a></li>
            <li><a href="#swift-usage">Swift Usage</a></li>
            <li><a href="#obj-c-usage">Obj-C Usage</a></li>
          </ul>
        </div>
      </StickyNav>

      <div className="site-main-content slds-col slds-col-rule--right slds-size--1-of-1 slds-large-size--5-of-6 slds-large-order--1">
        <div className="slds-container--large">

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

          <p>
            While we encourage a holistic integration of the entire design system,
            you are free to include as many or as few of the following modules
            as you need in your app. Each module will import a small subset
            of design tokens or icons.
          </p>

          <Heading textLabel="Setup" type="h2" id="setup" className="site-text-heading--large">
            Setup
          </Heading>

          <p>The iOS Design Tokesn use <a href="https://cocoapods.org/">Cocoapods</a> to integrate with your project. If you are already set up with pods add the line below to your Podfile. Otherwise go to <a href="https://cocoapods.org/">cocoapods.org</a> to get set up.</p>
        </div>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`

pod 'DesignSystem'

          `}</CodeBlock>
        </div>

        <div className="slds-container--large">
          <p>Then run:</p>
        </div>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`

pod install

          `}</CodeBlock>
        </div>

              <div className="slds-container--large">
          <Heading textLabel="Swift Usage" type="h2" id="swift-usage" className="site-text-heading--large">
            Swift Usage
          </Heading>
        </div>

        <Heading textLabel="Swift Integration" type="h3" id="swift-integration" className="site-text-heading--medium">
          Swift Integration
        </Heading>

        <p className="slds-m-top--small">To use the SLDS library in Swift, create a bridging header:</p>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#ifndef slds_bridging_header_h
#define slds_bridging_header_h

#import <SalesforceDesignSystem/SalesforceDesignSystemExtended.h>

#endif
          `}</CodeBlock>
        </div>

        <ol>
          <li>Create slds-bridging-header.h.</li>
          <li>In build settings, locate the “Swift Compiler – Code Generation” section.</li>
          <li>Next to “Objective-C Bridging Header,” add the header file (e.g. slds-bridging-header.h).</li>
        </ol>

        <p>SLDS extensions and constants are now accessible to all files in your project/workspace. There is no need to import the Design system to each file.</p>

        <Heading textLabel="Colors" type="h3" id="colors" className="site-text-heading--medium">
          Colors
        </Heading>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
let textColor = UIColor.sldsColorText(.default)

let borderColor = UIColor.sldsColorBorder(.brand)

let backgroundColor = UIColor.sldsColorBackground(.brand)
          `}</CodeBlock>
        </div>

        <Heading textLabel="Fonts and Text Sizes" type="h3" id="fonts" className="site-text-heading--medium">
          <p>Fonts and Text Sizes</p>
          <p>In addition to supporting the default (SaleforceSans) font, users can substitute fonts as needed.</p>
        </Heading>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
label.font = UIFont.sldsFont(.bold, with: .medium)

// Setup and use a custom font
UIFont.sldsUse("customFontName", fromBundle: "CustomFontBundleName", for: .light)
label.font = UIFont.sldsFont(.bold, with: .light)

// Undo a custom font override
UIFont.sldsUseDefaultFont(for: .light)
          `}</CodeBlock>
        </div>

        <Heading textLabel="Icons" type="h3" id="icons" className="site-text-heading--medium">
          Icons
        </Heading>

        <h4 className="site-text-heading--label">Action Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
let icon = UIImage.sldsIconAction(.addContact, withSize: SLDSSquareIconLarge)

let iconWithColor = UIImage.sldsIconAction(.addContact, with: UIColor.black, andBGColor: UIColor.white, andSize: SLDSSquareIconLarge)
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Custom Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
let icon = UIImage.sldsIconAction(.custom1, withSize: SLDSSquareIconLarge)

let iconWithColor = UIImage.sldsIconAction(.custom1, with: UIColor.black, andBGColor: UIColor.white, andSize: SLDSSquareIconLarge)
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Standard Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
let icon = UIImage.sldsIconAction(.account, withSize: SLDSSquareIconLarge)

let iconWithColor = UIImage.sldsIconAction(.account, with: UIColor.black, andBGColor: UIColor.white, andSize: SLDSSquareIconLarge)
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Utility Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
let icon = UIImage.sldsIconAction(.addContact, withSize: SLDSSquareIconLarge)

let iconWithColor = UIImage.sldsIconAction(.addContact, with: UIColor.black, andBGColor: UIColor.white, andSize: SLDSSquareIconLarge)
          `}</CodeBlock>
        </div>

        <div className="slds-container--large">
          <Heading textLabel="Obj-C Usage" type="h2" id="obj-c-usage" className="site-text-heading--large">
            Obj-C Usage
          </Heading>
        </div>

        <Heading textLabel="Colors" type="h3" id="colors" className="site-text-heading--medium">
          Colors
        </Heading>

        <h4 className="site-text-heading--label">Text Colors</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsColorText:SLDSColorTextInverse];
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Background Colors</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsColorBackground:SLDSColorBackgroundAltInverse];
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Border Colors</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIColor* c = [UIColor sldsColorBorder:SLDSColorBorderBrand];
          `}</CodeBlock>
        </div>

        <Heading textLabel="Fonts and Text Sizes" type="h3" id="fonts" className="site-text-heading--medium">
          <p>Fonts and Text Sizes</p>
          <p>In addition to supporting the default (SaleforceSans) font, users can substitute fonts as needed.</p>
        </Heading>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIFont* lightFont = [UIFont sldsFontLightWithSize:SLDSFontSizeXLarge];

UIFont* regularFont = [UIFont sldsFontRegularWithSize:SLDSFontSizeXLarge];

UIFont* strongFont = [UIFont sldsFontStrongWithSize:SLDSFontSizeXLarge];

// Override with a custom font
[UIFont sldsUse:"customFontName", fromBundle: "CustomFontBundleName", for: SLDSFontTypeLight];
UIFont* customFont = [UIFont sldsFontLightWithSize:SLDSFontSizeXLarge];

// Undo a font override
[UIFont sldsUseDefaultFontFor: SLDSFontTypeLight];
          `}</CodeBlock>
        </div>

        <Heading textLabel="Icons" type="h3" id="icons" className="site-text-heading--medium">
          Icons
        </Heading>

        <h4 className="site-text-heading--label">Action Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* actionIcon = [UIImage sldsIconAction:SLDSIconActionApproval withSize:SLDSSquareIconSmall];
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Custom Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* customIcon = [UIImage sldsIconCustom:SLDSIconCustom1 withSize:SLDSSquareIconSmall];
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Standard Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* standardIcon = [UIImage sldsIconStandard:SLDSIconStandardAccount withSize:SLDSSquareIconSmall];
          `}</CodeBlock>
        </div>

        <h4 className="site-text-heading--label">Utility Icons</h4>

        <div className="site-code--content slds-scrollable--x">
          <CodeBlock language="bash">{`
#import <DesignSystem/DesignSystem.h>

...

UIImage* utilityIcon = [UIImage sldsIconUtility:SLDSIconUtilityAnnouncement withSize:SLDSSquareIconSmall];
          `}</CodeBlock>
        </div>
      </div>

    </div>
  </PageBody>
);
