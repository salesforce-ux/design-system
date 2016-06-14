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
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Navigation" contentClassName={pf('site-guidelines site-guidelines-navigation')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">Navigational patterns help users move between pages and situate themselves in the application.</p>
      <h2 className="site-text-heading--large">Tabs</h2>
      <p><strong>Use tabs to separate information into logical sections based on functionality or use case.</strong></p>
      <p>
      <img className="image" src="/assets/images/navigation/img-tabs.svg" alt="Wireframe image of tabs design" />
      </p>
      <p>Users can easily switch between tabs to perform tasks without leaving the page. Assign a default tab based on the most important use case for the page. The sections that the tabs define function independently of each other, so do not use tabs to define a linear, ordered process.</p>
      <p>Tab names must be consistent—use the same part of speech for each tab, such as a noun or verb.</p>
      <p>If your tabs don’t fit in the horizontal space, place the tabs that don’t fit into an overflow menu that sits in the last tab position. Selecting a tab from the overflow menu should replace the last fully visible tab in the ribbon. The tab that was replaced should go into the tab overflow menu in the topmost position.</p>

      {/* Global Tabs */}
      <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>Global Tabs</h2>
          <p>A global tab changes all of the content below it. For example, the Activity, Collaboration, and Details tabs change all of the content within the left column on an Opportunity.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/navigation/img-tabs-global.svg" alt="Wireframe image of tabs design" />
        </figure>
      </div>

      {/* Scoped Tabs */}
      <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>Scoped Tabs</h2>
          <p>A scoped tab affects only the content within the visual container that it sits on top of. For example, the publisher tabs change just the form for the activity timeline, but nothing changes in the feed below. This is useful when one wants to stack several tabbed sections.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/navigation/img-tabs-scoped.svg" alt="Wireframe image of tabs design" />
        </figure>
      </div>

      {/* Nesting Tabs */}
      <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>Nesting Tabs</h2>
          <p>Although not ideal, you might occasionally need to nest tabs. You can nest scoped tabs within a global tab set, but do not nest global tabs. If additional hierarchy is necessary, consider using a tree component.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/navigation/img-tabs-nesting.svg" alt="Wireframe image of tabs design" />
        </figure>
      </div>

      {/* Tree */}
      <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>Trees</h2>
          <p><strong>Organize pages in a tree to indicate hierarchy.</strong></p>
          <p>Use a tree if your app has layered navigation that can’t be represented in a simple tab set. A tree helps users navigate to pages and quickly find a nested child page without loading each page while navigating to the final destination page. Be sure to carefully study the mental models of users when deciding how to group pages in your tree.</p>
          <p>You can use a tree in conjunction with breadcrumbs to further help users navigate the hierarchy.</p>
          <p>Trees can technically have unlimited nesting, but we recommend avoiding excessive nesting. Flatter trees are generally easier to navigate.</p>
          <p>Every item in the list doesn’t have to have a corresponding page. Instead, you can use label groups to organize related pages without providing an unnecessary landing page.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/navigation/img-tree.svg" alt="Wireframe image of tabs design" />
        </figure>
      </div>

      {/* Breadcrumbs */}
      <div className={pf('m-bottom--x-large')}>
        <h2 className="site-text-heading--large">Breadcrumbs</h2>
        <p><strong>Breadcrumbs help users navigate back up a hierarchy of pages.</strong></p>
        <img className={pf('image')} src="/assets/images/navigation/img-breadcrumbs.svg" alt="Wireframe image of tabs design" />
        <p>A breadcrumb indicates the hierarchy path (parent­-child relationships) of the page a user is on, rather than the order of the user’s browsing history. Breadcrumbs are especially useful when a user links directly to a page that is nested in a hierarchy but needs to go to a parent page. They also helps users situate themselves in the application.</p>
        <p>Breadcrumbs are commonly used in conjunction with a tree for navigating between nested pages. The full hierarchy path is listed on a second or third level page. When the user is on a page deeper than three levels, the breadcrumb displays only the last two links. The rest of the hierarchy path is truncated, as shown in the following figure.</p>
        <img className={pf('image')} src="/assets/images/navigation/img-breadcrumbs-truncate.svg" alt="Wireframe image of tabs design" />
      </div>

      {/* Diagram */}
      <div className={pf('grid wrap m-bottom--x-large')}>
        <div className={pf('p-vertical--x-large')}>
          <h2 className="site-text-heading--large">Modals</h2>
          <p><strong>Use a modal when you want users to focus on a specific task within the context of the original page.</strong></p>
          <p>Use modals for pages that require the full attention of the user. Modals prevent the user from interacting with other elements on the page. A typical use of a modal is to display a form for entering or editing data. You can also use a directional modal for wizards and other forms that require linear navigation.</p>
          <p>Modals are broken into three sections: the header, body, and footer.</p>
        </div>
        <div className={pf('site-diagram-section-list grid grid--vertical m-bottom--x-large')}>
          <p className={pf('site-diagram-section-top order--2 large-order--1')}><strong>Header</strong> — Includes the title and an optional tagline. The title reflects the button text that triggered it. The tagline can contain links, or the entire tagline can be a link.</p>
          <figure className={pf('large-size--1-of-2 order--1 large-order--2')}>
            <img className={pf('image')} src="/assets/images/navigation/img-modal-sections.svg" alt="Wireframe image of tabs design" />
          </figure>
          <p className={pf('site-diagram-section-middle large-size--1-of-2 order--2 large-order--3')}><strong>Body</strong> — You can have any type of content: forms, text, videos, and other media. For a directional modal, you can add a step indicator to indicate the user’s progress.</p>
          <p className={pf('site-diagram-section-bottom order--2 large-order--3')}><strong>Footer</strong> — Contains the navigational and action buttons. Action buttons, such as Save, Close, Delete, are on the right. Place the primary button—the one that guides the user toward the default action on the far right. For a directional modal, like a wizard, place the Next and Back navigation buttons on the opposite sides (left for Back and right for Next).</p>
        </div>
      </div>

      {/* Sizing */}
      <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
        <div className={pf('size--1-of-1 medium-size--1-of-2 grow-none')}>
          <h2 className="site-text-heading--large">Sizing</h2>
          <p>Modals take up 50% of the user’s viewport. If the content requires a lot of horizontal space, you can use the large modal, which takes up 90% of the viewport. A minimum and maximum width are specified to avoid going too narrow or too wide.</p>
          <p>The height of a modal is determined primarily by the length of its contents. The maximum height of the modal container is determined by its exterior margin. If the content is longer than the length of the modal, allow the user to scroll within the modal. The header and footer are fixed.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-2 shrink-none')}>
          <img className={pf('image')} src="/assets/images/navigation/img-modal-width.svg" alt="Wireframe image of tabs design" />
        </figure>
      </div>
    </div>
  </PageBody>
);
