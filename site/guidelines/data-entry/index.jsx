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
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Data Entry" contentClassName={pf('site-guidelines site-guidelines-layout')}>
    <div className={pf('container--large')}>
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

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form--stacked')} aria-hidden="true">
              {_.times(2, i =>
                <div className={pf('form-element')}>
                  <label className={pf('form-element__label site-stencil__color-light')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </label>

                  <div className={pf('form-element__control')}>
                    <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                  </div>
                </div>
              )}
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of 2 stacked basic text inputs.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
            To group related fields together, such as individual parts of an
            address, use compound inputs.
          </p>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <fieldset className={pf('form--compound')} aria-hidden="true">
              <legend className={pf('form-element__label site-stencil__color-dark')}>
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className={pf('form-element__group')}>
                <div className={pf('form-element__row')}>
                  {_.times(2, i =>
                    <div className={pf('form-element size--1-of-2')}>
                      <label className={pf('form-element__label site-stencil__color-light')}>
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </label>

                      <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" tabIndex="-1" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" />
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            <figcaption className={pf('assistive-text')}>
              An example of a compound inputs.
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Sizing</h3>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div aria-hidden="true">
              <div className={pf('form-element')}>
                <label className={pf('form-element__label site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>

                <div className={pf('form-element__control')}>
                  <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                </div>
              </div>

              <div className="site-dimension">
                <div className="site-dimension__line"></div>
                100%
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example showing a full-width input
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Input Help</h3>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form-element')} aria-hidden="true">
              <div className={pf('form-element__label site-stencil__color-light')}>
                <label className={pf('align-middle')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>
              </div>

              <div className={pf('form-element__icon')}>
                <a href="javascript:void(0);" tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="info" className={'icon icon--x-small icon-text-default site-stencil__fill-dark'} />
                </a>
              </div>

              <div className={pf('form-element__control')}>
                <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
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

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <h3 className={pf('site-text-heading--medium p-top--x-large')}>
            Date Pickers
          </h3>

          <p className={pf('m-vertical--large')}>
            Instead of forcing the user to manually type a date, a datepicker
            provides a visual way for the user to browse and select a single
            date or range of dates.
          </p>

          <figure className={pf('site-stencil m-vertical--large clearfix')}>
            <div className={pf('datepicker dropdown dropdown--left site-stencil__border-light is-static m-top--none')} aria-hidden="true">
              <div className={pf('datepicker__filter grid')}>
                <div className={pf('datepicker__filter--month grid grid--align-spread grow')}>
                  <div className={pf('align-middle')}>
                    <button className={pf('button button--icon-container site-stencil__color-dark')} tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="left" className={'button__icon button__icon--small'} />
                    </button>
                  </div>

                  <h2 className={pf('align-middle')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </h2>

                  <div className={pf('align-middle')}>
                    <button className={pf('button button--icon-container site-stencil__color-dark')} tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="right" className={'button__icon button__icon--small'} />
                    </button>
                  </div>
                </div>

                <div className={pf('shrink-none')}>
                  <div className={pf('select_container site-stencil__border-dark-bottom-before site-stencil__border-dark-top-after')}>
                    <select disabled className={pf('select site-stencil__border-light site-stencil__color-light site-stencil__squeeze')} tabIndex="-1">
                      {_.times(3, i =>
                        <option>
                          🁢🁢🁢🁢🁢🁢🁢🁢
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>

              <table className={pf('datepicker__month')} role="grid">
                <thead>
                  <tr>
                    {_.times(7, i =>
                      <th className={pf('site-stencil__color-light')}>🁢🁢🁢🁢</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={pf('disabled-text site-stencil__color-light')}>🁢🁢</td>

                    {_.times(4, i =>
                      <td className={pf('site-stencil__background-none-hover-parent')}>
                        <span className={pf('day')}>🁢🁢</span>
                      </td>
                    )}

                    {_.times(2, i =>
                      <td className={pf('site-stencil__background-none-hover-parent')}>
                        <span className={pf('day')}>🁢🁢</span>
                      </td>
                    )}
                  </tr>

                  {_.times(3, i =>
                    <tr>
                      {_.times(7, i =>
                        <td className={pf('site-stencil__background-none-hover-parent')}>
                          <span className={pf('day')}>🁢🁢</span>
                        </td>
                      )}
                    </tr>
                  )}

                  <tr>
                    {_.times(2, i =>
                      <td className={pf('site-stencil__background-none-hover-parent')}>
                        <span className={pf('day')}>🁢🁢</span>
                      </td>
                    )}

                    <td className={pf('is-selected site-stencil__background-dark-hover-parent')}>
                      <span className={pf('day site-stencil__background-light site-stencil__color-dark site-stencil__color-dark')}>
                        🁢🁢
                      </span>
                    </td>

                    {_.times(4, i =>
                      <td className={pf('disabled-text site-stencil__color-light site-stencil__background-none-hover-parent')}>
                        <span className={pf('day')}>🁢🁢</span>
                      </td>
                    )}
                  </tr>

                  <tr>
                    <td colspan="7">
                      <a href="javascript:void(0);" className={pf('show--inline-block p-bottom--x-small site-stencil__color-light')} tabIndex="-1">
                        🁢🁢🁢🁢🁢🁢
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of a datepicker
            </figcaption>
          </figure>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <h3 className={pf('site-text-heading--medium p-top--x-large')}>
            Lookups
          </h3>

          <p className={pf('m-vertical--large')}>
            A lookup allows the user to search a database for records to fill
            a field. The lookup can either limit the user to a single record
            or allow for multiple records to populate a single field.
          </p>

          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form-element lookup is-open')} aria-hidden="true">
              <label className={pf('form-element__label site-stencil__color-light')}>
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </label>

              <div className={pf('form-element__control input-has-icon input-has-icon--right')}>
                <SvgIcon sprite="utility" symbol="search" className={'input__icon icon-text-default site-stencil__fill-dark'} />

                <input disabled className={pf('lookup__search-input input site-stencil__border-light site-stencil__color-dark-placeholder')} type="text" tabIndex="-1" />
              </div>

              <div className={pf('lookup__menu site-stencil__border-light is-static')}>
                <div className={pf('lookup__item--label text-body--small site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </div>

                <ul className={pf('list--reset lookup__list m-left--none')}>
                  {_.times(5, i =>
                    <li>
                      <a className={pf('lookup__item-action media media--center site-stencil__color-dark site-stencil__background-none-hover')} href="javascript:void(0);" tabIndex="-1">
                        <SvgIcon className={'icon icon-standard-account icon--small media__figure site-stencil__background-light'} />

                        <div className={pf('media__body')}>
                          <div className={pf('lookup__result-text')}>
                            🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                          </div>

                          <span className={pf('lookup__result-meta text-body--small site-stencil__color-light')}>
                            🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                          </span>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
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

      <h3 className={pf('site-text-heading--medium')}>Checkboxes</h3>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
            Use a single checkbox for Boolean fields in which the user can
            choose only between true and false or on and off.
          </p>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form-element')} aria-hidden="true">
              <legend className={pf('form-element__legend form-element__label site-stencil__color-dark')}>
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className={pf('form-element__control')}>
                <label className={pf('checkbox')}>
                  <input disabled type="checkbox" tabIndex="-1" />

                  <span className={pf('checkbox--faux site-stencil__border-light site-stencil__border-dark-bottom-after site-stencil__border-dark-left-after')}></span>

                  <span className={pf('form-element__label site-stencil__color-light')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>

                <label className={pf('checkbox')}>
                  <input disabled type="checkbox" checked="checked" tabIndex="-1" />

                  <span className={pf('checkbox--faux site-stencil__border-light site-stencil__border-dark-bottom-after site-stencil__border-dark-left-after')}></span>

                  <span className={pf('form-element__label site-stencil__color-light')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of checkboxes
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className={pf('site-text-heading--medium')}>Radio Lists</h3>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
            A radio list allows the user to select one option from a short
            list (fewer than 10 options). You must have enough space to
            present all options together to make comparison easy. Typically,
            radio lists are presented as a standalone field, such as a poll
            within a feed, and not used in a larger form.
          </p>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form-element')} aria-hidden="true">
              <legend className={pf('form-element__legend form-element__label site-stencil__color-dark')}>
                🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
              </legend>

              <div className={pf('form-element__control')}>
                <label className={pf('radio')}>
                  <input disabled type="radio" tabIndex="-1" />

                  <span className={pf('radio--faux site-stencil__border-light site-stencil__background-none site-stencil__background-dark-after')}></span>

                  <span className={pf('form-element__label site-stencil__color-light')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>

                <label className={pf('radio')}>
                  <input disabled type="radio" checked="checked" tabIndex="-1" />

                  <span className={pf('radio--faux site-stencil__border-light site-stencil__background-none site-stencil__background-dark-after')}></span>

                  <span className={pf('form-element__label site-stencil__color-light')}>
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </span>
                </label>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of a radio list
            </figcaption>
          </figure>
        </div>
      </div>

      <h3 className="site-text-heading--medium">Checkbox Toggle</h3>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('form-element')} aria-hidden="true">
              <label className={pf('checkbox--toggle grid grid--vertical-align-center')}>
                <span className={pf('checkbox--faux site-stencil__background-light')}></span>
              </label>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of a checkbox toggle
            </figcaption>
          </figure>
        </div>
      </div>

      <h4 className={pf('site-text-heading--label')}>Usage</h4>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>

          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('box site-stencil__border-light clearfix')} aria-hidden="true">
              <fieldset className={pf('form--element')}>
                <div className={pf('form-element__control')}>
                  {_.times(2, i =>
                    <div className={pf('form-element')}>
                      <label className={pf('checkbox--toggle grid grid--vertical-align-center p-around--x-small has-divider--bottom site-stencil__border-light')}>
                        <span className={pf('form-element__label site-stencil__color-light m-bottom--none')}>
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <span className={pf('checkbox--faux site-stencil__background-light col--bump-left')}></span>
                      </label>
                    </div>
                  )}

                  {_.times(2, i =>
                    <div className={pf('form-element')}>
                      <label className={pf('checkbox--toggle grid grid--vertical-align-center p-around--x-small has-divider--bottom site-stencil__border-light')}>
                        <span className={pf('form-element__label site-stencil__color-light m-bottom--none')}>
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <input disabled name="checkbox" type="checkbox"  checked="checked" />

                        <span className={pf('checkbox--faux site-stencil__background-dark col--bump-left')}></span>
                      </label>
                    </div>
                  )}
                </div>
              </fieldset>

              <span className={pf('float--right m-top--x-large icon_container icon-action-approval icon_container--circle')}>
                <SvgIcon sprite="action" symbol="approval" className={pf('icon icon--small')} />
              </span>
            </div>

            <figcaption className={pf('assistive-text')}>
              An correct example of checkbox toggles used alone
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('box site-stencil__border-light clearfix')} aria-hidden="true">
              <fieldset className={pf('form--element')}>
                <div className={pf('form-element__control')}>
                  <div className={pf('form-element')}>
                    <label className={pf('checkbox--toggle grid grid--vertical-align-center p-around--x-small has-divider--bottom site-stencil__border-light')}>
                      <span className={pf('form-element__label site-stencil__color-light m-bottom--none')}>
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>

                      <span className={pf('checkbox--faux site-stencil__background-light col--bump-left')}></span>
                    </label>
                  </div>

                  {_.times(2, i =>
                    <div className={pf('form-element')}>
                      <label className={pf('checkbox--toggle grid grid--vertical-align-center p-around--x-small has-divider--bottom site-stencil__border-light')}>
                        <span className={pf('form-element__label site-stencil__color-light m-bottom--none')}>
                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>

                        <input disabled name="checkbox" type="checkbox"  checked="checked" />

                        <span className={pf('checkbox--faux site-stencil__background-dark col--bump-left')}></span>
                      </label>
                    </div>
                  )}
                </div>
              </fieldset>

              <div className={pf('grid p-top--x-large')}>
                <div className={pf('col')}></div>
                <div className={pf('col text-align--center')}>
                  <button className={pf('button button--neutral site-stencil__border-light site-stencil__color-dark site-stencil__squeeze')} type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>

                  <button className={pf('button button--brand site-stencil__border-dark site-stencil__background-dark site-stencil__color-white site-stencil__squeeze')} type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>
                </div>

                <div className={pf('col text-align--right')}>
                  <span className={pf('icon_container icon-action-close icon_container--circle')}>
                    <SvgIcon sprite="action" symbol="close" className={pf('icon icon--small')} />
                  </span>
                </div>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An incorrect example of checkbox toggles used with submit
              buttons
            </figcaption>
          </figure>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('box site-stencil__border-light clearfix')} aria-hidden="true">
              <fieldset className={pf('form--element')}>
                <div className={pf('form-element__control')}>
                  <div className={pf('form-element')}>
                    <label className={pf('checkbox--toggle grid grid--vertical-align-center p-around--x-small has-divider--bottom site-stencil__border-light')}>
                      <span className={pf('form-element__label site-stencil__color-light m-bottom--none')}>
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>

                      <span className={pf('checkbox--faux site-stencil__background-light col--bump-left')}></span>
                    </label>
                  </div>

                  {_.times(2, i =>
                    <div className={pf('form-element p-around--x-small has-divider--bottom site-stencil__border-light')}>
                      <label className={pf('form-element__label site-stencil__color-light')}>
                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </label>

                      <div className={pf('form-element__control')}>
                        <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                      </div>
                    </div>
                  )}
                </div>
              </fieldset>

              <div className={pf('grid p-top--x-large')}>
                <div className={pf('col')}></div>
                <div className={pf('col text-align--center')}>
                  <button className={pf('button button--neutral site-stencil__border-light site-stencil__color-dark site-stencil__squeeze')} type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>

                  <button className={pf('button button--brand site-stencil__border-dark site-stencil__background-dark site-stencil__color-white site-stencil__squeeze')} type="button">
                    🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                  </button>
                </div>

                <div className={pf('col text-align--right')}>
                  <span className={pf('icon_container icon-action-close icon_container--circle')}>
                    <SvgIcon sprite="action" symbol="close" className={pf('icon icon--small')} />
                  </span>
                </div>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An incorrect example of checkbox toggles used with other input
              types such as text inputs
            </figcaption>
          </figure>
        </div>
      </div>

      <h4 className={pf('site-text-heading--label')}>Labels</h4>

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

      <div className={pf('grid wrap grid--pull-padded-large p-top--x-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Picklists</h2>

          <p className={pf('m-vertical--large')}>
            Picklists, commonly known as dropdown menus, allow the user to
            select one option or multiple options from a list. Picklists are
            used instead of radio lists and checkbox lists inside of a larger
            form. They provide more flexibility in the number of options the
            user can choose from.
          </p>

          <figure className={pf('site-stencil m-vertical--large clearfix')}>
            <div className={pf('picklist dropdown-trigger dropdown-trigger--click is-open')} aria-hidden="true">
              <button className={pf('button button--neutral picklist__label site-stencil__border-light  site-stencil__background-none-hover site-stencil__color-dark site-stencil__squeeze')} tabIndex="-1">
                <span className={pf('truncate')}>🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>

                <SvgIcon sprite="utility" symbol="down" className={'icon site-stencil__fill-dark'} />
              </button>

              <div className={pf('dropdown dropdown--left site-stencil__border-light is-static site-stencil__background-none-hover-parent')}>
                <ul className={pf('list--reset dropdown__list dropdown--length-5 m-left--none')}>
                  <li className={pf('dropdown__item is-selected')}>
                    <a href="javascript:void(0);" tabIndex="-1" className={pf('site-stencil__color-dark')}>
                      <span className={pf('truncate')}>
                        <SvgIcon sprite="utility" symbol="check" className={'icon icon--selected icon--x-small icon-text-default m-right--x-small site-stencil__fill-dark'} />

                        🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                      </span>
                    </a>
                  </li>

                  {_.times(5, i =>
                    <li className={pf('dropdown__item')}>
                      <a href="javascript:void(0);" tabIndex="-1" className={pf('site-stencil__color-dark')}>
                        <span className={pf('truncate')}>
                          <SvgIcon sprite="utility" symbol="check" className={'icon icon--selected icon--x-small icon-text-default m-right--x-small'} />

                          🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of a picklist
            </figcaption>
          </figure>
        </div>

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <h2 className="site-text-heading--medium">Dueling Picklists</h2>

          <p className={pf('m-vertical--large')}>
            Use this control when the user needs to select more than one
            option and define the order of the selected items.
          </p>

          <figure className={pf('site-stencil m-vertical--large')}>
            <div className={pf('picklist--draggable grid')} aria-hidden="true">
              <div className={pf('form-element size--5-of-12')}>
                <span className={pf('form-element__label site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className={pf('picklist picklist--multi')}>
                  <ul className={pf('list--reset picklist__options picklist__options--multi site-stencil__border-light site-stencil__background-none-hover-parent m-left--none size--1-of-1 size--1-of-1')}>
                    {_.times(4, i =>
                      <li className={pf('picklist__item')}>
                        <span className={pf('truncate')}>🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className={pf('grid grid--vertical size--2-of-12')}>
                <button className={pf('button button--icon-container site-stencil__color-dark')} tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="left" className={'button__icon'} />
                </button>

                <button className={pf('button button--icon-container site-stencil__color-dark')} tabIndex="-1">
                  <SvgIcon sprite="utility" symbol="right" className={'button__icon'} />
                </button>
              </div>

              <div className={pf('form-element size--5-of-12')}>
                <span className={pf('form-element__label site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className={pf('picklist picklist--multi')}>
                  <ul className={pf('list--reset picklist__options picklist__options--multi site-stencil__border-light m-left--none size--1-of-1 size--1-of-1')}></ul>
                </div>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of dueling picklists
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="site-text-heading--medium">Inline Edit</h2>

      <div className={pf('grid wrap grid--pull-padded-large')}>
        <div className={pf('col--padded-large large-size--1-of-2')}>
          <p className={pf('m-vertical--large')}>
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

        <div className={pf('col--padded-large large-size--1-of-2')}>
          <figure className={pf('site-stencil m-vertical--large')}>
            <div  className={pf('form--stacked')} aria-hidden="true">
              <div className={pf('form-element')}>
                <span className={pf('form-element__label site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </span>

                <div className={pf('form-element__control has-divider--bottom site-stencil__border-light')}>
                  <span className={pf('form-element__static grid grid--align-spread')}>
                    <span className={pf('truncate grow')}>
                      🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                    </span>

                    <button className={pf('button button--icon m-left--x-small site-stencil__color-dark')} tabIndex="-1">
                      <SvgIcon sprite="utility" symbol="edit" className={'button__icon button__icon--hint button__icon--edit site-stencil__fill-light'} />
                    </button>
                  </span>
                </div>
              </div>

              <div className={pf('form-element')}>
                <label className={pf('form-element__label site-stencil__color-light')}>
                  🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢
                </label>

                <div className={pf('form-element__control')}>
                  <input disabled className={pf('input site-stencil__border-light site-stencil__color-dark-placeholder site-stencil__squeeze')} type="text" placeholder="🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢" tabIndex="-1" />
                </div>
              </div>
            </div>

            <figcaption className={pf('assistive-text')}>
              An example of inline edit
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </PageBody>
);
