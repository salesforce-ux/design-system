/* eslint-env jest */
import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';
import { Header, Footer } from '../walkthrough/example';
import { EinsteinHeader } from '../../einstein-header/base';
import { FeedbackHeader, FeedbackFooter } from '../error/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);
const headingUniqueId = 'dialog-heading-id-01';

// These tests are temporarily skipped. They fail on Travis since we're using tokens to bring in image paths.
// Travis is using a different port from our snapshot tests, which causes them to fail.
xit('renders a walkthrough popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-nubbin_left"
      headingId={headingUniqueId}
      header={<Header title="Manage your channels" />}
      footer={<Footer nextButton />}
      closeButton
      inverse
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Popover>
  ));

xit('renders an action popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left"
      headingId={headingUniqueId}
      closeButton
      inverse
    >
      <div className="slds-media">
        <div className="slds-media__figure">
          <span
            className="slds-icon_container"
            title="description of icon when needed"
          >
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-text-default"
              sprite="utility"
              symbol="touch_action"
            />
            <span className="slds-assistive-text">Description of icon</span>
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id={headingUniqueId} className="slds-text-heading_small">
            Text that describes the action
          </h2>
          <p className="slds-m-top_medium slds-text-title">Step 3 of 4</p>
        </div>
      </div>
    </Popover>
  ));

xit('renders a feature popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
      headingId={headingUniqueId}
      closeButton
      inverse
    >
      <div className="slds-media">
        <div className="slds-media__body">
          <h2 id={headingUniqueId} className="slds-text-heading_small">
            Shelly, it seems you frequent this record. Try favoriting it for
            easy access.
          </h2>
        </div>
      </div>
    </Popover>
  ));

xit('renders an einstein popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-nubbin_left slds-popover_einstein"
      title="Dialog Title"
      headingId={headingUniqueId}
      header={
        <EinsteinHeader
          className="slds-popover__header"
          closeButton
          headingId={headingUniqueId}
        />
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Popover>
  ));

it('renders an error popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_error slds-nubbin_bottom-left"
      headingId={headingUniqueId}
      header={
        <FeedbackHeader title="Resolve the following errors" symbol="error" />
      }
      closeButton
      inverse
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.{' '}
        <a href="javascript:void(0);" title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders an error popover with footer', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_error slds-nubbin_bottom-left"
      headingId={headingUniqueId}
      header={
        <FeedbackHeader title="Resolve the following errors" symbol="error" />
      }
      footer={<FeedbackFooter />}
      closeButton
      inverse
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.{' '}
        <a href="javascript:void(0);" title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders a warning popover', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_warning slds-nubbin_bottom-left"
      headingId={headingUniqueId}
      header={
        <FeedbackHeader
          title="Resolve the following errors"
          symbol="warning"
          iconDefault
        />
      }
      closeButton
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.{' '}
        <a href="javascript:void(0);" title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders a warning popover with footer', () =>
  matchesMarkupAndStyle(
    <Popover
      className="slds-popover_warning slds-nubbin_bottom-left"
      headingId={headingUniqueId}
      header={
        <FeedbackHeader
          title="Resolve the following errors"
          symbol="warning"
          iconDefault
        />
      }
      footer={<FeedbackFooter />}
      closeButton
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.{' '}
        <a href="javascript:void(0);" title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));
