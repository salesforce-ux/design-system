import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { StyleSheetManager } from 'styled-components';
import PropTypes from 'prop-types';
import { FormElement } from '../../ui/components/form-element';
import { Select } from '../../ui/components/select/base/example';
import devices from '../device-definitions.json';

// create a search index
const devicesMap = {};
devices.map((value, index) => {
  devicesMap[value.id] = index;
});

export default class SLDSFrame extends React.Component {
  render() {
    const {
      children,
      hideDeviceSelector,
      frameStyles,
      frameTitle
    } = this.props;

    let fixedHeight = false;
    // if frameStyles has a height value then we want to disable automatic height resizing
    if (frameStyles && frameStyles.hasOwnProperty('height')) {
      fixedHeight = true;
    }

    const randomId = Math.random()
      .toString(36)
      .substr(2, 9);
    const frameId = 'example-frame-' + randomId;
    const selectId = 'device-selector-' + randomId;

    const defaultDeviceID = 'iphone-11';

    const setWidth = event => {
      const target = event.target;
      const deviceId = target.value || defaultDeviceID;
      const deviceSearchIndex = devicesMap[deviceId];
      const deviceData = devices[deviceSearchIndex];

      const iframe = document.getElementById(frameId);

      let newFrameWidth = deviceData
        ? deviceData.dimensions.width + 'px'
        : null;

      iframe.style.width = newFrameWidth;

      // only resize if fixed height isn't requested
      if (!fixedHeight && iframe.contentWindow.resizeIframe) {
        iframe.contentWindow.resizeIframe();
      }
    };

    const initialContent =
      `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/assets/styles/salesforce-lightning-design-system.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/__internal/styles/salesforce-lightning-design-system_touch-demo.min.css" />
          <style type="text/css">
            html { background: transparent !important; padding: 1rem; }
          </style>
        </head>
        <body>
          <div></div>` +
      (fixedHeight
        ? ``
        : `<script>
            function resizeIframe() {
              window.frameElement.classList.remove('slds-resize-done');
              const offsetHeight = document.documentElement.offsetHeight;
              const frameHeight = offsetHeight + (window.frameElement.offsetHeight - window.frameElement.clientHeight);
              window.frameElement.style.height =  Math.ceil(frameHeight) + "px";
              window.frameElement.classList.add('slds-resize-done');
            }

            window.parent.addEventListener("resize", resizeIframe);
            setTimeout(resizeIframe, 250);
          </script>`) +
      `</body>
      </html>`;

    return (
      <React.Fragment>
        <Frame
          className="docs-mobile_frame"
          id={frameId}
          initialContent={initialContent}
          style={frameStyles}
          onLoad={setWidth}
          title={frameTitle}
        >
          <FrameContextConsumer>
            {frameContext => (
              <StyleSheetManager target={frameContext.document.head}>
                <React.Fragment>{children}</React.Fragment>
              </StyleSheetManager>
            )}
          </FrameContextConsumer>
        </Frame>

        {!hideDeviceSelector && (
          <ul className="docs-codeblock__action-bar docs-codeblock__device-selector">
            <li>
              <FormElement
                isHorizontal
                labelContent="Select a device to set the width of the example"
                inputId={selectId}
              >
                <Select id={selectId} onChange={setWidth}>
                  <option value="no-device">No device</option>
                  {devices.map((value, index) => {
                    const isSelected = value.id === defaultDeviceID;

                    return (
                      <option
                        key={index}
                        value={value.id}
                        selected={isSelected}
                      >
                        {value.description}
                      </option>
                    );
                  })}
                </Select>
              </FormElement>
            </li>
          </ul>
        )}
      </React.Fragment>
    );
  }
}

SLDSFrame.propTypes = {
  hideDeviceSelector: PropTypes.bool,
  frameStyles: PropTypes.object,
  frameTitle: PropTypes.string
};
