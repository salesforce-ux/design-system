// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'assistive-text',
    label: 'Assistive Text',
    element: <div className="slds-assistive-text">I am hidden from sight</div>,
    description: 'Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text.'
  },
  {
    id: 'collapsed-expanded',
    label: 'Collapsed / Expanded',
    element:
      <div className="demo-only">
        <div className="slds-is-collapsed">
          <h3>I am collapsed</h3>
          <p>I am a child inside a collapsed element</p>
        </div>
        <div className="slds-is-expanded">
          <h3>I am expanded</h3>
          <p>I am a child inside an expanded element</p></div>
      </div>,
    description: 'The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state.'
  },
  {
    id: 'hidden-visible',
    label: 'Hidden / Visible',
    element:
      <div className="demo-only">
        <div className="slds-hidden">I am hidden</div>
        <div className="slds-visible">I am visible</div>
      </div>,
    description: 'You can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  `slds-hidden` class. To make it visible again, use the `slds-visible` class.'
  },
  {
    id: 'hide-show',
    label: 'Hide / Show',
    element:
      <div className="demo-only">
        <div className="slds-hide">I am hidden</div>
        <div className="slds-show">I am shown as a block</div>
        <div className="slds-show--inline-block">I am shown as an inline-block</div>
      </div>,
    description: 'To hide an element and have it not take up space on the page, use the  `.slds-hide` class. You can toggle the state with JavaScript to show the element at a later&nbsp;time. To make the element visible again, use `.slds-show`. If you need to make the hidden element visible again in an inline-block state, use  `.slds-show--inline-block`.'
  },
  {
    id: 'transition-hide-show',
    label: 'Transition Hide / Show',
    element:
      <div className="demo-only">
        <div className="slds-transition-hide">I have zero opacity</div>
        <div className="slds-transition-show">I have 100% opacity</div>
      </div>,
    description: 'To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element\'s opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change.'
  },
  {
    id: 'responsive',
    label: 'Responsive',
    element:
      <div className="demo-only demo-visibility">
        <div className="slds-x-small-show">Show on 320px and up</div>
        <div className="slds-x-small-show-only">Show only between 320px and 479px</div>
        <div className="slds-max-x-small-hide">Hide on 319px and down</div>
        <div className="slds-small-show">Show on 480px and up</div>
        <div className="slds-small-show-only">Show only between 480px and 767px</div>
        <div className="slds-max-small-hide">Hide on 479px and down</div>
        <div className="slds-medium-show">Show on 768px and up</div>
        <div className="slds-medium-show-only">Show only between 768px and 1023px</div>
        <div className="slds-max-medium-hide">Hide on 1023px and down</div>
        <div className="slds-large-show">Show on 1024px and up</div>
      </div>,
    description: `Responsive visibility classes will show and hide content on specific breakpoints. By default, \`-show\` renders as \`display: block;\`, but you may pass through a display property of your choice by adding a modifier to the end of the classname. For example, you may need to render an element as \`display: inline-block\` at a medium breakpoint, adding \`--inline-block\` to the end of \`.slds-medium-show\` to produce the class of \`.slds-medium-show--inline-block\` will give you that outcome.

    <div class="demo-visibility-chart slds-m-bottom--large">
      <div class="slds-scrollable--x">
        <table class="slds-table slds-table--bordered slds-no-row-hover">
          <tr class="site-text-heading--label">
            <th scope="col"><span class="slds-assistive-text">Class Name</span></th>
            <th scope="col">Less than 320px</th>
            <th scope="col">X-Small (320px)</th>
            <th scope="col">Small (480px)</th>
            <th scope="col">Medium (768px)</th>
            <th scope="col">Large (1024px)</th>
            <th scope="col">Greater than 1024px</th>
          </tr>
          <tr>
            <th><code>.slds-x-small-show</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
          </tr>
          <tr>
            <th><code>.slds-small-show</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
          </tr>
          <tr>
            <th><code>.slds-medium-show</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
          </tr>
          <tr>
            <th><code>.slds-large-show</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__visible">Show</td>
          </tr>
          <tr>
            <th><code>.slds-x-small-show-only</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
          </tr>
          <tr>
            <th><code>.slds-small-show-only</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
          </tr>
          <tr>
            <th><code>.slds-medium-show-only</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Show</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
          </tr>
          <tr>
            <th><code>.slds-max-x-small-hide</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
          </tr>
          <tr>
            <th><code>.slds-max-small-hide</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
          </tr>
          <tr>
            <th><code>.slds-max-medium-hide</code></th>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__hidden">Hide</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
            <td class="demo-visibility-chart__visible">Initial</td>
          </tr>
        </table>
      </div>
    </div>`
  }
];
