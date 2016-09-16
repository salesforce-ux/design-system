/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { assign, find, some, intersection, every } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

import ui from '.generated/ui';

let headings = [{
  label: 'Responsive',
  prop: 'isResponsive'
}, {
  label: 'Adaptive',
  prop: 'isAdaptive'
}, {
  label: 'Lightning',
  prop: 'isLightning'
}];

let { components: _components } = find(ui, { id: 'components' });
let { components: _touch } = find(ui, { id: 'touch' });

let isResponsive = (component, flavor) => some([
  !flavor.showFormFactors,
  intersection(flavor.showFormFactors, ['large', 'small']).length === 2
]);

let isAdaptive = (component, flavor) => {
  let touchComponent = find(_touch, { id: component.id });
  if (!touchComponent) return false;
  let touchFlavor = find(touchComponent.flavors, { id: flavor.id });
  return touchFlavor;
};

let components = _components.map(component => {
  return assign({}, component, {
    flavors: component.flavors.map(flavor => {
      return assign({}, flavor, {
        isResponsive: isResponsive(component, flavor),
        isAdaptive: isAdaptive(component, flavor),
        isLightning: false
      });
    })
  });
});

let CheckIcon = () =>
  <SvgIcon
    sprite="utility"
    symbol="check"
    className="slds-icon slds-icon__svg slds-icon-utility-check slds-icon--small slds-icon-text-default" />;

let Table = ({ component, filters }) => {
  let filteredFlavors = component.flavors.filter(flavor =>
    filters.every(filter => flavor[filter]));
  if (!filteredFlavors.length) return null;
  return <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-table--col-bordered slds-m-bottom--xx-large">
    <thead>
      <tr className="slds-text-title--caps">
        <th scope="col">
          <a href={`/components/${component.id}`} className="slds-truncate">{component.title}</a>
        </th>
        {headings.map(heading =>
          <th scope="col" key={heading.label}>
            <div className="slds-truncate">{heading.label}</div>
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      {filteredFlavors.map(flavor =>
        <tr key={`${component.id}:${flavor.id}`}>
          <td>
            <a href={`/components/${component.id}/#flavor-${flavor.id}`} className="slds-p-left--medium">
              {flavor.title}
            </a>
          </td>
          {headings.map(heading => {
            return <td
              key={heading.label}
              className="slds-text-align--center" width="120">
              <div style={assign({}, {
                display: 'flex',
                'alignItems': 'center'
              })}>
                <span style={{ margin: 'auto' }}>
                  {flavor[heading.prop] ? <CheckIcon /> : null}
                </span>
              </div>
            </td>;
          })}
        </tr>
      )}
    </tbody>
  </table>;
};

let App = React.createClass({
  getInitialState() {
    return {
      filters: Immutable.Set()
    };
  },
  updateFilter(e) {
    this.setState({
      filters: e.target.checked
        ? this.state.filters.add(e.target.value)
        : this.state.filters.remove(e.target.value)
    });
  },
  render() {
    return (
      <div>
        <header className="slds-grid slds-m-bottom--large">
          {headings.map(heading =>
            <div className="slds-form-element slds-m-right--medium" key={heading.label}>
              <label className="slds-checkbox--toggle slds-grid slds-grid--vertical">
                <div
                  className="slds-form-element__label slds-m-bottom--m">
                  {heading.label}
                </div>
                <input
                  name="checkbox"
                  type="checkbox"
                  value={heading.prop}
                  checked={this.state.filters.has(heading.prop)}
                  aria-describedby={`filter-${heading.label}`}
                  onChange={this.updateFilter} />
                  <div
                    id={`filter-${heading.label}`}
                    className="slds-checkbox--faux_container"
                    aria-live="assertive">
                    <span className="slds-checkbox--faux"></span>
                    <span className="slds-checkbox--on slds-assistive-text">Enabled</span>
                    <span className="slds-checkbox--off slds-assistive-text">Disabled</span>
                  </div>
              </label>
            </div>
          )}
        </header>
        {components.map(component =>
          <Table
            key={component.id}
            component={component}
            filters={this.state.filters} />
        )}
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('components-overview'));
