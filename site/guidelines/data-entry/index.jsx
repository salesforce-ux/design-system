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
  <PageBody anchorTitle="Data Entry" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">Salesforce users need to add, change, and delete information frequently. A wide variety of text entry and selection options clearly and efficiently facilitates this experience.</p>
      <h2 className="site-text-heading--large">Basic Text Input</h2>
      <p><strong>The simplest method of freeform data entry, for single and multiple lines of text.</strong></p>
      <figure>
        <img className={pf('image')} src="/assets/images/data-entry/img-text-input.svg" alt="" />
      </figure>
      <p>To limit the amount of text, use a single­line input. To restrict the type of input, you can specify the format, such as number or email address.</p>
      <p>Multiline text areas allow the user to enter long­form plain text. You can’t specify a format to restrict the type of content.</p>
      <p>Label the input area above or to the left of the field. In most contexts, a stacked label (label on top) is better for readability and clarity. Use horizontal labels only if you need to save vertical real estate and have fewer than 10 fields.</p>
      <p>To group related fields together, such as individual parts of an address, use compound inputs.</p>
      <figure>
        <img className={pf('image')} src="/assets/images/data-entry/img-text-input-compound.svg" alt="" />
      </figure>

      {/* Sizing + Help */}
      <div className={pf('grid wrap nowrap--medium grid--pull-padded-large p-vertical--x-large')}>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Sizing</h2>
          <div>
            <p>The default text size creates a visual hierarchy between the label text and the input text. To conserve vertical space or when you have a long list of fields in a width­-constrained sidebar, a smaller input size is also available.</p>
            <p>The input width depends on the label placement. If the label is above the field, the input width is 100% of the container. If the label is on the side, the label width is 33%, and the input width is 67%.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-text-input-sizing.svg" alt="" />
          </figure>
        </div>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Input Help</h2>
          <div>
            <p>To assist the users, you can add help text. If the explanation is lengthy, use an “info” icon and tooltip. For brief explanations (shorter than a sentence), you can place the text underneath the field.</p>
            <p>You can also use placeholder text to provide an example of the type of input required. For example, in a Name field, show a name in the correct format.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-text-input-help.svg" alt="" />
          </figure>
        </div>
      </div>

      {/* Complex Input */}
      <h2 className="site-text-heading--large">Complex Text Input</h2>
      <p><strong>Complex text inputs provide users with additional assistance in specific types of data entry.</strong></p>

      {/* Datepicker + Lookups */}
      <div className={pf('grid wrap nowrap--medium grid--pull-padded-large p-vertical--x-large')}>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Date Pickers</h2>
          <div>
            <p>Instead of forcing the user to manually type a date, a datepicker provides a visual way for the user to browse and select a single date or range of dates.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-datepicker.svg" alt="" />
          </figure>
        </div>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Lookups</h2>
          <div>
            <p>A lookup allows the user to search a database for records to fill a field. The lookup can either limit the user to a single record or allow for multiple records to populate a single field.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-lookup.svg" alt="" />
          </figure>
        </div>
      </div>

      {/* Selection Input */}
      <h2 className="site-text-heading--large">Selection Input</h2>
      <p><strong>Selection inputs allow a user to choose between a limited number of options for a given field.</strong></p>

      {/* Checkboxes + Radio */}
      <div className={pf('grid wrap nowrap--medium grid--pull-padded-large p-vertical--x-large')}>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Checkboxes</h2>
          <div>
            <p>Use a single checkbox for Boolean fields in which the user can choose only between true and false or on and off.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-checkbox.svg" alt="" />
          </figure>
        </div>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Radio Lists</h2>
          <div>
            <p>A radio list allows the user to select one option from a short list (fewer than 10 options). You must have enough space to present all options together to make comparison easy. Typically, radio lists are presented as a standalone field, such as a poll within a feed, and not used in a larger form.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-radio.svg" alt="" />
          </figure>
        </div>
      </div>

      {/* Picklists */}
      <div className={pf('grid wrap nowrap--medium grid--pull-padded-large p-vertical--x-large')}>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Picklists</h2>
          <div>
            <p>Picklists, commonly known as dropdown menus, allow the user to select one option or multiple options from a list. Picklists are used instead of radio lists and checkbox lists inside of a larger form. They provide more flexibility in the number of options the user can choose from.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-picklist.svg" alt="" />
          </figure>
        </div>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Dueling Picklists</h2>
          <div>
            <p>Use this control when the user needs to select more than one option and define the order of the selected items.</p>
          </div>
          <figure className={pf('grow')}>
            <img className={pf('image')} src="/assets/images/data-entry/img-picklist-multi.svg" alt="" />
          </figure>
        </div>
      </div>

      {/* Inline Edit */}
      <h2 className="site-text-heading--medium">Inline Edit</h2>
      <p>Inline editing allows the user to edit some part of a record without making a major switch between viewing and editing. This is a highly efficient method of updating a record. A user can make their changes without losing context and they can immediately return to what they were doing before.</p>
      <p>A field that can be edited inline will have a pencil icon next to it. The user can either double click on the field value or click on the pencil icon to activate inline edit.</p>
      <figure className={pf('grow')}>
        <img className={pf('image')} src="/assets/images/data-entry/img-inline-edit.svg" alt="" />
      </figure>

    </div>
  </PageBody>
);
