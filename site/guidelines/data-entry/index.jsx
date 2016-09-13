/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import _ from 'lodash';
import PageBody from 'app_modules/site/components/page/body';
import CodeBlock from 'app_modules/ui/code-block';
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <PageBody anchorTitle="Data Entry" contentClassName="site-guidelines site-guidelines-layout">
    <div className="slds-container--large">
      <p className="site-text-introduction">
        Salesforce users need to add, change, and delete information
        frequently. A wide variety of text entry and selection options clearly
        and efficiently facilitates this experience.
      </p>

      <h2 className="site-text-heading--large">Basic Text Input</h2>

      <p>
        <strong>
          The simplest method of freeform data entry, for single and multiple
          lines of text.
        </strong>
      </p>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            To limit the amount of text, use a single­line input. To restrict
            the type of input, you can specify the format, such as number or
            email address.
          </p>

          <p>
            Multiline text areas allow the user to enter long­form plain text.
            You can’t specify a format to restrict the type of content.
          </p>

          <p>
            Label the input area above or to the left of the field. In most
            contexts, a stacked label (label on top) is better for readability
            and clarity. Use horizontal labels only if you need to save
            vertical real estate and have fewer than 10 fields.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form--stacked" aria-hidden="true">
              {_.times(2, i =>
                <div key={`item-${i}`} className="slds-form-element">
                  <label className="slds-form-element__label site-stencil__color-light">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </label>

                  <div className="slds-form-element__control">
                    <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                  </div>
                </div>
              )}
            </div>

            <figcaption className="slds-assistive-text">
              An example of 2 stacked basic text inputs.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            To group related fields together, such as individual parts of an
            address, use compound inputs.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <fieldset className="slds-form--compound" aria-hidden="true">
              <legend className="slds-form-element__label site-stencil__color-dark">
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className="form-element__group">
                <div className="slds-form-element__row">
                  {_.times(2, i =>
                    <div key={`item-${i}`} className="slds-form-element slds-size--1-of-2">
                      <label className="slds-form-element__label site-stencil__color-light">
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </label>

                      <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" tabIndex="-1" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" />
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            <figcaption className="slds-assistive-text">
              An example of a compound inputs.
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Sizing</h3>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            The default text size creates a visual hierarchy between the label
            text and the input text. To conserve vertical space or when you
            have a long list of fields in a width-constrained sidebar, a
            smaller input size is also available.
          </p>

          <p>
            The input width depends on the label placement. The input width is
            100% of the container.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div aria-hidden="true">
              <div className="slds-form-element">
                <label className="slds-form-element__label site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>

                <div className="slds-form-element__control">
                  <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                </div>
              </div>

              <div className="site-dimension">
                <div className="site-dimension__line"></div>
                100%
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example showing a full-width input
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Input Help</h3>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            To assist the users, you can add help text. If the explanation is
            lengthy, use an “info” icon and tooltip. For brief explanations
            (shorter than a sentence), you can place the text underneath the
            field.
          </p>

          <p>
            You can also use placeholder text to provide an example of the
            type of input required. For example, in a Name field, show a name
            in the correct format.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form-element" aria-hidden="true">
              <div className="slds-form-element__label site-stencil__color-light">
                <label className="slds-align-middle">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>
              </div>

              <div className="slds-form-element__icon">
                <a href="javascript:void(0);" tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="info" className={'icon icon--x-small icon-text-default site-stencil__fill-dark'} />
                </a>
              </div>

              <div className="slds-form-element__control">
                <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example showing an input help indicator
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="site-text-heading--large">Complex Text Input</h2>

      <p>
        <strong>
          Complex text inputs provide users with additional assistance in
          specific types of data entry.
        </strong>
      </p>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <h3 className="site-text-heading--medium slds-p-top--x-large">
            Date Pickers
          </h3>

          <p className="slds-m-vertical--large">
            Instead of forcing the user to manually type a date, a datepicker
            provides a visual way for the user to browse and select a single
            date or range of dates.
          </p>

          <figure className="site-stencil slds-m-vertical--large slds-clearfix">
            <div className="slds-datepicker slds-dropdown slds-dropdown--left site-stencil__border-light slds-is-static slds-m-top--none" aria-hidden="true">
              <div className="slds-datepicker__filter slds-grid">
                <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow">
                  <div className="slds-align-middle">
                    <button className="slds-button slds-button--icon-container site-stencil__color-dark" tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="left" className={'button__icon button__icon--small'} />
                    </button>
                  </div>

                  <h2 className="slds-align-middle">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </h2>

                  <div className="slds-align-middle">
                    <button className="slds-button slds-button--icon-container site-stencil__color-dark" tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="right" className={'button__icon button__icon--small'} />
                    </button>
                  </div>
                </div>

                <div className="slds-shrink-none">
                  <div className="slds-select_container site-stencil__border-dark-bottom-before site-stencil__border-dark-top-after">
                    <select disabled className="slds-select site-stencil__border-light site-stencil__color-light site-stencil__squeeze" tabIndex="-1">
                      {_.times(3, i =>
                        <option key={`item-${i}`}>
                          🁢🁢🁢🁢🁢🁢🁢🁢
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>

              <table className="datepicker__month" role="grid">
                <thead>
                  <tr>
                    {_.times(7, i =>
                      <th key={`item-${i}`} className="site-stencil__color-light">🁢🁢🁢🁢</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="slds-disabled-text site-stencil__color-light">🁢🁢</td>

                    {_.times(4, i =>
                      <td key={`item-${i}`} className="site-stencil__background-none-hover-parent">
                        <span className="slds-day">🁢🁢</span>
                      </td>
                    )}

                    {_.times(2, i =>
                      <td key={`item-${i}`} className="site-stencil__background-none-hover-parent">
                        <span className="slds-day">🁢🁢</span>
                      </td>
                    )}
                  </tr>

                  {_.times(3, i =>
                    <tr key={`item-${i}`}>
                      {_.times(7, i =>
                        <td key={`item-${i}`} className="site-stencil__background-none-hover-parent">
                          <span className="slds-day">🁢🁢</span>
                        </td>
                      )}
                    </tr>
                  )}

                  <tr>
                    {_.times(2, i =>
                      <td key={`item-${i}`} className="site-stencil__background-none-hover-parent">
                        <span className="slds-day">🁢🁢</span>
                      </td>
                    )}

                    <td className="slds-is-selected site-stencil__background-dark-hover-parent">
                      <span className="slds-day site-stencil__background-light site-stencil__color-dark site-stencil__color-dark">
                        🁢🁢
                      </span>
                    </td>

                    {_.times(4, i =>
                      <td key={`item-${i}`} className="slds-disabled-text site-stencil__color-light site-stencil__background-none-hover-parent">
                        <span className="slds-day">🁢🁢</span>
                      </td>
                    )}
                  </tr>

                  <tr>
                    <td colSpan="7">
                      <a href="javascript:void(0);" className="slds-show--inline-block slds-p-bottom--x-small site-stencil__color-light" tabIndex="-1">
                        🁢🁢🁢🁢🁢🁢
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figcaption className="slds-assistive-text">
              An example of a datepicker
            </figcaption>
          </figure>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <h3 className="site-text-heading--medium slds-p-top--x-large">
            Lookups
          </h3>

          <p className="slds-m-vertical--large">
            A lookup allows the user to search a database for records to fill
            a field. The lookup can either limit the user to a single record
            or allow for multiple records to populate a single field.
          </p>

          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form-element slds-lookup slds-is-open" aria-hidden="true">
              <label className="slds-form-element__label site-stencil__color-light">
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </label>

              <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
                <SvgIcon sprite="utility" symbol="search" className={'input__icon icon-text-default site-stencil__fill-dark'} />

                <input disabled className="slds-lookup__search-input slds-input site-stencil__border-light site-stencil__color-dark-placeholder" type="text" tabIndex="-1" />
              </div>

              <div className="slds-lookup__menu site-stencil__border-light slds-is-static">
                <div className="slds-lookup__item--label slds-text-body--small site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </div>

                <ul className="list--reset slds-lookup__list slds-m-left--none">
                  {_.times(5, i =>
                    <li key={`item-${i}`}>
                      <a className="slds-lookup__item-action slds-media slds-media--center site-stencil__color-dark site-stencil__background-none-hover" href="javascript:void(0);" tabIndex="-1">
                        <SvgIcon className={'icon icon-standard-account icon--small media__figure site-stencil__background-light'} />
                        <div className="slds-media__body">
                          <div className="slds-lookup__result-text">
                            🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                          </div>
                          <span className="slds-lookup__result-meta slds-text-body--small site-stencil__color-light">
                            🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                          </span>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of a lookup
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="site-text-heading--large">Selection Input</h2>

      <p>
        <strong>
          Selection inputs allow a user to choose between a limited number of
          options for a given field.
        </strong>
      </p>

      <h3 className="site-text-heading--medium">Checkboxes</h3>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            Use a single checkbox for Boolean fields in which the user can
            choose only between true and false or on and off.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form-element" aria-hidden="true">
              <legend className="slds-form-element__legend slds-form-element__label site-stencil__color-dark">
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className="slds-form-element__control">
                <label className="slds-checkbox">
                  <input disabled type="checkbox" tabIndex="-1" />

                  <span className="slds-checkbox--faux site-stencil__border-light site-stencil__border-dark-bottom-after site-stencil__border-dark-left-after"></span>

                  <span className="slds-form-element__label site-stencil__color-light">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>

                <label className="slds-checkbox">
                  <input disabled type="checkbox" checked="checked" tabIndex="-1" />

                  <span className="slds-checkbox--faux site-stencil__border-light site-stencil__border-dark-bottom-after site-stencil__border-dark-left-after"></span>

                  <span className="slds-form-element__label site-stencil__color-light">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of checkboxes
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Radio Lists</h3>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            A radio list allows the user to select one option from a short
            list (fewer than 10 options). You must have enough space to
            present all options together to make comparison easy. Typically,
            radio lists are presented as a standalone field, such as a poll
            within a feed, and not used in a larger form.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form-element" aria-hidden="true">
              <legend className="slds-form-element__legend slds-form-element__label site-stencil__color-dark">
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className="slds-form-element__control">
                <label className="slds-radio">
                  <input disabled type="radio" tabIndex="-1" />

                  <span className="slds-radio--faux site-stencil__border-light site-stencil__background-none site-stencil__background-dark-after"></span>

                  <span className="slds-form-element__label site-stencil__color-light">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>

                <label className="slds-radio">
                  <input disabled type="radio" checked="checked" tabIndex="-1" />

                  <span className="slds-radio--faux site-stencil__border-light site-stencil__background-none site-stencil__background-dark-after"></span>

                  <span className="slds-form-element__label site-stencil__color-light">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of a radio list
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Checkbox Toggle</h3>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            A toggle is similar to a checkbox in that it presents users with a
            binary choice for an item. However, a toggle is self-contained
            &mdash; think of it as a short form with only one field. When user
            turns a toggle on or off, the change for that item is saved
            immediately.
          </p>

          <p>
            Toggles are useful for reducing ambiguity. Since toggles save
            immediately, what users see on the page is always a clean state
            (never an unsaved/dirty state).
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-form-element" aria-hidden="true">
              <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center">
                <span className="slds-checkbox--faux site-stencil__background-light"></span>
              </label>
            </div>

            <figcaption className="slds-assistive-text">
              An example of a checkbox toggle
            </figcaption>
          </figure>
        </div>
      </div>

      <h4 className="site-text-heading--label">Usage</h4>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">

          <p className="slds-m-vertical--large">
            Use a toggle if the field you’re building:
          </p>

          <ul>
            <li>
              Exists on a page with no other form components that can appear
              in unsaved states.
            </li>

            <li>Can be saved independently of other fields on the page</li>

            <li>Semantically fits the on/off model</li>
          </ul>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-box site-stencil__border-light slds-clearfix" aria-hidden="true">
              <fieldset className="form--element">
                <div className="slds-form-element__control">
                  {_.times(2, i =>
                    <div key={`item-${i}`} className="slds-form-element">
                      <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                        <span className="slds-form-element__label site-stencil__color-light slds-m-bottom--none">
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <span className="slds-checkbox--faux site-stencil__background-light slds-col--bump-left"></span>
                      </label>
                    </div>
                  )}

                  {_.times(2, i =>
                    <div key={`item-${i}`} className="slds-form-element">
                      <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                        <span className="slds-form-element__label site-stencil__color-light slds-m-bottom--none">
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <input disabled name="checkbox" type="checkbox"  checked="checked" />

                        <span className="slds-checkbox--faux site-stencil__background-dark slds-col--bump-left"></span>
                      </label>
                    </div>
                  )}
                </div>
              </fieldset>

              <span className="slds-float--right slds-m-top--x-large slds-icon_container slds-icon-action-approval slds-icon_container--circle">
                <SvgIcon sprite="action" symbol="approval" className="slds-icon slds-icon--small" />
              </span>
            </div>

            <figcaption className="slds-assistive-text">
              An correct example of checkbox toggles used alone
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-box site-stencil__border-light slds-clearfix" aria-hidden="true">
              <fieldset className="form--element">
                <div className="slds-form-element__control">
                  <div className="slds-form-element">
                    <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                      <span className="slds-form-element__label site-stencil__color-light slds-m-bottom--none">
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>

                      <span className="slds-checkbox--faux site-stencil__background-light slds-col--bump-left"></span>
                    </label>
                  </div>

                  {_.times(2, i =>
                    <div key={`item-${i}`} className="slds-form-element">
                      <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                        <span className="slds-form-element__label site-stencil__color-light slds-m-bottom--none">
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <input disabled name="checkbox" type="checkbox"  checked="checked" />

                        <span className="slds-checkbox--faux site-stencil__background-dark slds-col--bump-left"></span>
                      </label>
                    </div>
                  )}
                </div>
              </fieldset>

              <div className="slds-grid slds-p-top--x-large">
                <div className="slds-col"></div>
                <div className="slds-col slds-text-align--center">
                  <button className="slds-button slds-button--neutral site-stencil__border-light site-stencil__color-dark site-stencil__squeeze" type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>

                  <button className="slds-button slds-button--brand site-stencil__border-dark site-stencil__background-dark site-stencil__color-white site-stencil__squeeze" type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>
                </div>

                <div className="slds-col slds-text-align--right">
                  <span className="slds-icon_container slds-icon-action-close slds-icon_container--circle">
                    <SvgIcon sprite="action" symbol="close" className="slds-icon slds-icon--small" />
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An incorrect example of checkbox toggles used with submit
              buttons
            </figcaption>
          </figure>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-box site-stencil__border-light slds-clearfix" aria-hidden="true">
              <fieldset className="form--element">
                <div className="slds-form-element__control">
                  <div className="slds-form-element">
                    <label className="slds-checkbox--toggle slds-grid slds-grid--vertical-align-center slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                      <span className="slds-form-element__label site-stencil__color-light slds-m-bottom--none">
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>

                      <span className="slds-checkbox--faux site-stencil__background-light slds-col--bump-left"></span>
                    </label>
                  </div>

                  {_.times(2, i =>
                    <div key={`item-${i}`} className="slds-form-element slds-p-around--x-small slds-has-divider--bottom site-stencil__border-light">
                      <label className="slds-form-element__label site-stencil__color-light">
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </label>

                      <div className="slds-form-element__control">
                        <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                      </div>
                    </div>
                  )}
                </div>
              </fieldset>

              <div className="slds-grid slds-p-top--x-large">
                <div className="slds-col"></div>
                <div className="slds-col slds-text-align--center">
                  <button className="slds-button slds-button--neutral site-stencil__border-light site-stencil__color-dark site-stencil__squeeze" type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>

                  <button className="slds-button slds-button--brand site-stencil__border-dark site-stencil__background-dark site-stencil__color-white site-stencil__squeeze" type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>
                </div>

                <div className="slds-col slds-text-align--right">
                  <span className="slds-icon_container slds-icon-action-close slds-icon_container--circle">
                    <SvgIcon sprite="action" symbol="close" className="slds-icon slds-icon--small" />
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An incorrect example of checkbox toggles used with other input
              types such as text inputs
            </figcaption>
          </figure>
        </div>
      </div>

      <h4 className="site-text-heading--label">Labels</h4>

      <p>A toggle is always accompanied by two external labels:</p>

      <ul>
        <li>
          <strong>Field label</strong>, which describes the item that the
          user is modifying, e.g. Post sharing, Desktop notifications,
          etc.
        </li>

        <li>
          <strong>State label</strong>, which describes the current state
          of the field. This label is binary and works in conjunction with
          the on/off state, but it’s more contextual to the field. E.g.
          Disabled/Enabled, Not Allowed/Allowed, etc.
        </li>
      </ul>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large slds-p-top--x-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <h2 className="site-text-heading--medium">Picklists</h2>

          <p className="slds-m-vertical--large">
            Picklists, commonly known as dropdown menus, allow the user to
            select one option or multiple options from a list. Picklists are
            used instead of radio lists and checkbox lists inside of a larger
            form. They provide more flexibility in the number of options the
            user can choose from.
          </p>

          <figure className="site-stencil slds-m-vertical--large slds-clearfix">
            <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open" aria-hidden="true">
              <button className="slds-button slds-button--neutral slds-picklist__label site-stencil__border-light  site-stencil__background-none-hover site-stencil__color-dark site-stencil__squeeze" tabIndex="-1">
                <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>

                <SvgIcon sprite="utility" symbol="down" className={'icon site-stencil__fill-dark'} />
              </button>

              <div className="slds-dropdown slds-dropdown--left site-stencil__border-light slds-is-static site-stencil__background-none-hover-parent">
                <ul className="list--reset dropdown__list slds-dropdown--length-5 slds-m-left--none">
                  <li className="slds-dropdown__item slds-is-selected">
                    <a href="javascript:void(0);" tabIndex="-1" className="site-stencil__color-dark">
                      <span className="slds-truncate">
                        <SvgIcon sprite="utility" symbol="check" className={'icon icon--selected icon--x-small icon-text-default m-right--x-small site-stencil__fill-dark'} />

                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>
                    </a>
                  </li>

                  {_.times(5, i =>
                    <li key={`item-${i}`} className="slds-dropdown__item">
                      <a href="javascript:void(0);" tabIndex="-1" className="site-stencil__color-dark">
                        <span className="slds-truncate">
                          <SvgIcon sprite="utility" symbol="check" className={'icon icon--selected icon--x-small icon-text-default m-right--x-small'} />

                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of a picklist
            </figcaption>
          </figure>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <h2 className="site-text-heading--medium">Dueling Picklists</h2>

          <p className="slds-m-vertical--large">
            Use this control when the user needs to select more than one
            option and define the order of the selected items.
          </p>

          <figure className="site-stencil slds-m-vertical--large">
            <div className="slds-picklist--draggable slds-grid" aria-hidden="true">
              <div className="slds-form-element slds-size--5-of-12">
                <span className="slds-form-element__label site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className="slds-picklist picklist--multi">
                  <ul className="list--reset slds-picklist__options slds-picklist__options--multi site-stencil__border-light site-stencil__background-none-hover-parent slds-m-left--none slds-size--1-of-1 slds-size--1-of-1">
                    {_.times(4, i =>
                      <li key={`item-${i}`} className="slds-picklist__item">
                        <span className="slds-truncate">🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="slds-grid slds-grid--vertical slds-size--2-of-12">
                <button className="slds-button slds-button--icon-container site-stencil__color-dark" tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="left" className={'button__icon'} />
                </button>

                <button className="slds-button slds-button--icon-container site-stencil__color-dark" tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="right" className={'button__icon'} />
                </button>
              </div>

              <div className="slds-form-element slds-size--5-of-12">
                <span className="slds-form-element__label site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className="slds-picklist picklist--multi">
                  <ul className="list--reset slds-picklist__options slds-picklist__options--multi site-stencil__border-light slds-m-left--none slds-size--1-of-1 slds-size--1-of-1"></ul>
                </div>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of dueling picklists
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="site-text-heading--medium">Inline Edit</h2>

      <div className="slds-grid slds-wrap slds-grid--pull-padded-large">
        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <p className="slds-m-vertical--large">
            Inline editing allows the user to edit some part of a record
            without making a major switch between viewing and editing. This is
            a highly efficient method of updating a record. A user can make
            their changes without losing context and they can immediately
            return to what they were doing before.
          </p>

          <p>
            A field that can be edited inline will have a pencil icon next to
            it. The user can either double click on the field value or click
            on the pencil icon to activate inline edit.
          </p>
        </div>

        <div className="slds-col--padded-large slds-large-size--1-of-2">
          <figure className="site-stencil slds-m-vertical--large">
            <div  className="slds-form--stacked" aria-hidden="true">
              <div className="slds-form-element">
                <span className="slds-form-element__label site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className="slds-form-element__control slds-has-divider--bottom site-stencil__border-light">
                  <span className="slds-form-element__static slds-grid slds-grid--align-spread">
                    <span className="slds-truncate slds-grow">
                      🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                    </span>

                    <button className="slds-button slds-button--icon slds-m-left--x-small site-stencil__color-dark" tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="edit" className={'button__icon button__icon--hint button__icon--edit site-stencil__fill-light'} />
                    </button>
                  </span>
                </div>
              </div>

              <div className="slds-form-element">
                <label className="slds-form-element__label site-stencil__color-light">
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>

                <div className="slds-form-element__control">
                  <input disabled className="slds-input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze" type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                </div>
              </div>
            </div>

            <figcaption className="slds-assistive-text">
              An example of inline edit
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </PageBody>
);
