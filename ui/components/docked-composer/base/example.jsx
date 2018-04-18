// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { Pill } from '../../pills/base/example';
import ButtonIcon from '../../button-icons/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { Modal, ModalContent } from '../../modals/base/example';
import {
  RichTextEditor,
  RteToolbar,
  RteFormatFont,
  RteFormatText,
  RteFormatColor,
  RteFormatBody,
  RteAlignText,
  RteInsertContent,
  RteTextarea,
  RteClearFormatting
} from '../../rich-text-editor/base/example';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const dialogHeadingId = 'dialog-heading-id-1';
const dialogBodyId = 'dialog-content-id-1';

const composers = [
  {
    entity: 'email',
    title: 'Agenda for next week'
  },
  {
    entity: 'call',
    title: 'Lei Chan'
  },
  {
    entity: 'task',
    title: 'August 14 Meeting Notes'
  }
];

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const Footer = props => (
  <div className="slds-col_bump-left slds-text-align_right">
    <button className="slds-button slds-button_brand">Action</button>
  </div>
);

const EmailFooter = props => (
  <div className="slds-col_bump-left slds-grid slds-grid_vertical-align-center">
    <div className="slds-grid slds-m-right_small" role="toolbar">
      <ul className="slds-grid" aria-label="Insert content">
        <li>
          <ButtonIcon
            className="slds-button_icon-small"
            symbol="link"
            assistiveText="Attach File"
            title="Attach File"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-small"
            symbol="insert_template"
            assistiveText="Insert Template"
            title="Insert Template"
            tabIndex="-1"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button_icon-small"
            symbol="insert_tag_field"
            assistiveText="Insert HTML"
            title="Insert HTML"
            tabIndex="-1"
          />
        </li>
      </ul>
      <ButtonIcon
        className="slds-button_icon-small"
        symbol="preview"
        assistiveText="Preview"
        title="Preview"
        tabIndex="-1"
      />
    </div>
    <button className="slds-button slds-button_brand">Send</button>
  </div>
);

export let DockedComposerPanel = props => (
  <section
    className={classNames(
      'slds-docked-composer slds-grid slds-grid_vertical',
      props.className,
      props.dialogClosed ? 'slds-is-closed' : null
    )}
    role={!props.nestedDialog ? 'dialog' : null}
    aria-labelledby={!props.nestedDialog ? dialogHeadingId : null}
    aria-describedby={!props.nestedDialog ? dialogBodyId : null}
  >
    <header
      className="slds-docked-composer__header slds-grid slds-shrink-none"
      aria-live="assertive"
    >
      <div className="slds-media slds-media_center slds-no-space">
        <div className="slds-media__figure slds-m-right_x-small">
          <span className="slds-icon_container">
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-text-default"
              sprite="standard"
              symbol={props.headerSymbol || 'call'}
            />
          </span>
        </div>
        <div className="slds-media__body">
          {props.dialogClosed ? (
            <span className="slds-assistive-text">Minimized</span>
          ) : null}
          <h2
            className="slds-truncate"
            id={dialogHeadingId}
            title={props.header || 'Header'}
          >
            {props.header || 'Header'}
          </h2>
        </div>
      </div>
      <div className="slds-col_bump-left slds-shrink-none">
        <ButtonIcon
          className="slds-button_icon"
          symbol="minimize_window"
          assistiveText="Minimize Composer Panel"
          title="Minimize window"
        />
        <ButtonIcon
          className="slds-button_icon"
          symbol="expand_alt"
          assistiveText="Expand Composer Panel"
          title="Expand Composer"
        />
        <ButtonIcon
          className="slds-button_icon"
          symbol="close"
          assistiveText="Close Composer Panel"
          title="Close"
        />
      </div>
    </header>
    <div
      className={classNames('slds-docked-composer__body', props.bodyClassName)}
      id={dialogBodyId}
    >
      {props.children}
    </div>
    {props.footer ? (
      <footer
        className={classNames(
          'slds-docked-composer__footer slds-shrink-none',
          props.footerClassName
        )}
      >
        {props.footer}
      </footer>
    ) : null}
  </section>
);

export let ComposerOverflowMenu = props => (
  <div className="slds-docked-composer slds-docked-composer_overflow">
    <button
      className="slds-button slds-button_icon slds-docked-composer_overflow__button"
      aria-haspopup="true"
    >
      <SvgIcon
        className="slds-button__icon"
        sprite="utility"
        symbol="standard_objects"
      />
      <span className="slds-text-body_small slds-m-left_xx-small">
        3{' '}
        <span className="slds-assistive-text">
          other docked composer panels
        </span>
      </span>
    </button>

    <Menu className="slds-dropdown_left slds-dropdown_bottom slds-dropdown_medium slds-nubbin_bottom-left">
      <MenuList className="slds-dropdown_length-with-icon-7">
        {_.times(composers.length, i => (
          <MenuItem key={i} title={composers[i].title}>
            <span
              className={
                'slds-icon_container slds-icon-standard-' +
                composers[i].entity +
                ' slds-m-right_x-small'
              }
            >
              <SvgIcon
                className="slds-icon slds-icon_small"
                sprite="standard"
                symbol={composers[i].entity}
              />
              <span className="slds-assistive-text">{composers[i].entity}</span>
            </span>
            {composers[i].title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </div>
);

const ComboboxListbox = props => (
  <Listbox className="slds-dropdown slds-dropdown_fluid" vertical id={props.id}>
    <ListboxItem>
      <EntityOption id={props.listboxOptionId} entityTitle="Acme" entityMeta />
    </ListboxItem>
  </Listbox>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export const Context = props => (
  <div style={{ height: '500px', minWidth: '615px', overflowX: 'auto' }}>
    {props.children}
  </div>
);

export default (
  <div className="slds-docked_container">
    <DockedComposerPanel className="slds-is-open" footer={<Footer />}>
      <div className="slds-align_absolute-center">
        Docked Composer Panel Body <br /> This area consumes the feature
      </div>
    </DockedComposerPanel>
  </div>
);

export let states = [
  {
    id: 'single-composer-open',
    label: 'Open',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel className="slds-is-open" footer={<Footer />}>
          <div className="slds-align_absolute-center">
            Docked Composer Panel Body <br /> This area consumes the feature
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'single-composer-focused',
    label: 'Focused',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open slds-has-focus"
          footer={<Footer />}
        >
          <div className="slds-align_absolute-center">
            Docked Composer Panel Body <br /> This area consumes the feature
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'single-composer-closed',
    label: 'Closed',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel dialogClosed footer={<Footer />}>
          <div className="slds-align_absolute-center">
            Docked Composer Panel Body <br /> This area consumes the feature
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'single-composer-closed-focused',
    label: 'Closed Focused',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-has-focus"
          dialogClosed
          footer={<Footer />}
        >
          <div className="slds-align_absolute-center">
            Docked Composer Panel Body <br /> This area consumes the feature
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'single-composer-popout',
    label: 'Popout',
    element: (
      <div>
        <Modal
          className="slds-docked-composer-modal"
          aria-labelledby={dialogHeadingId}
          aria-describedby={dialogBodyId}
        >
          <ModalContent id="modal-content-id">
            <DockedComposerPanel footer={<Footer />} nestedDialog>
              <div className="slds-align_absolute-center">
                Docked Composer Panel Body <br /> This area consumes the feature
              </div>
            </DockedComposerPanel>
          </ModalContent>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'multiple-composer-overflow',
    label: 'With Overflow Menu',
    element: (
      <div className="slds-docked_container">
        <ComposerOverflowMenu />
        <DockedComposerPanel className="slds-is-open" footer={<Footer />}>
          <div className="slds-align_absolute-center">
            Docked Composer Panel Body <br /> This area consumes the feature
          </div>
        </DockedComposerPanel>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'task',
    label: 'Log a Task',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-docked-composer__body_form"
          header="New Task"
          headerSymbol="task"
          footer={
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Save
            </button>
          }
        >
          <fieldset className="slds-form slds-form_compound">
            <legend className="slds-assistive-text">Log new task</legend>
            <div className="form-element__group">
              <div className="slds-form-element__row">
                <div className="slds-form-element slds-size_1-of-1">
                  <label
                    className="slds-form-element__label"
                    htmlFor="text-input-01"
                  >
                    Subject
                  </label>
                  <div className="slds-form-element__control">
                    <input
                      className="slds-input"
                      type="text"
                      id="text-input-01"
                    />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <div className="slds-form-element slds-size_1-of-2">
                  <label
                    className="slds-form-element__label"
                    htmlFor="text-input-02"
                  >
                    Assigned To
                  </label>
                  <div className="slds-form-element__control">
                    <input
                      className="slds-input"
                      type="text"
                      id="text-input-02"
                    />
                  </div>
                </div>
                <div className="slds-form-element slds-size_1-of-2">
                  <label
                    className="slds-form-element__label"
                    htmlFor="text-input-03"
                  >
                    Due Dates
                  </label>
                  <div className="slds-form-element__control">
                    <input
                      className="slds-input"
                      type="text"
                      id="text-input-03"
                    />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <ComboboxContainer
                  formClassName="slds-size_1-of-2"
                  autocomplete
                  label="Name"
                  placeholder="Search Leads"
                  inputIcon="right"
                  inputIconRightSymbol="search"
                  objectSwitcher
                  objectSwitcherInline
                  aria-controls="listbox-id-01"
                  listbox={
                    <ComboboxListbox
                      id="listbox-id-01"
                      listboxOptionId="listbox-option-id-1"
                    />
                  }
                />
                <ComboboxContainer
                  formClassName="slds-size_1-of-2"
                  autocomplete
                  label="Name"
                  placeholder="Search Accounts"
                  inputIcon="right"
                  inputIconRightSymbol="search"
                  objectSwitcher
                  objectSwitcherInline
                  aria-controls="listbox-id-02"
                  listbox={
                    <ComboboxListbox
                      id="listbox-id-02"
                      listboxOptionId="listbox-option-id-2"
                    />
                  }
                />
              </div>
            </div>
          </fieldset>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-queued',
    label: 'Voice - Queued',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - Connecting..."
          footer={
            <button className="slds-button slds-button_destructive slds-size_1-of-1">
              End Call
            </button>
          }
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              Connecting...
            </p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-ringing',
    label: 'Voice - Ringing',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - Dialing..."
          footer={
            <button className="slds-button slds-button_destructive slds-size_1-of-1">
              End Call
            </button>
          }
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              Dialing...
            </p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-connected',
    label: 'Voice - Connected',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          header="Lei Chan - Call in Progress"
          footer={
            <button className="slds-button slds-button_destructive slds-col_bump-left">
              End Call
            </button>
          }
        >
          <div className="slds-docked-composer__lead">
            <div className="slds-media">
              <div className="slds-media__figure">
                <span className="slds-avatar slds-avatar_medium">
                  <img
                    alt=""
                    src="/assets/images/avatar2.jpg"
                    title="Lei Chan avatar"
                  />
                </span>
              </div>
              <div className="slds-media__body">
                <p className="slds-text-heading_medium">Lei Chan</p>
                <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
                  <li className="slds-item">VP of Sales</li>
                  <li className="slds-item ">Acme Corporation</li>
                </ul>
              </div>
            </div>
            <p className="slds-col_bump-left slds-text-heading_large">5:37</p>
          </div>
          <div className="slds-docked-composer__toolbar">
            <ButtonIcon
              className="slds-button_icon-border-filled slds-button_icon-small"
              symbol="unmuted"
              assistiveText="Mute Yourself"
              title="Mute Yourself"
              aria-pressed="false"
            />
          </div>
          <label
            className="slds-assistive-text"
            htmlFor="composer-text-input-1"
          >
            Take notes
          </label>
          <textarea
            id="composer-text-input-1"
            className="slds-docked-composer__input slds-input_bare slds-text-longform slds-grow"
            placeholder="Jot down notes here..."
          />
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-cancelled',
    label: 'Voice - Cancelled',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - Cancelling..."
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              Cancelling...
            </p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-busy',
    label: 'Voice - Busy',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - Busy"
          footer={[
            <button
              className="slds-button slds-button_neutral slds-size_1-of-2"
              key={_.uniqueId('follow-up-')}
            >
              Follow-Up Later
            </button>,
            <button
              className="slds-button slds-button_brand slds-size_1-of-2"
              key={_.uniqueId('call-again-')}
            >
              Call Again
            </button>
          ]}
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">Busy</p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-failed',
    label: 'Voice - Call Failed',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - Call Failed"
          footer={[
            <button
              className="slds-button slds-button_neutral slds-size_1-of-2"
              key={_.uniqueId('follow-up-')}
            >
              Edit Phone Number
            </button>,
            <button
              className="slds-button slds-button_brand slds-size_1-of-2"
              key={_.uniqueId('call-again-')}
            >
              Call Again
            </button>
          ]}
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              Call Failed
            </p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-no-answer',
    label: 'Voice - No Answer',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center"
          header="Lei Chan - No Answer"
          footer={[
            <button
              className="slds-button slds-button_neutral slds-size_1-of-2"
              key={_.uniqueId('follow-up-')}
            >
              Follow-Up Later
            </button>,
            <button
              className="slds-button slds-button_brand slds-size_1-of-2"
              key={_.uniqueId('call-again-')}
            >
              Call Again
            </button>
          ]}
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              No Answer
            </p>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-call-finished',
    label: 'Voice - Call Finished',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          header="Lei Chan - Call Finished"
          footer={
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Finish Notes
            </button>
          }
        >
          <div className="slds-docked-composer__lead">
            <div className="slds-media">
              <div className="slds-media__figure">
                <span className="slds-avatar slds-avatar_medium">
                  <img
                    alt=""
                    src="/assets/images/avatar2.jpg"
                    title="Lei Chan avatar"
                  />
                </span>
              </div>
              <div className="slds-media__body">
                <p className="slds-text-heading_medium">Lei Chan</p>
                <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
                  <li className="slds-item">VP of Sales</li>
                  <li className="slds-item ">Acme Corporation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slds-docked-composer__toolbar">
            <ButtonIcon
              className="slds-button_icon-border-filled slds-button_icon-small"
              symbol="unmuted"
              assistiveText="Mute Yourself"
              title="Mute Yourself"
              aria-pressed="false"
            />
          </div>
          <label
            className="slds-assistive-text"
            htmlFor="composer-text-input-1"
          >
            Take notes
          </label>
          <textarea
            id="composer-text-input-1"
            className="slds-docked-composer__input slds-input_bare slds-text-longform slds-grow"
            placeholder="Jot down notes here..."
          />
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-call-incoming',
    label: 'Voice - Call Incoming',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-align_absolute-center slds-size_1-of-1"
          header="Lei Chan - Incoming Call..."
          footer={
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Finish Notes
            </button>
          }
        >
          <div className="slds-text-align_center slds-align-middle">
            <span className="slds-avatar slds-avatar_large">
              <img
                alt=""
                src="/assets/images/avatar2.jpg"
                title="Lei Chan avatar"
              />
            </span>
            <h3 className="slds-text-heading_large">Lei Chan</h3>
            <ul className="slds-list_horizontal slds-has-dividers_right slds-text-body_small">
              <li className="slds-item">VP of Sales</li>
              <li className="slds-item ">Acme Corporation</li>
            </ul>
            <p className="slds-text-heading_medium slds-m-top_medium">
              (416) 555-1234
            </p>
          </div>
          <div className="slds-p-horizontal_x-small slds-text-align_left slds-size_1-of-1">
            <h3 className="slds-m-bottom_x-small">Recent Activity</h3>
            <ul className="slds-has-dividers_around-space">
              <li className="slds-item slds-theme_shade slds-grid">
                <span className="slds-icon_container slds-icon-standard-task slds-m-right_x-small">
                  <SvgIcon
                    className="slds-icon slds-icon_small"
                    sprite="standard"
                    symbol="task"
                  />
                  <span className="slds-assistive-text">Task</span>
                </span>
                Discussed New Pricing Models
                <span className="slds-col_bump-left">Yesterday</span>
              </li>
              <li className="slds-item slds-theme_shade slds-grid">
                <span className="slds-icon_container slds-icon-standard-email slds-m-right_x-small">
                  <SvgIcon
                    className="slds-icon slds-icon_small"
                    sprite="standard"
                    symbol="email"
                  />
                  <span className="slds-assistive-text">Email</span>
                </span>
                Re: Updated Proposals
                <span className="slds-col_bump-left">4 Hours Ago</span>
              </li>
              <li className="slds-item slds-theme_shade slds-grid">
                <span className="slds-icon_container slds-icon-standard-note slds-m-right_x-small">
                  <SvgIcon
                    className="slds-icon slds-icon_small"
                    sprite="standard"
                    symbol="note"
                  />
                  <span className="slds-assistive-text">Note</span>
                </span>
                Discuss Slides for Nov EBC
                <span className="slds-col_bump-left">2 Days Ago</span>
              </li>
            </ul>
          </div>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'voice-composer-call-logged',
    label: 'Voice - Log a Call',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          bodyClassName="slds-docked-composer__body_form"
          header="Lei Chan"
          footer={
            <button className="slds-button slds-button_brand slds-col_bump-left">
              Save
            </button>
          }
        >
          <fieldset className="slds-form slds-form_compound">
            <legend className="slds-assistive-text">Log a call</legend>
            <div className="form-element__group">
              <div className="slds-form-element__row">
                <div className="slds-form-element slds-size_1-of-1">
                  <label
                    className="slds-form-element__label"
                    htmlFor="text-input-01"
                  >
                    Subject
                  </label>
                  <div className="slds-form-element__control">
                    <input
                      className="slds-input"
                      type="text"
                      id="text-input-01"
                    />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <div className="slds-form-element slds-size_1-of-1">
                  <label
                    className="slds-form-element__label"
                    htmlFor="textarea-input-01"
                  >
                    Comments
                  </label>
                  <div className="slds-form-element__control">
                    <textarea
                      className="slds-textarea"
                      id="textarea-input-01"
                    />
                  </div>
                </div>
              </div>
              <div className="slds-form-element__row">
                <ComboboxContainer
                  formClassName="slds-size_1-of-2"
                  autocomplete
                  label="Name"
                  placeholder="Search Leads"
                  inputIcon="right"
                  inputIconRightSymbol="search"
                  objectSwitcher
                  objectSwitcherInline
                  aria-controls="listbox-id-01"
                  listbox={
                    <ComboboxListbox
                      id="listbox-id-01"
                      listboxOptionId="listbox-option-id-1"
                    />
                  }
                />
                <ComboboxContainer
                  formClassName="slds-size_1-of-2"
                  autocomplete
                  label="Name"
                  placeholder="Search Accounts"
                  inputIcon="right"
                  inputIconRightSymbol="search"
                  objectSwitcher
                  objectSwitcherInline
                  aria-controls="listbox-id-02"
                  listbox={
                    <ComboboxListbox
                      id="listbox-id-02"
                      listboxOptionId="listbox-option-id-2"
                    />
                  }
                />
              </div>
            </div>
          </fieldset>
        </DockedComposerPanel>
      </div>
    )
  },
  {
    id: 'email',
    label: 'Email Composer',
    element: (
      <div className="slds-docked_container">
        <DockedComposerPanel
          className="slds-is-open"
          header="New Email"
          headerSymbol="email"
          footer={<EmailFooter />}
        >
          <div className="slds-email-composer">
            <ComboboxContainer
              id="recipients-to"
              formClassName="slds-email-composer__combobox"
              selectedOptionsInline
              label="To"
              placeholder=" "
              autocomplete
              aria-controls="listbox-id-01"
              listbox={
                <ComboboxListbox
                  id="listbox-id-01"
                  listboxOptionId="listbox-option-id-1"
                />
              }
            >
              <ListboxPills>
                <ListboxPillsItem>
                  <ListboxPill label="jrogers@cloudhub.com" tabIndex="0">
                    <Avatar className="slds-avatar_x-small slds-pill__icon_container">
                      <img
                        alt="Person name"
                        src="/assets/images/avatar2.jpg"
                        title="User avatar"
                      />
                    </Avatar>
                  </ListboxPill>
                </ListboxPillsItem>
              </ListboxPills>
            </ComboboxContainer>
            <ComboboxContainer
              id="recipients-bcc"
              formClassName="slds-email-composer__combobox"
              selectedOptionsInline
              label="Bcc"
              placeholder=" "
              autocomplete
              aria-controls="listbox-id-02"
              listbox={
                <ComboboxListbox
                  id="listbox-id-02"
                  listboxOptionId="listbox-option-id-2"
                />
              }
            />
            <ComboboxContainer
              id="recipients-cc"
              formClassName="slds-email-composer__combobox"
              selectedOptionsInline
              label="Cc"
              placeholder=" "
              autocomplete
              aria-controls="listbox-id-03"
              listbox={
                <ComboboxListbox
                  id="listbox-id-03"
                  listboxOptionId="listbox-option-id-3"
                />
              }
            />
            <FormElement
              label="Enter subject"
              hideLabel
              inputId="input-subject-01"
            >
              <Input
                id="input-subject-01"
                className="slds-input_bare"
                placeholder="Enter Subject"
              />
            </FormElement>
            <RichTextEditor>
              <RteToolbar>
                <RteFormatFont />
                <RteFormatText tabIndexSetting="-1" />
                <RteFormatColor />
                <RteFormatBody />
                <RteAlignText />
                <RteInsertContent />
                <RteClearFormatting />
              </RteToolbar>

              <RteTextarea placeholder="Compose Email..." />
            </RichTextEditor>
          </div>
        </DockedComposerPanel>
      </div>
    )
  }
];
