/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Panel from '../';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('render Panel component', () => {
  it('render Base Panel', () =>
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
    matchesMarkupAndStyle(
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
});
