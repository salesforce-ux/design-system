/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders visibility utilities', () => {
  it('renders hidden assistive text', () =>
    matchesMarkupAndStyle(
      <div className="slds-assistive-text">I am hidden from sight</div>
    ));

  it('renders collapsed/expanded utilities', () =>
    matchesMarkupAndStyle(
      <div>
        <div className="slds-is-collapsed">
          <h3>I am collapsed</h3>
          <p>I am a child inside a collapsed element</p>
        </div>
        <div className="slds-is-expanded">
          <h3>I am expanded</h3>
          <p>I am a child inside an expanded element</p>
        </div>
      </div>
    ));

  it('renders hidden/visible utilities', () =>
    matchesMarkupAndStyle(
      <div>
        <div className="slds-hidden">I am hidden</div>
        <div className="slds-visible">I am visible</div>
      </div>
    ));

  it('renders display utilities', () =>
    matchesMarkupAndStyle(
      <div>
        <div className="slds-hide">I am hidden</div>
        <div className="slds-show">I am shown as a block</div>
        <div className="slds-show_inline-block">
          I am shown as an inline-block
        </div>
      </div>
    ));

  it('renders transition utilities', () =>
    matchesMarkupAndStyle(
      <div>
        <div className="slds-transition-hide">I have zero opacity</div>
        <div className="slds-transition-show">I have 100% opacity</div>
      </div>
    ));

  it('renders responsive utilities', () =>
    matchesMarkupAndStyle(
      <div>
        <div className="slds-show_x-small">Hides on 319px and down</div>
        <div className="slds-hide_x-small">Hides on 320px and up</div>

        <div className="slds-show_small">Hides on 479px and down</div>
        <div className="slds-hide_small">Hides on 480px and up</div>

        <div className="slds-show_medium">Hides on 767px and down</div>
        <div className="slds-hide_medium">Hides on 768px and up</div>

        <div className="slds-show_large">Hides on 1023px and down</div>
        <div className="slds-hide_large">Hides on 1024px and up</div>

        <div className="slds-show_x-large">Hides on 1279px and down</div>
        <div className="slds-hide_x-large">Hides on 1280px and up</div>
      </div>
    ));
});
