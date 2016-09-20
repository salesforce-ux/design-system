/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

import assign from 'lodash/assign';
import find from 'lodash/find';
import some from 'lodash/some';
import intersection from 'lodash/intersection';
import every from 'lodash/every';
import escapeRegExp from 'lodash/escapeRegExp';
import has from 'lodash/has';
import keys from 'lodash/keys';

import ui from '.generated/ui';

let filters = {
  isResponsive: (component, flavor) =>
    flavor.isResponsive,
  isAdaptive: (component, flavor) =>
    flavor.isAdaptive,
  isPrototype: (component, flavor) =>
    flavor.status === 'prototype',
  isLightning: (component, flavor) =>
    flavor.lightning,
  isNotS1Compatible: (component, flavor) =>
    flavor.compatibility && flavor.compatibility.s1 === false,
  isNotMobile: (component, flavor) =>
    !filters.isResponsive(component, flavor) && !filters.isAdaptive(component, flavor)
};

let pageFilters = [{
  label: 'Responsive',
  key: 'isResponsive'
}, {
  label: 'Adaptive',
  key: 'isAdaptive'
}, {
  label: 'Prototype',
  key: 'isPrototype'
}, {
  label: 'Lightning',
  key: 'isLightning'
}, {
  label: 'Not S1',
  key: 'isNotS1Compatible'
}, {
  label: 'Not Mobile',
  key: 'isNotMobile'
}];

let componentColumns = [{
  label: 'Responsive',
  filter: 'isResponsive'
}, {
  label: 'Adaptive',
  filter: 'isAdaptive'
}, {
  label: 'Prototype',
  filter: 'isPrototype'
}];

let lightningComponents = [{
  component: 'badges',
  namespace: 'lightning:badge',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_badge.html'
},{
  component: 'buttons',
  namespace: 'lightning:button',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_button.htm'
},{
  component: 'button-groups',
  namespace: 'lightning:buttonGroup',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_buttonGroup.htm'
},{
  component: 'button-icons',
  namespace: 'lightning:buttonIcon',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_buttonIcon.htm'
}, {
  namespace: 'lightning:buttonMenu',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_buttonMenu.htm'
}, {
  component: 'cards',
  namespace: 'lightning:card',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_card.htm'
}, {
  namespace: 'lightning:formattedDateTime',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_formattedDateTime.htm'
}, {
  namespace: 'lightning:formattedNumber',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_formattedNumber.htm'
}, {
  component: 'icons',
  namespace: 'lightning:icon',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_icon.htm'
}, {
  component: 'forms',
  flavor: 'input',
  namespace: 'lightning:input',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_input.htm'
}, {
  namespace: 'lightning:layout',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_layout.htm'
}, {
  namespace: 'lightning:layoutItem',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_layoutItem.htm'
}, {
  namespace: 'lightning:menutItem',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_menuItem.htm'
}, {
  component: 'forms',
  flavor: 'select',
  namespace: 'lightning:select',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_select.htm'
}, {
  component: 'spinners',
  namespace: 'lightning:spinner',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_spinner.htm'
}, {
  component: 'tabs',
  namespace: 'lightning:tab',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_tab.htm'
}, {
  namespace: 'lightning:tabset',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_tabset.htm'
}, {
  component: 'forms',
  flavor: 'textarea',
  namespace: 'lightning:textarea',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_textarea.htm'
}, {
  component: 'tooltips',
  namespace: 'lightning:tooltip',
  url: 'https://developer.salesforce.com/docs/atlas.en-us.204.0.lightning.meta/lightning/aura_compref_lightning_tooltip.htm'
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
  let lightning = find(lightningComponents, { component: component.id });
  return assign({}, component, {
    lightning: lightning && !has(lightning, 'flavor')
      ? lightning : undefined,
    flavors: component.flavors.map(flavor => {
      return assign({}, flavor, {
        isResponsive: isResponsive(component, flavor),
        isAdaptive: isAdaptive(component, flavor),
        lightning: find(lightningComponents, {
          component: component.id,
          flavor: flavor.id
        })
      });
    })
  });
});

let CheckIcon = () =>
  <SvgIcon
    sprite="utility"
    symbol="check"
    className="slds-icon slds-icon__svg slds-icon-utility-check slds-icon--small slds-icon-text-default" />;

let LightningIcon = () =>
  <span className="slds-icon_container slds-icon--x-small slds-icon-custom-custom9 slds-m-left--medium">
    <SvgIcon
      sprite="custom"
      symbol="custom9"
      className="slds-icon slds-icon--x-small" />
  </span>;

let Table = ({ component }) => {
  return <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-table--col-bordered slds-m-bottom--xx-large">
    <thead>
      <tr className="slds-text-title--caps">
        <th scope="col">
          <a href={`/components/${component.id}`}>
            {component.title}
          </a>
          {component.lightning ?
            <a href={component.lightning.url}>
              <LightningIcon />
            </a>
          : null}
        </th>
        {componentColumns.map(column =>
          <th scope="col" key={column.label} width="120">
            <div>
              {column.label}
            </div>
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      {component.flavors.map(flavor =>
        <tr key={`${component.id}:${flavor.id}`}>
          <td>
            <a href={`/components/${component.id}/#flavor-${flavor.id}`} className="slds-p-left--medium">
              {flavor.title}
            </a>
            {flavor.lightning ?
              <a href={flavor.lightning.url}>
                <LightningIcon />
              </a>
            : null}
          </td>
          {componentColumns.map(column => {
            return <td
              key={column.label}
              className="slds-text-align--center">
              <div style={assign({}, {
                display: 'flex',
                'alignItems': 'center'
              })}>
                <span style={{ margin: 'auto' }}>
                  {filters[column.filter](component, flavor) ? <CheckIcon /> : null}
                </span>
              </div>
            </td>;
          })}
        </tr>
      )}
    </tbody>
  </table>;
};

export default React.createClass({
  getInitialState() {
    return {
      query: '',
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
    let predicates = this.state.filters.map(k => filters[k]);
    let query = new RegExp(escapeRegExp(this.state.query), 'i');
    let filteredComponents = components
      .map(component => {
        return assign({}, component, {
          flavors: component.flavors.filter(flavor =>
            predicates.every(predicate => predicate(component, flavor)))
        });
      })
      .filter(component => query.test(component.title))
      .filter(component => {
        if (component.flavors.length === 0) {
          if (this.state.filters.has('isLightning') && component.lightning) {
            // Lightning filter can include top-level components
            // so allow an empty table when this filter is applied
          } else {
            return false;
          }
        }
        return true;
      });
    let counts = {
      components: filteredComponents.length,
      flavors: filteredComponents
        .reduce((count, c) => count + c.flavors.length, 0)
    };
    return (
      <div id="components-overview">
        <header className="slds-grid slds-grid--vertical slds-m-bottom--large">
          <div className="slds-grid slds-m-bottom--medium">
            <div className="slds-text-heading--large">
              {`${counts.components} Components, ${counts.flavors} Flavors`}
            </div>
          </div>
          <div className="slds-grid slds-grid--align-spread">
            <div className="slds-form-element">
              <div className="slds-form-element__control">
                <input
                  className="slds-input"
                  type="text"
                  value={this.state.query}
                  onChange={e => this.setState({
                    query: e.target.value
                  })}
                  placeholder="Filter" />
              </div>
            </div>
            <div className="slds-grid">
              {pageFilters.map(filter =>
                <div className="slds-form-element slds-m-left--medium" key={filter.label}>
                  <label className="slds-checkbox--toggle slds-grid slds-grid--vertical">
                    <div
                      className="slds-form-element__label slds-m-bottom--m">
                      {filter.label}
                    </div>
                    <input
                      name="checkbox"
                      type="checkbox"
                      value={filter.key}
                      checked={this.state.filters.has(filter.key)}
                      aria-describedby={`filter-${filter.label}`}
                      onChange={this.updateFilter} />
                      <div
                        id={`filter-${filter.label}`}
                        className="slds-checkbox--faux_container"
                        aria-live="assertive">
                        <span className="slds-checkbox--faux"></span>
                        <span className="slds-checkbox--on slds-assistive-text">Enabled</span>
                        <span className="slds-checkbox--off slds-assistive-text">Disabled</span>
                      </div>
                  </label>
                </div>
              )}
            </div>
          </div>
        </header>
        {filteredComponents.map(component =>
          <Table
            key={component.id}
            component={component} />
        )}
      </div>
    );
  }
});
