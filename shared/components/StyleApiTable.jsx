// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';

import vars from '../../.dist/css-vars.json';
import { propTypes } from '../../scripts/var-metadata';

class StyleApiTable extends Component {
  render() {
    const { component } = this.props;
    const componentVars = vars[component];

    return (
      <div>
        <div className="slds-m-bottom_large">
          <p>
            Use these CSS Custom Properties as hooks to customize this SLDS
            component with your own style.
          </p>
        </div>

        <table className="slds-table slds-table_bordered">
          <thead>
            <tr>
              <th>Style API Custom Property</th>
              <th>Property Category</th>
              <th>Value Type(s)</th>
            </tr>
          </thead>
          <tbody>
            {componentVars.map((varName, i) => {
              const trimmedVar = varName.replace(`--sds-c-${component}-`, '');
              let propType = null;
              let valueTypes = null;

              Object.keys(propTypes).forEach(prop => {
                if (trimmedVar.match(prop)) {
                  propType = propTypes[prop].type;
                  valueTypes = propTypes[prop].valueTypes;
                }
              });

              return (
                <tr key={`component-var-${i}`}>
                  <td>{varName}</td>
                  <td>{propType}</td>
                  <td>
                    {valueTypes
                      ? valueTypes.reduce((a, b) => `${a}, ${b}`)
                      : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StyleApiTable;
