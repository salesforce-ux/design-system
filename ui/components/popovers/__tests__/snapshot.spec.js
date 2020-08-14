/* eslint-env jest */
import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';
import { Header, Footer } from '../walkthrough/example';
import { EinsteinHeader } from '../../einstein-header/base';
import { FeedbackHeader, FeedbackFooter } from '../error/example';
import { Prompt } from '../prompt/example';

import createHelpers from '../../../../jest.helpers';
import { Button } from '../../buttons/base/example';
import { Fieldset } from '../../form-element';
import { Checkbox } from '../../checkbox/base/example';

const { matchesMarkup } = createHelpers(__dirname);
const headingUniqueId = 'dialog-heading-id-01';

// These tests are temporarily skipped. They fail on Travis since we're using tokens to bring in image paths.
// Travis is using a different port from our snapshot tests, which causes them to fail.
it('renders a walkthrough popover', () =>
  matchesMarkup(
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

it('renders an action popover', () =>
  matchesMarkup(
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

it('renders a feature popover', () =>
  matchesMarkup(
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

it('renders an einstein popover', () =>
  matchesMarkup(
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
  matchesMarkup(
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
        <a href="#" onClick={e => e.preventDefault()} title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders an error popover with footer', () =>
  matchesMarkup(
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
        <a href="#" onClick={e => e.preventDefault()} title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders a warning popover', () =>
  matchesMarkup(
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
        <a href="#" onClick={e => e.preventDefault()} title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders a warning popover with footer', () =>
  matchesMarkup(
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
        <a href="#" onClick={e => e.preventDefault()} title="Learn More">
          Learn More
        </a>
      </p>
    </Popover>
  ));

it('renders a small popover', () =>
  matchesMarkup(
    <Popover
      className="slds-nubbin_left slds-popover_small"
      closeButton
      title="Dialog Title"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Popover>
  ));

it('renders a large popover', () =>
  matchesMarkup(
    <Popover
      className="slds-nubbin_left slds-popover_large"
      closeButton
      title="Dialog Title"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Popover>
  ));

describe('Base popover', () => {
  it('renders a popover at full width', () =>
    matchesMarkup(
      <Popover popoverId="popover-id-01" title="Language Options" isFullWidth>
        <div>Any content can go here in this Dialog</div>
      </Popover>
    ));
  it('renders a small scrolling popover', () =>
    matchesMarkup(
      <Popover popoverId="popover-id-01" title="Language Options" size="small">
        <div>Any content can go here in this Dialog</div>
      </Popover>
    ));
  it('renders a hidden popover', () =>
    matchesMarkup(
      <Popover popoverId="popover-id-01" title="Language Options" isHidden>
        <div>Any content can go here in this Dialog</div>
      </Popover>
    ));
  it('renders a popover with a footer', () =>
    matchesMarkup(
      <Popover
        popoverId="popover-id-01"
        title="Language Options"
        hasFormFooter
        footer={
          <React.Fragment>
            <Button />
            <Button />
          </React.Fragment>
        }
      >
        <div>Any content can go here in this Dialog</div>
      </Popover>
    ));
  it('renders a popover with a checkbox group', () =>
    matchesMarkup(
      <Popover
        popoverId="popover-id-01"
        title="Language Options"
        isFullWidth
        hasFormFooter
        footer={
          <React.Fragment>
            <Button isNeutral>Cancel</Button>
            <Button isBrand>Done</Button>
          </React.Fragment>
        }
      >
        <Fieldset label="Select up to 2">
          <Checkbox label="English" />
          <Checkbox label="German" />
          <Checkbox label="Tobagonian Creole English" />
          <Checkbox label="Spanish" />
        </Fieldset>
      </Popover>
    ));
});

describe('Prompt popover', () => {
  it('renders base without position', () =>
    matchesMarkup(<Prompt symbol="prompt" />));

  it('renders positioned top left', () =>
    matchesMarkup(<Prompt symbol="prompt" position="top-left" />));

  it('renders positioned top center', () =>
    matchesMarkup(<Prompt symbol="prompt" position="top" />));

  it('renders positioned top right', () =>
    matchesMarkup(<Prompt symbol="prompt" position="top-right" />));

  it('renders positioned bottom right', () =>
    matchesMarkup(<Prompt symbol="prompt" position="bottom-right" />));

  it('renders positioned bottom center', () =>
    matchesMarkup(<Prompt symbol="prompt" position="bottom" />));

  it('renders positioned bottom left', () =>
    matchesMarkup(<Prompt symbol="prompt" position="bottom-left" />));
});
