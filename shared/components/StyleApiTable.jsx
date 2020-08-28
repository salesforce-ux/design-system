// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';

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

        <table className="slds-table hooks-table slds-no-row-hover">
          <thead>
            <tr>
              <th>Category</th>
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
                  {categoryVars.map((varData, ii) => (
                    <tr
                      key={`${category}-${i}-${ii}`}
                      className={classNames({
                        'hooks-table__section': ii === 0,
                        'hooks-table__section_end':
                          ii === categoryVars.length - 1
                      })}
                    >
                      {ii === 0 ? (
                        <td
                          className="hooks-table__col-category"
                          scope="rowgroup"
                          rowspan={categoryVars.length}
                        >
                          {category}
                        </td>
                      ) : null}
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
