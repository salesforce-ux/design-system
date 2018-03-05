/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders position utilities', () => {
  it('renders static utility', () =>
    matchesMarkupAndStyle(
      <div
        className="demo-only slds-grid"
        style={{ height: '150px', width: '300px', padding: '2rem' }}
      >
        <div className="slds-is-static">
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              border: '1px solid red',
              background: '#f4f6f9'
            }}
          >
            A static positioned element is positioned exactly as it comes in the
            flow of the page.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    ));
  it('renders fixed utility', () =>
    matchesMarkupAndStyle(
      <div
        className="demo-only slds-grid"
        style={{ height: '150px', width: '300px', padding: '2rem' }}
      >
        <div className="slds-is-fixed">
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              border: '1px solid red',
              background: '#f4f6f9'
            }}
          >
            An element with fixed positioning is positioned relative to the
            viewport. If no other positioning values are given (<code>top, right, bottom, left</code>)
            it will start its positioning relative to where it is in the flow of
            the page.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    ));
  it('renders relative utility', () =>
    matchesMarkupAndStyle(
      <div
        className="demo-only slds-grid"
        style={{ height: '150px', width: '300px', padding: '2rem' }}
      >
        <div className="slds-is-relative">
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              border: '1px solid red',
              background: '#f4f6f9'
            }}
          >
            An absolutely positioned element is positioned relative to the
            nearest positioned parent. The <code>.slds-is-relative</code> class
            can be used to give the parent or ancestor positioning.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    ));
  it('renders absolute utility', () =>
    matchesMarkupAndStyle(
      <div
        className="demo-only slds-grid"
        style={{ height: '150px', width: '300px', padding: '2rem' }}
      >
        <div className="slds-is-absolute">
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              border: '1px solid red',
              background: '#f4f6f9'
            }}
          >
            An element with absolute positioning is positioned relative to its
            closest ancestor with relative positioning. If no other positioning
            values are given (<code>top, right, bottom, left</code>) it will
            start its positioning relative to where it is in the flow of the
            page.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    ));
});
