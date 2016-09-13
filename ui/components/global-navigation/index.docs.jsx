/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';
import CodeClass from 'app_modules/site/components/code-class';
import CodeBlock from 'app_modules/ui/code-block';
import SvgIcon from 'app_modules/ui/svg-icon';
import { WaffleIcon } from 'ui/components/global-navigation/flavors/navigation-bar/index.react.example';
import _ from 'lodash';

let NavigationBar = props =>
<div className="docs-example slds-m-bottom--xx-large">
  <div className="slds-context-bar site-stencil__color-dark">
    <div className="slds-context-bar__primary slds-context-bar__item--divider-right slds-is-relative">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover slds-is-relative">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon />
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name site-stencil__squeeze slds-is-relative">
          <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
        </span>
      </div>
      { props.showSections ?
        <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div>Primary</div> : null }
    </div>
    <nav className="slds-context-bar__secondary slds-is-relative" role="navigation">
      <ul className="slds-grid">
        { _.times(6, i =>

          <NavigationBarItem key={i} showItems={ props.showItems } />
        )}
      </ul>
      { props.showSections ?
        <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div>Secondary</div> : null }
    </nav>
    <div className="slds-context-bar__tertiary slds-col--bump-left slds-is-relative">
      <ul className="slds-grid">
        <li className="slds-context-bar__item slds-is-relative">
          <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
          { props.showItems ?
            <div className="site-dimension site-dimension--absolute-box slds-m-horizontal--xx-small"></div> : null }
        </li>
      </ul>
      { props.showSections ?
        <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div>Tertiary</div> : null }
    </div>
  </div>
</div>;

let NavigationBarItem = props =>
  <li className="slds-context-bar__item slds-is-relative" { ...props }>
    <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
    { props.showItems ?
      <div className="site-dimension site-dimension--absolute-box slds-m-horizontal--xx-small"></div> : null }
  </li>;

export const intro = (
  <p className="site-text-introduction">
    Global Navigation is the list of navigation links your users find in the Header on every page in Salesforce. Your Global Navigation includes a Navigation Bar where your users find the App Launcher, App Name, and Pages that each App includes.
  </p>
);

export default (
  <ComponentDocs>
    <h2 className="site-text-heading--label">1.0. Building the Navigation Bar</h2>
    <NavigationBar showSections />
    <p>The navigation bar is composed of a wrapper and 2 required and 1 optional region:</p>
    <ul>
      <li><strong>Primary,</strong> which contains the App Launcher and App Name</li>
      <li><strong>Secondary,</strong> which contains the App Items, for navigating within the current app</li>
      <li>And optionally, <strong>Tertiary,</strong> which includes Actions, for triggering actions specific to the current app.</li>
    </ul>
    <p>The markup should follow the order listed above for proper keyboard interaction set by the 508 compliance standards. Each included region inside the wrapper of <CodeClass className="context-bar" /> needs the appropriate ordering class name, e.g. <CodeClass className="slds-context-bar__primary" />. </p>

    <h2 className="site-text-heading--label">1.1. Items on the Navigation Bar</h2>
    <NavigationBar showItems />
    <p>Every item that sits on the horizontal axis of the navigation bar should receive the class <CodeClass className="context-bar__item" />.</p>
    <p>This class is used to notify the navigation bar that it has a new item. The styles applied allow the children of the navigation bar to vertically aligned, without knowing the height of the navigation bar. The styles will also allow for the actionable items <CodeClass className="context-bar__label-action" /> and <CodeClass className="context-bar__icon-action" /> to stretch 100% of the height of the navigation bar, optimizing the hit area of those actions.</p>
    <p>Since the items are leveraging flexbox, the elements inside can easily be re-ordered easily by using an order class helper on the element, such as <code>.slds-order--[#]</code>.</p>

    <h2 className="site-text-heading--label">1.2. Building the Navigation Bar Item</h2>

    <div className="docs-example slds-m-bottom--xx-large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-is-relative">
          <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
          <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div>1</div>
        </div>
      </div>
    </div>

    <div className="docs-example slds-m-bottom--xx-large slds-m-left--large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-is-relative">
          <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
          <div className="slds-context-bar__icon-action slds-p-left--none" tabIndex="0">
            <button aria-haspopup="true" className="slds-button slds-button--icon slds-context-bar__button" tabIndex="-1">
              <SvgIcon className="slds-button__icon slds-button__icon--hint slds-button__icon--small" sprite="utility" symbol="chevrondown" />
              <span className="slds-assistive-text">Assistive text for submenu</span>
            </button>
          </div>
          <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div>2</div>
        </div>
      </div>
    </div>

    <p>The navigation bar item is built to accommodate 2 specific layout needs.</p>
    <ol>
      <li>Individual text hyperlink to invokes link destination</li>
      <li>Individual text hyperlink to invokes link destination + button icon to indicate menu dropdown is available</li>
    </ol>
    <p>These layouts are built upon 2 reusable classes. The text hyperlink action area would get the class <CodeClass className="context-bar__label-action" /> and the icon based action area would get the class <CodeClass className="context-bar__icon-action" />.</p>
    <p>The <CodeClass className="context-bar__icon-action" /> class handles the alignment and coloring of the icons based on interactions such as <code>:hover</code>, <code>:focus</code> and <code>:active</code>. This is a required if you have an actionable icon area adjacent to an actionable text area.</p>
    <p>The markup structure should have the button icon(s) preceding the text label. The icons can be visually reordered by using the ordering utility classes such as <code>.slds-order--[#]</code>.</p>

    <h2 className="site-text-heading--label">1.3. Building the Icons in the Navigation Bar</h2>

    <div className="docs-example slds-m-bottom--xx-large slds-m-left--large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-is-relative">
          <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
          <div className="slds-context-bar__icon-action slds-p-left--none slds-is-relative" tabIndex="0">
            <button aria-haspopup="true" className="slds-button slds-button--icon slds-context-bar__button" tabIndex="-1">
              <SvgIcon className="slds-button__icon slds-button__icon--hint slds-button__icon--small" sprite="utility" symbol="chevrondown" />
              <span className="slds-assistive-text">Assistive text for submenu</span>
            </button>
            <div className="site-dimension site-dimension--absolute p-horizontal"><div className="site-dimension__line site-dimension__line--red"></div></div>
          </div>
        </div>
      </div>
    </div>

    <p>The icons in the navigation bar either serve as a visual affordance that indicates an item has a menu with additional actions or the icon itself is actionable.</p>
    <p>The class used to indicate a button icon will sit adjacent to another actionable item is <CodeClass className="context-bar__icon-action" />.  If you two icons in an item, each icon should be contained in it&rsquo;s own <CodeClass className="context-bar__icon-action" /> element.</p>
    <p>The look and feel of the button icon is dependant on the modifiers used from <a href="/components/buttons/#icon">Button Icon Variant Component</a> page.</p>
    <p>The <CodeClass className="context-bar__icon-action" /> styles apply a default left and right padding of 0.75rem. That padding can be removed or modified by using our spacing utilities. In example #1, the left padding has been removed by using the class <CodeClass className="p-left--none" />.</p>
    <p>If a navigation bar item has an icon then we want to provide visual indication that its active when a user hovers into its region. To make this happen, apply the class <CodeClass className="hint-parent" /> to the hover region, most cases would be <CodeClass className="context-bar__icon-action" /> element.</p>

    <h2 className="site-text-heading--label">1.4. Menu trigger area on Navigation Bar Items</h2>

    <div className="docs-example slds-m-bottom--xx-large slds-m-left--large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-is-relative">
          <a className="slds-context-bar__label-action site-stencil__squeeze" href="javascript:void(0);">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</a>
          <div className="slds-context-bar__icon-action slds-p-left--none" tabIndex="0">
            <button aria-haspopup="true" className="slds-button slds-button--icon slds-context-bar__button" tabIndex="-1">
              <SvgIcon className="slds-button__icon slds-button__icon--hint slds-button__icon--small" sprite="utility" symbol="chevrondown" />
              <span className="slds-assistive-text">Assistive text for submenu</span>
            </button>
          </div>
          <div className="site-dimension site-dimension--absolute slds-p-horizontal--x-small"><div className="site-dimension__line site-dimension__line--red"></div></div>
        </div>
      </div>
    </div>

    <p>When a navigation bar items requires a menu with additional sub options or actions, the classes that need to be added to the target hit area are the following:</p>
    <ol>
      <li><CodeClass className="context-bar__dropdown-trigger" /> — Add a hoverable zone below the action so that the dropdown doesn&rsquo;t disappear when the mouse is between the action and the dropdown — this is specific to the navigation bar</li>
      <li><CodeClass className="dropdown-trigger" /> — Globally used utility that notifies the element there is a dropdown menu </li>
      <li><code>.slds-dropdown-trigger--[interaction]</code> — Specify which type of interaction the menu should appear with &ldquo;hover&rdquo; or &ldquo;click&rdquo;. The default pattern requires hover to show the menu besides the App Switcher Waffle icon.</li>
    </ol>
    <p>If the navigation item has one hyperlink with a menu containing additional sub actions, then the hover area that invokes the dropdown menu is both the <CodeClass className="context-bar__label-action" /> and <CodeClass className="context-bar__icon-action" />. If the navigation item is demonstrated as a tab format, one hyperlink plus two additional actions, then the hover area that invokes the dropdown menu is only on the <CodeClass className="context-bar__icon-action" />.</p>

    <h2 className="site-text-heading--label">1.5. Specifics of the Navigation Bar - App Switcher</h2>

    <div className="docs-example slds-m-bottom--xx-large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover slds-is-relative">
          <div className="slds-context-bar__icon-action slds-is-relative">
            <WaffleIcon />
            <div className="site-dimension site-dimension--absolute"><div className="site-dimension__line site-dimension__line--red"></div></div>
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name site-stencil__squeeze slds-is-relative">
            <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
          </span>
        </div>
      </div>
    </div>

    <p>The app switcher is the one element on the navigation bar that requires a mouse click or keyboard enter to invoke the app switcher dropdown. Please use JavaScript to accommodate this requirement.</p>

    <h2 className="site-text-heading--label">1.6. Specifics of the Navigation Bar - App Name</h2>

    <div className="docs-example slds-m-bottom--xx-large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover slds-is-relative">
          <div className="slds-context-bar__icon-action slds-is-relative">
            <WaffleIcon />
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name site-stencil__squeeze slds-is-relative">
            <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
            <div className="site-dimension site-dimension--absolute"><div className="site-dimension__line site-dimension__line--red"></div></div>
          </span>
        </div>
      </div>
    </div>

    <p>The application name needs to receive the <CodeClass className="context-bar__app-name" /> class. This class will handle such things as its unique font sizing and truncation widths.</p>

    <h2 className="site-text-heading--label">1.7. Specifics of the Navigation Bar - Divider</h2>

    <div className="docs-example slds-m-bottom--xx-large" style={{ display: 'inline-flex' }}>
      <div className="slds-context-bar site-stencil__color-dark">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover slds-is-relative">
          <div className="slds-context-bar__icon-action slds-is-relative">
            <WaffleIcon />
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name site-stencil__squeeze slds-is-relative">
            <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
          </span>
          <div className="slds-context-bar__vertical-divider slds-is-relative" style={{ overflow: 'visible', width: '0.625rem' }}>
            <div className="site-dimension site-dimension--absolute" style={{ left: '-0.625rem' }}><div className="site-dimension__line site-dimension__line--red"></div></div>
          </div>
        </div>
      </div>
    </div>

    <p>Due to the platform-esc nature of the navigation bar, there is an available element utility to apply a divider between sections where needed. The <CodeClass className="context-bar__vertical-divider" /> class should be applied to an empty <code>&lt;div&gt;</code> and placed within the markup of your navigation bar for a visual divider.</p>
    <p>Alternatively, two classes are available to add border using css. Adding the class <CodeClass className="context-bar__item--divider-left" /> will add a left border to a navigation bar item while <CodeClass className="context-bar__item--divider-right" /> will add a right border.</p>

  </ComponentDocs>
);
