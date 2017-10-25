// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { FormElementStatic } from '../../panels/detail/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const path1Id = 'path-1';
const path2Id = 'path-2';
const path3Id = 'path-3';
const path4Id = 'path-4';
const path5Id = 'path-5';
const path6Id = 'path-6';
const path7Id = 'path-7';
const path8Id = 'path-8';
const path9Id = 'path-9';
const path10Id = 'path-10';
const path11Id = 'path-11';
const path12Id = 'path-12';

const pathContent1Id = 'path-content-1';
const pathContent2Id = 'path-content-2';
const pathContent3Id = 'path-content-3';
const pathContent4Id = 'path-content-4';
const pathContent5Id = 'path-content-5';
const pathContent6Id = 'path-content-6';
const pathContent7Id = 'path-content-7';
const pathContent8Id = 'path-content-8';
const pathContent9Id = 'path-content-9';
const pathContent10Id = 'path-content-10';
const pathContent11Id = 'path-content-11';
const pathContent12Id = 'path-content-12';

let Demo = props => (
  <div className={classNames('demo-only', props.className)} {...props}>
    {props.children}
  </div>
);

let Coach = props => (
  <div
    className={classNames('slds-path', {
      'slds-is-expanded': props.isExpanded
    })}
  >
    {props.children}
  </div>
);

let Path = props => (
  <div className={classNames('slds-grid slds-path__track', props.className)}>
    {props.children}
  </div>
);

let Trigger = props => (
  <ButtonIcon
    assistiveText="Expand Sales Coach Tab Panels"
    className="slds-button_icon-border-filled slds-path__trigger"
    symbol="chevrondown"
    title="Expand Sales Coaching Tab Panels"
  />
);

let Triggerup = props => (
  <ButtonIcon
    assistiveText="Collapse Sales Coach Tab Panels"
    className="slds-button_icon-border-filled slds-path__trigger slds-flip_vertical"
    symbol="chevrondown"
    title="Collapse Sales Coaching Tab Panels"
  />
);

let Action = props => (
  <button
    className={classNames(
      'slds-button slds-button_brand slds-path__mark-complete',
      props.className
    )}
  >
    {props.children}
  </button>
);

let ListMain = props => {
  let ariaOrientation;
  if (props.listRole === 'listbox') {
    ariaOrientation = 'horizontal';
  }
  return (
    <div
      className={classNames('slds-path__scroller', props.className)}
      role="application"
    >
      <div className="slds-path__scroller_inner">
        <ul
          className="slds-path__nav"
          role={props.listRole}
          aria-orientation={ariaOrientation}
        >
          {props.children}
        </ul>
        <div className="slds-path__scroll-controls">
          <ButtonIcon
            assistiveText="Scroll left"
            className="slds-button_icon-border-filled"
            symbol="left"
            title="Scroll left"
            tabIndex="-1"
          />
          <ButtonIcon
            assistiveText="Scroll right"
            className="slds-button_icon-border-filled"
            symbol="right"
            title="Scroll right"
            tabIndex="-1"
          />
        </div>
      </div>
    </div>
  );
};

let ListItem = props => {
  let ariaExpanded;
  if (props.role === 'tab') {
    ariaExpanded = props.ariaExpanded || 'false';
  }

  return (
    <li
      className={classNames('slds-path__item', props.className, {
        'slds-is-active': props.tabIndex
      })}
      role="presentation"
    >
      <a
        aria-controls={props.ariaControls}
        aria-expanded={ariaExpanded}
        aria-selected={props.tabIndex ? 'true' : 'false'}
        className="slds-path__link"
        href="javascript:void(0);"
        id={props.id}
        role={props.role}
        tabIndex={props.tabIndex || '-1'}
      >
        {props.children}
      </a>
    </li>
  );
};

let CoachContent = props => {
  const contentClassNames = classNames('slds-path__content', {
    'slds-hide': !props.isActive,
    'slds-show': props.isActive
  });

  return (
    <div
      aria-labelledby={props.ariaLabelledby}
      className={contentClassNames}
      id={props.id}
      role="tabpanel"
    >
      {props.children}
    </div>
  );
};

let CoachExample1 = props => (
  <div className="slds-path__coach slds-grid">
    <div className="slds-path__keys slds-form slds-form_stacked">
      <div className="slds-grid slds-grid_align-spread slds-path__coach-title">
        <h2>Key Fields This Stage</h2>
        <button className="slds-button slds-button_reset slds-text-body_small">
          Edit
        </button>
      </div>
      <ul>
        <FormElementStatic inlineEdit label="Expected Budget" text="$10,000" />
        <FormElementStatic
          inlineEdit
          label="Lead Source"
          text="Marketing and Web Referral"
        />
        <FormElementStatic
          inlineEdit
          label="Support Engineer"
          text="Jack Arthur"
        />
      </ul>
    </div>
    <div className="slds-path__guidance">
      <h2 className="slds-path__coach-title">Guidance for Success</h2>
      <div className="slds-text-longform slds-path__guidance-content">
        <p>
          Regularly cross-sell related products using{' '}
          <a href="javascript:void(0);">cross-sell tactics and principles</a>.
        </p>
        <p>
          Prepare demo deck using the{' '}
          <a href="javascript:void(0);">latest template</a> and review with
          Marketing and Sales teams. Review demo copy with Legal and Doc team.
        </p>
        <p>
          Look up <a href="javascript:void(0);">
            needs analysis principles
          </a>{' '}
          and review selling plan with Sales Engineer.
        </p>
      </div>
    </div>
  </div>
);

let CoachExample2 = props => (
  <div className="slds-path__coach slds-grid">
    <div className="slds-path__keys slds-form slds-form_stacked">
      <div className="slds-grid slds-grid_align-spread slds-path__coach-title">
        <h2>Key Fields This Stage</h2>
        <button className="slds-button slds-button_reset slds-text-body_small">
          Edit
        </button>
      </div>
      <ul>
        <FormElementStatic inlineEdit label="Build State" text="In Motion" />
        <FormElementStatic
          inlineEdit
          label="Expected Sign Date"
          text="&nbsp;"
        />
        <FormElementStatic inlineEdit label="Key Buyer" text="&nbsp;" />
      </ul>
    </div>
    <div className="slds-path__guidance">
      <h2 className="slds-path__coach-title">Guidance for Success</h2>
      <div className="slds-text-longform slds-path__guidance-content">
        <p>
          Check out the latest Negotiation and Review tactics on our{' '}
          <a href="javascript:void(0);">online portal here</a>.
        </p>
        <p>
          Review Quote with the Legal and Marketing team and be sure to approve
          with Exec.
        </p>
        <p>Set up at time to delivery schedule and check with Inventory.</p>
      </div>
    </div>
  </div>
);

/// ////////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Default = props => (
  <Coach>
    <Path>
      <div className="slds-grid slds-path__scroller-container">
        <ListMain listRole="listbox">
          <ListItem
            className="slds-is-current"
            id={path1Id}
            role="option"
            tabIndex="0"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Contacted</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path2Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Open</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path3Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-path__title">Unqualified</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path4Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Nurturing</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path5Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Closed</span>
          </ListItem>
        </ListMain>
      </div>
      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: Unqualified</span>
        <Action>
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="check"
          />
          Mark Status as Complete
        </Action>
      </div>
    </Path>
  </Coach>
);

let PathNoCoachStageSelected = props => (
  <Coach>
    <Path>
      <div className="slds-grid slds-path__scroller-container">
        <ListMain listRole="listbox">
          <ListItem className="slds-is-complete" id={path1Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Contacted</span>
          </ListItem>
          <ListItem className="slds-is-complete" id={path2Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Open</span>
          </ListItem>
          <ListItem
            className="slds-is-current"
            id={path3Id}
            role="option"
            tabIndex="0"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-path__title">Unqualified</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path4Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Nurturing</span>
          </ListItem>
          <ListItem className="slds-is-incomplete" id={path5Id} role="option">
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Closed</span>
          </ListItem>
        </ListMain>
      </div>
      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: Unqualified</span>
        <Action>
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="check"
          />
          Mark Status as Complete
        </Action>
      </div>
    </Path>
  </Coach>
);

let PathCoach = props => (
  <Coach>
    <Path>
      <div className="slds-grid slds-path__scroller-container">
        <Trigger />
        <ListMain listRole="tablist">
          <ListItem
            className="slds-is-complete"
            id={path1Id}
            ariaControls={pathContent1Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Contacted</span>
          </ListItem>
          <ListItem
            className="slds-is-complete"
            id={path2Id}
            ariaControls={pathContent2Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Open</span>
          </ListItem>
          <ListItem
            className="slds-is-current"
            id={path3Id}
            ariaControls={pathContent3Id}
            role="tab"
            tabIndex="0"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-path__title">Unqualified</span>
          </ListItem>
          <ListItem
            className="slds-is-incomplete"
            id={path4Id}
            ariaControls={pathContent4Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Nurturing</span>
          </ListItem>
          <ListItem
            className="slds-is-incomplete"
            id={path5Id}
            ariaControls={pathContent5Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Closed</span>
          </ListItem>
        </ListMain>
      </div>
      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: Unqualified</span>
        <Action>
          <SvgIcon
            className="slds-button__icon slds-button__icon_left"
            sprite="utility"
            symbol="check"
          />
          Mark Status as Complete
        </Action>
      </div>
    </Path>
    <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>
);

let PathCoachVisible = props => (
  <Demo>
    <Coach isExpanded>
      <Path>
        <div className="slds-grid slds-path__scroller-container">
          <Triggerup />
          <ListMain listRole="tablist">
            <ListItem
              className="slds-is-complete"
              id={path1Id}
              ariaControls={pathContent1Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path2Id}
              ariaControls={pathContent2Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-current"
              id={path3Id}
              ariaControls={pathContent3Id}
              ariaExpanded="true"
              role="tab"
              tabIndex="0"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Current Stage:</span>
              </span>
              <span className="slds-path__title">Unqualified</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path4Id}
              ariaControls={pathContent4Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Nurturing</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path5Id}
              ariaControls={pathContent5Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Closed</span>
            </ListItem>
          </ListMain>
        </div>
        <div className="slds-grid slds-path__action">
          <span className="slds-path__stage-name">Stage: Unqualified</span>
          <Action>
            <SvgIcon
              className="slds-button__icon slds-button__icon_left"
              sprite="utility"
              symbol="check"
            />
            Mark Status as Complete
          </Action>
        </div>
      </Path>
      <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent3Id} ariaLabelledby={path3Id} isActive>
        <CoachExample1 />
      </CoachContent>
      <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
        <h2>Path 4 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>
);

export let PathStageSelected = props => (
  <Demo>
    <Coach isExpanded>
      <Path>
        <div className="slds-grid slds-path__scroller-container">
          <Triggerup />
          <ListMain listRole="tablist">
            <ListItem
              className="slds-is-complete"
              id={path1Id}
              ariaControls={pathContent1Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path2Id}
              ariaControls={pathContent2Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-current"
              id={path3Id}
              ariaControls={pathContent3Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Current Stage:</span>
              </span>
              <span className="slds-path__title">Unqualified</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete slds-is-active"
              id={path4Id}
              ariaControls={pathContent4Id}
              ariaExpanded="true"
              role="tab"
              tabIndex="0"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Nurturing</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path5Id}
              ariaControls={pathContent5Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Closed</span>
            </ListItem>
          </ListMain>
        </div>
        <div className="slds-grid slds-path__action">
          <span className="slds-path__stage-name">Stage: Unqualified</span>
          <Action className="slds-path__mark-current">
            Mark as Current Stage
          </Action>
        </div>
      </Path>
      <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
        <h2>Path 3 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent4Id} ariaLabelledby={path4Id} isActive>
        <CoachExample2 />
      </CoachContent>
      <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>
);

let PathStageLost = props => (
  <Coach>
    <Path>
      <div className="slds-grid slds-path__scroller-container">
        <Trigger />
        <ListMain listRole="tablist">
          <ListItem
            className="slds-is-incomplete"
            id={path1Id}
            ariaControls={pathContent1Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Contacted</span>
          </ListItem>
          <ListItem
            className="slds-is-incomplete"
            id={path2Id}
            ariaControls={pathContent2Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Open</span>
          </ListItem>
          <ListItem
            className="slds-is-incomplete"
            id={path3Id}
            ariaControls={pathContent3Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Unqualified</span>
          </ListItem>
          <ListItem
            className="slds-is-incomplete"
            id={path4Id}
            ariaControls={pathContent4Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Nurturing</span>
          </ListItem>
          <ListItem
            className="slds-is-lost"
            id={path5Id}
            ariaControls={pathContent5Id}
            role="tab"
            tabIndex="0"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-path__title">Closed Lost</span>
          </ListItem>
        </ListMain>
      </div>
      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: Closed Lost</span>
        <Action>Change Closed State</Action>
      </div>
    </Path>
    <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>
);

let PathStageWon = props => (
  <Coach>
    <Path>
      <div className="slds-grid slds-path__scroller-container">
        <Trigger />
        <ListMain listRole="tablist">
          <ListItem
            className="slds-is-complete"
            id={path1Id}
            ariaControls={pathContent1Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Contacted</span>
          </ListItem>
          <ListItem
            className="slds-is-complete"
            id={path2Id}
            ariaControls={pathContent2Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-path__title">Open</span>
          </ListItem>
          <ListItem
            className="slds-is-complete"
            id={path3Id}
            ariaControls={pathContent3Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Unqualified</span>
          </ListItem>
          <ListItem
            className="slds-is-complete"
            id={path4Id}
            ariaControls={pathContent4Id}
            role="tab"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
            </span>
            <span className="slds-path__title">Nurturing</span>
          </ListItem>
          <ListItem
            className="slds-is-complete slds-is-won"
            id={path5Id}
            ariaControls={pathContent5Id}
            role="tab"
            tabIndex="0"
          >
            <span className="slds-path__stage">
              <SvgIcon
                className="slds-icon slds-icon_x-small"
                sprite="utility"
                symbol="check"
              />
              <span className="slds-assistive-text">Current Stage:</span>
            </span>
            <span className="slds-path__title">Closed Won</span>
          </ListItem>
        </ListMain>
      </div>
      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: Closed Won</span>
        <Action>Change Closed State</Action>
      </div>
    </Path>
    <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
      <h2>Path 1 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
      <h2>Path 2 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
      <h2>Path 3 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
      <h2>Path 4 Content</h2>
    </CoachContent>
    <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
      <h2>Path 5 Content</h2>
    </CoachContent>
  </Coach>
);

let PathOverflow = props => (
  <Demo>
    <Coach>
      <Path className="slds-has-overflow">
        <div className="slds-grid slds-path__scroller-container">
          <ListMain listRole="listbox">
            <ListItem className="slds-is-complete" id={path11Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path12Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path1Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path2Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path3Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path4Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path5Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path6Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem className="slds-is-complete" id={path7Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-current"
              id={path8Id}
              role="option"
              tabIndex="0"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Current Stage:</span>
              </span>
              <span className="slds-path__title">Unqualified</span>
            </ListItem>
            <ListItem className="slds-is-incomplete" id={path9Id} role="option">
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Nurturing</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path10Id}
              role="option"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Closed</span>
            </ListItem>
          </ListMain>
        </div>
        <div className="slds-grid slds-path__action">
          <span className="slds-path__stage-name">Stage: Unqualified</span>
          <Action>
            <SvgIcon
              className="slds-button__icon slds-button__icon_left"
              sprite="utility"
              symbol="check"
            />
            Mark Status as Complete
          </Action>
        </div>
      </Path>
    </Coach>
  </Demo>
);

let PathMediumCoaching = props => (
  <Demo className="slds-region_medium" style={{ width: '700px' }}>
    <Coach isExpanded>
      <Path className="slds-has-overflow">
        <div className="slds-grid slds-path__scroller-container">
          <Triggerup />
          <ListMain listRole="tablist">
            <ListItem
              className="slds-is-complete"
              id={path1Id}
              ariaControls={pathContent1Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path2Id}
              ariaControls={pathContent2Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path3Id}
              ariaControls={pathContent3Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path4Id}
              ariaControls={pathContent4Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path5Id}
              ariaControls={pathContent5Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path6Id}
              ariaControls={pathContent6Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path7Id}
              ariaControls={pathContent7Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-current"
              id={path8Id}
              ariaControls={pathContent8Id}
              ariaExpanded="true"
              role="tab"
              tabIndex="0"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Current Stage:</span>
              </span>
              <span className="slds-path__title">Unqualified</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path9Id}
              ariaControls={pathContent9Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Nurturing</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path10Id}
              ariaControls={pathContent10Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Closed</span>
            </ListItem>
          </ListMain>
        </div>
        <div className="slds-grid slds-path__action">
          <span className="slds-path__stage-name">Stage: Unqualified</span>
          <Action>
            <SvgIcon
              className="slds-button__icon slds-button__icon_left"
              sprite="utility"
              symbol="check"
            />
            Mark Status as Complete
          </Action>
        </div>
      </Path>
      <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent6Id} ariaLabelledby={path6Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent7Id} ariaLabelledby={path7Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent8Id} ariaLabelledby={path8Id} isActive>
        <CoachExample1 />
      </CoachContent>
      <CoachContent id={pathContent9Id} ariaLabelledby={path9Id}>
        <h2>Path 4 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent10Id} ariaLabelledby={path10Id}>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>
);

let PathSmallCoaching = props => (
  <Demo className="slds-region_small" style={{ width: '360px' }}>
    <Coach isExpanded>
      <Path className="slds-has-overflow">
        <div className="slds-grid slds-path__scroller-container">
          <Triggerup />
          <ListMain listRole="tablist">
            <ListItem
              className="slds-is-complete"
              id={path1Id}
              ariaControls={pathContent1Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path2Id}
              ariaControls={pathContent2Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path3Id}
              ariaControls={pathContent3Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path4Id}
              ariaControls={pathContent4Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path5Id}
              ariaControls={pathContent5Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path6Id}
              ariaControls={pathContent6Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Open</span>
            </ListItem>
            <ListItem
              className="slds-is-complete"
              id={path7Id}
              ariaControls={pathContent7Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-path__title">Contacted</span>
            </ListItem>
            <ListItem
              className="slds-is-current"
              id={path8Id}
              ariaControls={pathContent8Id}
              ariaExpanded="true"
              role="tab"
              tabIndex="0"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
                <span className="slds-assistive-text">Current Stage:</span>
              </span>
              <span className="slds-path__title">Unqualified</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path9Id}
              ariaControls={pathContent9Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Nurturing</span>
            </ListItem>
            <ListItem
              className="slds-is-incomplete"
              id={path10Id}
              ariaControls={pathContent10Id}
              ariaExpanded="true"
              role="tab"
            >
              <span className="slds-path__stage">
                <SvgIcon
                  className="slds-icon slds-icon_x-small"
                  sprite="utility"
                  symbol="check"
                />
              </span>
              <span className="slds-path__title">Closed</span>
            </ListItem>
          </ListMain>
        </div>
        <div className="slds-grid slds-path__action">
          <span className="slds-path__stage-name">Stage: Unqualified</span>
          <Action>
            <SvgIcon
              className="slds-button__icon slds-button__icon_left"
              sprite="utility"
              symbol="check"
            />
            Mark Status as Complete
          </Action>
        </div>
      </Path>
      <CoachContent id={pathContent1Id} ariaLabelledby={path1Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent2Id} ariaLabelledby={path2Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent3Id} ariaLabelledby={path3Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent4Id} ariaLabelledby={path4Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent5Id} ariaLabelledby={path5Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent6Id} ariaLabelledby={path6Id}>
        <h2>Path 2 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent7Id} ariaLabelledby={path7Id}>
        <h2>Path 1 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent8Id} ariaLabelledby={path8Id} isActive>
        <CoachExample1 />
      </CoachContent>
      <CoachContent id={pathContent9Id} ariaLabelledby={path9Id}>
        <h2>Path 4 Content</h2>
      </CoachContent>
      <CoachContent id={pathContent10Id} ariaLabelledby={path10Id}>
        <h2>Path 5 Content</h2>
      </CoachContent>
    </Coach>
  </Demo>
);

/// ////////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Default />;

export let states = [
  {
    id: 'later-stage',
    label: 'With Different Stage Selected - without coaching',
    element: <PathNoCoachStageSelected />
  },
  {
    id: 'with-coaching',
    label: 'With Coaching Available',
    element: <PathCoach />
  },
  {
    id: 'current-coaching',
    label: 'Current Stage Coaching Visible',
    element: <PathCoachVisible />
  },
  {
    id: 'different-coaching',
    label: 'With Different Stage Selected - with coaching',
    element: <PathStageSelected />
  },
  {
    id: 'lost',
    label: 'Lost',
    element: <PathStageLost />
  },
  {
    id: 'won',
    label: 'Won',
    element: <PathStageWon />
  },
  {
    id: 'with-overflow',
    label: 'Path with Overflow',
    element: <PathOverflow />
  },
  {
    id: 'medium-coaching',
    label: 'Path Medium Coaching Visible',
    element: <PathMediumCoaching />
  },
  {
    id: 'small-coaching',
    label: 'Path Small Coaching Visible',
    element: <PathSmallCoaching />
  }
];
