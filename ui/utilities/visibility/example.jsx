// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'assistive-text',
    label: 'Assistive Text',
    element: <div className="slds-assistive-text">I am hidden from sight</div>,
    description:
      'Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text.'
  },
  {
    id: 'collapsed-expanded',
    label: 'Collapsed / Expanded',
    element: (
      <div className="demo-only">
        <div className="slds-is-collapsed">
          <h3>I am collapsed</h3>
          <p>I am a child inside a collapsed element</p>
        </div>
        <div className="slds-is-expanded">
          <h3>I am expanded</h3>
          <p>I am a child inside an expanded element</p>
        </div>
      </div>
    ),
    description:
      'The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state.'
  },
  {
    id: 'hidden-visible',
    label: 'Hidden / Visible',
    element: (
      <div className="demo-only">
        <div className="slds-hidden">I am hidden</div>
        <div className="slds-visible">I am visible</div>
      </div>
    ),
    description: `
You can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  \`slds-hidden\` class. To make it visible again, use the \`slds-visible\` class.

Note that \`.slds-hidden\` and any of the \`.slds-visible\` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.
    `
  },
  {
    id: 'hide-show',
    label: 'Hide / Show',
    element: (
      <div className="demo-only">
        <div className="slds-hide">I am hidden</div>
        <div className="slds-show">I am shown as a block</div>
        <div className="slds-show_inline-block">
          I am shown as an inline-block
        </div>
      </div>
    ),
    description: `
To hide any type of element from view and from screen readers, use the \`.slds-hide\` class. Once hidden, you can display the content by using JavaScript to swap \`.slds-hide\` with \`.slds-show\`; This class will set the \`display\` property to \`block\`. If you need to display your hidden element as \`inline\` or \`inline-block\`, you can use the \`.slds-show_inline\` or \`.slds-show_inline-block\` classes, respectively.

Note that \`.slds-hide\` and any of the \`.slds-show-*\` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.
    `
  },
  {
    id: 'transition-hide-show',
    label: 'Transition Hide / Show',
    element: (
      <div className="demo-only">
        <div className="slds-transition-hide">I have zero opacity</div>
        <div className="slds-transition-show">I have 100% opacity</div>
      </div>
    ),
    description:
      "To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change."
  },
  {
    id: 'responsive',
    label: 'Responsive',
    element: (
      <div className="demo-only demo-visibility">
        <div className="slds-show_x-small">Hides on 319px and down</div>
        <div className="slds-hide_x-small">Hides on 320px and up</div>

        <div className="slds-show_small">Hides on 479px and down</div>
        <div className="slds-hide_small">Hides on 480px and up</div>

        <div className="slds-show_medium">Hides on 767px and down</div>
        <div className="slds-hide_medium">Hides on 768px and up</div>

        <div className="slds-show_large">Hides on 1023px and down</div>
        <div className="slds-hide_large">Hides on 1024px and up</div>

        <div className="slds-show_x-large">Hides on 1279px and down</div>
        <div className="slds-hide_x-large">Hides on 1280px and up</div>
      </div>
    ),
    description: `
Responsive visibility classes will hide content on specific breakpoints. \`slds-show_[breakpoint]\` renders \`display: none\` when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. \`slds-hide_[breakpoint]\` does the oposite by rendering \`display: none\` when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller.

|Class Name|Less than 320px|X-Small (>= 320px)|Small (>= 480px)|Medium (>= 768px)|Large (>= 1024px)|X-Large (>= 1280px)|
|---|---|---|---|---|---|---|
|\`.slds-hide_x-small\`|Show|Hide|Hide|Hide|Hide|Hide|
|\`.slds-show_x-small\`|Hide|Show|Show|Show|Show|Show|
|\`.slds-hide_small\`|Show|Show|Hide|Hide|Hide|Hide|
|\`.slds-show_small\`|Hide|Hide|Show|Show|Show|Show|
|\`.slds-hide_medium\`|Show|Show|Show|Hide|Hide|Hide|
|\`.slds-show_medium\`|Hide|Hide|Hide|Show|Show|Show|
|\`.slds-hide_large\`|Show|Show|Show|Show|Hide|Hide|
|\`.slds-show_large\`|Hide|Hide|Hide|Hide|Show|Show|
|\`.slds-hide_x-large\`|Show|Show|Show|Show|Show|Hide|
|\`.slds-show_x-large\`|Hide|Hide|Hide|Hide|Hide|Show|
    `
  }
];
