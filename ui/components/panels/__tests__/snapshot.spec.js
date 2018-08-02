/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Panel from '../';

const { matchesMarkup } = createHelpers(__dirname);

describe('render Panel component', () => {
  it('render Base Panel', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel size="medium" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel with left position drill in', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          size="medium"
          title="Panel Header"
          docked="left"
          invoke="drill-in"
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel with right position drill in', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          size="medium"
          title="Panel Header"
          docked="right"
          invoke="drill-in"
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel drawer', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          size="medium"
          title="Panel Header"
          docked="left"
          invoke="toggle"
          isStatic
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel small size', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel size="small" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel medium size', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel size="medium" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel large size', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel size="large" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel x-large size', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          size="x-large"
          title="Panel Header"
          docked="left"
          invoke="toggle"
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel full size', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel size="full" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel animated', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel isAnimated title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('renders Base Panel with centered title text', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          isAnimated
          title="Panel Header"
          docked="left"
          invoke="toggle"
          hasCenterTitle
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('renders Base Panel with long header title', () =>
    matchesMarkup(
      <div
        style={{
          backgroundColor: '#fafaf9',
          position: 'relative',
          height: '600px',
          overflow: 'hidden'
        }}
      >
        <Panel
          isAnimated
          title="Panel Header with a really, really long title name"
          docked="left"
          invoke="toggle"
        >
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
});
