// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';

import Copy from '../../shared/components/Copy';
import { propTypes } from '../../scripts/var-metadata';

const getPropTypeData = (name, varName) => {
  const trimmedVar = varName.replace(`--slds-c-${name}-`, '');
  let propType = null;
  let valueTypes = null;

  Object.keys(propTypes).forEach((prop) => {
    if (trimmedVar.match(prop)) {
      propType = propTypes[prop].type;
      valueTypes = propTypes[prop].valueTypes;
    }
  });

  return {
    propType,
    valueTypes,
  };
};

const formatType = (type) => {
  let formattedType = type.toLowerCase();
  if (formattedType === 'color') {
    formattedType += '_value'; // MDN adds _value to color data type page, this discrepancy is unique
  }
  return formattedType;
};

class StylingHooksTable extends Component {
  render() {
    const { name, type } = this.props;

    let vars;
    try {
      vars = require(`../../.generated/metadata/${type}s/${name}/styling-hooks.json`);
    } catch (error) {
      console.error(error);
      return null;
    }

    const categories = Object.keys(vars)
      .map((varName) => {
        return getPropTypeData(name, varName).propType;
      })
      .filter((value, i, self) => self.indexOf(value) === i)
      .sort();

    return (
      <div className="site">
        <div className="slds-m-bottom_large">
          <p className="doc">
            Use these CSS Custom Properties as hooks to customize this SLDS
            component with your own style. For more information,{' '}
            <a href="/platforms/lightning/styling-hooks/">
              read the technical documentation
            </a>
            .
          </p>
        </div>
        <div className="slds-scrollable--x">
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
                    (varName) =>
                      getPropTypeData(name, varName).propType === category
                  )
                  .map((varName) => {
                    return {
                      name: varName,
                      value: vars[varName].fallbackValue,
                      types: getPropTypeData(name, varName).valueTypes || [],
                    };
                  })
                  .sort((a, b) => {
                    const nameA = a.name;
                    const nameB = b.name;

                    if (nameA < nameB) {
                      return -1; // nameA comes first
                    }
                    if (nameA > nameB) {
                      return 1; // nameB comes first
                    }
                    return 0; // names must be equal
                  });

                return (
                  <>
                    {categoryVars.map((varData, ii) => (
                      <tr
                        key={`${category}-${i}-${ii}`}
                        className={classNames({
                          'hooks-table__section': ii === 0,
                          'hooks-table__section_end':
                            ii === categoryVars.length - 1,
                        })}
                      >
                        {ii === 0 && (
                          <th
                            className="hooks-table__col-category"
                            scope="rowgroup"
                            rowSpan={categoryVars.length}
                          >
                            {category}
                          </th>
                        )}
                        <td>
                          <div className="slds-grid">
                            <Copy
                              key={`copy${varData.name}`}
                              containerClassName="hooks-table__button-clipboard-copy"
                              className="slds-button_icon-border-filled slds-button_icon-x-small slds-m-right_small"
                              text={varData.name}
                            />

                            <code className="hooks-table__hook-name">
                              {varData.name}
                            </code>
                          </div>
                        </td>
                        <td>
                          {varData.types.map((type, x, arr) => {
                            const formattedType = formatType(type);
                            return (
                              <>
                                <a
                                  key={`${category}-${i}-${ii}-${x}`}
                                  href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${formattedType}`}
                                >
                                  {type}
                                </a>
                                {/* Proper comma separation when there is more than 1 valueType */}
                                {arr.length > 1 && x <= 0 && ', '}
                              </>
                            );
                          })}
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
      </div>
    );
  }
}

export default StylingHooksTable;
