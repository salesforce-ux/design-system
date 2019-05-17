import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../index.scss';

const CodepenHTML = (
  <div>
    <div
      className="slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_warning slds-m-bottom-large"
      role="alert"
    >
      <span className="slds-assistive-text">warning</span>
      <span
        className="slds-icon_container slds-icon-utility-warning slds-m-right_x-small"
        title="Description of icon when needed"
      >
        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning" />
        </svg>
      </span>
      <h2>
        Markup here pulled from early spike work in{' '}
        <a href="https://codepen.io/acordova/pen/aMzKrY" target="_blank">
          Codepen
        </a>
        . To be migrated to use React components and individual stories
      </h2>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Buttons</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <button className="slds-button">Base Button</button>
        <button className="slds-button slds-button_neutral">
          Neutral Button
        </button>
        <button className="slds-button slds-button_brand">Brand Button</button>
        <button className="slds-button slds-button_outline-brand">
          Outline Brand Button
        </button>
        <button className="slds-button slds-button_destructive">
          Destructive Button
        </button>
        <button className="slds-button slds-button_text-destructive">
          Text Destructive Button
        </button>
        <button className="slds-button slds-button_success">
          Success Button
        </button>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Button Groups</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-button-group" role="group">
          <button className="slds-button slds-button_neutral">Refresh</button>
          <button className="slds-button slds-button_neutral">Edit</button>
          <button className="slds-button slds-button_neutral">Save</button>
        </div>
        <ul className="slds-button-group-list">
          <li>
            <button className="slds-button slds-button_neutral">Refresh</button>
          </li>
          <li>
            <button className="slds-button slds-button_neutral">Edit</button>
          </li>
          <li>
            <button className="slds-button slds-button_neutral">Save</button>
          </li>
        </ul>
        <ul className="slds-button-group-row">
          <li className="slds-button-group-item">
            <button className="slds-button slds-button_neutral">Refresh</button>
          </li>
          <li className="slds-button-group-item">
            <button className="slds-button slds-button_neutral">Edit</button>
          </li>
          <li className="slds-button-group-item">
            <button className="slds-button slds-button_brand">Save</button>
          </li>
        </ul>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Button Icons</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <button className="slds-button slds-button_icon" title="Settings">
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">Settings</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-button_icon-brand"
          title="Search"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
          </svg>
          <span className="slds-assistive-text">Search</span>
        </button>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            backgroundColor: '#16325C'
          }}
        >
          <button
            className="slds-button slds-button_icon slds-button_icon-inverse"
            title="Search"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
            </svg>
            <span className="slds-assistive-text">Search</span>
          </button>
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            backgroundColor: '#f4f6f9'
          }}
        >
          <button
            className="slds-button slds-button_icon slds-button_icon-container"
            title="Search"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
            </svg>
            <span className="slds-assistive-text">Search</span>
          </button>
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            backgroundColor: '#f4f6f9'
          }}
        >
          <button
            className="slds-button slds-button_icon slds-button_icon-border-filled"
            title="Search"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
            </svg>
            <span className="slds-assistive-text">Search</span>
          </button>
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            backgroundColor: '#f4f6f9'
          }}
        >
          <button
            className="slds-button slds-button_icon slds-button_icon-border"
            title="Search"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
            </svg>
            <span className="slds-assistive-text">Search</span>
          </button>
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem',
            backgroundColor: '#16325C'
          }}
        >
          <button
            className="slds-button slds-button_icon slds-button_icon-border-inverse"
            title="Search"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search" />
            </svg>
            <span className="slds-assistive-text">Search</span>
          </button>
        </div>
        <button
          className="slds-button slds-button_icon slds-button_icon-border-filled"
          aria-pressed="false"
          title="Like"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#like" />
          </svg>
          <span className="slds-assistive-text">Like</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled"
          aria-pressed="true"
          title="Like"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#like" />
          </svg>
          <span className="slds-assistive-text">Like</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-button_icon-border-filled"
          aria-pressed="false"
          disabled=""
          title="Pin"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#pin" />
          </svg>
          <span className="slds-assistive-text">Pin</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled"
          aria-pressed="true"
          disabled=""
          title="Pin"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#pinned" />
          </svg>
          <span className="slds-assistive-text">Pin</span>
        </button>
        <button className="slds-button slds-button_icon" title="More Options">
          <svg
            className="slds-button__icon slds-button__icon_large"
            aria-hidden="true"
          >
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
        <button className="slds-button slds-button_icon" title="More Options">
          <svg
            className="slds-button__icon slds-button__icon_small"
            aria-hidden="true"
          >
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
        <button className="slds-button slds-button_icon" title="More Options">
          <svg
            className="slds-button__icon slds-button__icon_x-small"
            aria-hidden="true"
          >
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-small"
          title="More Options"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
          title="More Options"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
        <button
          className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-xx-small"
          title="More Options"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings" />
          </svg>
          <span className="slds-assistive-text">More options</span>
        </button>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Checkbox Button Group</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">
            Scheduled Day(s)
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-checkbox_button-group">
              <span className="slds-button slds-checkbox_button">
                <input
                  id="monday"
                  name="checkbox"
                  type="checkbox"
                  value="monday"
                />
                <label className="slds-checkbox_button__label" htmlFor="monday">
                  <span className="slds-checkbox_faux">Mon</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  id="tuesday"
                  name="checkbox"
                  type="checkbox"
                  value="tuesday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="tuesday"
                >
                  <span className="slds-checkbox_faux">Tue</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  id="wednesday"
                  name="checkbox"
                  type="checkbox"
                  value="wednesday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="wednesday"
                >
                  <span className="slds-checkbox_faux">Wed</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  id="thursday"
                  name="checkbox"
                  type="checkbox"
                  value="thursday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="thursday"
                >
                  <span className="slds-checkbox_faux">Thu</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  id="friday"
                  name="checkbox"
                  type="checkbox"
                  value="friday"
                />
                <label className="slds-checkbox_button__label" htmlFor="friday">
                  <span className="slds-checkbox_faux">Fri</span>
                </label>
              </span>
            </div>
          </div>
        </fieldset>
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">
            Scheduled Day(s)
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-checkbox_button-group">
              <span className="slds-button slds-checkbox_button">
                <input
                  disabled=""
                  id="monday"
                  name="checkbox"
                  type="checkbox"
                  value="monday"
                />
                <label className="slds-checkbox_button__label" htmlFor="monday">
                  <span className="slds-checkbox_faux">Mon</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  disabled=""
                  id="tuesday"
                  name="checkbox"
                  type="checkbox"
                  value="tuesday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="tuesday"
                >
                  <span className="slds-checkbox_faux">Tue</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  disabled=""
                  id="wednesday"
                  name="checkbox"
                  type="checkbox"
                  value="wednesday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="wednesday"
                >
                  <span className="slds-checkbox_faux">Wed</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  disabled=""
                  id="thursday"
                  name="checkbox"
                  type="checkbox"
                  value="thursday"
                />
                <label
                  className="slds-checkbox_button__label"
                  htmlFor="thursday"
                >
                  <span className="slds-checkbox_faux">Thu</span>
                </label>
              </span>
              <span className="slds-button slds-checkbox_button">
                <input
                  disabled=""
                  id="friday"
                  name="checkbox"
                  type="checkbox"
                  value="friday"
                />
                <label className="slds-checkbox_button__label" htmlFor="friday">
                  <span className="slds-checkbox_faux">Fri</span>
                </label>
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Expression</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-expression">
          <h2 className="slds-expression__title">Conditions</h2>
          <div className="slds-expression__options">
            <div className="slds-form-element">
              <label
                className="slds-form-element__label"
                htmlFor="combobox-id-151"
              >
                Take Action When
              </label>
              <div className="slds-form-element__control">
                <div className="slds-combobox_container">
                  <div
                    className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    role="combobox"
                  >
                    <div
                      className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                      role="none"
                    >
                      <input
                        type="text"
                        className="slds-input slds-combobox__input slds-combobox__input-value"
                        id="combobox-id-151"
                        aria-controls="listbox-id-145"
                        autoComplete="off"
                        role="textbox"
                        placeholder="Select an Option"
                        readOnly=""
                        value="All Conditions Are Met"
                      />
                      <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                        <svg
                          className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                          aria-hidden="true"
                        >
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                        </svg>
                      </span>
                    </div>
                    <div
                      id="listbox-id-145"
                      className="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid"
                      role="listbox"
                    >
                      <ul
                        className="slds-listbox slds-listbox_vertical"
                        role="presentation"
                      >
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            aria-selected="true"
                            id="listbox-option-id-631"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon">
                              <span className="slds-icon_container slds-icon-utility-check slds-current-color">
                                <svg
                                  className="slds-icon slds-icon_x-small"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                                </svg>
                              </span>
                            </span>
                            <span className="slds-media__body">
                              <span
                                className="slds-truncate"
                                title="All Conditions Are Met"
                              >
                                <span className="slds-assistive-text">
                                  Current Selection:
                                </span>{' '}
                                All Conditions Are Met
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="listbox-option-id-632"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon" />
                            <span className="slds-media__body">
                              <span
                                className="slds-truncate"
                                title="Any Condition Is Met"
                              >
                                {' '}
                                Any Condition Is Met
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="listbox-option-id-633"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon" />
                            <span className="slds-media__body">
                              <span
                                className="slds-truncate"
                                title="Custom Logic Is Met"
                              >
                                {' '}
                                Custom Logic Is Met
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="listbox-option-id-634"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon" />
                            <span className="slds-media__body">
                              <span
                                className="slds-truncate"
                                title="Always (No Criteria)"
                              >
                                {' '}
                                Always (No Criteria)
                              </span>
                            </span>
                          </div>
                        </li>
                        <li role="presentation" className="slds-listbox__item">
                          <div
                            id="listbox-option-id-635"
                            className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                            role="option"
                          >
                            <span className="slds-media__figure slds-listbox__option-icon" />
                            <span className="slds-media__body">
                              <span
                                className="slds-truncate"
                                title="Formula Evaluates To True"
                              >
                                {' '}
                                Formula Evaluates To True
                              </span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li className="slds-expression__row">
              <fieldset>
                <legend className="slds-expression__legend">
                  <span className="slds-assistive-text">Condition 1</span>
                </legend>
                <div className="slds-grid slds-gutters_xx-small">
                  <div className="slds-col">
                    <div className="slds-form-element">
                      <label
                        className="slds-form-element__label"
                        htmlFor="combobox-id-152"
                      >
                        Resource
                      </label>
                      <div className="slds-form-element__control">
                        <div className="slds-combobox_container">
                          <div
                            className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            role="combobox"
                          >
                            <div
                              className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                              role="none"
                            >
                              <input
                                type="text"
                                className="slds-input slds-combobox__input slds-combobox__input-value"
                                id="combobox-id-152"
                                aria-controls="listbox-id-146"
                                autoComplete="off"
                                role="textbox"
                                placeholder="Select an Option"
                                readOnly=""
                                value="Resource 1"
                              />
                              <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                <svg
                                  className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                                </svg>
                              </span>
                            </div>
                            <div
                              id="listbox-id-146"
                              className="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid"
                              role="listbox"
                            >
                              <ul
                                className="slds-listbox slds-listbox_vertical"
                                role="presentation"
                              >
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    aria-selected="true"
                                    id="listbox-option-id-636"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected slds-has-focus"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon">
                                      <span className="slds-icon_container slds-icon-utility-check slds-current-color">
                                        <svg
                                          className="slds-icon slds-icon_x-small"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Resource 1"
                                      >
                                        <span className="slds-assistive-text">
                                          Current Selection:
                                        </span>{' '}
                                        Resource 1
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-637"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Resource 2"
                                      >
                                        {' '}
                                        Resource 2
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-638"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Resource 3"
                                      >
                                        {' '}
                                        Resource 3
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-639"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Resource 4"
                                      >
                                        {' '}
                                        Resource 4
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-grow-none">
                    <div className="slds-form-element">
                      <label
                        className="slds-form-element__label"
                        htmlFor="combobox-id-153"
                      >
                        Operator
                      </label>
                      <div className="slds-form-element__control">
                        <div className="slds-combobox_container">
                          <div
                            className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            role="combobox"
                          >
                            <div
                              className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                              role="none"
                            >
                              <input
                                type="text"
                                className="slds-input slds-combobox__input"
                                id="combobox-id-153"
                                aria-controls="listbox-id-147"
                                autoComplete="off"
                                role="textbox"
                                placeholder="Select an Option"
                                readOnly=""
                              />
                              <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                <svg
                                  className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                                </svg>
                              </span>
                            </div>
                            <div
                              id="listbox-id-147"
                              className="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid"
                              role="listbox"
                            >
                              <ul
                                className="slds-listbox slds-listbox_vertical"
                                role="presentation"
                              >
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-640"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Equals"
                                      >
                                        {' '}
                                        Equals
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-641"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Does Not Equal"
                                      >
                                        {' '}
                                        Does Not Equal
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-642"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Greater Than"
                                      >
                                        {' '}
                                        Greater Than
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li
                                  role="presentation"
                                  className="slds-listbox__item"
                                >
                                  <div
                                    id="listbox-option-id-643"
                                    className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                    role="option"
                                  >
                                    <span className="slds-media__figure slds-listbox__option-icon" />
                                    <span className="slds-media__body">
                                      <span
                                        className="slds-truncate"
                                        title="Less Than"
                                      >
                                        {' '}
                                        Less Than
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col">
                    <div className="slds-form-element">
                      <label
                        className="slds-form-element__label"
                        htmlFor="text-input-id-55"
                      >
                        Value
                      </label>
                      <div className="slds-form-element__control">
                        <input
                          type="text"
                          id="text-input-id-55"
                          className="slds-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-grow-none">
                    <div className="slds-form-element">
                      <span className="slds-form-element__label">&nbsp;</span>
                      <div className="slds-form-element__control">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          title="Delete Condition 1"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#delete" />
                          </svg>
                          <span className="slds-assistive-text">
                            Delete Condition 1
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </li>
          </ul>
          <div className="slds-expression__buttons">
            <button className="slds-button slds-button_neutral">
              <svg
                className="slds-button__icon slds-button__icon_left"
                aria-hidden="true"
              >
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add" />
              </svg>
              Add Condition
            </button>
            <button className="slds-button slds-button_neutral">
              <svg
                className="slds-button__icon slds-button__icon_left"
                aria-hidden="true"
              >
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add" />
              </svg>
              Add Group
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">File Selector</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-form-element">
          <span
            className="slds-form-element__label"
            id="file-selector-primary-label"
          >
            Attachment
          </span>
          <div className="slds-form-element__control">
            <div className="slds-file-selector slds-file-selector_files">
              <div className="slds-file-selector__dropzone">
                <input
                  className="slds-file-selector__input slds-assistive-text"
                  accept="image/png"
                  type="file"
                  id="file-upload-input-01"
                  aria-labelledby="file-selector-primary-label file-selector-secondary-label"
                />
                <label
                  className="slds-file-selector__body"
                  htmlFor="file-upload-input-01"
                  id="file-selector-secondary-label"
                >
                  <span className="slds-file-selector__button slds-button slds-button_neutral">
                    <svg
                      className="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#upload"
                      />
                    </svg>
                    Upload Files
                  </span>
                  <span className="slds-file-selector__text slds-medium-show">
                    or Drop Files
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ maxWidth: '320px' }}>
          <div className="slds-form-element">
            <span
              className="slds-form-element__label"
              id="file-selector-primary-label"
            >
              Attachment
            </span>
            <div className="slds-form-element__control">
              <div className="slds-file-selector slds-file-selector_images">
                <div className="slds-file-selector__dropzone">
                  <input
                    className="slds-file-selector__input slds-assistive-text"
                    accept="image/png"
                    type="file"
                    id="file-upload-input-01"
                    aria-labelledby="file-selector-primary-label file-selector-secondary-label"
                  />
                  <label
                    className="slds-file-selector__body"
                    htmlFor="file-upload-input-01"
                    id="file-selector-secondary-label"
                  >
                    <span className="slds-file-selector__button slds-button slds-button_neutral">
                      <svg
                        className="slds-button__icon slds-button__icon_left"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#upload"
                        />
                      </svg>
                      Upload Image
                    </span>
                    <span className="slds-file-selector__text slds-medium-show">
                      or Drop Image
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Files</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div style={{ width: '20rem' }}>
          <div className="slds-file slds-file_card slds-has-title">
            <figure>
              <a href="javascript:void(0);" className="slds-file__crop">
                <span className="slds-assistive-text">Preview:</span>
                <img
                  src="https://www.lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg"
                  alt="Description of the image"
                />
              </a>
              <figcaption className="slds-file__title slds-file__title_card slds-file-has-actions">
                <div className="slds-media slds-media_small slds-media_center">
                  <div className="slds-media__figure slds-line-height_reset">
                    <span className="slds-icon_container" title="pdf">
                      <svg
                        className="slds-icon slds-icon_x-small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/doctype-sprite/svg/symbols.svg#pdf"
                        />
                      </svg>
                      <span className="slds-assistive-text">pdf</span>
                    </span>
                  </div>
                  <div className="slds-media__body">
                    <span
                      className="slds-file__text slds-truncate"
                      title="Proposal.pdf"
                    >
                      Proposal.pdf
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
            <div className="slds-file__actions-menu">
              <div className="slds-button-group" role="group">
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small"
                  title="Download"
                >
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#download"
                    />
                  </svg>
                  <span className="slds-assistive-text">Download</span>
                </button>
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small"
                  aria-haspopup="true"
                  title="More Actions"
                >
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                    urosr end of
                  </svg>
                  <span className="slds-assistive-text">More Actions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '20rem' }}>
          <div className="slds-file slds-file_card">
            <figure>
              <a href="javascript:void(0);" className="slds-file__crop">
                <span className="slds-assistive-text">Preview:</span>
                <img
                  src="https://www.lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg"
                  alt="Description of the image"
                />
              </a>
            </figure>
            <div className="slds-file__title slds-file__title_scrim">
              <div className="slds-file__actions-menu">
                <div className="slds-button-group" role="group">
                  <button
                    className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-button_icon-inverse"
                    title="Download"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#download"
                      />
                    </svg>
                    <span className="slds-assistive-text">Download</span>
                  </button>
                  <button
                    className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-button_icon-inverse"
                    aria-haspopup="true"
                    title="More Actions"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span className="slds-assistive-text">More Actions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small slds-m-bottom_xx-large">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Menus</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
          <button
            className="slds-button slds-button_icon slds-button_icon-border-filled"
            aria-haspopup="true"
            title="Show More"
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
            </svg>
            <span className="slds-assistive-text">Show More</span>
          </button>
          <div className="slds-dropdown slds-dropdown_left">
            <ul
              className="slds-dropdown__list"
              role="menu"
              aria-label="Show More"
            >
              <li className="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0);" role="menuitem" tabIndex="0">
                  <span className="slds-truncate" title="Menu Item One">
                    Menu Item One
                  </span>
                </a>
              </li>
              <li className="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                  <span className="slds-truncate" title="Menu Item Two">
                    Menu Item Two
                  </span>
                </a>
              </li>
              <li className="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                  <span className="slds-truncate" title="Menu Item Three">
                    Menu Item Three
                  </span>
                </a>
              </li>
              <li className="slds-has-divider_top-space" role="separator" />
              <li className="slds-dropdown__item" role="presentation">
                <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                  <span className="slds-truncate" title="Menu Item Four">
                    Menu Item Four
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Page Headers</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-page-header">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <div className="slds-media">
                <div className="slds-media__figure">
                  <span className="slds-icon_container slds-icon-standard-opportunity">
                    <svg
                      className="slds-icon slds-page-header__icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"
                      />
                    </svg>
                  </span>
                </div>
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <div className="slds-page-header__name-title">
                      <h1>
                        <span>Opportunities</span>
                        <span
                          className="slds-page-header__title slds-truncate"
                          title="Recently Viewed"
                        >
                          Recently Viewed
                        </span>
                      </h1>
                    </div>
                    <div className="slds-page-header__name-switcher">
                      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-small"
                          aria-haspopup="true"
                          title="Switch list view"
                        >
                          <svg
                            className="slds-button__icon slds-icon_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Switch list view
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-page-header__col-actions">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  <ul className="slds-button-group-list">
                    <li>
                      <button className="slds-button slds-button_neutral">
                        New
                      </button>
                    </li>
                    <li>
                      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          aria-haspopup="true"
                          title="More Actions"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Actions
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-meta">
              <p className="slds-page-header__meta-text">
                10 items • Updated 13 minutes ago
              </p>
            </div>
            <div className="slds-page-header__col-controls">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button
                      className="slds-button slds-button_icon slds-button_icon-more"
                      aria-haspopup="true"
                      title="List View Controls"
                    >
                      <svg className="slds-button__icon" aria-hidden="true">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings"
                        />
                      </svg>
                      <svg
                        className="slds-button__icon slds-button__icon_x-small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        List View Controls
                      </span>
                    </button>
                  </div>
                </div>
                <div className="slds-page-header__control">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button
                      className="slds-button slds-button_icon slds-button_icon-more"
                      aria-haspopup="true"
                      title="Change view"
                    >
                      <svg className="slds-button__icon" aria-hidden="true">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#table"
                        />
                      </svg>
                      <svg
                        className="slds-button__icon slds-button__icon_x-small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                        />
                      </svg>
                      <span className="slds-assistive-text">Change view</span>
                    </button>
                  </div>
                </div>
                <div className="slds-page-header__control">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled"
                    title="Edit List"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                      />
                    </svg>
                    <span className="slds-assistive-text">Edit List</span>
                  </button>
                </div>
                <div className="slds-page-header__control">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled"
                    title="Refresh List"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#refresh"
                      />
                    </svg>
                    <span className="slds-assistive-text">Refresh List</span>
                  </button>
                </div>
                <div className="slds-page-header__control">
                  <ul className="slds-button-group-list">
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        title="Charts"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chart"
                          />
                        </svg>
                        <span className="slds-assistive-text">Charts</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        title="Filters"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#filterList"
                          />
                        </svg>
                        <span className="slds-assistive-text">Filters</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slds-page-header slds-page-header_record-home">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <div className="slds-media">
                <div className="slds-media__figure">
                  <span className="slds-icon_container slds-icon-standard-opportunity">
                    <svg
                      className="slds-icon slds-page-header__icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"
                      />
                    </svg>
                  </span>
                </div>
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <div className="slds-page-header__name-title">
                      <h1>
                        <span>Opportunity</span>
                        <span
                          className="slds-page-header__title slds-truncate"
                          title="Acme - 1,200 Widgets"
                        >
                          Acme - 1,200 Widgets
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-page-header__col-actions">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  <button
                    className="slds-button slds-button_neutral slds-button_stateful slds-not-selected"
                    aria-live="assertive"
                  >
                    <span className="slds-text-not-selected">
                      <svg
                        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"
                        />
                      </svg>
                      Follow
                    </span>
                    <span className="slds-text-selected">
                      <svg
                        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                        />
                      </svg>
                      Following
                    </span>
                    <span className="slds-text-selected-focus">
                      <svg
                        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"
                        />
                      </svg>
                      Unfollow
                    </span>
                  </button>
                </div>
                <div className="slds-page-header__control">
                  <ul className="slds-button-group-list">
                    <li>
                      <button className="slds-button slds-button_neutral">
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="slds-button slds-button_neutral">
                        Delete
                      </button>
                    </li>
                    <li>
                      <button className="slds-button slds-button_neutral">
                        Clone
                      </button>
                    </li>
                    <li>
                      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          aria-haspopup="true"
                          title="More Actions"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Actions
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="slds-page-header__row slds-page-header__row_gutters">
            <div className="slds-page-header__col-details">
              <ul className="slds-page-header__detail-row">
                <li className="slds-page-header__detail-block">
                  <div
                    className="slds-text-title slds-truncate"
                    title="Field 1"
                  >
                    Field 1
                  </div>
                  <div
                    className="slds-truncate"
                    title="Description that demonstrates truncation with a long text field."
                  >
                    Description that demonstrates truncation with a long text
                    field.
                  </div>
                </li>
                <li className="slds-page-header__detail-block">
                  <div
                    className="slds-text-title slds-truncate"
                    title="Field 2 (3)"
                  >
                    Field 2 (3)
                    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                      <button
                        className="slds-button slds-button_icon slds-button_icon"
                        aria-haspopup="true"
                        title="More Actions"
                      >
                        <svg
                          className="slds-button__icon slds-button__icon_small"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          More Actions
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="slds-truncate" title="Multiple Values">
                    Multiple Values
                  </div>
                </li>
                <li className="slds-page-header__detail-block">
                  <div
                    className="slds-text-title slds-truncate"
                    title="Field 3"
                  >
                    Field 3
                  </div>
                  <div className="slds-truncate" title="Hyperlink">
                    <a href="javascript:void(0);">Hyperlink</a>
                  </div>
                </li>
                <li className="slds-page-header__detail-block">
                  <div
                    className="slds-text-title slds-truncate"
                    title="Field 4"
                  >
                    Field 4
                  </div>
                  <div
                    className="slds-truncate"
                    title="Description (2-line truncation—must use JS to truncate)."
                  >
                    Description (2-line truncati...
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ width: '300px' }}>
          <div className="slds-page-header slds-page-header_vertical">
            <div className="slds-media">
              <div className="slds-media__figure">
                <span
                  className="slds-icon_container slds-icon-standard-opportunity"
                  title="opportunity"
                >
                  <svg
                    className="slds-icon slds-page-header__icon"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"
                    />
                  </svg>
                  <span className="slds-assistive-text">opportunity</span>
                </span>
              </div>
              <div className="slds-media__body">
                <div className="slds-page-header__name">
                  <div className="slds-page-header__name-title">
                    <h1>
                      <span
                        className="slds-page-header__title slds-hyphenate"
                        title="Burlington Textile Weaving Plant Generator"
                      >
                        Burlington Textile Weaving Plant Generator
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-page-header__controls">
              <button
                className="slds-button slds-button_neutral slds-button_stateful slds-not-selected"
                aria-live="assertive"
              >
                <span className="slds-text-not-selected">
                  <svg
                    className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"
                    />
                  </svg>
                  Follow
                </span>
                <span className="slds-text-selected">
                  <svg
                    className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    />
                  </svg>
                  Following
                </span>
                <span className="slds-text-selected-focus">
                  <svg
                    className="slds-button__icon slds-button__icon_small slds-button__icon_left"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"
                    />
                  </svg>
                  Unfollow
                </span>
              </button>
              <ul className="slds-button-group-list">
                <li>
                  <button className="slds-button slds-button_neutral">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="slds-button slds-button_neutral">
                    Delete
                  </button>
                </li>
                <li>
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled"
                    aria-haspopup="true"
                    title="More Actions"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span className="slds-assistive-text">More Actions</span>
                  </button>
                </li>
              </ul>
            </div>
            <ul className="slds-page-header__detail-list">
              <li className="slds-page-header__detail-item">
                <div className="slds-text-title slds-truncate" title="Field 1">
                  Account Name
                </div>
                <div title="Burlington Textile Weaving Plant Generator">
                  <a href="javascript:void(0);">
                    Burlington Textile Weaving Plant Generator
                  </a>
                </div>
              </li>
              <li className="slds-page-header__detail-item">
                <div
                  className="slds-text-title slds-truncate"
                  title="Address (2)"
                >
                  Address (2)
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button
                      className="slds-button slds-button_icon slds-button_icon"
                      aria-haspopup="true"
                      title="More Actions"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                        />
                      </svg>
                      <span className="slds-assistive-text">More Actions</span>
                    </button>
                  </div>
                </div>
                <div title="Multiple Values">
                  <div>1 Market St</div>
                  <div>San Francisco, CA 94105</div>
                </div>
              </li>
              <li className="slds-page-header__detail-item">
                <div
                  className="slds-text-title slds-truncate"
                  title="Close Date"
                >
                  Close Date
                </div>
                <div title="11/1/2018">11/1/2018</div>
              </li>
              <li className="slds-page-header__detail-item">
                <div
                  className="slds-text-title slds-truncate"
                  title="Opportunity Owner"
                >
                  Opportunity Owner
                </div>
                <div title="Hyperlink">
                  <div className="slds-media slds-media_small">
                    <div className="slds-media__figure">
                      <span className="slds-avatar slds-avatar_circle slds-avatar_x-small">
                        <img
                          alt="Person name"
                          src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"
                          title="User avatar"
                        />
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <a href="javascript:void(0);">Jeanette Gomez</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="slds-page-header__detail-item">
                <div className="slds-text-title slds-truncate" title="Amount">
                  Amount
                </div>
                <div title="$375,000.00">$375,000.00</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="slds-page-header slds-page-header_related-list">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <nav role="navigation" aria-label="Breadcrumbs">
                <ol className="slds-breadcrumb slds-list_horizontal slds-wrap">
                  <li className="slds-breadcrumb__item">
                    <a href="javascript:void(0);">Accounts</a>
                  </li>
                  <li className="slds-breadcrumb__item">
                    <a href="javascript:void(0);">Company One</a>
                  </li>
                </ol>
              </nav>
              <div className="slds-media">
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <div className="slds-page-header__name-title">
                      <h1>
                        <span
                          className="slds-page-header__title slds-truncate"
                          title="Contacts (will truncate)"
                        >
                          Contacts (will truncate)
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-page-header__col-actions">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  <ul className="slds-button-group-list">
                    <li>
                      <button className="slds-button slds-button_neutral">
                        Add Contact
                      </button>
                    </li>
                    <li>
                      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          aria-haspopup="true"
                          title="More Actions"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Actions
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-meta">
              <p className="slds-page-header__meta-text">
                10 items • sorted by name
              </p>
            </div>
            <div className="slds-page-header__col-controls">
              <div className="slds-page-header__controls">
                <div className="slds-page-header__control">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button
                      className="slds-button slds-button_icon slds-button_icon-more"
                      aria-haspopup="true"
                      title="Change view"
                    >
                      <svg className="slds-button__icon" aria-hidden="true">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#table"
                        />
                      </svg>
                      <svg
                        className="slds-button__icon slds-button__icon_x-small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                        />
                      </svg>
                      <span className="slds-assistive-text">Change view</span>
                    </button>
                  </div>
                </div>
                <div className="slds-page-header__control">
                  <ul className="slds-button-group-list">
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border"
                        title="Chart"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chart"
                          />
                        </svg>
                        <span className="slds-assistive-text">Chart</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border"
                        title="Filter List"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#filterList"
                          />
                        </svg>
                        <span className="slds-assistive-text">Filter List</span>
                      </button>
                    </li>
                    <li>
                      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-more"
                          aria-haspopup="true"
                          title="Sort List"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#sort"
                            />
                          </svg>
                          <svg
                            className="slds-button__icon slds-button__icon_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">Sort List</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Path</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <article className="slds-card">
          <div className="slds-card__body slds-card__body_inner">
            <div className="slds-path">
              <div className="slds-grid slds-path__track">
                <div className="slds-grid slds-path__scroller-container">
                  <div className="slds-path__scroller" role="application">
                    <div className="slds-path__scroller_inner">
                      <ul
                        className="slds-path__nav"
                        role="listbox"
                        aria-orientation="horizontal"
                      >
                        <li
                          className="slds-path__item slds-is-current slds-is-active"
                          role="presentation"
                        >
                          <a
                            aria-selected="true"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-1"
                            role="option"
                            tabIndex="0"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Current Stage:
                              </span>
                            </span>
                            <span className="slds-path__title">Contacted</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-2"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Open</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-3"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Unqualified
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-4"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Nurturing</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-5"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Closed</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="slds-grid slds-path__action">
                  <span className="slds-path__stage-name">
                    Stage: Unqualified
                  </span>
                  <button className="slds-button slds-button_brand">
                    <svg
                      className="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                      />
                    </svg>
                    Mark Status as Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="slds-card">
          <div className="slds-card__body slds-card__body_inner">
            <div className="slds-path slds-path_has-coaching slds-is-expanded">
              <div className="slds-grid slds-path__track">
                <div className="slds-grid slds-path__scroller-container">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled slds-path__trigger slds-path__trigger_open"
                    title="Toggle Sales Coaching"
                    aria-expanded="true"
                    aria-controls="path-coaching-2"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
                      />
                    </svg>
                    <span className="slds-assistive-text">Show Details</span>
                  </button>
                  <div className="slds-path__scroller" role="application">
                    <div className="slds-path__scroller_inner">
                      <ul
                        className="slds-path__nav"
                        role="listbox"
                        aria-orientation="horizontal"
                      >
                        <li
                          className="slds-path__item slds-is-complete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-26"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Stage Complete
                              </span>
                            </span>
                            <span className="slds-path__title">Contacted</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-complete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-27"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Stage Complete
                              </span>
                            </span>
                            <span className="slds-path__title">Open</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-current"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-28"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Current Stage:
                              </span>
                            </span>
                            <span className="slds-path__title">
                              Unqualified
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete slds-is-active"
                          role="presentation"
                        >
                          <a
                            aria-selected="true"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-29"
                            role="option"
                            tabIndex="0"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Nurturing</span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-30"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Closed</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="slds-grid slds-path__action">
                  <span className="slds-path__stage-name">
                    Stage: Unqualified
                  </span>
                  <button className="slds-button slds-button_brand">
                    <svg
                      className="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                      />
                    </svg>
                    Mark Status as Complete
                  </button>
                </div>
              </div>
              <div className="slds-path__content" id="path-coaching-2">
                <div className="slds-path__coach slds-grid">
                  <div className="slds-path__keys">
                    <div className="slds-grid slds-grid_align-spread slds-path__coach-title">
                      <h2>Key Fields This Stage</h2>
                      <button className="slds-button slds-path__coach-edit slds-text-body_small">
                        Edit
                      </button>
                    </div>
                    <div className="slds-form" role="list">
                      <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                          <div className="slds-form-element slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                            <span className="slds-form-element__label">
                              Expected Budget
                            </span>
                            <div className="slds-form-element__control">
                              <div className="slds-form-element__static">
                                $10,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                          <div className="slds-form-element slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                            <span className="slds-form-element__label">
                              Lead Source
                            </span>
                            <div className="slds-form-element__control">
                              <div className="slds-form-element__static">
                                Marketing and Web Referral
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                          <div className="slds-form-element slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                            <span className="slds-form-element__label">
                              Support Engineer
                            </span>
                            <div className="slds-form-element__control">
                              <div className="slds-form-element__static">
                                Jane Authur
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-path__guidance">
                    <h2 className="slds-path__coach-title">
                      Guidance for Success
                    </h2>
                    <div className="slds-text-longform slds-path__guidance-content">
                      <p>
                        Regularly cross-sell related products using{' '}
                        <a href="javascript:void(0);">
                          cross-sell tactics and principles
                        </a>
                        .
                      </p>
                      <p>
                        Prepare demo deck using the{' '}
                        <a href="javascript:void(0);">latest template</a> and
                        review with Marketing and Sales teams. Review demo copy
                        with Legal and Doc team.
                      </p>
                      <p>
                        Look up{' '}
                        <a href="javascript:void(0);">
                          needs analysis principles
                        </a>{' '}
                        and review selling plan with Sales Engineer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="slds-card">
          <div className="slds-card__body slds-card__body_inner">
            <div className="slds-path">
              <div className="slds-grid slds-path__track slds-has-overflow">
                <div className="slds-grid slds-path__scroller-container">
                  <div className="slds-path__scroller" role="application">
                    <div className="slds-path__scroller_inner">
                      <ul
                        className="slds-path__nav"
                        role="listbox"
                        aria-orientation="horizontal"
                      >
                        <li
                          className="slds-path__item slds-is-complete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-41"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Stage Complete
                              </span>
                            </span>
                            <span className="slds-path__title">
                              Prospecting
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-complete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-42"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Stage Complete
                              </span>
                            </span>
                            <span className="slds-path__title">
                              Qualification
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-active slds-is-current"
                          role="presentation"
                        >
                          <a
                            aria-selected="true"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-43"
                            role="option"
                            tabIndex="0"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span className="slds-assistive-text">
                                Current Stage:
                              </span>
                            </span>
                            <span className="slds-path__title">
                              Needs Analysis
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-44"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Value Proposition
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-45"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Id. Decision Maker
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-46"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Perception Analysis
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-47"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Proposal / Pricing
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-48"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">
                              Negotiation / Review
                            </span>
                          </a>
                        </li>
                        <li
                          className="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            className="slds-path__link"
                            href="javascript:void(0);"
                            id="path-49"
                            role="option"
                            tabIndex="-1"
                          >
                            <span className="slds-path__stage">
                              <svg
                                className="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span className="slds-path__title">Closed</span>
                          </a>
                        </li>
                      </ul>
                      <div className="slds-path__scroll-controls">
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          title="Scroll left"
                          tabIndex="-1"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Scroll left
                          </span>
                        </button>
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled"
                          title="Scroll right"
                          tabIndex="-1"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Scroll right
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slds-grid slds-path__action">
                  <span className="slds-path__stage-name">
                    Stage: Unqualified
                  </span>
                  <button className="slds-button slds-button_brand">
                    <svg
                      className="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"
                      />
                    </svg>
                    Mark Status as Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Publishers</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-publisher">
          <label
            htmlFor="comment-text-input2"
            className="slds-publisher__toggle-visibility slds-m-bottom_small"
          >
            <span className="slds-assistive-text">Write a comment</span>To: My
            followers
          </label>
          <textarea
            id="comment-text-input2"
            className="slds-publisher__input slds-textarea slds-text-longform"
            placeholder="Write a comment…"
          />
          <div className="slds-publisher__actions slds-grid slds-grid_align-spread">
            <ul className="slds-grid slds-publisher__toggle-visibility">
              <li>
                <button
                  className="slds-button slds-button_icon slds-button_icon-container"
                  title="Add User"
                >
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#adduser"
                    />
                  </svg>
                  <span className="slds-assistive-text">Add User</span>
                </button>
              </li>
              <li>
                <button
                  className="slds-button slds-button_icon slds-button_icon-container"
                  title="Attach a file"
                >
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#attach"
                    />
                  </svg>
                  <span className="slds-assistive-text">Attach a file</span>
                </button>
              </li>
            </ul>
            <button className="slds-button slds-button_brand">Share</button>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Radio Group Buttons</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">
            Radio Group Label
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-radio_button-group">
              <span className="slds-button slds-radio_button">
                <input name="radio" type="radio" id="monday" value="monday" />
                <label className="slds-radio_button__label" htmlFor="monday">
                  <span className="slds-radio_faux">Mon</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input name="radio" type="radio" id="tuesday" value="tuesday" />
                <label className="slds-radio_button__label" htmlFor="tuesday">
                  <span className="slds-radio_faux">Tue</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="wednesday"
                  value="wednesday"
                />
                <label className="slds-radio_button__label" htmlFor="wednesday">
                  <span className="slds-radio_faux">Wed</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="thursday"
                  value="thursday"
                />
                <label className="slds-radio_button__label" htmlFor="thursday">
                  <span className="slds-radio_faux">Thu</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input name="radio" type="radio" id="friday" value="friday" />
                <label className="slds-radio_button__label" htmlFor="friday">
                  <span className="slds-radio_faux">Fri</span>
                </label>
              </span>
            </div>
          </div>
        </fieldset>
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">
            Radio Group Label
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-radio_button-group">
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="monday"
                  disabled=""
                  value="monday"
                />
                <label className="slds-radio_button__label" htmlFor="monday">
                  <span className="slds-radio_faux">Mon</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="tuesday"
                  disabled=""
                  value="tuesday"
                />
                <label className="slds-radio_button__label" htmlFor="tuesday">
                  <span className="slds-radio_faux">Tue</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="wednesday"
                  disabled=""
                  value="wednesday"
                />
                <label className="slds-radio_button__label" htmlFor="wednesday">
                  <span className="slds-radio_faux">Wed</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="thursday"
                  disabled=""
                  value="thursday"
                />
                <label className="slds-radio_button__label" htmlFor="thursday">
                  <span className="slds-radio_faux">Thu</span>
                </label>
              </span>
              <span className="slds-button slds-radio_button">
                <input
                  name="radio"
                  type="radio"
                  id="friday"
                  disabled=""
                  value="friday"
                />
                <label className="slds-radio_button__label" htmlFor="friday">
                  <span className="slds-radio_faux">Fri</span>
                </label>
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Rich Text Editor</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="0"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose text"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose text...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <div
                    className="slds-grid slds-rich-text-editor__spacing-wrapper"
                    role="group"
                    aria-label="Format font family &amp; size"
                  >
                    <div className="slds-rich-text-editor__select">
                      <div className="slds-form-element">
                        <label
                          className="slds-form-element__label slds-assistive-text"
                          htmlFor="font-family"
                        >
                          Choose a Font
                        </label>
                        <div className="slds-form-element__control">
                          <div className="slds-combobox_container">
                            <div
                              className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-size_x-small"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              role="combobox"
                            >
                              <div
                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                                role="none"
                              >
                                <input
                                  className="slds-input slds-combobox__input slds-combobox__input-value"
                                  id="font-family"
                                  aria-controls="family-listbox"
                                  autoComplete="off"
                                  role="textbox"
                                  type="text"
                                  placeholder="Select an Option"
                                  readOnly=""
                                  value="Font"
                                />
                                <span
                                  className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                                  title="Description of icon when needed"
                                >
                                  <svg
                                    className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                                    />
                                  </svg>
                                  <span className="slds-assistive-text">
                                    Description of icon when needed
                                  </span>
                                </span>
                              </div>
                              <div id="family-listbox" role="listbox">
                                <ul
                                  className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                                  role="presentation"
                                >
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-01"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="Times New Roman"
                                        >
                                          {' '}
                                          Times New Roman
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-02"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="Arial"
                                        >
                                          {' '}
                                          Arial
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slds-rich-text-editor__select">
                      <div className="slds-form-element">
                        <label
                          className="slds-form-element__label slds-assistive-text"
                          htmlFor="font-size"
                        >
                          Choose a Font Size
                        </label>
                        <div className="slds-form-element__control">
                          <div className="slds-combobox_container">
                            <div
                              className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-size_xx-small"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              role="combobox"
                            >
                              <div
                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                                role="none"
                              >
                                <input
                                  className="slds-input slds-combobox__input slds-combobox__input-value"
                                  id="font-size"
                                  aria-controls="size-listbox"
                                  autoComplete="off"
                                  role="textbox"
                                  type="text"
                                  placeholder="Select an Option"
                                  readOnly=""
                                  tabIndex="-1"
                                  value="Size"
                                />
                                <span
                                  className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                                  title="Description of icon when needed"
                                >
                                  <svg
                                    className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                                    />
                                  </svg>
                                  <span className="slds-assistive-text">
                                    Description of icon when needed
                                  </span>
                                </span>
                              </div>
                              <div id="size-listbox" role="listbox">
                                <ul
                                  className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                                  role="presentation"
                                >
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-03"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="12px"
                                        >
                                          {' '}
                                          12px
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-04"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="14px"
                                        >
                                          {' '}
                                          14px
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format background &amp; text color"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        tabIndex="-1"
                        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
                        aria-haspopup="true"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#text_background_color"
                          />
                        </svg>
                        <svg
                          className="slds-button__icon slds-button__icon_x-small"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Background Color
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        tabIndex="-1"
                        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
                        aria-haspopup="true"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#text_color"
                          />
                        </svg>
                        <svg
                          className="slds-button__icon slds-button__icon_x-small"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">Text Color</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Align text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Left Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#center_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Center Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Right Align Text
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Insert content"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#emoji"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Emoji</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Image</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#link"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Link</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose email"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose Email...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slds-region_narrow" style={{ width: '294px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <div
                    className="slds-grid slds-rich-text-editor__spacing-wrapper"
                    role="group"
                    aria-label="Format font family &amp; size"
                  >
                    <div className="slds-rich-text-editor__select">
                      <div className="slds-form-element">
                        <label
                          className="slds-form-element__label slds-assistive-text"
                          htmlFor="font-family"
                        >
                          Choose a Font
                        </label>
                        <div className="slds-form-element__control">
                          <div className="slds-combobox_container">
                            <div
                              className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-size_x-small"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              role="combobox"
                            >
                              <div
                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                                role="none"
                              >
                                <input
                                  className="slds-input slds-combobox__input slds-combobox__input-value"
                                  id="font-family"
                                  aria-controls="family-listbox"
                                  autoComplete="off"
                                  role="textbox"
                                  type="text"
                                  placeholder="Select an Option"
                                  readOnly=""
                                  value="Font"
                                />
                                <span
                                  className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                                  title="Description of icon when needed"
                                >
                                  <svg
                                    className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                                    />
                                  </svg>
                                  <span className="slds-assistive-text">
                                    Description of icon when needed
                                  </span>
                                </span>
                              </div>
                              <div id="family-listbox" role="listbox">
                                <ul
                                  className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                                  role="presentation"
                                >
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-01"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="Times New Roman"
                                        >
                                          {' '}
                                          Times New Roman
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-02"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="Arial"
                                        >
                                          {' '}
                                          Arial
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slds-rich-text-editor__select">
                      <div className="slds-form-element">
                        <label
                          className="slds-form-element__label slds-assistive-text"
                          htmlFor="font-size"
                        >
                          Choose a Font Size
                        </label>
                        <div className="slds-form-element__control">
                          <div className="slds-combobox_container">
                            <div
                              className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-size_xx-small"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              role="combobox"
                            >
                              <div
                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                                role="none"
                              >
                                <input
                                  className="slds-input slds-combobox__input slds-combobox__input-value"
                                  id="font-size"
                                  aria-controls="size-listbox"
                                  autoComplete="off"
                                  role="textbox"
                                  type="text"
                                  placeholder="Select an Option"
                                  readOnly=""
                                  tabIndex="-1"
                                  value="Size"
                                />
                                <span
                                  className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                                  title="Description of icon when needed"
                                >
                                  <svg
                                    className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                                    />
                                  </svg>
                                  <span className="slds-assistive-text">
                                    Description of icon when needed
                                  </span>
                                </span>
                              </div>
                              <div id="size-listbox" role="listbox">
                                <ul
                                  className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                                  role="presentation"
                                >
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-03"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="12px"
                                        >
                                          {' '}
                                          12px
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li
                                    role="presentation"
                                    className="slds-listbox__item"
                                  >
                                    <div
                                      id="listbox-option-unique-id-04"
                                      className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                                      role="option"
                                    >
                                      <span className="slds-media__body">
                                        <span
                                          className="slds-truncate"
                                          title="14px"
                                        >
                                          {' '}
                                          14px
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format background &amp; text color"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        tabIndex="-1"
                        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
                        aria-haspopup="true"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#text_background_color"
                          />
                        </svg>
                        <svg
                          className="slds-button__icon slds-button__icon_x-small"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Background Color
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        tabIndex="-1"
                        className="slds-button slds-button_icon slds-button_icon-more slds-button_icon-more-filled"
                        aria-haspopup="true"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#text_color"
                          />
                        </svg>
                        <svg
                          className="slds-button__icon slds-button__icon_x-small"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">Text Color</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Align text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Left Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#center_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Center Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Right Align Text
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Insert content"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#emoji"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Emoji</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Image</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#link"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Link</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose email"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose Email...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="0"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Align text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Left Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#center_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Center Align Text
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right_align_text"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Right Align Text
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Insert content"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#emoji"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Emoji</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Image</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#link"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Link</span>
                      </button>
                    </li>
                  </ul>
                  <ul aria-label="Add user" className="slds-button-group-list">
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#adduser"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add User</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Post to feed"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Post to feed...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="0"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Insert content"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#emoji"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Emoji</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Image</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#link"
                          />
                        </svg>
                        <span className="slds-assistive-text">Add Link</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose note"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose Note...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  aria-label="disabled"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="0"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                        disabled=""
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose text"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose text...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-only" style={{ minHeight: '180px' }}>
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap">
                <div
                  role="toolbar"
                  className="slds-rich-text-editor__toolbar slds-shrink-none"
                >
                  <ul
                    aria-label="Format text"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="0"
                        aria-describedby="bold"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"
                          />
                        </svg>
                        <span className="slds-assistive-text">Bold</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"
                          />
                        </svg>
                        <span className="slds-assistive-text">Italic</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"
                          />
                        </svg>
                        <span className="slds-assistive-text">Underline</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Strike Through
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Format body"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Bulleted List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Numbered List
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Indent</span>
                      </button>
                    </li>
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"
                          />
                        </svg>
                        <span className="slds-assistive-text">Outdent</span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    aria-label="Remove Formatting"
                    className="slds-button-group-list"
                  >
                    <li>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled"
                        tabIndex="-1"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          Remove Formatting
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="slds-rich-text-editor__textarea slds-grid">
                  <div
                    aria-label="Compose text"
                    contentEditable="true"
                    className="slds-rich-text-area__content slds-text-color_weak slds-grow"
                  >
                    Compose text...
                  </div>
                </div>
                <div
                  className="slds-popover slds-popover_tooltip slds-nubbin_top-left"
                  role="tooltip"
                  id="bold"
                  style={{ position: 'absolute', top: '48px', left: '2px' }}
                >
                  <div className="slds-popover__body">
                    Bold
                    <kbd>cmd+b</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

storiesOf('Codepen/Mobile Buttons Demo', module).add(
  'Review',
  () => CodepenHTML
);
