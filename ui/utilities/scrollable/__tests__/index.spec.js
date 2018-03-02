/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders scrollable utilities', () => {
  it('renders scrollable auto utility', () =>
    matchesMarkupAndStyle(
      <div
        className="slds-scrollable"
        style={{ height: '5rem', width: '24rem' }}
      >
        <p>Scrollable Content Here</p>
        <div className="slds-text-longform" style={{ width: '150%' }}>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
        </div>
      </div>
    ));

  it('renders scrollable x utility', () =>
    matchesMarkupAndStyle(
      <div
        className="slds-scrollable_x"
        style={{ height: '5rem', width: '24rem' }}
      >
        <p>Scrollable Content Here</p>
        <div className="slds-text-longform" style={{ width: '150%' }}>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
        </div>
      </div>
    ));

  it('renders scrollable y utility', () =>
    matchesMarkupAndStyle(
      <div
        className="slds-scrollable_y"
        style={{ height: '5rem', width: '24rem' }}
      >
        <p>Scrollable Content Here</p>
        <div className="slds-text-longform">
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
        </div>
      </div>
    ));

  it('renders scrollable none utility', () =>
    matchesMarkupAndStyle(
      <div
        className="slds-scrollable_none"
        style={{ height: '5rem', width: '24rem' }}
      >
        <p>Scrollable Content Here</p>
        <div className="slds-text-longform">
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
        </div>
      </div>
    ));
});
