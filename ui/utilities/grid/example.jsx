// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import Grid, { Column } from './docs/Grid';
import demoStylesGrid from './docs/demoStylesGrid';

export const Context = props => {
  return (
    <Fragment>
      <style>{demoStylesGrid}</style>
      {props.children}
    </Fragment>
  );
};

export let examples = [
  {
    id: 'default-left-to-right',
    label: 'Grid Default Left to Right',
    element: <Grid columns="3" />,
    description:
      'By default, the grid items within a `.slds-grid` do not stretch to take up that available white-space on the main axis. Apply `.slds-col` to a grid item, it will stretch across the main axis. The width of each grid item will be determined by the content within that region.'
  },
  {
    id: 'stretch',
    label: 'Column Stretch',
    element: (
      <div className="slds-grid">
        <div className="slds-col" />
        <div className="slds-col" />
      </div>
    ),
    description:
      'By default, the grid items within a `.slds-grid` do not stretch to take up that available white-space on the main axis. Apply `.slds-col` to a grid item, it will stretch across the main axis. The width of each grid item will be determined by the content within that region.'
  },
  {
    id: 'stretch-gutters',
    label: 'Column Stretch w/ Gutters',
    element: (
      <div className="slds-grid slds-grid_pull-padded-medium">
        <div className="slds-col slds-p-horizontal_medium" />
        <div className="slds-col slds-p-horizontal_medium" />
      </div>
    ),
    description:
      'To apply gutters between each grid item, the following spacing classes are available to add your intended gutters, `.slds-p-horizontal_small`, `.slds-p-horizontal_medium`, `.slds-p-horizontal_large`, `.slds-p-around_small`, `.slds-p-around_medium` and `.slds-p-around_large`. You may need to pull the grid items back to their original grid boundaries of the grid container, apply the classes `.slds-grid_pull-padded`, `.slds-grid_pull-padded-medium` or `.slds-grid_pull-padded-large` to the `.slds-grid`.'
  },
  {
    id: 'no-stretch',
    label: 'No Column Stretch',
    element: (
      <div className="slds-grid">
        <div />
        <div />
      </div>
    )
  },
  {
    id: 'no-stretch-gutters',
    label: 'No Column Stretch w/ Gutters',
    element: (
      <div className="slds-grid slds-grid_pull-padded-medium">
        <div className="slds-p-horizontal_medium" />
        <div className="slds-p-horizontal_medium" />
      </div>
    )
  },
  {
    id: 'regions-with-sizing',
    label: 'Manual Sizing',
    element: (
      <div className="slds-grid slds-wrap slds-grid_pull-padded">
        <div className="slds-p-horizontal_small slds-size_1-of-1" />
        <div className="slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_5-of-6 slds-large-size_8-of-12" />
        <div className="slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-6 slds-large-size_4-of-12" />
        <div className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3" />
        <div className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3" />
        <div className="slds-p-horizontal_small slds-size_1-of-1 slds-large-size_1-of-3">
          <div className="slds-grid slds-wrap slds-grid_pull-padded">
            <div className="slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-1 slds-large-size_1-of-2" />
            <div className="slds-p-horizontal_small slds-size_1-of-2 slds-medium-size_1-of-1 slds-large-size_1-of-2" />
          </div>
        </div>
      </div>
    ),
    description:
      'If you need to set explicit widths to your grid items, apply the sizing classes to your grid items. Check out [sizing helpers here](/utilities/sizing).'
  },
  {
    id: 'horizontal-align-center',
    label: 'Horizontal Alignment - Center',
    element: (
      <div className="slds-grid slds-grid_align-center">
        <div />
        <div />
        <div />
        <div />
      </div>
    ),
    description:
      'If you want your columns to grow from the the center of the main (horizontal) axis, apply the class `slds-grid_align-center`.'
  },
  {
    id: 'horizontal-align-space',
    label: 'Horizontal Alignment - Space',
    element: (
      <div className="slds-grid slds-grid_align-space">
        <div />
        <div />
        <div />
        <div />
      </div>
    ),
    description:
      'To evenly distribute columns on the main axis with an equal amount of white space separating the columns, apply the class `slds-grid_align-space`.'
  },
  {
    id: 'vertical-align-item',
    label: 'Vertical Alignment - Item',
    element: (
      <div className="slds-grid">
        <div className="slds-align-top" />
        <div className="slds-align-middle" />
        <div className="slds-align-bottom" />
      </div>
    ),
    description:
      'To specify the vertical placement of grid items on the cross axis, you can apply `.slds-align-top`, `.slds-align-middle`, and `.slds-align-bottom` to a grid item. Note, to vertically align elements on a cross-axis of a `.slds-grid`, the elements need available vertical white space. This is usually achieved by having a height applied to the `.slds-grid`.'
  },
  {
    id: 'vertical-strecth',
    label: 'Vertical Stretch',
    element: (
      <div className="slds-grid slds-grid_vertical-stretch">
        <div />
        <div />
        <div />
        <div />
      </div>
    ),
    description:
      'By default, grid items extend vertically unless `.slds-wrap` is applied to your parent grid container or you have multiple rows. If you have need multiple rows that stretch the height of the parent grid container, you can apply the class `.slds-grid_vertical-stretch`. Note, to vertically align elements on a cross-axis of a `.slds-grid`, the elements need available vertical white space. This is usually achieved by having a height applied to the `.slds-grid`.'
  },
  {
    id: 'align-item-bump',
    label: 'Alignment Item Bump',
    element: (
      <div className="slds-grid">
        <div />
        <div />
        <div />
        <div />
        <div className="slds-col_bump-left" />
        <div />
      </div>
    ),
    description:
      'To "bump" a single grid item or a grid item plus the precedding grid items that follow, apply the class `.slds-col_bump-{direction}`, with `{direction}` being either `left`, `right`, `top` or `bottom` to a grid item.'
  },
  {
    id: 'order',
    label: 'Ordering',
    element: (
      <div className="slds-grid">
        <div className="slds-order_2 slds-medium-order_1 slds-large-order_3" />
        <div className="slds-order_3 slds-medium-order_2 slds-large-order_2" />
        <div className="slds-order_1 slds-medium-order_3 slds-large-order_1" />
      </div>
    ),
    description:
      'These helper classes visually reorder grid elements independently from their position in the markup.'
  },
  {
    id: 'container-app-frame',
    label: 'Container - App Frame',
    element: (
      <div className="slds-grid slds-grid_frame">
        <div />
      </div>
    ),
    description:
      'If you want your application to fill 100% of the width and height of the viewport and nest other grids inside, use the top-level app helper class `.slds-grid_frame`.'
  },
  {
    id: 'containers',
    label: 'Containers',
    element: (
      <div className="slds-grid slds-grid_vertical">
        <div className="slds-container_small" />
        <div className="slds-container_medium" />
        <div className="slds-container_large" />
        <div className="slds-container_x-large" />
        <div className="slds-container_fluid" />
      </div>
    ),
    description:
      'You can use the grid system&rsquo;s containers to constrain your content to a certain width. You can center or left or right align the containers within your viewport.'
  },
  {
    id: '2-col-with-gutters',
    label: 'Grid Column Gutters 2 col basic',
    element: <Grid columns="2" className="slds-gutters" />
  },
  {
    id: 'intro-3-col-with-gutters',
    label: 'Grid Intro 3 col with gutters',
    element: <Grid columns="3" className="slds-gutters" />
  },
  {
    id: 'intro-4-col-with-gutters',
    label: 'Grid Intro 4 col with gutters',
    element: <Grid columns="4" className="slds-gutters" />
  },
  {
    id: 'intro-12-col',
    label: 'Grid Intro 12 col',
    element: <Grid columns="12" />
  },
  {
    id: 'grid-col-width-2-col',
    label: 'Grid Column Width 2 col',
    element: (
      <Grid className="slds-gutters">
        <Column className="slds-size_2-of-3">1</Column>
        <Column className="slds-size_1-of-3">2</Column>
      </Grid>
    )
  },
  {
    id: 'col-width-all-options',
    label: 'Grid Column Width all options',
    element: (
      <Grid className="slds-wrap">
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>
        <Column className="slds-size_1-of-12">1</Column>

        <Column className="slds-size_2-of-12">2</Column>
        <Column className="slds-size_2-of-12">2</Column>
        <Column className="slds-size_2-of-12">2</Column>
        <Column className="slds-size_2-of-12">2</Column>
        <Column className="slds-size_2-of-12">2</Column>
        <Column className="slds-size_2-of-12">2</Column>

        <Column className="slds-size_3-of-12">3</Column>
        <Column className="slds-size_3-of-12">3</Column>
        <Column className="slds-size_3-of-12">3</Column>
        <Column className="slds-size_3-of-12">3</Column>

        <Column className="slds-size_4-of-12">4</Column>
        <Column className="slds-size_4-of-12">4</Column>
        <Column className="slds-size_4-of-12">4</Column>

        <Column className="slds-size_5-of-12">5</Column>
        <Column className="slds-size_5-of-12">5</Column>
        <Column className="slds-size_2-of-12">2</Column>

        <Column className="slds-size_6-of-12">6</Column>
        <Column className="slds-size_6-of-12">6</Column>

        <Column className="slds-size_7-of-12">7</Column>
        <Column className="slds-size_5-of-12">5</Column>

        <Column className="slds-size_8-of-12">8</Column>
        <Column className="slds-size_4-of-12">4</Column>

        <Column className="slds-size_9-of-12">9</Column>
        <Column className="slds-size_3-of-12">3</Column>

        <Column className="slds-size_10-of-12">10</Column>
        <Column className="slds-size_2-of-12">2</Column>

        <Column className="slds-size_11-of-12">11</Column>
        <Column className="slds-size_1-of-12">1</Column>
      </Grid>
    )
  },
  {
    id: 'col-width-all-fraction-options',
    label: 'Grid Column Width all fraction options',
    element: (
      <Grid small className="slds-wrap">
        <Column className="slds-size_1-of-6">1/6</Column>
        <Column className="slds-size_1-of-6">1/6</Column>
        <Column className="slds-size_1-of-6">1/6</Column>
        <Column className="slds-size_1-of-6">1/6</Column>
        <Column className="slds-size_1-of-6">1/6</Column>
        <Column className="slds-size_1-of-6">1/6</Column>

        <Column className="slds-size_1-of-4">1/4</Column>
        <Column className="slds-size_1-of-4">1/4</Column>
        <Column className="slds-size_1-of-4">1/4</Column>
        <Column className="slds-size_1-of-4">1/4</Column>

        <Column className="slds-size_1-of-3">1/3</Column>
        <Column className="slds-size_1-of-3">1/3</Column>
        <Column className="slds-size_1-of-3">1/3</Column>

        <Column className="slds-size_1-of-2">1/2</Column>
        <Column className="slds-size_1-of-2">1/2</Column>

        <Column className="slds-size_1-of-1">1/1</Column>
      </Grid>
    )
  },
  {
    id: '2-col-gutters-utilities',
    label: 'Grid Column Gutters 2 col utilities',
    element: (
      <Grid>
        <Column className="slds-p-horizontal_medium">1</Column>
        <Column className="slds-p-horizontal_medium">2</Column>
      </Grid>
    )
  },
  {
    id: '2-col-pull-padded',
    label: 'Grid Column Gutters 2 col pull padded',
    element: (
      <Grid className="slds-grid_pull-padded-medium">
        <Column className="slds-p-horizontal_medium">1</Column>
        <Column className="slds-p-horizontal_medium">2</Column>
      </Grid>
    )
  },
  {
    id: 'direct-col-gutters',
    label: 'Grid Direct Column Gutters',
    element: (
      <Grid className="slds-gutters_direct">
        <Column>1</Column>
        <div className="slds-grid">
          <Column>Nested Column 1</Column>
          <Column>Nested Column 2</Column>
        </div>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'all-children-col-gutters',
    label: 'Grid All Children Column Gutters',
    element: (
      <Grid className="slds-gutters">
        <Column>1</Column>
        <div className="slds-grid">
          <Column>Nested Column 1</Column>
          <Column>Nested Column 2</Column>
        </div>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: '3-col-wrapping',
    label: 'Grid Column Wrapping 3 col',
    element: (
      <Grid className="slds-wrap">
        <Column className="slds-size_8-of-12">1</Column>
        <Column className="slds-size_5-of-12">1</Column>
        <Column className="slds-size_5-of-12">1</Column>
      </Grid>
    )
  },
  {
    id: '3-col-reordering',
    label: 'Grid Column Reordering 3 col',
    element: (
      <Grid>
        <Column className="slds-order_3">1</Column>
        <Column className="slds-order_1">2</Column>
        <Column className="slds-order_2">3</Column>
      </Grid>
    )
  },
  {
    id: 'col-nesting',
    label: 'Grid Column Nesting',
    element: (
      <Grid className="slds-wrap">
        <Column className="slds-size_10-of-12">1</Column>
        <div className="slds-col slds-grid slds-size_1-of-2">
          <Column className="slds-size_1-of-2">Nested: 1</Column>
          <Column className="slds-size_1-of-2">Nested: 2</Column>
        </div>
      </Grid>
    )
  },
  {
    id: 'vertical-align',
    label: 'Grid Vertical Align',
    element: (
      <Grid className="slds-grid_vertical">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-reversed',
    label: 'Grid Horizontal Reversed',
    element: (
      <Grid className="slds-grid_reverse">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'vertical-aligned-reversed',
    label: 'Grid Vertical Aligned Reversed',
    element: (
      <Grid className="slds-grid_vertical-reverse" style={{ height: '200px' }}>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'responsive-2-col-mobile-desktop',
    label: 'Grid Responsive 2 col mobile desktop',
    element: (
      <Grid className="slds-wrap">
        <Column className="slds-size_1-of-1 slds-large-size_8-of-12">1</Column>
        <Column className="slds-size_1-of-1 slds-large-size_4-of-12">2</Column>
      </Grid>
    )
  },
  {
    id: 'responsive-2-col-mobile-tablet-desktop',
    label: 'Grid Responsive 2 col mobile tablet desktop',
    element: (
      <Grid className="slds-wrap">
        <Column className="slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_8-of-12">
          1
        </Column>
        <Column className="slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12">
          2
        </Column>
      </Grid>
    )
  },
  {
    id: 'responsive-reordering-2-col-mobile-desktop',
    label: 'Grid Responsive Reordering 2 col mobile desktop',
    element: (
      <Grid>
        <Column className="slds-order_2 slds-large-order_1">1</Column>
        <Column className="slds-order_1 slds-large-order_2">2</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-align-center-basic',
    label: 'Grid Horizontal Align center basic',
    element: (
      <Grid className="slds-grid_align-center">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-align-center-variable',
    label: 'Grid Horizontal Align center variable',
    element: (
      <Grid className="slds-grid_align-center">
        <Column className="slds-size_1-of-6">1</Column>
        <Column className="slds-grow-none">2</Column>
        <Column className="slds-size_1-of-6">3</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-align-spaced',
    label: 'Grid Horizontal Align spaced',
    element: (
      <Grid className="slds-grid_align-space">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-align-spread',
    label: 'Grid Horizontal Align spread',
    element: (
      <Grid className="slds-grid_align-spread">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'horizontal-align-end',
    label: 'Grid Horizontal Align end',
    element: (
      <Grid className="slds-grid_align-end">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'content-alignment-bump-left',
    label: 'Grid Content Alignment Bump Left',
    element: (
      <Grid bareGrid>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <div>
          <span>4</span>
        </div>
        <div className="slds-col_bump-left">
          <span>5</span>
        </div>
        <div>
          <span>6</span>
        </div>
      </Grid>
    )
  },
  {
    id: 'content-alignment-bump-right',
    label: 'Grid Content Alignment Bump Right',
    element: (
      <Grid bareGrid>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <div>
          <span>4</span>
        </div>
        <div className="slds-col_bump-right">
          <span>5</span>
        </div>
        <div>
          <span>6</span>
        </div>
      </Grid>
    )
  },
  {
    id: 'vertical-align-start',
    label: 'Grid Vertical Align start',
    demoStyles: '.slds-grid { height: 200px; }',
    element: (
      <Grid className="slds-grid_vertical-align-start">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'vertical-align-center',
    label: 'Grid Vertical Align center',
    demoStyles: '.slds-grid { height: 200px; }',
    element: (
      <Grid className="slds-grid_vertical-align-center">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'vertical-align-end',
    label: 'Grid Vertical Align end',
    demoStyles: '.slds-grid { height: 200px; }',
    element: (
      <Grid className="slds-grid_vertical-align-end">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'vertical-align-absolute-center',
    label: 'Grid Vertical Align absolute center',
    demoStyles: '.slds-grid { height: 200px; }',
    element: (
      <Grid className="slds-grid_vertical-align-center slds-grid_align-center">
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
      </Grid>
    )
  },
  {
    id: 'vertical-align-individual',
    label: 'Grid Vertical Align individual',
    demoStyles: '.slds-grid { height: 200px; }',
    element: (
      <Grid>
        <Column className="slds-align-top">1</Column>
        <Column className="slds-align-middle">2</Column>
        <Column className="slds-align-bottom">3</Column>
      </Grid>
    )
  }
].map(example => ({
  // In this case, all the examples need these styles, so keeping things DRY
  ...example,
  demoStyles: demoStylesGrid + example.demoStyles || `` // If the example object has its own demo styles, add those to the end of the default demo styles
}));
