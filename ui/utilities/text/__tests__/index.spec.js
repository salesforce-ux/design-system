/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders text utilities', () => {
  it('renders regular body text', () =>
    matchesMarkup(
      <div className="slds-text-body_regular">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders small body text', () =>
    matchesMarkup(
      <div className="slds-text-body_small">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders large heading text', () =>
    matchesMarkup(
      <div className="slds-text-heading_large">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders medium heading text', () =>
    matchesMarkup(
      <div className="slds-text-heading_medium">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders small heading text', () =>
    matchesMarkup(
      <div className="slds-text-heading_small">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders small title text', () =>
    matchesMarkup(
      <div className="slds-text-title">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders small title text in all-caps', () =>
    matchesMarkup(
      <div className="slds-text-title_caps">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders longform styles', () =>
    matchesMarkup(
      <div className="slds-text-longform">
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <h3 className="slds-text-heading_small">Heading</h3>
        <ul>
          <li>The quick brown fox jumps over the lazy dog.</li>
          <li>
            The quick brown fox jumps over the lazy dog.
            <ul>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>
                The quick brown fox jumps over the lazy dog.
                <ul>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="slds-text-heading_small">Heading</h3>
        <ol>
          <li>The quick brown fox jumps over the lazy dog.</li>
          <li>
            The quick brown fox jumps over the lazy dog.
            <ol>
              <li>The quick brown fox jumps over the lazy dog.</li>
              <li>
                The quick brown fox jumps over the lazy dog.
                <ol>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                  <li>The quick brown fox jumps over the lazy dog.</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    ));

  it('renders left aligned text', () =>
    matchesMarkup(
      <div className="slds-text-align_left">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders center aligned text', () =>
    matchesMarkup(
      <div className="slds-text-align_center">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders right aligned text', () =>
    matchesMarkup(
      <div className="slds-text-align_right">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders default text color', () =>
    matchesMarkup(
      <div className="slds-text-color_default">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders weak text color', () =>
    matchesMarkup(
      <div className="slds-text-color_weak">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders error text color', () =>
    matchesMarkup(
      <div className="slds-text-color_error">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders destructive text color', () =>
    matchesMarkup(
      <div className="slds-text-color_destructive">
        The quick brown fox jumps over the lazy dog.
      </div>
    ));

  it('renders inversed text color', () =>
    matchesMarkup(
      <div style={{ padding: '0.5rem', background: '#16325c' }}>
        <div className="slds-text-color_inverse">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    ));

  it('renders inversed weak text color', () =>
    matchesMarkup(
      <div style={{ padding: '0.5rem', background: '#16325c' }}>
        <div className="slds-text-color_inverse-weak">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    ));

  it('renders monospace text font', () =>
    matchesMarkup(
      <div style={{ padding: '0.5rem', background: '#16325c' }}>
        <div className="slds-text-font_monospace">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    ));
});
