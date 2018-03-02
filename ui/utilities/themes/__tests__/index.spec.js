/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders theme utilities', () => {
  it('render default theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_default">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render shade theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_shade">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render inverse theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_inverse">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render alt inverse theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_alt-inverse">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render success theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_success">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render info theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_info">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render warning theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_warning">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render error theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_error">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render offline theme on a box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_offline">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));

  it('render textured theme on a shaded box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-theme_shade slds-theme_alert-texture">
        <p>
          This theme has the <strong>alert texture</strong> added to the default
          theme and has a <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    ));
});
