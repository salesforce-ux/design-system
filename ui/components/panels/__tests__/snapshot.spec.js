/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Panel from '../';
import { getDisplayElementById } from '../../../shared/helpers';
import { examples } from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);
const testContainerStyles = {
  backgroundColor: '#fafaf9',
  position: 'relative',
  height: '600px',
  overflow: 'hidden'
};

describe('render Panel component', () => {
  it('render Base Panel', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
        <Panel size="medium" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel with left position drill in', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
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
      <div style={testContainerStyles}>
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
      <div style={testContainerStyles}>
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
      <div style={testContainerStyles}>
        <Panel size="small" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel medium size', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
        <Panel size="medium" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel large size', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
        <Panel size="large" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel x-large size', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
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
      <div style={testContainerStyles}>
        <Panel size="full" title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('render Base Panel animated', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
        <Panel isAnimated title="Panel Header" docked="left" invoke="toggle">
          A panel body accepts any layout or component
        </Panel>
      </div>
    ));
  it('renders Base Panel with centered title text', () =>
    matchesMarkup(
      <div style={testContainerStyles}>
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
      <div style={testContainerStyles}>
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
  it('renders Base Panel with secondary actions', () =>
    matchesMarkup(getDisplayElementById(examples, 'with-secondary-actions')));
  it('renders Base Panel open as a drawer', () =>
    matchesMarkup(getDisplayElementById(examples, 'drawer')));
  it('renders Base Panel with the deprecated header', () =>
    matchesMarkup(getDisplayElementById(examples, 'deprecated-panel-header')));
});
