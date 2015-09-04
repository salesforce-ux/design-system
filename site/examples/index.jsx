/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import _ from 'lodash';
import ui from '.generated/ui';
import forceBase from '@salesforce-ux/design-tokens/dist/force-base.common';

require.context = require.context || function() { return require; };
const requireExample = require.context('ui', true, /index\.react\.example\.jsx$/);

function getExample(path) {
  if (typeof window === 'undefined') {
    return require(`ui/${path}`);
  } else {
    return requireExample(`./${path}`);
  }
}

class Examples extends React.Component {
  componentDidMount() {
    let style = document.createElement('style');
    style.innerHTML = `
      .demo--inverse {
        background-color: ${forceBase.colorBackgroundInverse};
      }
    `;
    document.head.appendChild(style);
  }
  render() {
    return (
      <div>
        <span>Note: not rendering notifications, modals, or lookup.advanced-modal</span>
        {this.renderGroups()}
      </div>
    );
  }
  renderGroups() {
    return ui.map((group, index) => {
      return (
        <div key={group.id}>
          <h2 className="text-heading--large m-top--x-large">
          Section {index + 1}: {group.id}</h2>
          {this.renderComponents(group, group.id)}
        </div>
      );
    });
  }
  renderComponents(group, groupIndex) {
    const components = group.components.filter(component => {
      return !_.includes(['notifications', 'modals'], component.id);
    });
    return components.map((component, index) => {
      const componentIndex = index + 1;
      return (
        <div key={component.id}>
          <h3 className="text-heading--medium  m-top--x-large">{groupIndex}.{componentIndex}: {component.id}</h3>
          {this.renderFlavors(component, group, groupIndex, componentIndex)}
        </div>
      );
    });
  }
  renderFlavors(component, group, groupIndex, componentIndex) {
    const flavors = component.flavors.filter(component => {
      return !_.includes(['advanced-modal'], component.id);
    });
    return flavors.map((flavor, index) => {
      const flavorIndex = index + 1;
      let previewComponent = null;
      try {
        previewComponent = getExample(flavor.examplePath);
        if (previewComponent.preview) {
          previewComponent = previewComponent.preview;
        }
      } catch (e) {
        console.log(e);
      }
      //let flavorPath = '/ui/' + group.id + '/' + component.id + '/#' + flavor.id;
      return (
        <div key={flavor.id}>
          <h4 className="text-heading--small  m-top--x-large m-bottom--medium">{groupIndex}.{componentIndex}.{flavorIndex}:</h4>
          <div className="component-section m-bottom--large" style={{overflow: 'hidden'}}>
            <div className="m-bottom--medium">Source: {flavor.examplePath}</div>
            <hr/>
            {previewComponent}
            <hr/>
          </div>
        </div>
      );
    });
  }
}

export default (
  <Examples pageSiteStyles={false} />
);
