/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import StickyNav from 'app_modules/site/components/sticky/nav';
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';

import g from 'app_modules/global';

let compactVersion = `${g.abbreviatedName.toLowerCase()}${process.env.SLDS_VERSION.replace(/\D/g, '')}`;

export default (
  <PageBody anchorTitle="Lightning SVG Icon Component Helper" contentClassName={pf('grid wrap')}>
    <StickyNav>
      <div className={pf('site-menu--jump-links')}>
        <h3 className="site-text-heading--label">Steps</h3>
        <ul className={pf('list--vertical has-block-links')}>
          <li><a href="#step-1">Create the Lightning Component</a></li>
          <li><a href="#step-2">Paste the Following Code</a></li>
          <li><a href="#step-3">Use the New Component</a></li>
        </ul>
      </div>
    </StickyNav>

    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
      <div className={pf('container--large')}>
        <p className="site-text-introduction">Currently, you will need to install a helper Lightning Component to render the {g.displayName} sprited icons. This is for several reasons:</p>
        <ul>
          <li>Sprited non-inline SVGs are not supported in Lightning yet</li>
          <li>Accessibility compatibility</li>
          <li>Fill coloring can be styled with CSS</li>
        </ul>

        <h2 id="step-1" className="site-text-heading--large">Step 1: Create the Lightning Component</h2>
        <p>
          Log into your org, and open the Developer Console. Create a new Lightning component from the menu: File &gt; New &gt; Lightning Component
        </p>
        <p>
          Name your new component: <code>svgIcon</code>
        </p>

        <h2 id="step-2" className="site-text-heading--large">Step 2: Paste the Following Code</h2>
        <p>
          Click on the <strong>COMPONENT</strong> tab, then paste:
        </p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="markup">{`
<aura:component>
  <aura:attribute name="svgPath"        default="" type="String" description="the path for the icon in the static resource, this will be use in a SVG use tag" />
  <aura:attribute name="name"           default="" type="String" description="Symbol name of icon" />
  <aura:attribute name="class"          default="" type="String" description="the class of this SVG tag, can be use for CSS purpose" />
  <aura:attribute name="containerClass" default="" type="String" description="Container class name for span container of icon" />
  <aura:attribute name="category"       default="" type="String" description="Category of icon- action, standard, utility etc." />
  <aura:attribute name="size"           default="" type="String" description="Size of icon-- small, medium, large" />
  <aura:attribute name="assistiveText"  default="" type="String" description="Description name of icon" />
  <span aura:id="container" class="{!v.containerClass}">
    <span aura:id="assistiveText" class="${g.cssPrefix}assistive-text">{!v.assistiveText}</span>
  </span>
</aura:component>
        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>
        <p>Click on the <strong>HELPER</strong> tab, then paste:</p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="javascript">{`
({
  renderIcon: function(component) {
    var prefix = "${g.cssPrefix}";
    var svgns = "http://www.w3.org/2000/svg";
    var xlinkns = "http://www.w3.org/1999/xlink";
    var size = component.get("v.size");
    var name = component.get("v.name");
    var classname = component.get("v.class");
    var containerclass = component.get("v.containerClass");
    var category = component.get("v.category");

    var containerClassName = [
        prefix+"icon_container",
        prefix+"icon-"+category+"-"+name,
        containerclass
        ].join(' ');
    component.set("v.containerClass", containerClassName);

    var svgroot = document.createElementNS(svgns, "svg");
    var iconClassName = prefix+"icon "+prefix+"icon--" + size+" "+classname;
    svgroot.setAttribute("aria-hidden", "true");
    svgroot.setAttribute("class", iconClassName);
    svgroot.setAttribute("name", name);

    // Add an "href" attribute (using the "xlink" namespace)
    var shape = document.createElementNS(svgns, "use");
    shape.setAttributeNS(xlinkns, "href", component.get("v.svgPath"));
    svgroot.appendChild(shape);

    var container = component.find("container").getElement();
    container.insertBefore(svgroot, container.firstChild);
  }
})
        `}</CodeBlock>
        </div>

      <p className={pf('container--large')}>
        Click on the <strong>RENDERER</strong> tab, then paste:
      </p>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="javascript">{`
({
  render: function(component, helper) {
    // By default, after the component finished loading data/handling events,
    // it will call this render function this.superRender() will call the
    // render function in the parent component.
    var ret = this.superRender();

    // Calls the helper function to append the SVG icon
    helper.renderIcon(component);
    return ret;
  }
})
        `}</CodeBlock>
      </div>

      <div className={pf('container--large')}>

        <h2 id="step-3" className="site-text-heading--large">Step 3: Use the New Component</h2>
        <p>
          Use your new component whenever you need an {g.displayName} SVG icon.
          For example, if your Static Resource is named <code>{compactVersion}</code> you might use:
        </p>
      </div>

      <div className={pf('site-code--content scrollable--x')}>
        <CodeBlock language="markup">{`
<c:svgIcon svgPath="/resource/${compactVersion}/assets/icons/standard-sprite/svg/symbols.svg#user" category="standard" size="large" name="user" />
        `}</CodeBlock>
      </div>
    </div>
  </PageBody>
);
