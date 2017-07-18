// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const paletteValues = [1,2,3,4,5,6,7,8,9,10,11,12];
const textGroups = [
  {
    title: 'Medium dark or darker background',
    background: 10,
    colors: [1,2,3,4]
  },
  {
    title: 'Dark background only',
    background: 12,
    colors: [5,6,7,8]
  },
  {
    title: 'Light background only',
    background: 0,
    colors: [9,10]
  },
  {
    title: 'Medium-Light or lighter background',
    background: 6,
    colors: [11,12]
  }
];

export let examples = [
  {
    id: 'color-grays',
    label: 'Gray Palette',
    element: (
      <div>
        <h2 className="slds-text-heading_large slds-m-bottom_medium">Background Colors</h2>
        <div className="slds-m-bottom_large">
          {paletteValues.map((value, index) => {
            const textClass = value > 8 ? 'slds-color__text_gray-1' : null

            return (
              <div key={index} className={`slds-color__background_gray-${value} slds-p-around_medium`}>
                <p className={textClass}>.slds-color__background_gray-{value}</p>
              </div>
            )
          })}
        </div>

        <h2 className="slds-text-heading_large slds-m-bottom_medium">Text Colors</h2>
        <div className="slds-m-bottom_large">
          {textGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="demo-only-colors slds-m-bottom_medium">
              <h3 className="slds-text-heading_medium slds-m-bottom_small">
                {group.title}
              </h3>
              
              <div className={`slds-color__background_gray-${group.background}`}>
                {group.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className={`slds-color__text_gray-${color} slds-p-around_medium`}>
                    .slds-color__text_gray-{color}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="slds-text-heading_large slds-m-bottom_medium">Border Colors</h2>
        <div className="slds-m-bottom_large">
          {paletteValues.map((value, index) => (
            <div
              key={index}
              className={`slds-color__border_gray-${value} slds-p-around_medium slds-m-bottom_small`}
              style={{'border-width': '1px', 'border-style': 'solid'}}
            >
              .slds-color__border_gray-{value}
            </div>
          ))}
        </div>

      </div>
    )
  }
];
