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
  <PageBody anchorTitle="Displaying Data" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">Lists and feeds help users navigate data either by theme or chronology. These various ways of displaying data are optimized to help users locate, browse, and work together on records.</p>

      <h2 className={pf('site-text-heading--large')}>Record Lists</h2>
      <p><strong>Record lists organize information to help users locate and/or browse specific records.</strong></p>
      <p>You can display records as a table, tile list, or interactive card. Differentiate types of items either by separating them into different lists or by clearly labeling them within the list. For example, put different file types into separate lists, or if they live in the same list, label each file file type (PDF, JPG, and so on).</p>
      <p>Make sure to provide a visible affordance, such as an icon or a button, for all points of interaction on a list or record.</p>
      <p>Title each list of records. Include field labels where possible. User name, date, and number fields are especially ambiguous when shown without a label.</p>
      <p>It’s recommended to provide a message when a list is empty. For example, “No items to display. Try editing filters for this list view or switching list views.”</p>

      {/* Table */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Table</h2>
          <p>A table is the most basic format for displaying a list. Each record is represented by a single row of data that begins with the record’s primary field and shows additional fields in subsequent columns. The data is labeled using column headers that can be interactive.</p>
          <p>This display type is appropriate for large numbers of records because you can easily scan it and navigate the list using sorting, filtering, or scrolling.</p>
          <p>If you are allowing the user to modify the column widths, allow horizontal scrolling but don’t responsively resize columns.</p>
          <p>On narrow screens where only a few columns will fit, tables should elegantly and responsively collapse into tile lists.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-table.svg" alt="" />
        </figure>
      </div>

      {/* Tree Grid */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Tree Grid</h2>
          <p>A tree grid is useful for displaying large amounts of hierarchical data, where records are grouped into parent-child relationships. This format is similar to a table, with the exception that the first column also represents the relationship between records. It also offers similar benefits including sorting and filtering.</p>
          <p>A chevron button at the end of the row shows and hides nested children. It also indicates whether a record has children. Children are indented below their parent to communicate their position in the hierarchy.</p>
          <p>Records and their children must share the same data structure to be displayed in columns. For example, files and folders share a similar set of metadata. When parent and child records have different fields, a tree grid should not be used. Consider using a related list or master detail instead.</p>
          <p>On narrow screens where only a few columns will fit, tree grids should elegantly and responsively collapse into a tree list.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-tree-grid.svg" alt="" />
        </figure>
      </div>

      {/* Tiles */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Tiles</h2>
          <p>A tile begins with a primary field and can include a supporting icon or image and additional fields. Data is presented as label­value pairs. The user interacts with elements within the tile, such as buttons and links, not the tile as a whole.</p>
          <p>Use tiles when you are horizontally constrained for space. Tiles are appropriate for short lists—fewer than 10 items. Tile layouts do not stretch well, so to use available horizontal space, add a column of tiles.</p>
          <p>On wider screens where more than 2 columns of tiles will appear, tile lists should elegantly and responsively expand into tables.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-tile.svg" alt="" />
        </figure>
      </div>

      {/* Interactive Cards */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Interactive Cards</h2>
          <p>To make tiles more interactive, you can add a card wrapper around individual tiles and allow users to drag and drop them. Use cards when the order and placement of individual items in a list is important.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-interactive-card.svg" alt="" />
        </figure>
      </div>

      {/* Feed */}
      <div className={pf('p-vertical--x-large')}>
        <h2 className="site-text-heading--large">Feeds</h2>
        <p><strong>Feeds offer a way for users to communicate and stay informed of activities related to records.</strong></p>
        <p>Include a search feature so that users can search feeds.</p>
        <p>It’s recommended to provide a message when a feed is empty. For example, an activity feed might say, “No next steps. To get things moving, add a task or set up a meeting.”</p>
      </div>

      {/* Discussion Feed */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Discussion Feeds</h2>
          <p>A discussion feed is a conversation between users. Individual messages in the discussion allow inline replies and comments, but don’t allow replies to those replies—no layered threading. In addition to the message, each item in the feed displays the user who posted it, date it was posted, row level actions to bookmark or delete (owner only), a button to like the post, and the number of likes. A post can include mentioning other users and file attachments.</p>
          <p>The discussion feed can include multiple message types that add interactive features. For example, you could include a poll.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-discussion-feed.svg" alt="" />
        </figure>
      </div>

      {/* Activity Feed */}
      <div className={pf('site-side-by-side grid wrap p-vertical--x-large')}>
        <div className={pf('size--1-of-1 medium-size--2-of-3 grow-none')}>
          <h2 className={pf('site-text-heading--medium p-top--x-large')}>Activity Feeds</h2>
          <p>An activity feed tracks what a user has done and what a user is about to do on a record. Each feed item includes the activity type, subject, and additional fields specific to that activity type. Activity types can include email messages, tasks, calendar events, calls logs, and other updates to the record or related records.</p>
          <p>The activity feed can show past and future events.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-3 shrink-none')}>
          <img className={pf('image')} src="/assets/images/displaying-data/img-activity-feed.svg" alt="" />
        </figure>
      </div>

    </div>
  </PageBody>
);
