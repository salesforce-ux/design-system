// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

const image = (
  <img
    alt="Person name"
    className="slds-avatar--large"
    src="/assets/images/avatar3.jpg"
    title="User avatar"
  />
);

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let MediaExample = props =>
<div className="demo-only slds-size--3-of-4">
  <MediaObject figureLeft={props.figureLeft} figureRight={props.figureRight} flavor={props.flavor}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
  </MediaObject>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <MediaExample figureLeft={image} />
  },
  {
    id: 'center',
    label: 'Centered vertically',
    element: <MediaExample figureLeft={image} flavor="center" />
  },
  {
    id: 'reverse',
    label: 'Reverse',
    element: <MediaExample figureRight={image} />
  },
  {
    id: 'reverse-center',
    label: 'Reverse centered vertically',
    element: <MediaExample figureRight={image} flavor="center" />
  },
  {
    id: 'double',
    label: 'Double figures',
    element: <MediaExample figureLeft={image} figureRight={image} />
  }
];
