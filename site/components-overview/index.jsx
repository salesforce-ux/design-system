/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import classNames from 'classnames';

import ui from '.generated/ui';

let headings = ['responsive', 'adaptive', 'lightning'];

let { components } = _.find(ui, { id: 'components' });
let { components: touch } = _.find(ui, { id: 'touch' });

let isResponsive = (c, f) => _.some([
  !f.showFormFactors,
  _.intersection(f.showFormFactors, ['large', 'small']).length === 2
]);

let isAdaptive = (c, f) => {
  let touchComponent = _.find(touch, { id: c.id });
  if (!touchComponent) return false;
  let touchFlavor = _.find(touchComponent.flavors, { id: f.id });
  return touchFlavor;
};

let check = (h, c, f) => {
  switch (h) {
  case 'responsive':
    if (isResponsive(c, f)) {
      return {
        style: { background: '#c1e9c1' },
        icon: '✅'
      };
    }
    break;
  case 'adaptive':
    if (isAdaptive(c, f)) {
      return {
        style: { background: '#c1e9c1' },
        icon: '✅'
      };
    }
    break;
  default:
    break;
  }
  return {};
};

let Table = props =>
  <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-table--col-bordered slds-m-bottom--xx-large">
    <thead>
      <tr className="slds-text-title--caps">
        <th scope="col">
          <a href={`/components/${props.component.id}`} className="slds-truncate">{props.title}</a>
        </th>
        {headings.map(h =>
          <th scope="col">
            <div className="slds-truncate">{h}</div>
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      {props.component.flavors.map(flavor =>
        <tr>
          <td>
            <a href={`/components/${props.component.id}/#flavor-${flavor.id}`} className="slds-p-left--medium">
              {flavor.title}
            </a>
          </td>
          {headings.map(h => {
            let c = check(h, props.component, flavor);
            return <td className="slds-text-align--center" style={{ position: 'relative' }} width="120">
              <div style={_.assign({}, {
                display: 'flex',
                'align-items': 'center',
                position: 'absolute',
                top: '2px',
                right: '2px',
                bottom: '2px',
                left: '2px'
              }, c.style)}>
                <span style={{ margin: 'auto' }}>{c.icon}</span>
              </div>
            </td>;
          })}
        </tr>
      )}
    </tbody>
  </table>;

export default (
  <PageBody anchorTitle="Component Overview">
    {components.map(c =>
      <Table title={c.title} component={c} />
    )}
  </PageBody>
);
