// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const lineClampStyle = 'width: 300px';

export let examples = [
  {
    id: 'default',
    label: 'Line Clamp - Default',
    demoStyles: lineClampStyle,
    element: (
      <p className="slds-line-clamp">
        Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
        nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id
        risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat
        rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et
        odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu
        elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra
        urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae.
        Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus,
        sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia
        quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.
      </p>
    )
  },
  {
    id: 'x-small',
    label: 'Line Clamp - X-Small',
    demoStyles: lineClampStyle,
    element: (
      <p className="slds-line-clamp_x-small">
        Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
        nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id
        risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat
        rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et
        odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu
        elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra
        urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae.
        Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus,
        sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia
        quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.
      </p>
    )
  },
  {
    id: 'small',
    label: 'Line Clamp - Small',
    demoStyles: lineClampStyle,
    element: (
      <p className="slds-line-clamp_small">
        Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
        nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id
        risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat
        rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et
        odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu
        elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra
        urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae.
        Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus,
        sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia
        quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.
      </p>
    )
  },
  {
    id: 'medium',
    label: 'Line Clamp - Medium',
    demoStyles: lineClampStyle,
    element: (
      <p className="slds-line-clamp_medium">
        Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
        nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id
        risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat
        rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et
        odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu
        elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra
        urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae.
        Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus,
        sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia
        quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.
      </p>
    )
  },
  {
    id: 'large',
    label: 'Line Clamp - Large',
    demoStyles: lineClampStyle,
    element: (
      <p className="slds-line-clamp_large">
        Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
        nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus id
        risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet erat
        rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed, interdum et
        odio. Nunc accumsan feugiat enim, vel dictum nisl egestas eu. Morbi eu
        elit hendrerit, sollicitudin sem a, interdum elit. Vivamus eget pharetra
        urna. Proin tincidunt accumsan nibh, non finibus tellus malesuada vitae.
        Quisque eu sodales erat, quis tempus diam. Vivamus egestas orci purus,
        sed efficitur ligula tincidunt at. Aliquam vel convallis ex, at lacinia
        quam. Pellentesque nec diam placerat, luctus enim ac, volutpat diam.
      </p>
    )
  },
  {
    id: 'block children',
    label: 'Block Level Children',
    demoStyles: lineClampStyle,
    element: (
      <div className="slds-line-clamp_small">
        <p>Lorem ipsum.</p>
        <p>dolor.</p>
        <p>
          Sed ut erat nec velit egestas porttitor sit amet et arcu. Aenean dui
          nisi, ultrices non pulvinar id, tristique vitae sapien. Sed non lacus
          id risus aliquam ultricies. Vestibulum accumsan nisl ante, ac aliquet
          erat rhoncus ac. Maecenas quam ipsum, pharetra sed tristique sed,
          interdum et odio. Nunc accumsan feugiat enim, vel dictum nisl egestas
          eu. Morbi eu elit hendrerit, sollicitudin sem a, interdum elit.
          Vivamus eget pharetra urna. Proin tincidunt accumsan nibh, non finibus
          tellus malesuada vitae. Quisque eu sodales erat, quis tempus diam.
          Vivamus egestas orci purus, sed efficitur ligula tincidunt at. Aliquam
          vel convallis ex, at lacinia quam. Pellentesque nec diam placerat,
          luctus enim ac, volutpat diam.
        </p>
      </div>
    )
  }
];
