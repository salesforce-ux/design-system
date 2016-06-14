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
  <PageBody anchorTitle="Layout" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">A layout is a structural template that supports consistency across applications by defining visual grids, spacing, and sections. </p>
      <p>Before selecting a layout, review these guidelines:</p>
      <ul>
        <li><strong>Know your use case.</strong> Understand how the information on the page will be used.</li>
        <li><strong>Prioritize your content.</strong> Organize your content to highlight the most important information.</li>
        <li><strong>Group related content together.</strong> Make it efficient for users to work with the content.</li>
      </ul>

      {/* Diagram */}
      <div className={pf('grid wrap m-bottom--x-large')}>
        <div className={pf('p-vertical--x-large')}>
          <h2 className="site-text-heading--large">Record Layouts</h2>
          <p>Record layouts consist of a page header, a main content area and a sidebar. The content that should appear in each of these areas depends on the primary use case you are solving for.</p>
        </div>
        <div className={pf('site-diagram-section-list grid grid--vertical m-bottom--x-large')}>
          <p className={pf('site-diagram-section-top order--2 large-order--1')}>The page header above the content area extends across the entire viewport. When the user scrolls, the panel is fixed to provide locational context, but it shrinks to preserve vertical real estate.</p>
          <figure className={pf('large-size--1-of-2 order--1 large-order--2')}>
            <img className={pf('image')} src="/assets/images/layout/img-record-layout.svg" alt="Wireframe image of record layout design" />
          </figure>
          <p className={pf('site-diagram-section-middle large-size--1-of-2 order--2 large-order--3')}>The main content area uses two-thirds of the viewport. The sidebar uses the other third, with a minimum width of 400px to maintain readability. If the reference layout appears inside of a Master/Detail, the sidebar collapses into a tab in the main content area.</p>
        </div>
        {/* End Diagram */}

        {/* Workspace Layout */}
        <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
            <h2 className={pf('site-text-heading--medium p-top--x-large')}>Workspace Layouts</h2>
            <p>A workspace layout facilitates user collaboration on records. It highlights the activity and discussion that is happening around a record by placing this information prominently in the larger content area, while simultaneously displaying the related records in the sidebar. A summary of the record’s details are in a panel above the content area for easy reference.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-workspace-layout.svg" alt="Wireframe image of workspace layout design" />
          </figure>
        </div>

        {/* Reference Layout */}
        <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
            <h2 className={pf('site-text-heading--medium p-top--x-large')}>Reference Layouts</h2>
            <p>A reference layout is optimized for when users are primarily jumping to related records. It highlights the related records by displaying this information in the larger content area. Collaborative items are placed in the smaller sidebar. A summary of the record’s details are in a panel above the content area for easy reference.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-reference-layout.svg" alt="Wireframe image of reference layout design" />
          </figure>
        </div>

        {/* List Layout */}
        <div className={pf('p-vertical--x-large')}>
          <h2 className="site-text-heading--large">List Layouts</h2>
          <p>A list layout consists of a simple page header and body that allows users to switch between predefined lists of items. Common controls include sorting, filtering, charting, and actions for the item type. Users can also switch between list layouts using the “Display” menu.</p>
          <p>Choose the types of list layout that best supports your use case:</p>
          <ul>
            <li><strong>Table</strong> — Best for managing large sets of data and comparing values</li>
            <li><strong>Board</strong> — Use to monitor a workflow or milestones where users can drag cards between stages to indicate progress</li>
            <li><strong>Master-Detail</strong> — Allows users to see and edit the details of an item on one screen</li>
          </ul>
        </div>

        {/* Table Layout */}
        <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
            <h2 className={pf('site-text-heading--medium p-top--x-large')}>Table Layouts</h2>
            <p>Use a table layout for flexibly viewing and managing large sets of data. The layout uses 100% of the viewport. Items are displayed as rows with their fields organized in columns.</p>
            <p>The columns are fixed width and use as much horizontal space as necessary. Columns do not resize when the window changes width. Users can choose which columns to show and how wide each column is. If the grid is wider than the viewport, users horizontally scroll to see more data.</p>
            <p>The table can be of infinite length. Data is loaded as the user scrolls.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-table-layout.svg" alt="Wireframe image of table layout design" />
          </figure>
        </div>

        {/* Board Layout */}
        <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
            <h2 className={pf('site-text-heading--medium p-top--x-large')}>Board Layouts</h2>
            <p>Use a board layout for items that are advancing through a linear workflow, such as a sales process, because it allows users to quickly move items between stages.</p>
            <p>The layout displays items in columns that are based on a picklist field on the object being viewed; a good example is the Stage field on a list of opportunities. Items are displayed as stacked cards in each column and can be moved between columns. Each column can optionally display an aggregate of any numerical data from that column’s items, such as the total monetary value of a column of Opportunities.</p>
            <p>The minimum column width is 12rem, and the maximum is 25rem to ensure that cards are legible. If the columns don’t fit in the viewport, users scroll horizontally to see more data.</p>
            <p>If the columns don’t fill the viewport, they are expanded to their maximum width, and the area to the right of the last column remains empty.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-board-layout.svg" alt="Wireframe image of board layout design" />
          </figure>
        </div>

        {/* Master Detail Layout */}
        <div className={pf('p-vertical--x-large')}>
          <h2 className={pf('site-text-heading--large p-top--x-large')}>Master Detail Layouts</h2>
          <p>A master-detail layout is ideal for working through a queue of items because it allows the user to stay on the same screen while viewing and editing multiple items. </p>
        </div>
        <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none p-top--x-large')}>
            <p>The layout groups together two layout views with a one-to-many relationship. Selecting an item from the master view (which contains a list) causes the details of that item to be populated in the detail view, using a condensed reference or workspace layout. </p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-master-detail-1.svg" alt="Wireframe image of master detail layout design" />
          </figure>
        </div>
        <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none p-top--x-large')}>
            <p>A master-detail layout is also useful for exploring a deeply nested tree, like a file system, by displaying a tree component on the left and a table component on the right. This allows users to jump between nodes in the tree and to simultaneously view the full contents of each node as a list.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-master-detail-2.svg" alt="Wireframe image of master detail layout design" />
          </figure>
        </div>
        <div className={pf('site-side-by-side grid wrap m-bottom--x-large')}>
          <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none p-top--x-large')}>
            <p>Master detail layouts work best on a larger screen (minimum of 1024px). If the screen is smaller, the two layout views should be defined as separate pages.</p>
          </div>
          <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
            <img className={pf('image')} src="/assets/images/layout/img-master-detail-3.svg" alt="Wireframe image of master detail layout design" />
          </figure>
        </div>
      </div>
    </div>
  </PageBody>
);
