// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { propTypes } from '../../scripts/var-metadata';

const getPropTypeData = (name, varName) => {
  const trimmedVar = varName.replace(`--sds-c-${name}-`, '');
  let propType = null;
  let valueTypes = null;

  Object.keys(propTypes).forEach(prop => {
    if (trimmedVar.match(prop)) {
      propType = propTypes[prop].type;
      valueTypes = propTypes[prop].valueTypes;
    }
  });

  return {
    propType,
    valueTypes
  };
};

class StyleApiTable extends Component {
  render() {
    const { name, type } = this.props;
    const vars = require(`../../.generated/metadata/${type}s/${name}/styling-hooks.json`);

    const categories = Object.keys(vars)
      .map(varName => {
        return getPropTypeData(name, varName).propType;
      })
      .filter((value, i, self) => self.indexOf(value) === i)
      .sort();

    return (
      <div>
        <div className="slds-m-bottom_large">
          <p>
            Use these CSS Custom Properties as hooks to customize this SLDS
            component with your own style.
          </p>
        </div>

        <table className="slds-table">
          <thead>
            <tr>
              <th>Styling Hook Name</th>
              <th>Value Type(s)</th>
              <th>Fallback Value</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => {
              const categoryVars = Object.keys(vars)
                .filter(
                  varName =>
                    getPropTypeData(name, varName).propType === category
                )
                .map(varName => {
                  return {
                    name: varName,
                    value: vars[varName],
                    types: getPropTypeData(name, varName).valueTypes || []
                  };
                });

              return (
                <>
                  <tr key={`${category}-${i}`}>
                    <td colspan="3">{category}</td>
                  </tr>
                  {categoryVars.map((varData, ii) => (
                    <tr key={`${category}-${i}-${ii}`}>
                      <td>{varData.name}</td>
                      <td>
                        {varData.types.map((type, x) => (
                          <a
                            key={`${category}-${i}-${ii}-${x}`}
                            href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${type.toLowerCase()}`}
                          >
                            {type}
                          </a>
                        ))}
                      </td>
                      <td>{varData.value}</td>
                    </tr>
                  ))}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StyleApiTable;
