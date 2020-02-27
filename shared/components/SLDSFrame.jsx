import React from 'react';
import Frame from 'react-frame-component';
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
    const { children, hideDeviceSelector } = this.props;

    const randomId = Math.random()
      .toString(36)
      .substr(2, 9);
    const frameId = 'example-frame-' + randomId;
    const selectId = 'device-selector-' + randomId;

    const setWidth = event => {
      const target = event.target;
      const deviceId = target.value;
      const deviceSearchIndex = devicesMap[deviceId];
      const deviceData = devices[deviceSearchIndex];

      const iframe = document.getElementById(frameId);

      let newFrameWidth = deviceData
        ? deviceData.dimensions.width + 'px'
        : null;

      iframe.style.width = newFrameWidth;
      iframe.contentWindow.resizeIframe();
    };

    return (
      <React.Fragment>
        <Frame
          className="docs-mobile_frame"
          id={frameId}
          initialContent='
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
              <div></div>
              <script>
                function resizeIframe() {
                  const offsetHeight = document.documentElement.offsetHeight;
                  const frameHeight = offsetHeight + (window.frameElement.offsetHeight - window.frameElement.clientHeight);
                  window.frameElement.style.height =  Math.ceil(frameHeight) + "px";
                }

                window.parent.addEventListener("resize", resizeIframe);
                setTimeout(resizeIframe, 250);
              </script>
            </body>
          </html>'
        >
          {children}
        </Frame>

        {!hideDeviceSelector && (
          <ul class="docs-codeblock__action-bar docs-codeblock__device-selector">
            <li>
              <FormElement
                isHorizontal
                labelContent="Select a device to set the width of the example"
                inputId={selectId}
              >
                <Select id={selectId} onChange={setWidth}>
                  <option value="">No device</option>
                  {devices.map((value, index) => {
                    return (
                      <option key={index} value={value.id}>
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
  hideDeviceSelector: PropTypes.bool
};
