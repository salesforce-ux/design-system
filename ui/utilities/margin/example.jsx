// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import demoStylesMargin from './docs/demoStylesMargin';

export const Context = props => {
  // console.log(React.Children.toArray(props.children)[0].props.children);
  return (
    <Fragment>
      <style>{demoStylesMargin}</style>
      <div className="story-doc-margin story-doc-margin_content">
        {React.Children.toArray(props.children)[0].props.children.map((child, i) => (
          <div key={`margin-${i}`} className="doc-spacing slds-m-right_medium">{child}</div>
        ))}
      </div>
    </Fragment>
  );
};

export let examples = [
  {
    id: 'top',
    label: 'Top',
    element: (
      <Fragment>
        <div className="slds-m-top_none" />
        <div className="slds-m-top_xxx-small" />
        <div className="slds-m-top_xx-small" />
        <div className="slds-m-top_x-small" />
        <div className="slds-m-top_small" />
        <div className="slds-m-top_medium" />
        <div className="slds-m-top_large" />
        <div className="slds-m-top_x-large" />
        <div className="slds-m-top_xx-large" />
      </Fragment>
    )
  },
  {
    id: 'right',
    label: 'Right',
    element: (
      <>
        <div className="slds-m-right_none" />
        <div className="slds-m-right_xxx-small" />
        <div className="slds-m-right_xx-small" />
        <div className="slds-m-right_x-small" />
        <div className="slds-m-right_small" />
        <div className="slds-m-right_medium" />
        <div className="slds-m-right_large" />
        <div className="slds-m-right_x-large" />
        <div className="slds-m-right_xx-large" />
      </>
    )
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element: (
      <>
        <div className="slds-m-bottom_none" />
        <div className="slds-m-bottom_xxx-small" />
        <div className="slds-m-bottom_xx-small" />
        <div className="slds-m-bottom_x-small" />
        <div className="slds-m-bottom_small" />
        <div className="slds-m-bottom_medium" />
        <div className="slds-m-bottom_large" />
        <div className="slds-m-bottom_x-large" />
        <div className="slds-m-bottom_xx-large" />
      </>
    )
  },
  {
    id: 'left',
    label: 'Left',
    element: (
      <>
        <div className="slds-m-left_none" />
        <div className="slds-m-left_xxx-small" />
        <div className="slds-m-left_xx-small" />
        <div className="slds-m-left_x-small" />
        <div className="slds-m-left_small" />
        <div className="slds-m-left_medium" />
        <div className="slds-m-left_large" />
        <div className="slds-m-left_x-large" />
        <div className="slds-m-left_xx-large" />
      </>
    )
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element: (
      <>
        <div className="slds-m-vertical_none" />
        <div className="slds-m-vertical_xxx-small" />
        <div className="slds-m-vertical_xx-small" />
        <div className="slds-m-vertical_x-small" />
        <div className="slds-m-vertical_small" />
        <div className="slds-m-vertical_medium" />
        <div className="slds-m-vertical_large" />
        <div className="slds-m-vertical_x-large" />
        <div className="slds-m-vertical_xx-large" />
      </>
    )
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    element: (
      <>
        <div className="slds-m-horizontal_none" />
        <div className="slds-m-horizontal_xxx-small" />
        <div className="slds-m-horizontal_xx-small" />
        <div className="slds-m-horizontal_x-small" />
        <div className="slds-m-horizontal_small" />
        <div className="slds-m-horizontal_medium" />
        <div className="slds-m-horizontal_large" />
        <div className="slds-m-horizontal_x-large" />
        <div className="slds-m-horizontal_xx-large" />
      </>
    )
  },
  {
    id: 'around',
    label: 'Around',
    element: (
      <>
        <div className="slds-m-around_none" />
        <div className="slds-m-around_xxx-small" />
        <div className="slds-m-around_xx-small" />
        <div className="slds-m-around_x-small" />
        <div className="slds-m-around_small" />
        <div className="slds-m-around_medium" />
        <div className="slds-m-around_large" />
        <div className="slds-m-around_x-large" />
        <div className="slds-m-around_xx-large" />
      </>
    )
  }
];
