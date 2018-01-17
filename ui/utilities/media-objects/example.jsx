// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MediaObject from './index.react';
import { Avatar } from '../../components/avatar/base/example';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

const image = (
  <Avatar className="slds-avatar_large">
    <img
      alt="Person name"
      src="/assets/images/avatar3.jpg"
      title="User avatar"
    />
  </Avatar>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let MediaExample = props => (
  <div className="demo-only slds-size_3-of-4">
    <MediaObject
      className={props.className}
      figureLeft={props.figureLeft}
      figureRight={props.figureRight}
      flavor={props.flavor}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
        molestias reprehenderit consequuntur sapiente. Modi veritatis totam
        accusantium numquam assumenda.
      </p>
    </MediaObject>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let examples = [
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
  },
  {
    id: 'small',
    label: 'Small space between figure and body',
    element: <MediaExample className="slds-media_small" figureLeft={image} />
  },
  {
    id: 'large',
    label: 'Large space between figure and body',
    element: <MediaExample className="slds-media_large" figureLeft={image} />
  },
  {
    id: 'responsive',
    label: 'Responsive',
    element: (
      <div className="demo-only slds-size_3-of-4">
        <MediaObject figureLeft={image} flavor="responsive">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            minus molestias reprehenderit consequuntur sapiente. Modi veritatis
            totam accusantium numquam assumenda.
          </p>
        </MediaObject>
      </div>
    )
  }
];
