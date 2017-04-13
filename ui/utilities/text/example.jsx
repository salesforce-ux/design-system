// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

let Text = props =>
  <div className={props.className}>
    The quick brown fox jumps over the lazy dog.
  </div>;

export let examples = [
  {
    id: 'body-default',
    label: 'Body size - default',
    element: <Text className="slds-text-body--regular" />,
    description: 'This default helper sets regular body copy. You usually don&rsquo;t need this class since most components will inherit this globally from the `body` element. However, it exists if you still need to specifically set it.'
  },
  {
    id: 'body-small',
    label: 'Body size - Small',
    element: <Text className="slds-text-body--small" />,
    description: 'This body-small text helper sets smaller, subtler body copy. It is typically used as supportive text.'
  },
  {
    id: 'heading-large',
    label: 'Heading size - Large',
    element: <Text className="slds-text-heading--large" />
  },
  {
    id: 'heading-medium',
    label: 'Heading size - Medium',
    element: <Text className="slds-text-heading--medium" />
  },
  {
    id: 'heading-small',
    label: 'Heading size - Small',
    element: <Text className="slds-text-heading--small" />
  },
  {
    id: 'heading-title',
    label: 'Title',
    element: <Text className="slds-text-title" />
  },
  {
    id: 'heading-title--caps',
    label: 'Title uppercase',
    element: <Text className="slds-text-title--caps" />
  },
  {
    id: 'longform',
    label: 'Longform',
    element:
    <div className="slds-text-longform">
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <h3 className="slds-text-heading--small">Heading</h3>
      <ul>
        <li>The quick brown fox jumps over the lazy dog.</li>
        <li>The quick brown fox jumps over the lazy dog.
          <ul>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.
              <ul>
                <li>The quick brown fox jumps over the lazy dog.</li>
                <li>The quick brown fox jumps over the lazy dog.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h3 className="slds-text-heading--small">Heading</h3>
      <ol>
        <li>The quick brown fox jumps over the lazy dog.</li>
        <li>The quick brown fox jumps over the lazy dog.
          <ol>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.
              <ol>
                <li>The quick brown fox jumps over the lazy dog.</li>
                <li>The quick brown fox jumps over the lazy dog.</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  },
  {
    id: 'align-left',
    label: 'Align left',
    element: <Text className="slds-text-align--left" />,
    description: 'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
  },
  {
    id: 'align-right',
    label: 'Align right',
    element: <Text className="slds-text-align--right" />,
    description: 'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
  },
  {
    id: 'align-center',
    label: 'Align center',
    element: <Text className="slds-text-align--center" />,
    description: 'These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally.'
  },
  {
    id: 'text-color-default',
    label: 'Color - Default',
    element: <Text className="slds-text-color--default" />
  },
  {
    id: 'text-color-weak',
    label: 'Color - Weak',
    element: <Text className="slds-text-color--weak" />
  },
  {
    id: 'text-color-error',
    label: 'Color - Error',
    element: <Text className="slds-text-color--error" />
  },
  {
    id: 'text-color-inverse',
    label: 'Color - Inverse',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <Text className="slds-text-color--inverse" />
      </div>
  },
  {
    id: 'text-color-inverse-weak',
    label: 'Color - Inverse - Weak',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <Text className="slds-text-color--inverse-weak" />
      </div>
  }
];
