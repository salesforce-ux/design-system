// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../shared/svg-icon';

const paletteKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export let examples = [
  {
    id: 'color-grays',
    label: 'Gray Palette',
    element: (
      <div>
        <h2 className="slds-text-heading_large slds-m-bottom_medium">
          Background Colors
        </h2>
        <div className="slds-m-bottom_large">
          {paletteKeys.map((key, index) => {
            const textClass = key > 8 ? 'slds-color__text_gray-1' : null;

            return (
              <div
                key={index}
                className={`slds-color__background_gray-${key} slds-p-around_medium`}
              >
                <p className={textClass}>.slds-color__background_gray-{key}</p>
              </div>
            );
          })}
        </div>

        <h2 className="slds-text-heading_large slds-m-bottom_medium">
          Text Colors
        </h2>
        <div className="slds-m-bottom_large">
          {paletteKeys.map((key, index) => (
            <div
              key={index}
              className="slds-grid slds-grid_vertical-align-center"
            >
              <div
                className={`slds-color__background_gray-${key}`}
                style={{
                  height: '3rem',
                  width: '3rem',
                  display: 'inline-block'
                }}
              />
              <p className="slds-p-left_small">.slds-color__text_gray-{key}</p>
            </div>
          ))}
        </div>

        <h2 className="slds-text-heading_large slds-m-bottom_medium">
          Border Colors
        </h2>
        <div className="slds-m-bottom_large">
          {paletteKeys.map((key, index) => (
            <div
              key={index}
              className={`slds-color__border_gray-${key} slds-p-around_medium slds-m-bottom_small`}
              style={{ 'border-width': '1px', 'border-style': 'solid' }}
            >
              .slds-color__border_gray-{key}
            </div>
          ))}
        </div>

        <h2 className="slds-text-heading_large slds-m-bottom_medium">
          SVG Fill Colors
        </h2>
        <div className="slds-m-bottom_large">
          {paletteKeys.map((key, index) => (
            <div key={index} className="slds-p-around_small">
              <SvgIcon
                className={`slds-color__fill_gray-${key} slds-icon_small`}
                sprite="action"
                symbol="check"
              />
              <span className="slds-p-left_small">
                .slds-color__fill_gray-{key}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
];
