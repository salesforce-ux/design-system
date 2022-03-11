// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const Demo = ({ className, dir, children, hasBackgroundColor }) => {
  const demoStyles = {
    height: '6rem',
    backgroundColor: hasBackgroundColor && '#16325c',
    // Needed for positioning reference of spinner's absoulte positioning. <StoryFrame> is only used
    // in the kitchen sink (which contains positioning reference) so we need coverage for the individual
    // story pages for now.
    position: 'relative'
  };
  return (
    <div
      className={classNames('demo-only', className)}
      style={demoStyles}
      dir={dir}
    >
      {children}
    </div>
  );
};

Demo.propTypes = {
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  children: PropTypes.node,
  hasBackgroundColor: PropTypes.bool
};

export let SpinnerContainer = props => (
  <div className={classNames('slds-spinner_container', props.className)}>
    {props.children}
  </div>
);

export let Spinner = props => (
  <div role="status" className={classNames('slds-spinner', props.className)}>
    <span className="slds-assistive-text">Loading</span>
    <div className="slds-spinner__dot-a" />
    <div className="slds-spinner__dot-b" />
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Demo className="demo-only_viewport">
        <Spinner className="slds-spinner_medium" />
      </Demo>
    )
  }
];

export let examples = [
  {
    id: 'inlined',
    label: 'Inlined',
    description:
      'A container is not required to use the spinner. Here, it is placed on a dark background to illustrate there is nothing there. The spinner will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element: (
      <div className="slds-align_absolute-center" style={{ height: '4rem' }}>
        <Spinner className="slds-spinner_medium slds-spinner_inline" />
      </div>
    )
  },
  {
    id: 'without-container',
    label: 'Without Container',
    description:
      'A container is not required to use the spinner. Here, it is placed on a dark background to illustrate there is nothing there. The spinner will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element: (
      <Demo className="demo--inverse">
        <Spinner className="slds-spinner_medium" />
      </Demo>
    )
  },
  {
    id: 'with-container',
    label: 'With Container',
    description:
      'Here, the regular spinner container is used making the dark background look lighter. The spinner container will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element: (
      <Demo className="demo--inverse" hasBackgroundColor>
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'fixed-container',
    label: 'Fixed Container',
    description:
      'The spinner container may be used with a container with fixed positioning by adding the <code>.slds-is-fixed</code> class to the container. This may be needed if you are dynamically loading portions of a component after the spinner is showing.',
    element: (
      <Demo className="demo-only_viewport demo--inverse" hasBackgroundColor>
        <SpinnerContainer className="slds-is-fixed">
          <Spinner className="slds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'inverse',
    label: 'On inverse background',
    element: (
      <Demo className="demo-only" hasBackgroundColor>
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium slds-spinner_inverse" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'delayed',
    label: 'With 300ms delay',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium slds-spinner_delayed" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'brand',
    label: 'With brand colors',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium slds-spinner_brand" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'xx-small',
    label: 'Size Xx-Small',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_xx-small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'x-small',
    label: 'Size X-Small',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_x-small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'small',
    label: 'Size Small',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'medium',
    label: 'Size Medium',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'large',
    label: 'Size Large',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner_large" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'right-to-left-xx-small',
    label: 'RTL support - Size Xx-Small',
    element: (
      <Demo dir="rtl">
        <Spinner className="slds-spinner_xx-small" />
      </Demo>
    )
  },
  {
    id: 'right-to-left-x-small',
    label: 'RTL support - Size X-Small',
    element: (
      <Demo dir="rtl">
        <Spinner className="slds-spinner_x-small" />
      </Demo>
    )
  },
  {
    id: 'right-to-left-small',
    label: 'RTL support - Size Small',
    element: (
      <Demo dir="rtl">
        <Spinner className="slds-spinner_small" />
      </Demo>
    )
  },
  {
    id: 'right-to-left-medium',
    label: 'RTL support - Size Medium',
    element: (
      <Demo dir="rtl">
        <Spinner className="slds-spinner_medium" />
      </Demo>
    )
  },
  {
    id: 'right-to-left-large',
    label: 'RTL support - Size Large',
    element: (
      <Demo dir="rtl">
        <Spinner className="slds-spinner_large" />
      </Demo>
    )
  }
];
