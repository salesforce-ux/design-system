// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props =>
  <div className="demo-only-grid">
    {props.children}
  </div>;

export let examples = [
  {
    id: 'stretch',
    label: 'Column Stretch',
    element:
    <div className="slds-grid">
      <div className="slds-col" />
      <div className="slds-col" />
    </div>,
    description: 'By default, the grid items within a \`.slds-grid\` do not stretch to take up that available white-space on the main axis. Apply \`.slds-col\` to a grid item, it will stretch across the main axis. The width of each grid item will be determined by the content within that region.'
  },
  {
    id: 'stretch-gutters',
    label: 'Column Stretch w/ Gutters',
    element:
    <div className="slds-grid slds-grid--pull-padded-medium">
      <div className="slds-col slds-p-horizontal--medium" />
      <div className="slds-col slds-p-horizontal--medium" />
    </div>,
    description: 'To apply gutters between each grid item, the following spacing classes are available to add your intended gutters, \`.slds-p-horizontal--small\`, \`.slds-p-horizontal--medium\`, \`.slds-p-horizontal--large\`, \`.slds-p-around--small\`, \`.slds-p-around--medium\` and \`.slds-p-around--large\`. You may need to pull the grid items back to their original grid boundaries of the grid container, apply the classes \`.slds-grid--pull-padded\`, \`.slds-grid--pull-padded-medium\` or \`.slds-grid--pull-padded-large\` to the \`.slds-grid\`.'
  },
  {
    id: 'no-stretch',
    label: 'No Column Stretch',
    element:
      <div className="slds-grid">
        <div />
        <div />
      </div>
  },
  {
    id: 'no-stretch-gutters',
    label: 'No Column Stretch w/ Gutters',
    element:
      <div className="slds-grid slds-grid--pull-padded-medium">
        <div className="slds-p-horizontal--medium" />
        <div className="slds-p-horizontal--medium" />
      </div>
  },
  {
    id: 'regions-with-sizing',
    label: 'Manual Sizing',
    element:
    <div className="slds-grid slds-wrap slds-grid--pull-padded">
      <div className="slds-p-horizontal--small slds-size--1-of-1" />
      <div className="slds-p-horizontal--small slds-size--1-of-2 slds-medium-size--5-of-6 slds-large-size--8-of-12" />
      <div className="slds-p-horizontal--small slds-size--1-of-2 slds-medium-size--1-of-6 slds-large-size--4-of-12" />
      <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-3" />
      <div className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-3" />
      <div className="slds-p-horizontal--small slds-size--1-of-1 slds-large-size--1-of-3">
        <div className="slds-grid slds-wrap slds-grid--pull-padded">
          <div className="slds-p-horizontal--small slds-size--1-of-2 slds-medium-size--1-of-1 slds-large-size--1-of-2" />
          <div className="slds-p-horizontal--small slds-size--1-of-2 slds-medium-size--1-of-1 slds-large-size--1-of-2" />
        </div>
      </div>
    </div>,
    description: 'If you need to set explicit widths to your grid items, apply the sizing classes to your grid items. Check out [sizing helpers here](/utilities/sizing).'
  },
  {
    id: 'horizontal-align-center',
    label: 'Horizontal Alignment - Center',
    element:
    <div className="slds-grid slds-grid--align-center">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'If you want your columns to grow from the the center of the main (horizontal) axis, apply the class \`slds-grid--align-center\`.'
  },
  {
    id: 'horizontal-align-space',
    label: 'Horizontal Alignment - Space',
    element:
    <div className="slds-grid slds-grid--align-space">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'To evenly distribute columns on the main axis with an equal amount of white space separating the columns, apply the class \`slds-grid--align-space\`.'
  },
  {
    id: 'horizontal-align-spread',
    label: 'Horizontal Alignment - Spread',
    element:
    <div className="slds-grid slds-grid--align-spread">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'To spread out your columns on the main axis, with the first column starting at the start of your main axis and last item ending at the far end of your main axis, apply the class \`.slds-grid--align-spread\`.'
  },
  {
    id: 'horizontal-align-end',
    label: 'Horizontal Alignment - End',
    element:
    <div className="slds-grid slds-grid--align-end">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'If you want your columns to grow from the end of the main axis, apply the class \`.slds-grid--align-end\`.'
  },
  {
    id: 'vertical-align-start',
    label: 'Vertical Alignment - Start',
    element:
    <div className="slds-grid slds-grid--vertical-align-start">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'To align a single row or multi-line rows to the beginning of the cross axis, apply the class \`.slds-grid--vertical-align-start\`. Note, to vertically align elements on a cross-axis of a \`.slds-grid\`, the elements need available vertical white space. This is usually achieved by having a height applied to the \`.slds-grid\`.'
  },
  {
    id: 'vertical-align-center',
    label: 'Vertical Alignment - Center',
    element:
    <div className="slds-grid slds-grid--vertical-align-center">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'To vertically center align a single row or multi-line rows to the height of a grid container, apply the class \`.slds-grid--vertical-align-center\`. Note, to vertically align elements on a cross-axis of a \`.slds-grid\`, the elements need available vertical white space. This is usually achieved by having a height applied to the \`.slds-grid\`.When \`.slds-grid--vertical-align-center\` is used in conjunction with \`.slds-grid--align-center\`, the outcome would horizontally and vertically center align your content in the center of the \`.slds-grid\`.'
  },
  {
    id: 'vertical-align-end',
    label: 'Vertical Alignment - End',
    element:
    <div className="slds-grid slds-grid--vertical-align-end">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'To align a single row or multi-line rows to the end of the cross axis, apply the class \`.slds-grid--vertical-align-center\`. Note, to vertically align elements on a cross-axis of a \`.slds-grid\`, the elements need available vertical white space. This is usually achieved by having a height applied to the \`.slds-grid\`.'
  },
  {
    id: 'vertical-align-item',
    label: 'Vertical Alignment - Item',
    element:
    <div className="slds-grid">
      <div className="slds-align-top" />
      <div className="slds-align-middle" />
      <div className="slds-align-bottom" />
    </div>,
    description: 'To specify the vertical placement of grid items on the cross axis, you can apply \`.slds-align-top\`, \`.slds-align-middle\`, and \`.slds-align-bottom\` to a grid item. Note, to vertically align elements on a cross-axis of a \`.slds-grid\`, the elements need available vertical white space. This is usually achieved by having a height applied to the \`.slds-grid\`.'
  },
  {
    id: 'vertical-strecth',
    label: 'Vertical Stretch',
    element:
    <div className="slds-grid slds-grid--vertical-stretch">
      <div />
      <div />
      <div />
      <div />
    </div>,
    description: 'By default, grid items extend vertically unless \`.slds-wrap\` is applied to your parent grid container or you have multiple rows. If you have need multiple rows that stretch the height of the parent grid container, you can apply the class \`.slds-grid--vertical-stretch\`. Note, to vertically align elements on a cross-axis of a \`.slds-grid\`, the elements need available vertical white space. This is usually achieved by having a height applied to the \`.slds-grid\`.'
  },
  {
    id: 'align-item-bump',
    label: 'Alignment Item Bump',
    element:
    <div className="slds-grid">
      <div />
      <div />
      <div />
      <div />
      <div className="slds-col--bump-left" />
      <div />
    </div>,
    description: 'To "bump" a single grid item or a grid item plus the precedding grid items that follow, apply the class \`.slds-col--bump-{direction}\`, with \`{direction}\` being either \`left\`, \`right\`, \`top\` or \`bottom\` to a grid item.'
  },
  {
    id: 'order',
    label: 'Ordering',
    element:
    <div className="slds-grid">
      <div className="slds-order--2 slds-medium-order--1 slds-large-order--3" />
      <div className="slds-order--3 slds-medium-order--2 slds-large-order--2" />
      <div className="slds-order--1 slds-medium-order--3 slds-large-order--1" />
    </div>,
    description: 'These helper classes visually reorder grid elements independently from their position in the markup.'
  },
  {
    id: 'container-app-frame',
    label: 'Container - App Frame',
    element:
    <div className="slds-grid slds-grid--frame">
      <div />
    </div>,
    description: 'If you want your application to fill 100% of the width and height of the viewport and nest other grids inside, use the top-level app helper class \`.slds-grid--frame\`.'
  },
  {
    id: 'containers',
    label: 'Containers',
    element:
    <div className="slds-grid slds-grid--vertical">
      <div className="slds-container--small" />
      <div className="slds-container--medium" />
      <div className="slds-container--large" />
      <div className="slds-container--x-large" />
      <div className="slds-container--fluid" />
    </div>,
    description: 'You can use the grid system&rsquo;s containers to constrain your content to a certain width. You can center or left or right align the containers within your viewport.'
  }
];
