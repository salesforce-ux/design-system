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
import { prefix as pf } from 'app_modules/ui/util/component';

export const intro = (
  <p className="site-text-introduction">
    Navigation represents a list of links that either take the user to another page or parts of the page the user is in.
  </p>
);

export default (
  <ComponentDocs>
    <h2 className={pf('site-text-heading--small')}>1.0. Building the context bar</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The context bar is composed of a wrapper and 3 regions.</p>
    <ol>
      <li>App Switcher + App Name + Object Switcher</li>
      <li>Contextual Actions</li>
      <li>Contextual Navigation</li>
    </ol>
    <p>The DOM should follow the order listed above where the Contextual Navigation, either hyperlinks or tabs should be the last element. This will allow for proper keyboard interaction set by the 508 compliance standards.</p>
    <p>Each region inside the wrapper of `slds-context-bar`, will be described using ordering terms such as "primary" "secondary" "tertiary". This will describe the DOM ordering, not the visual ordering since we want the navigation last for keyboard interactions but visually displayed as adjacent to the app switcher.</p>

    <h2 className={pf('site-text-heading--small')}>1.1. Items on the Context Bar</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>Every item that sits on the horizontal axis of the context bar should receive the class `slds-context-bar__item`.</p>
    <p>This class is used to notify the context bar that it has a new item. The styles applied allow the children of the context bar to vertically aligned, without knowing the height of the context bar. The styles will also allow for the actionable items `slds-context-bar__label-action` and `slds-context-bar__icon-action` to stretch 100% of the height of the context bar, optimizing the hit area of those actions.</p>
    <p>Since the items are leveraging flexbox, the elements inside can easily be re-ordered easily by using an order class helper on the element, such as `slds-order--[#]`.</p>

    <h2 className={pf('site-text-heading--small')}>1.2. Building the Context Bar Item</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The context bar item is built to accommodate 3 specific layout needs.</p>
    <ol>
      <li>Individual text hyperlink to invokes link destination</li>
      <li>Individual text hyperlink to invokes link destination + button icon to indicate menu dropdown is available</li>
      <li>Individual text hyperlink to invokes link destination + button icon to indicate menu dropdown is available + close button icon to remove the item</li>
    </ol>
    <p>These layouts are built upon 2 reusable classes. The text hyperlink action area, would get the class `slds-context-bar__label-action` and the icon based action area, would get the class `slds-context-bar__icon-action`.</p>
    <p>The `slds-context-bar__label-action` class handles the alignment and truncation of the text. This class also handles the interaction styles such as `:hover`, `:focus` and `:active`. This is a required class.</p>
    <p>The `slds-context-bar__icon-action` class handles the alignment and coloring of the icons based on interactions such as `:hover`, `:focus` and `:active`. This is a required if you have an actionable icon area adjacent to an actionable text area.</p>
    <p>The DOM structure should have the button icon(s) preceding the text label. The icons can be visually reordered by using the ordering utility classes such as `slds-order--[#]`.</p>

    <h2 className={pf('site-text-heading--small')}>1.3. Building the Icons in the Context Bar</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The icons in the context bar either serve as a visual affordance that indicates an item has a menu with additional actions or the icon itself is actionable.</p>
    <p>The class used to indicate a button icon will sit adjacent to another actionable item is `slds-context-bar__icon-action`.  If you two icons in an item, each icon should be contained in it's own `slds-context-bar__icon-action` element.</p>
    <p>The look and feel of the button icon is dependant on the modifiers used from [Button Icon Variant Component](LINK) page.</p>
    <p>The `slds-context-bar__icon-action` styles apply a default left and right padding of 0.75rem. That padding can be removed or modified by using our spacing utilities. In example #1, the left padding has been removed by using the class `slds-p-left--none`.</p>
    <p>If a context bar item has an icon then we want to provide visual indication that its active when a user hovers into its region. To make this happen, apply the class `slds-hint-parent` to the hover region, most cases would be `slds-context-bar__icon-action` element.</p>

    <h2 className={pf('site-text-heading--small')}>1.4. Menus on Context Bar Items</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>When a context bar items requires a menu with additional sub options or actions, the classes that need to be added to the target hit area are the following:</p>
    <ol>
      <li>`slds-context-bar__dropdown-trigger` — Add a hoverable zone below the action so that the dropdown doesn't disappear when the mouse is between the action and the dropdown — this is specific to the context bar</li>
      <li>`slds-dropdown-trigger` — Globally used utility that notifies the element there is a dropdown menu </li>
      <li>`slds-dropdown-trigger--[interaction]` — Specify which type of interaction the menu should appear with "hover" or "click". The default pattern requires hover to show the menu besides the App Switcher Waffle icon.</li>
    </ol>

    <h2 className={pf('site-text-heading--small')}>1.5. Specifics of the Context Bar - App Switcher</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The app switcher is the one element on the context bar that requires a mouse click or keyboard enter to invoke the app switcher dropdown. Please use JavaScript to accommodate this requirement.</p>

    <h2 className={pf('site-text-heading--small')}>1.6. Specifics of the Context Bar - App Name</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The application name needs to receive the `slds-context-bar__app-name` class. This class will handle such things as its unique font sizing and truncation widths.</p>

    <h2 className={pf('site-text-heading--small')}>1.7. Specifics of the Context Bar - Object Switcher</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>The object switcher is specific to the context tab bar. There are unique attributes to the object switcher so the element requires the class `slds-context-bar__object-switcher`. The class will handle the object switchers min- and max-width.</p>

    <h2 className={pf('site-text-heading--small')}>1.8. Specifics of the Context Bar - Divider</h2>
    <p>-- IMG WILL GO HERE --</p>
    <p>Due to the platform-esc nature of the context bar, there is an available element utility to apply a divider between sections where needed. The `slds-context-bar__vertical-divider` class should be applied to an empty `div` and placed within the DOM of your context bar for a visual divider.</p>

    <h2 className={pf('site-text-heading--small')}>1.8. Theming</h2>
    <p>Coming Soon</p>

    <h2 className={pf('site-text-heading--small')}>1.9. Accessibility Requirements</h2>
    <p>Coming Soon</p>
  </ComponentDocs>
);
