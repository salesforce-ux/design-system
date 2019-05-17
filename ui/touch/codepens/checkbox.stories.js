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
        <a href="https://codepen.io/acordova/pen/NmMPBN" target="_blank">
          Codepen
        </a>
        . To be migrated to use React components and individual stories
      </h2>
    </div>
    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Activity Timeline</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <ul className="slds-timeline">
          <li>
            <div className="slds-timeline__item_expandable slds-timeline__item_task">
              <span className="slds-assistive-text">task</span>
              <div className="slds-media">
                <div className="slds-media__figure">
                  <button
                    className="slds-button slds-button_icon"
                    title="Toggle details for Review proposals for EBC deck with larger team and have marketing review this"
                    aria-controls="task-item-base"
                    aria-expanded="false"
                  >
                    <svg
                      className="slds-button__icon slds-timeline__details-action-icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Toggle details for Review proposals for EBC deck with
                      larger team and have marketing review this
                    </span>
                  </button>
                  <div
                    className="slds-icon_container slds-icon-standard-task slds-timeline__icon"
                    title="task"
                  >
                    <svg
                      className="slds-icon slds-icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#task"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slds-media__body">
                  <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                    <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                      <div className="slds-checkbox">
                        <input
                          type="checkbox"
                          name="options"
                          id="checkbox-4"
                          value="checkbox-4"
                        />
                        <label
                          className="slds-checkbox__label"
                          htmlFor="checkbox-4"
                        >
                          <span className="slds-checkbox_faux" />
                          <span className="slds-form-element__label slds-assistive-text">
                            Mark Review proposals for EBC deck with larger team
                            and have marketing review this complete
                          </span>
                        </label>
                      </div>
                      <h3
                        className="slds-truncate"
                        title="Review proposals for EBC deck with larger team and have marketing review this"
                      >
                        <a href="javascript:void(0);">
                          <strong>
                            Review proposals for EBC deck with larger team and
                            have marketing review this
                          </strong>
                        </a>
                      </h3>
                      <div className="slds-no-flex">
                        <span
                          className="slds-icon_container slds-icon-utility-rotate"
                          title="Recurring Task"
                        >
                          <svg
                            className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#rotate"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Recurring Task
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="slds-timeline__actions slds-timeline__actions_inline">
                      <p className="slds-timeline__date">9:00am | 3/20/17</p>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                        aria-haspopup="true"
                        title="More Options for this item"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          More Options for this item
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="slds-m-horizontal_xx-small">
                    <a href="javascript:void(0);">You</a> created a task with
                    <a href="javascript:void(0);">Charlie Gomez</a>
                  </p>
                  <article
                    className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                    id="task-item-base"
                    aria-hidden="true"
                  >
                    <ul className="slds-list_horizontal slds-wrap">
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Name
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Charlie Gomez"
                        >
                          <a href="javascript:void(0);">Charlie Gomez</a>
                        </span>
                      </li>
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Related To
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Tesla Cloudhub + Anypoint Connectors"
                        >
                          <a href="javascript:void(0);">
                            Tesla Cloudhub + Anypoint Connectors
                          </a>
                        </span>
                      </li>
                    </ul>
                    <div>
                      <span className="slds-text-title">Description</span>
                      <p className="slds-p-top_x-small">
                        Need to finalize proposals and brand details before the
                        meeting
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slds-timeline__item_expandable slds-timeline__item_call">
              <span className="slds-assistive-text">log_a_call</span>
              <div className="slds-media">
                <div className="slds-media__figure">
                  <button
                    className="slds-button slds-button_icon"
                    title="Toggle details for Mobile conversation on Monday"
                    aria-controls="call-item-base"
                    aria-expanded="false"
                  >
                    <svg
                      className="slds-button__icon slds-timeline__details-action-icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Toggle details for Mobile conversation on Monday
                    </span>
                  </button>
                  <div
                    className="slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon"
                    title="call"
                  >
                    <svg
                      className="slds-icon slds-icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#log_a_call"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slds-media__body">
                  <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                    <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                      <h3
                        className="slds-truncate"
                        title="Mobile conversation on Monday"
                      >
                        <a href="javascript:void(0);">
                          <strong>Mobile conversation on Monday</strong>
                        </a>
                      </h3>
                    </div>
                    <div className="slds-timeline__actions slds-timeline__actions_inline">
                      <p className="slds-timeline__date">10:00am | 3/23/17</p>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                        aria-haspopup="true"
                        title="More Options for this item"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          More Options for this item
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="slds-m-horizontal_xx-small">
                    <a href="javascript:void(0);">You</a> logged a call with
                    <a href="javascript:void(0);">Adam Chan</a>
                  </p>
                  <article
                    className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                    id="call-item-base"
                    aria-hidden="true"
                  >
                    <ul className="slds-list_horizontal slds-wrap">
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Name
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Adam Chan"
                        >
                          <a href="javascript:void(0);">Adam Chan</a>
                        </span>
                      </li>
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Related To
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Tesla Cloudhub + Anypoint Connectors"
                        >
                          <a href="javascript:void(0);">
                            Tesla Cloudhub + Anypoint Connectors
                          </a>
                        </span>
                      </li>
                    </ul>
                    <div>
                      <span className="slds-text-title">Description</span>
                      <p className="slds-p-top_x-small">
                        Adam seemed interested in closing this deal quickly!
                        Let’s move.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slds-timeline__item_expandable slds-timeline__item_email">
              <span className="slds-assistive-text">email</span>
              <div className="slds-media">
                <div className="slds-media__figure">
                  <button
                    className="slds-button slds-button_icon"
                    title="Toggle details for Re: Mobile conversation on Monday with the new global team"
                    aria-controls="email-item-base"
                    aria-expanded="false"
                  >
                    <svg
                      className="slds-button__icon slds-timeline__details-action-icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Toggle details for Re: Mobile conversation on Monday with
                      the new global team
                    </span>
                  </button>
                  <div
                    className="slds-icon_container slds-icon-standard-email slds-timeline__icon"
                    title="email"
                  >
                    <svg
                      className="slds-icon slds-icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#email"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slds-media__body">
                  <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                    <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                      <h3
                        className="slds-truncate"
                        title="Re: Mobile conversation on Monday with the new global team"
                      >
                        <a href="javascript:void(0);">
                          <strong>
                            Re: Mobile conversation on Monday with the new
                            global team
                          </strong>
                        </a>
                      </h3>
                      <div className="slds-no-flex">
                        <span
                          className="slds-icon_container slds-icon-utility-groups"
                          title="Group email"
                        >
                          <svg
                            className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#groups"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Group email
                          </span>
                        </span>
                        <span
                          className="slds-icon_container slds-icon-utility-attach"
                          title="Has attachments"
                        >
                          <svg
                            className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#attach"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Has attachments
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="slds-timeline__actions slds-timeline__actions_inline">
                      <p className="slds-timeline__date">10:00am | 3/24/17</p>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                        aria-haspopup="true"
                        title="More Options for this item"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          More Options for this item
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="slds-m-horizontal_xx-small">
                    <a href="javascript:void(0);">You</a> emailed
                    <a href="javascript:void(0);">Lea Chan</a>
                  </p>
                  <article
                    className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                    id="email-item-base"
                    aria-hidden="true"
                  >
                    <ul className="slds-list_horizontal slds-wrap">
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          From Address
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Jackie Dewar"
                        >
                          <a href="javascript:void(0);">Jackie Dewar</a>
                        </span>
                      </li>
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          To Address
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Lea Chan"
                        >
                          <a href="javascript:void(0);">Lea Chan</a>
                        </span>
                      </li>
                    </ul>
                    <div>
                      <span className="slds-text-title">Text Body</span>
                      <p className="slds-p-top_x-small">
                        Hi everyone, Thanks for meeting with the team today and
                        going through the proposals we saw. This goes on and
                        wraps if needed.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slds-timeline__item_expandable slds-timeline__item_event">
              <span className="slds-assistive-text">event</span>
              <div className="slds-media">
                <div className="slds-media__figure">
                  <button
                    className="slds-button slds-button_icon"
                    title="Toggle details for EBC Follow up call"
                    aria-controls="event-item-base"
                    aria-expanded="false"
                  >
                    <svg
                      className="slds-button__icon slds-timeline__details-action-icon"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Toggle details for EBC Follow up call
                    </span>
                  </button>
                  <div
                    className="slds-icon_container slds-icon-standard-event slds-timeline__icon"
                    title="event"
                  >
                    <svg
                      className="slds-icon slds-icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#event"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slds-media__body">
                  <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                    <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                      <h3 className="slds-truncate" title="EBC Follow up call">
                        <a href="javascript:void(0);">
                          <strong>EBC Follow up call</strong>
                        </a>
                      </h3>
                      <div className="slds-no-flex">
                        <span
                          className="slds-icon_container slds-icon-utility-world"
                          title="Public sharing"
                        >
                          <svg
                            className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            Public sharing
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="slds-timeline__actions slds-timeline__actions_inline">
                      <p className="slds-timeline__date">10:30am | 3/24/17</p>
                      <button
                        className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                        aria-haspopup="true"
                        title="More Options for this item"
                      >
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                          />
                        </svg>
                        <span className="slds-assistive-text">
                          More Options for this item
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="slds-m-horizontal_xx-small">
                    <a href="javascript:void(0);">You</a> created an event with
                    <a href="javascript:void(0);">Aida Lee</a> and 5 others
                  </p>
                  <article
                    className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                    id="event-item-base"
                    aria-hidden="true"
                  >
                    <ul className="slds-list_horizontal slds-wrap">
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Location
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Westen St. Francis, San Francisco, CA, 94622"
                        >
                          <a href="javascript:void(0);">
                            Westen St. Francis, San Francisco, CA, 94622
                          </a>
                        </span>
                      </li>
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          Attendees
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="Jason Dewar (Organizer) + 5 others"
                        >
                          <a href="javascript:void(0);">
                            Jason Dewar (Organizer) + 5 others
                          </a>
                        </span>
                      </li>
                      <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                        <span className="slds-text-title slds-p-bottom_x-small">
                          When
                        </span>
                        <span
                          className="slds-text-body_medium slds-truncate"
                          title="March 26, 10:00 AM - 11:00 AM"
                        >
                          <a href="javascript:void(0);">
                            March 26, 10:00 AM - 11:00 AM
                          </a>
                        </span>
                      </li>
                    </ul>
                    <div>
                      <span className="slds-text-title">Description</span>
                      <p className="slds-p-top_x-small">
                        Let's discuss the 2017 product roadmap and address any
                        questions
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="demo-only" style={{ width: '400px' }}>
          <ul className="slds-timeline">
            <li>
              <div className="slds-timeline__item_expandable slds-timeline__item_task slds-is-open">
                <span className="slds-assistive-text">task</span>
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <button
                      className="slds-button slds-button_icon"
                      title="Toggle details for Review proposals for EBC deck with larger team and have marketing review this"
                      aria-controls="task-item-narrow"
                      aria-expanded="true"
                    >
                      <svg
                        className="slds-button__icon slds-timeline__details-action-icon"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Toggle details for Review proposals for EBC deck with
                        larger team and have marketing review this
                      </span>
                    </button>
                    <div
                      className="slds-icon_container slds-icon-standard-task slds-timeline__icon"
                      title="task"
                    >
                      <svg
                        className="slds-icon slds-icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#task"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slds-media__body">
                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                      <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                        <div className="slds-checkbox">
                          <input
                            type="checkbox"
                            name="options"
                            id="checkbox-5"
                            value="checkbox-5"
                          />
                          <label
                            className="slds-checkbox__label"
                            htmlFor="checkbox-5"
                          >
                            <span className="slds-checkbox_faux" />
                            <span className="slds-form-element__label slds-assistive-text">
                              Mark Review proposals for EBC deck with larger
                              team and have marketing review this complete
                            </span>
                          </label>
                        </div>
                        <h3
                          className="slds-truncate"
                          title="Review proposals for EBC deck with larger team and have marketing review this"
                        >
                          <a href="javascript:void(0);">
                            <strong>
                              Review proposals for EBC deck with larger team and
                              have marketing review this
                            </strong>
                          </a>
                        </h3>
                        <div className="slds-no-flex">
                          <span
                            className="slds-icon_container slds-icon-utility-rotate"
                            title="Recurring Task"
                          >
                            <svg
                              className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                              aria-hidden="true"
                            >
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#rotate"
                              />
                            </svg>
                            <span className="slds-assistive-text">
                              Recurring Task
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="slds-timeline__actions slds-timeline__actions_inline">
                        <p className="slds-timeline__date">9:00am | 3/20/17</p>
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options for this item"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Options for this item
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="slds-m-horizontal_xx-small">
                      <a href="javascript:void(0);">You</a> created a task with
                      <a href="javascript:void(0);">Charlie Gomez</a>
                    </p>
                    <article
                      className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small slds-p-around_medium"
                      id="task-item-narrow"
                      aria-hidden="false"
                    >
                      <ul className="slds-list_horizontal slds-wrap">
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Name
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Charlie Gomez"
                          >
                            <a href="javascript:void(0);">Charlie Gomez</a>
                          </span>
                        </li>
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Related To
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Tesla Cloudhub + Anypoint Connectors"
                          >
                            <a href="javascript:void(0);">
                              Tesla Cloudhub + Anypoint Connectors
                            </a>
                          </span>
                        </li>
                      </ul>
                      <div>
                        <span className="slds-text-title">Description</span>
                        <p className="slds-p-top_x-small">
                          Need to finalize proposals and brand details before
                          the meeting
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slds-timeline__item_expandable slds-timeline__item_call slds-is-open">
                <span className="slds-assistive-text">log_a_call</span>
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <button
                      className="slds-button slds-button_icon"
                      title="Toggle details for Mobile conversation on Monday"
                      aria-controls="call-item-narrow"
                      aria-expanded="true"
                    >
                      <svg
                        className="slds-button__icon slds-timeline__details-action-icon"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Toggle details for Mobile conversation on Monday
                      </span>
                    </button>
                    <div
                      className="slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon"
                      title="call"
                    >
                      <svg
                        className="slds-icon slds-icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#log_a_call"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slds-media__body">
                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                      <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                        <h3
                          className="slds-truncate"
                          title="Mobile conversation on Monday"
                        >
                          <a href="javascript:void(0);">
                            <strong>Mobile conversation on Monday</strong>
                          </a>
                        </h3>
                      </div>
                      <div className="slds-timeline__actions slds-timeline__actions_inline">
                        <p className="slds-timeline__date">10:00am | 3/23/17</p>
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options for this item"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Options for this item
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="slds-m-horizontal_xx-small">
                      <a href="javascript:void(0);">You</a> logged a call with
                      <a href="javascript:void(0);">Adam Chan</a>
                    </p>
                    <article
                      className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small slds-p-around_medium"
                      id="call-item-narrow"
                      aria-hidden="false"
                    >
                      <ul className="slds-list_horizontal slds-wrap">
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Name
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Adam Chan"
                          >
                            <a href="javascript:void(0);">Adam Chan</a>
                          </span>
                        </li>
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Related To
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Tesla Cloudhub + Anypoint Connectors"
                          >
                            <a href="javascript:void(0);">
                              Tesla Cloudhub + Anypoint Connectors
                            </a>
                          </span>
                        </li>
                      </ul>
                      <div>
                        <span className="slds-text-title">Description</span>
                        <p className="slds-p-top_x-small">
                          Adam seemed interested in closing this deal quickly!
                          Let’s move.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slds-timeline__item_expandable slds-timeline__item_email slds-is-open">
                <span className="slds-assistive-text">email</span>
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <button
                      className="slds-button slds-button_icon"
                      title="Toggle details for Re: Mobile conversation on Monday with the new global team"
                      aria-controls="email-item-narrow"
                      aria-expanded="true"
                    >
                      <svg
                        className="slds-button__icon slds-timeline__details-action-icon"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Toggle details for Re: Mobile conversation on Monday
                        with the new global team
                      </span>
                    </button>
                    <div
                      className="slds-icon_container slds-icon-standard-email slds-timeline__icon"
                      title="email"
                    >
                      <svg
                        className="slds-icon slds-icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#email"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slds-media__body">
                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                      <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                        <h3
                          className="slds-truncate"
                          title="Re: Mobile conversation on Monday with the new global team"
                        >
                          <a href="javascript:void(0);">
                            <strong>
                              Re: Mobile conversation on Monday with the new
                              global team
                            </strong>
                          </a>
                        </h3>
                        <div className="slds-no-flex">
                          <span
                            className="slds-icon_container slds-icon-utility-groups"
                            title="Group email"
                          >
                            <svg
                              className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                              aria-hidden="true"
                            >
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#groups"
                              />
                            </svg>
                            <span className="slds-assistive-text">
                              Group email
                            </span>
                          </span>
                          <span
                            className="slds-icon_container slds-icon-utility-attach"
                            title="Has attachments"
                          >
                            <svg
                              className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                              aria-hidden="true"
                            >
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#attach"
                              />
                            </svg>
                            <span className="slds-assistive-text">
                              Has attachments
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="slds-timeline__actions slds-timeline__actions_inline">
                        <p className="slds-timeline__date">10:00am | 3/24/17</p>
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options for this item"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Options for this item
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="slds-m-horizontal_xx-small">
                      <a href="javascript:void(0);">You</a> emailed
                      <a href="javascript:void(0);">Lea Chan</a>
                    </p>
                    <article
                      className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small slds-p-around_medium"
                      id="email-item-narrow"
                      aria-hidden="false"
                    >
                      <ul className="slds-list_horizontal slds-wrap">
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            From Address
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Jackie Dewar"
                          >
                            <a href="javascript:void(0);">Jackie Dewar</a>
                          </span>
                        </li>
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            To Address
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Lea Chan"
                          >
                            <a href="javascript:void(0);">Lea Chan</a>
                          </span>
                        </li>
                      </ul>
                      <div>
                        <span className="slds-text-title">Text Body</span>
                        <p className="slds-p-top_x-small">
                          Hi everyone, Thanks for meeting with the team today
                          and going through the proposals we saw. This goes on
                          and wraps if needed.
                        </p>
                      </div>
                      <button className="slds-button slds-button_neutral slds-m-top_small">
                        <svg
                          className="slds-button__icon slds-button__icon_left"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"
                          />
                        </svg>
                        Public Sharing
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slds-timeline__item_expandable slds-timeline__item_event slds-is-open">
                <span className="slds-assistive-text">event</span>
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <button
                      className="slds-button slds-button_icon"
                      title="Toggle details for EBC Follow up call"
                      aria-controls="event-item-narrow"
                      aria-expanded="true"
                    >
                      <svg
                        className="slds-button__icon slds-timeline__details-action-icon"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Toggle details for EBC Follow up call
                      </span>
                    </button>
                    <div
                      className="slds-icon_container slds-icon-standard-event slds-timeline__icon"
                      title="event"
                    >
                      <svg
                        className="slds-icon slds-icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#event"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slds-media__body">
                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                      <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                        <h3
                          className="slds-truncate"
                          title="EBC Follow up call"
                        >
                          <a href="javascript:void(0);">
                            <strong>EBC Follow up call</strong>
                          </a>
                        </h3>
                        <div className="slds-no-flex">
                          <span
                            className="slds-icon_container slds-icon-utility-world"
                            title="Public sharing"
                          >
                            <svg
                              className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                              aria-hidden="true"
                            >
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"
                              />
                            </svg>
                            <span className="slds-assistive-text">
                              Public sharing
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="slds-timeline__actions slds-timeline__actions_inline">
                        <p className="slds-timeline__date">10:30am | 3/24/17</p>
                        <button
                          className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options for this item"
                        >
                          <svg className="slds-button__icon" aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span className="slds-assistive-text">
                            More Options for this item
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="slds-m-horizontal_xx-small">
                      <a href="javascript:void(0);">You</a> created an event
                      with
                      <a href="javascript:void(0);">Aida Lee</a> and 5 others
                    </p>
                    <article
                      className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small slds-p-around_medium"
                      id="event-item-narrow"
                      aria-hidden="false"
                    >
                      <ul className="slds-list_horizontal slds-wrap">
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Location
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Westen St. Francis, San Francisco, CA, 94622"
                          >
                            <a href="javascript:void(0);">
                              Westen St. Francis, San Francisco, CA, 94622
                            </a>
                          </span>
                        </li>
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            Attendees
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="Jason Dewar (Organizer) + 5 others"
                          >
                            <a href="javascript:void(0);">
                              Jason Dewar (Organizer) + 5 others
                            </a>
                          </span>
                        </li>
                        <li className="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
                          <span className="slds-text-title slds-p-bottom_x-small">
                            When
                          </span>
                          <span
                            className="slds-text-body_medium slds-truncate"
                            title="March 26, 10:00 AM - 11:00 AM"
                          >
                            <a href="javascript:void(0);">
                              March 26, 10:00 AM - 11:00 AM
                            </a>
                          </span>
                        </li>
                      </ul>
                      <div>
                        <span className="slds-text-title">Description</span>
                        <p className="slds-p-top_x-small">
                          Let's discuss the 2017 product roadmap and address any
                          questions
                        </p>
                      </div>
                      <button className="slds-button slds-button_neutral slds-m-top_small">
                        <svg
                          className="slds-button__icon slds-button__icon_left"
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"
                          />
                        </svg>
                        Public Sharing
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Checkbox</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-form-element">
          <div className="slds-form-element__control">
            <div className="slds-checkbox">
              <input
                type="checkbox"
                name="options"
                id="checkbox-2"
                value="checkbox-2"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-2">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
        </div>
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">
            Checkbox Group Label
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-checkbox">
              <input
                type="checkbox"
                name="options"
                id="checkbox-6"
                value="checkbox-6"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-6">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
            <div className="slds-checkbox">
              <input
                type="checkbox"
                name="options"
                id="checkbox-7"
                value="checkbox-7"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-7">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
        </fieldset>
        <div className="slds-form-element">
          <div className="slds-form-element__control">
            <div className="slds-checkbox slds-checkbox_stacked">
              <input
                type="checkbox"
                name="options"
                id="checkbox-25"
                value="checkbox-25"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-25">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
        </div>
        <div className="slds-form-element slds-has-error">
          <div className="slds-form-element__control">
            <div className="slds-checkbox">
              <abbr className="slds-required" title="required">
                *
              </abbr>
              <input
                type="checkbox"
                name="options"
                id="checkbox-28"
                aria-describedby="error_01"
                value="checkbox-28"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-28">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
          <div className="slds-form-element__help" id="error_01">
            This field is required
          </div>
        </div>
        <div className="slds-form-element">
          <div className="slds-form-element__control">
            <div className="slds-checkbox">
              <input
                type="checkbox"
                name="options"
                id="checkbox-29"
                disabled=""
                value="checkbox-29"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-29">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
        </div>
        <div className="slds-form-element">
          <div className="slds-form-element__control">
            <div className="slds-checkbox">
              <input
                type="checkbox"
                name="options"
                id="checkbox-30"
                disabled=""
                value="checkbox-30"
              />
              <label className="slds-checkbox__label" htmlFor="checkbox-30">
                <span className="slds-checkbox_faux" />
                <span className="slds-form-element__label">Checkbox Label</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Checkbox Button</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-checkbox_add-button">
          <input
            className="slds-assistive-text"
            type="checkbox"
            id="add-checkbox-2"
            value="add-checkbox-2"
          />
          <label htmlFor="add-checkbox-2" className="slds-checkbox_faux">
            <span className="slds-assistive-text">Add product</span>
          </label>

          <div className="slds-checkbox_add-button">
            <input
              className="slds-assistive-text"
              type="checkbox"
              id="add-checkbox-3"
              value="add-checkbox-3"
              checked
            />
            <label htmlFor="add-checkbox-3" className="slds-checkbox_faux">
              <span className="slds-assistive-text">Add product</span>
            </label>
          </div>

          <div className="slds-checkbox_add-button">
            <input
              className="slds-assistive-text"
              type="checkbox"
              id="add-checkbox-4"
              disabled=""
              value="add-checkbox-4"
            />
            <label htmlFor="add-checkbox-4" className="slds-checkbox_faux">
              <span className="slds-assistive-text">Add product</span>
            </label>
          </div>

          <div className="slds-checkbox_add-button">
            <input
              className="slds-assistive-text"
              type="checkbox"
              id="add-checkbox-5"
              disabled=""
              value="add-checkbox-5"
              checked
            />
            <label htmlFor="add-checkbox-5" className="slds-checkbox_faux">
              <span className="slds-assistive-text">Add product</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Checkbox Toggle</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-form-element">
          <label className="slds-checkbox_toggle slds-grid">
            <span className="slds-form-element__label slds-m-bottom_none">
              Toggle Label
            </span>
            <input
              name="checkbox-toggle-2"
              type="checkbox"
              aria-describedby="checkbox-toggle-2"
              value="checkbox-toggle-2"
            />
            <span
              id="checkbox-toggle-2"
              className="slds-checkbox_faux_container"
              aria-live="assertive"
            >
              <span className="slds-checkbox_faux" />
              <span className="slds-checkbox_on">Enabled</span>
              <span className="slds-checkbox_off">Disabled</span>
            </span>
          </label>
        </div>

        <div className="slds-form-element">
          <label className="slds-checkbox_toggle slds-grid">
            <span className="slds-form-element__label slds-m-bottom_none">
              Toggle Label
            </span>
            <input
              name="checkbox-toggle-3"
              type="checkbox"
              aria-describedby="checkbox-toggle-3"
              value="checkbox-toggle-3"
              checked
            />
            <span
              id="checkbox-toggle-3"
              className="slds-checkbox_faux_container"
              aria-live="assertive"
            >
              <span className="slds-checkbox_faux" />
              <span className="slds-checkbox_on">Enabled</span>
              <span className="slds-checkbox_off">Disabled</span>
            </span>
          </label>
        </div>
        <div className="slds-form-element">
          <label className="slds-checkbox_toggle slds-grid">
            <span className="slds-form-element__label slds-m-bottom_none">
              Toggle Label
            </span>
            <input
              name="checkbox-toggle-4"
              type="checkbox"
              disabled=""
              aria-describedby="checkbox-toggle-4"
              value="checkbox-toggle-4"
            />
            <span
              id="checkbox-toggle-4"
              className="slds-checkbox_faux_container"
              aria-live="assertive"
            >
              <span className="slds-checkbox_faux" />
              <span className="slds-checkbox_on">Enabled</span>
              <span className="slds-checkbox_off">Disabled</span>
            </span>
          </label>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Combobox (Multi Select)</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-form-element">
          <label className="slds-form-element__label" htmlFor="combobox-id-2">
            Languages
          </label>
          <div className="slds-form-element__control">
            <div className="slds-combobox_container">
              <div
                className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                aria-expanded="true"
                aria-haspopup="dialog"
                role="combobox"
              >
                <div
                  className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                  role="none"
                >
                  <input
                    type="text"
                    className="slds-input slds-combobox__input"
                    id="combobox-id-2"
                    aria-controls="popover-unique-id-02"
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
                <section
                  aria-describedby="dialog-body-id-8"
                  aria-label="Language Options"
                  className="slds-popover slds-popover_full-width"
                  id="popover-unique-id-02"
                  role="dialog"
                >
                  <div
                    className="slds-popover__body slds-popover__body_small"
                    id="dialog-body-id-8"
                  >
                    <fieldset className="slds-form-element">
                      <legend className="slds-form-element__legend slds-form-element__label">
                        Select up to 2
                      </legend>
                      <div className="slds-form-element__control">
                        <div className="slds-checkbox">
                          <input
                            type="checkbox"
                            name="options"
                            id="checkbox-5"
                            value="checkbox-5"
                          />
                          <label
                            className="slds-checkbox__label"
                            htmlFor="checkbox-5"
                          >
                            <span className="slds-checkbox_faux" />
                            <span className="slds-form-element__label">
                              English
                            </span>
                          </label>
                        </div>
                        <div className="slds-checkbox">
                          <input
                            type="checkbox"
                            name="options"
                            id="checkbox-6"
                            value="checkbox-6"
                          />
                          <label
                            className="slds-checkbox__label"
                            htmlFor="checkbox-6"
                          >
                            <span className="slds-checkbox_faux" />
                            <span className="slds-form-element__label">
                              German
                            </span>
                          </label>
                        </div>
                        <div className="slds-checkbox">
                          <input
                            type="checkbox"
                            name="options"
                            id="checkbox-7"
                            value="checkbox-7"
                          />
                          <label
                            className="slds-checkbox__label"
                            htmlFor="checkbox-7"
                          >
                            <span className="slds-checkbox_faux" />
                            <span className="slds-form-element__label">
                              Tobagonian Creole English
                            </span>
                          </label>
                        </div>
                        <div className="slds-checkbox">
                          <input
                            type="checkbox"
                            name="options"
                            id="checkbox-8"
                            value="checkbox-8"
                            checked
                          />
                          <label
                            className="slds-checkbox__label"
                            htmlFor="checkbox-8"
                          >
                            <span className="slds-checkbox_faux" />
                            <span className="slds-form-element__label">
                              Spanish
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <footer className="slds-popover__footer slds-popover__footer_form">
                    <button className="slds-button slds-button_neutral">
                      Cancel
                    </button>
                    <button className="slds-button slds-button_brand">
                      Done
                    </button>
                  </footer>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Data Tables (Inline Edit)</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-table_edit_container slds-is-relative">
          <table
            aria-multiselectable="true"
            className="slds-table slds-no-cell-focus slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols"
            role="grid"
            style={{ width: '66.75rem' }}
          >
            <thead>
              <tr className="slds-line-height_reset">
                <th className="" scope="col" style={{ width: '3.75rem' }}>
                  <div
                    className="slds-truncate slds-assistive-text"
                    title="Errors"
                  >
                    Errors
                  </div>
                </th>
                <th className="" scope="col" style={{ width: '2rem' }}>
                  <span
                    id="column-group-header"
                    className="slds-assistive-text"
                  >
                    Choose a row
                  </span>
                  <div className="slds-th__action slds-th__action_form">
                    <div className="slds-checkbox">
                      <input
                        type="checkbox"
                        name="options"
                        id="checkbox-29"
                        tabIndex="-1"
                        aria-labelledby="check-select-all-label column-group-header"
                        value="checkbox-29"
                      />
                      <label
                        className="slds-checkbox__label"
                        htmlFor="checkbox-29"
                        id="check-select-all-label"
                      >
                        <span className="slds-checkbox_faux" />
                        <span className="slds-form-element__label slds-assistive-text">
                          Select All
                        </span>
                      </label>
                    </div>
                  </div>
                </th>
                <th
                  aria-label="Name"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Name">
                        Name
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Name column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-50"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Account Name"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Account Name">
                        Account Name
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Account Name column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-51"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Close Date"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Close Date">
                        Close Date
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Close Date column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-52"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Stage"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Stage">
                        Stage
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Stage column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-53"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Confidence"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Confidence">
                        Confidence
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Confidence column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-54"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Amount"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Amount">
                        Amount
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Amount column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-55"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th
                  aria-label="Contact"
                  aria-sort="none"
                  className="slds-is-resizable slds-is-sortable"
                  scope="col"
                  style={{ width: '8.75rem' }}
                >
                  <a
                    className="slds-th__action slds-text-link_reset"
                    href="javascript:void(0);"
                    role="button"
                    tabIndex="-1"
                  >
                    <span className="slds-assistive-text">Sort by: </span>
                    <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                      <span className="slds-truncate" title="Contact">
                        Contact
                      </span>
                      <span className="slds-icon_container slds-icon-utility-arrowdown">
                        <svg
                          className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                          aria-hidden="true"
                        >
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                  <div className="slds-resizable">
                    <input
                      aria-label="Contact column width"
                      className="slds-resizable__input slds-assistive-text"
                      id="cell-resize-handle-56"
                      max="1000"
                      min="20"
                      tabIndex="-1"
                      type="range"
                    />
                    <span className="slds-resizable__handle">
                      <span className="slds-resizable__divider" />
                    </span>
                  </div>
                </th>
                <th className="" scope="col" style={{ width: '3.25rem' }}>
                  <div
                    className="slds-truncate slds-assistive-text"
                    title="Actions"
                  >
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr aria-selected="false" className="slds-hint-parent">
                <td className="slds-cell-edit slds-cell-error" role="gridcell">
                  <button
                    id="error-01"
                    className="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden"
                    aria-hidden="true"
                    tabIndex="-1"
                    title="Item 1 has errors"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#error"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Item 1 has errors
                    </span>
                  </button>
                  <span className="slds-row-number slds-text-body_small slds-text-color_weak" />
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <div className="slds-checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      id="checkbox-01"
                      tabIndex="-1"
                      aria-labelledby="check-button-label-01 column-group-header"
                      value="checkbox-01"
                    />
                    <label
                      className="slds-checkbox__label"
                      htmlFor="checkbox-01"
                      id="check-button-label-01"
                    >
                      <span className="slds-checkbox_faux" />
                      <span className="slds-form-element__label slds-assistive-text">
                        Select item 1
                      </span>
                    </label>
                  </div>
                </td>
                <th className="slds-cell-edit" scope="row" tabIndex="0">
                  <span className="slds-grid slds-grid_align-spread">
                    <a
                      className="slds-truncate"
                      href="javascript:void(0);"
                      id="link-01"
                      tabIndex="-1"
                      title="Acme - 1,200 Widgets"
                    >
                      Acme - 1,200 Widgets
                    </a>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Name of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Name of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </th>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="Acme">
                      Acme
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Account Name of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Account Name of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="4/10/15">
                      4/10/15
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Close Date of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Close Date of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="Value Proposition">
                      Value Proposition
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Stage of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Stage of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td
                  aria-readOnly="true"
                  className="slds-cell-edit"
                  role="gridcell"
                >
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="30%">
                      30%
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      disabled=""
                      tabIndex="-1"
                      title="Edit Confidence of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Confidence of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="$25,000,000">
                      $25,000,000
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Amount of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Amount of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="jrogers@acme.com">
                      jrogers@acme.com
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Contact of Acme - 1,200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Contact of Acme - 1,200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                    aria-haspopup="true"
                    tabIndex="-1"
                    title="More actions for Acme - 1,200 Widgets"
                  >
                    <svg
                      className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      More actions for Acme - 1,200 Widgets
                    </span>
                  </button>
                </td>
              </tr>
              <tr aria-selected="false" className="slds-hint-parent">
                <td className="slds-cell-edit slds-cell-error" role="gridcell">
                  <button
                    id="error-02"
                    className="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden"
                    aria-hidden="true"
                    tabIndex="-1"
                    title="Item 2 has errors"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#error"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Item 2 has errors
                    </span>
                  </button>
                  <span className="slds-row-number slds-text-body_small slds-text-color_weak" />
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <div className="slds-checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      id="checkbox-02"
                      tabIndex="-1"
                      aria-labelledby="check-button-label-02 column-group-header"
                      value="checkbox-02"
                    />
                    <label
                      className="slds-checkbox__label"
                      htmlFor="checkbox-02"
                      id="check-button-label-02"
                    >
                      <span className="slds-checkbox_faux" />
                      <span className="slds-form-element__label slds-assistive-text">
                        Select item 2
                      </span>
                    </label>
                  </div>
                </td>
                <th className="slds-cell-edit" scope="row" tabIndex="0">
                  <span className="slds-grid slds-grid_align-spread">
                    <a
                      className="slds-truncate"
                      href="javascript:void(0);"
                      id="link-02"
                      tabIndex="-1"
                      title="Acme - 200 Widgets"
                    >
                      Acme - 200 Widgets
                    </a>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Name of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Name of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </th>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="Acme">
                      Acme
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Account Name of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Account Name of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="1/31/15">
                      1/31/15
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Close Date of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Close Date of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="Prospecting">
                      Prospecting
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Stage of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Stage of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td
                  aria-readOnly="true"
                  className="slds-cell-edit"
                  role="gridcell"
                >
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="60%">
                      60%
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      disabled=""
                      tabIndex="-1"
                      title="Edit Confidence of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Confidence of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="$5,000,000">
                      $5,000,000
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Amount of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Amount of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="bob@acme.com">
                      bob@acme.com
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Contact of Acme - 200 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Contact of Acme - 200 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                    aria-haspopup="true"
                    tabIndex="-1"
                    title="More actions for Acme - 200 Widgets"
                  >
                    <svg
                      className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      More actions for Acme - 200 Widgets
                    </span>
                  </button>
                </td>
              </tr>
              <tr aria-selected="false" className="slds-hint-parent">
                <td className="slds-cell-edit slds-cell-error" role="gridcell">
                  <button
                    id="error-03"
                    className="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden"
                    aria-hidden="true"
                    tabIndex="-1"
                    title="Item 3 has errors"
                  >
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#error"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      Item 3 has errors
                    </span>
                  </button>
                  <span className="slds-row-number slds-text-body_small slds-text-color_weak" />
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <div className="slds-checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      id="checkbox-03"
                      tabIndex="-1"
                      aria-labelledby="check-button-label-03 column-group-header"
                      value="checkbox-03"
                      checked
                    />
                    <label
                      className="slds-checkbox__label"
                      htmlFor="checkbox-03"
                      id="check-button-label-03"
                    >
                      <span className="slds-checkbox_faux" />
                      <span className="slds-form-element__label slds-assistive-text">
                        Select item 3
                      </span>
                    </label>
                  </div>
                </td>
                <th className="slds-cell-edit" scope="row" tabIndex="0">
                  <span className="slds-grid slds-grid_align-spread">
                    <a
                      className="slds-truncate"
                      href="javascript:void(0);"
                      id="link-03"
                      tabIndex="-1"
                      title="salesforce.com - 1,000 Widgets"
                    >
                      salesforce.com - 1,000 Widgets
                    </a>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Name of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Name of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </th>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="salesforce.com">
                      salesforce.com
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Account Name of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Account Name of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="1/31/15 3:45PM">
                      1/31/15 3:45PM
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Close Date of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Close Date of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="Id. Decision Makers">
                      Id. Decision Makers
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Stage of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Stage of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td
                  aria-readOnly="true"
                  className="slds-cell-edit"
                  role="gridcell"
                >
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="70%">
                      70%
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      disabled=""
                      tabIndex="-1"
                      title="Edit Confidence of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Confidence of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span className="slds-truncate" title="$25,000">
                      $25,000
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Amount of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Amount of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <span className="slds-grid slds-grid_align-spread">
                    <span
                      className="slds-truncate"
                      title="nathan@salesforce.com"
                    >
                      nathan@salesforce.com
                    </span>
                    <button
                      className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                      tabIndex="-1"
                      title="Edit Contact of salesforce.com - 1,000 Widgets"
                    >
                      <svg
                        className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"
                        />
                      </svg>
                      <span className="slds-assistive-text">
                        Edit Contact of salesforce.com - 1,000 Widgets
                      </span>
                    </button>
                  </span>
                </td>
                <td className="slds-cell-edit" role="gridcell">
                  <button
                    className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                    aria-haspopup="true"
                    tabIndex="-1"
                    title="More actions for salesforce.com - 1,000 Widgets"
                  >
                    <svg
                      className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span className="slds-assistive-text">
                      More actions for salesforce.com - 1,000 Widgets
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">List Builder</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="demo-only">
          <div className="slds-grid slds-grid_vertical">
            <div className="slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade">
              <div className="slds-form-element">
                <label
                  className="slds-form-element__label slds-assistive-text"
                  htmlFor="combobox-unique-id-2"
                >
                  Search
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
                          className="slds-input slds-combobox__input"
                          id="combobox-unique-id-2"
                          aria-autocomplete="list"
                          aria-controls="listbox-unique-id"
                          autoComplete="off"
                          role="textbox"
                          type="text"
                          placeholder="Search Salesforce"
                          value=""
                        />
                        <span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_right">
                          <svg
                            className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        id="listbox-unique-id"
                        role="listbox"
                        className="slds-dropdown slds-dropdown_fluid"
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
                              id="listbox-option-unique-id-01"
                              className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                              role="option"
                            >
                              <span className="slds-media__figure">
                                <span className="slds-icon_container slds-icon-standard-account">
                                  <svg
                                    className="slds-icon slds-icon_small"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <span className="slds-media__body">
                                <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                  Acme
                                </span>
                                <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                  Account • San Francisco
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
                              className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta"
                              role="option"
                            >
                              <span className="slds-media__figure">
                                <span className="slds-icon_container slds-icon-standard-account">
                                  <svg
                                    className="slds-icon slds-icon_small"
                                    aria-hidden="true"
                                  >
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"
                                    />
                                  </svg>
                                </span>
                              </span>
                              <span className="slds-media__body">
                                <span className="slds-listbox__option-text slds-listbox__option-text_entity">
                                  Salesforce.com, Inc.
                                </span>
                                <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
                                  Account • San Francisco
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
              <div
                className="slds-text-title slds-m-top_x-small"
                aria-live="polite"
              >
                0 Item(s) Selected
              </div>
            </div>
            <div className="slds-scrollable slds-grow">
              <div className="slds-scrollable_none">
                <table
                  aria-multiselectable="true"
                  className="slds-table slds-no-row-hover slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols"
                  role="grid"
                >
                  <thead>
                    <tr className="slds-line-height_reset">
                      <th
                        className=""
                        scope="col"
                        style={{ width: '3.75rem' }}
                      />
                      <th
                        aria-label="Name"
                        aria-sort="none"
                        className="slds-is-resizable slds-is-sortable"
                        scope="col"
                      >
                        <a
                          className="slds-th__action slds-text-link_reset"
                          href="javascript:void(0);"
                          role="button"
                          tabIndex="-1"
                        >
                          <span className="slds-assistive-text">Sort by: </span>
                          <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span className="slds-truncate" title="Name">
                              Name
                            </span>
                            <span className="slds-icon_container slds-icon-utility-arrowdown">
                              <svg
                                className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                                />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div className="slds-resizable">
                          <input
                            aria-label="Name column width"
                            className="slds-resizable__input slds-assistive-text"
                            id="cell-resize-handle-5"
                            max="1000"
                            min="20"
                            tabIndex="-1"
                            type="range"
                          />
                          <span className="slds-resizable__handle">
                            <span className="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th
                        aria-label="Product Code"
                        aria-sort="none"
                        className="slds-is-resizable slds-is-sortable"
                        scope="col"
                      >
                        <a
                          className="slds-th__action slds-text-link_reset"
                          href="javascript:void(0);"
                          role="button"
                          tabIndex="-1"
                        >
                          <span className="slds-assistive-text">Sort by: </span>
                          <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span
                              className="slds-truncate"
                              title="Product Code"
                            >
                              Product Code
                            </span>
                            <span className="slds-icon_container slds-icon-utility-arrowdown">
                              <svg
                                className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                                />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div className="slds-resizable">
                          <input
                            aria-label="Product Code column width"
                            className="slds-resizable__input slds-assistive-text"
                            id="cell-resize-handle-6"
                            max="1000"
                            min="20"
                            tabIndex="-1"
                            type="range"
                          />
                          <span className="slds-resizable__handle">
                            <span className="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th
                        aria-label="List Price"
                        aria-sort="none"
                        className="slds-is-resizable slds-is-sortable"
                        scope="col"
                      >
                        <a
                          className="slds-th__action slds-text-link_reset"
                          href="javascript:void(0);"
                          role="button"
                          tabIndex="-1"
                        >
                          <span className="slds-assistive-text">Sort by: </span>
                          <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span className="slds-truncate" title="List Price">
                              List Price
                            </span>
                            <span className="slds-icon_container slds-icon-utility-arrowdown">
                              <svg
                                className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                                />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div className="slds-resizable">
                          <input
                            aria-label="List Price column width"
                            className="slds-resizable__input slds-assistive-text"
                            id="cell-resize-handle-7"
                            max="1000"
                            min="20"
                            tabIndex="-1"
                            type="range"
                          />
                          <span className="slds-resizable__handle">
                            <span className="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                      <th
                        aria-label="Product Family"
                        aria-sort="none"
                        className="slds-is-resizable slds-is-sortable"
                        scope="col"
                      >
                        <a
                          className="slds-th__action slds-text-link_reset"
                          href="javascript:void(0);"
                          role="button"
                          tabIndex="-1"
                        >
                          <span className="slds-assistive-text">Sort by: </span>
                          <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                            <span
                              className="slds-truncate"
                              title="Product Family"
                            >
                              Product Family
                            </span>
                            <span className="slds-icon_container slds-icon-utility-arrowdown">
                              <svg
                                className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                aria-hidden="true"
                              >
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                                />
                              </svg>
                            </span>
                          </div>
                        </a>
                        <div className="slds-resizable">
                          <input
                            aria-label="Product Family column width"
                            className="slds-resizable__input slds-assistive-text"
                            id="cell-resize-handle-8"
                            max="1000"
                            min="20"
                            tabIndex="-1"
                            type="range"
                          />
                          <span className="slds-resizable__handle">
                            <span className="slds-resizable__divider" />
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td
                        className="slds-text-align_right"
                        role="gridcell"
                        tabIndex="0"
                      >
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-9"
                            tabIndex="-1"
                            value="add-checkbox-9"
                          />
                          <label
                            htmlFor="add-checkbox-9"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 1
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-10"
                            tabIndex="-1"
                            value="add-checkbox-10"
                          />
                          <label
                            htmlFor="add-checkbox-10"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 2
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-11"
                            tabIndex="-1"
                            value="add-checkbox-11"
                          />
                          <label
                            htmlFor="add-checkbox-11"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 3
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-12"
                            tabIndex="-1"
                            value="add-checkbox-12"
                          />
                          <label
                            htmlFor="add-checkbox-12"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 4
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-13"
                            tabIndex="-1"
                            value="add-checkbox-13"
                          />
                          <label
                            htmlFor="add-checkbox-13"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 5
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-14"
                            tabIndex="-1"
                            value="add-checkbox-14"
                          />
                          <label
                            htmlFor="add-checkbox-14"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 6
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-15"
                            tabIndex="-1"
                            value="add-checkbox-15"
                          />
                          <label
                            htmlFor="add-checkbox-15"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 7
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                    <tr aria-selected="false" className="slds-hint-parent">
                      <td className="slds-text-align_right" role="gridcell">
                        <div className="slds-checkbox_add-button">
                          <input
                            className="slds-assistive-text"
                            type="checkbox"
                            id="add-checkbox-16"
                            tabIndex="-1"
                            value="add-checkbox-16"
                          />
                          <label
                            htmlFor="add-checkbox-16"
                            className="slds-checkbox_faux"
                          >
                            <span className="slds-assistive-text">
                              Select item 8
                            </span>
                          </label>
                        </div>
                      </td>
                      <th scope="row">
                        <div className="slds-truncate" title="Analytics">
                          Analytics
                        </div>
                      </th>
                      <td role="gridcell">
                        <div className="slds-truncate" title="ANTLY">
                          ANTLY
                        </div>
                      </td>
                      <td role="gridcell">
                        <div className="slds-truncate" title="5000.00">
                          5000.00
                        </div>
                      </td>
                      <td role="gridcell">
                        <div
                          className="slds-truncate"
                          title="Analytics Product"
                        >
                          Analytics Product
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Tiles (Task)</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="demo-only" style={{ width: '320px' }}>
          <article className="slds-tile slds-media">
            <div className="slds-media__figure">
              <div className="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-2"
                  value="checkbox-2"
                />
                <label className="slds-checkbox__label" htmlFor="checkbox-2">
                  <span className="slds-checkbox_faux" />
                  <span className="slds-form-element__label slds-assistive-text">
                    Did you complete the task: Contact Trammel Crow Company?
                  </span>
                </label>
              </div>
            </div>
            <div className="slds-media__body">
              <h3
                className="slds-tile__title slds-truncate"
                title="Contact Trammel Crow Company"
              >
                <a href="javascript:void(0);">Contact Trammel Crow Company</a>
              </h3>
              <div className="slds-tile__detail">
                <p className="slds-truncate" title="Assignee">
                  Assignee
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div className="slds-card slds-m-around_xx-small">
      <div className="slds-card__header">
        <h2 className="slds-card__header-title">Tree Grid</h2>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <table
          aria-multiselectable="true"
          className="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols slds-tree slds-table_tree"
          role="treegrid"
        >
          <thead>
            <tr className="slds-line-height_reset">
              <th
                className="slds-text-align_right"
                scope="col"
                style={{ width: '3.25rem' }}
              >
                <span id="column-group-header" className="slds-assistive-text">
                  Choose a row
                </span>
                <div className="slds-th__action slds-th__action_form">
                  <div className="slds-checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      id="checkbox-63"
                      tabIndex="-1"
                      aria-labelledby="check-select-all-label column-group-header"
                      value="checkbox-63"
                    />
                    <label
                      className="slds-checkbox__label"
                      htmlFor="checkbox-63"
                      id="check-select-all-label"
                    >
                      <span className="slds-checkbox_faux" />
                      <span className="slds-form-element__label slds-assistive-text">
                        Select All
                      </span>
                    </label>
                  </div>
                </div>
              </th>
              <th
                aria-label="Account Name"
                aria-sort="none"
                className="slds-has-button-menu slds-is-resizable slds-is-sortable"
                scope="col"
              >
                <a
                  className="slds-th__action slds-text-link_reset"
                  href="javascript:void(0);"
                  role="button"
                  tabIndex="-1"
                >
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Account Name">
                      Account Name
                    </span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <svg
                        className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <button
                  className="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="Show Account Name column actions"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Show Account Name column actions
                  </span>
                </button>
                <div className="slds-resizable">
                  <input
                    aria-label="Account Name column width"
                    className="slds-resizable__input slds-assistive-text"
                    id="cell-resize-handle-46"
                    max="1000"
                    min="20"
                    tabIndex="-1"
                    type="range"
                  />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider" />
                  </span>
                </div>
              </th>
              <th
                aria-label="Employees"
                aria-sort="none"
                className="slds-has-button-menu slds-is-resizable slds-is-sortable"
                scope="col"
              >
                <a
                  className="slds-th__action slds-text-link_reset"
                  href="javascript:void(0);"
                  role="button"
                  tabIndex="-1"
                >
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Employees">
                      Employees
                    </span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <svg
                        className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <button
                  className="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="Show Employees column actions"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Show Employees column actions
                  </span>
                </button>
                <div className="slds-resizable">
                  <input
                    aria-label="Employees column width"
                    className="slds-resizable__input slds-assistive-text"
                    id="cell-resize-handle-47"
                    max="1000"
                    min="20"
                    tabIndex="-1"
                    type="range"
                  />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider" />
                  </span>
                </div>
              </th>
              <th
                aria-label="Phone Number"
                aria-sort="none"
                className="slds-has-button-menu slds-is-resizable slds-is-sortable"
                scope="col"
              >
                <a
                  className="slds-th__action slds-text-link_reset"
                  href="javascript:void(0);"
                  role="button"
                  tabIndex="-1"
                >
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Phone Number">
                      Phone Number
                    </span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <svg
                        className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <button
                  className="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="Show Phone Number column actions"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Show Phone Number column actions
                  </span>
                </button>
                <div className="slds-resizable">
                  <input
                    aria-label="Phone Number column width"
                    className="slds-resizable__input slds-assistive-text"
                    id="cell-resize-handle-48"
                    max="1000"
                    min="20"
                    tabIndex="-1"
                    type="range"
                  />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider" />
                  </span>
                </div>
              </th>
              <th
                aria-label="Account Owner"
                aria-sort="none"
                className="slds-has-button-menu slds-is-resizable slds-is-sortable"
                scope="col"
              >
                <a
                  className="slds-th__action slds-text-link_reset"
                  href="javascript:void(0);"
                  role="button"
                  tabIndex="-1"
                >
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Account Owner">
                      Account Owner
                    </span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <svg
                        className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <button
                  className="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="Show Account Owner column actions"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Show Account Owner column actions
                  </span>
                </button>
                <div className="slds-resizable">
                  <input
                    aria-label="Account Owner column width"
                    className="slds-resizable__input slds-assistive-text"
                    id="cell-resize-handle-49"
                    max="1000"
                    min="20"
                    tabIndex="-1"
                    type="range"
                  />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider" />
                  </span>
                </div>
              </th>
              <th
                aria-label="Billing City"
                aria-sort="none"
                className="slds-has-button-menu slds-is-resizable slds-is-sortable"
                scope="col"
              >
                <a
                  className="slds-th__action slds-text-link_reset"
                  href="javascript:void(0);"
                  role="button"
                  tabIndex="-1"
                >
                  <span className="slds-assistive-text">Sort by: </span>
                  <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                    <span className="slds-truncate" title="Billing City">
                      Billing City
                    </span>
                    <span className="slds-icon_container slds-icon-utility-arrowdown">
                      <svg
                        className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <button
                  className="slds-button slds-button_icon slds-th__action-button slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="Show Billing City column actions"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Show Billing City column actions
                  </span>
                </button>
                <div className="slds-resizable">
                  <input
                    aria-label="Billing City column width"
                    className="slds-resizable__input slds-assistive-text"
                    id="cell-resize-handle-50"
                    max="1000"
                    min="20"
                    tabIndex="-1"
                    type="range"
                  />
                  <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider" />
                  </span>
                </div>
              </th>
              <th className="" scope="col" style={{ width: '3.25rem' }}>
                <div
                  className="slds-truncate slds-assistive-text"
                  title="Actions"
                >
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              aria-level="1"
              aria-posinset="1"
              aria-selected="false"
              aria-setsize="4"
              className="slds-hint-parent"
              tabIndex="0"
            >
              <td
                className="slds-text-align_right"
                role="gridcell"
                style={{ width: '3.25rem' }}
              >
                <div className="slds-checkbox">
                  <input
                    type="checkbox"
                    name="options"
                    id="checkbox-056"
                    aria-labelledby="check-button-label-056 column-group-header"
                    value="checkbox-056"
                  />
                  <label
                    className="slds-checkbox__label"
                    htmlFor="checkbox-056"
                    id="check-button-label-056"
                  >
                    <span className="slds-checkbox_faux" />
                    <span className="slds-form-element__label slds-assistive-text">
                      Select item 56
                    </span>
                  </label>
                </div>
              </td>
              <th
                className="slds-tree__item"
                data-label="Account Name"
                scope="row"
              >
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled"
                  aria-hidden="true"
                  tabIndex="-1"
                  title="Expand Rewis Inc"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Collapse Rewis Inc
                  </span>
                </button>
                <div className="slds-truncate" title="Rewis Inc">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Rewis Inc
                  </a>
                </div>
              </th>
              <td data-label="Employees" role="gridcell">
                <div className="slds-truncate" title="3,100">
                  3,100
                </div>
              </td>
              <td data-label="Phone Number" role="gridcell">
                <div className="slds-truncate" title="837-555-1212">
                  837-555-1212
                </div>
              </td>
              <td data-label="Account Owner" role="gridcell">
                <div className="slds-truncate" title="Jane Doe">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Jane Doe
                  </a>
                </div>
              </td>
              <td data-label="Billing City" role="gridcell">
                <div className="slds-truncate" title="Phoenix, AZ">
                  Phoenix, AZ
                </div>
              </td>
              <td role="gridcell" style={{ width: '3.25rem' }}>
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="More actions for Rewis Inc"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    More actions for Rewis Inc
                  </span>
                </button>
              </td>
            </tr>
            <tr
              aria-expanded="false"
              aria-level="1"
              aria-posinset="2"
              aria-selected="false"
              aria-setsize="4"
              className="slds-hint-parent"
            >
              <td
                className="slds-text-align_right"
                role="gridcell"
                style={{ width: '3.25rem' }}
              >
                <div className="slds-checkbox">
                  <input
                    type="checkbox"
                    name="options"
                    id="checkbox-057"
                    aria-labelledby="check-button-label-057 column-group-header"
                    value="checkbox-057"
                  />
                  <label
                    className="slds-checkbox__label"
                    htmlFor="checkbox-057"
                    id="check-button-label-057"
                  >
                    <span className="slds-checkbox_faux" />
                    <span className="slds-form-element__label slds-assistive-text">
                      Select item 57
                    </span>
                  </label>
                </div>
              </td>
              <th
                className="slds-tree__item"
                data-label="Account Name"
                scope="row"
              >
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small"
                  aria-hidden="true"
                  tabIndex="-1"
                  title="Expand Acme Corporation"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Collapse Acme Corporation
                  </span>
                </button>
                <div className="slds-truncate" title="Acme Corporation">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Acme Corporation
                  </a>
                </div>
              </th>
              <td data-label="Employees" role="gridcell">
                <div className="slds-truncate" title="10,000">
                  10,000
                </div>
              </td>
              <td data-label="Phone Number" role="gridcell">
                <div className="slds-truncate" title="837-555-1212">
                  837-555-1212
                </div>
              </td>
              <td data-label="Account Owner" role="gridcell">
                <div className="slds-truncate" title="John Doe">
                  <a href="javascript:void(0);" tabIndex="-1">
                    John Doe
                  </a>
                </div>
              </td>
              <td data-label="Billing City" role="gridcell">
                <div className="slds-truncate" title="San Francisco, CA">
                  San Francisco, CA
                </div>
              </td>
              <td role="gridcell" style={{ width: '3.25rem' }}>
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="More actions for Acme Corporation"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    More actions for Acme Corporation
                  </span>
                </button>
              </td>
            </tr>
            <tr
              aria-expanded="false"
              aria-level="1"
              aria-posinset="3"
              aria-selected="false"
              aria-setsize="4"
              className="slds-hint-parent"
            >
              <td
                className="slds-text-align_right"
                role="gridcell"
                style={{ width: '3.25rem' }}
              >
                <div className="slds-checkbox">
                  <input
                    type="checkbox"
                    name="options"
                    id="checkbox-058"
                    aria-labelledby="check-button-label-058 column-group-header"
                    value="checkbox-058"
                  />
                  <label
                    className="slds-checkbox__label"
                    htmlFor="checkbox-058"
                    id="check-button-label-058"
                  >
                    <span className="slds-checkbox_faux" />
                    <span className="slds-form-element__label slds-assistive-text">
                      Select item 58
                    </span>
                  </label>
                </div>
              </td>
              <th
                className="slds-tree__item"
                data-label="Account Name"
                scope="row"
              >
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small"
                  aria-hidden="true"
                  tabIndex="-1"
                  title="Expand Rohde Enterprises"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Collapse Rohde Enterprises
                  </span>
                </button>
                <div className="slds-truncate" title="Rohde Enterprises">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Rohde Enterprises
                  </a>
                </div>
              </th>
              <td data-label="Employees" role="gridcell">
                <div className="slds-truncate" title="6,000">
                  6,000
                </div>
              </td>
              <td data-label="Phone Number" role="gridcell">
                <div className="slds-truncate" title="837-555-1212">
                  837-555-1212
                </div>
              </td>
              <td data-label="Account Owner" role="gridcell">
                <div className="slds-truncate" title="John Doe">
                  <a href="javascript:void(0);" tabIndex="-1">
                    John Doe
                  </a>
                </div>
              </td>
              <td data-label="Billing City" role="gridcell">
                <div className="slds-truncate" title="New York, NY">
                  New York, NY
                </div>
              </td>
              <td role="gridcell" style={{ width: '3.25rem' }}>
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="More actions for Rohde Enterprises"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    More actions for Rohde Enterprises
                  </span>
                </button>
              </td>
            </tr>
            <tr
              aria-level="1"
              aria-posinset="4"
              aria-selected="false"
              aria-setsize="4"
              className="slds-hint-parent"
            >
              <td
                className="slds-text-align_right"
                role="gridcell"
                style={{ width: '3.25rem' }}
              >
                <div className="slds-checkbox">
                  <input
                    type="checkbox"
                    name="options"
                    id="checkbox-059"
                    aria-labelledby="check-button-label-059 column-group-header"
                    value="checkbox-059"
                  />
                  <label
                    className="slds-checkbox__label"
                    htmlFor="checkbox-059"
                    id="check-button-label-059"
                  >
                    <span className="slds-checkbox_faux" />
                    <span className="slds-form-element__label slds-assistive-text">
                      Select item 59
                    </span>
                  </label>
                </div>
              </td>
              <th
                className="slds-tree__item"
                data-label="Account Name"
                scope="row"
              >
                <button
                  className="slds-button slds-button_icon slds-button_icon slds-button_icon-x-small slds-m-right_x-small slds-is-disabled"
                  aria-hidden="true"
                  tabIndex="-1"
                  title="Expand Cheese Corp"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevronright"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    Collapse Cheese Corp
                  </span>
                </button>
                <div className="slds-truncate" title="Cheese Corp">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Cheese Corp
                  </a>
                </div>
              </th>
              <td data-label="Employees" role="gridcell">
                <div className="slds-truncate" title="1,234">
                  1,234
                </div>
              </td>
              <td data-label="Phone Number" role="gridcell">
                <div className="slds-truncate" title="837-555-1212">
                  837-555-1212
                </div>
              </td>
              <td data-label="Account Owner" role="gridcell">
                <div className="slds-truncate" title="Jane Doe">
                  <a href="javascript:void(0);" tabIndex="-1">
                    Jane Doe
                  </a>
                </div>
              </td>
              <td data-label="Billing City" role="gridcell">
                <div className="slds-truncate" title="Paris, France">
                  Paris, France
                </div>
              </td>
              <td role="gridcell" style={{ width: '3.25rem' }}>
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                  aria-haspopup="true"
                  tabIndex="-1"
                  title="More actions for Cheese Corp"
                >
                  <svg
                    className="slds-button__icon slds-button__icon_hint slds-button__icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span className="slds-assistive-text">
                    More actions for Cheese Corp
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

storiesOf('Codepen/Mobile Checkbox Demo', module).add(
  'Review',
  () => CodepenHTML
);
