import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import StoryWrapper from './StoryWrapper';

// We don't use design tokens or SLDS classes for styling here to prevent false failed tests for unrelated changes,
// this styling is cosmetic for Storybook only
const Wrapper = styled.div`
  border: solid 3px #f2f2f2;

  & + & {
    margin-top: 1.25rem;
  }
`;

const Label = styled.h2`
  border-bottom: solid 3px #f2f2f2;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
`;

// A bit barebones at the moment but in place for future extensibility
const StoryFrame = props => {
  const {
    component,
    label,
    isViewport,
    styles,
    isFullBleed,
    demoProps
  } = props;

  // this sets a prop in LazyLoadWrapper to not lazy load Kitchen Sink content for Applitools VRT
  const isBeingTested = new URL(window.location).searchParams.get(
    'eyes-storybook'
  );

  const LazyLoadWrapper = props => {
    const { children, isBeingTested } = props;

    return (
      <React.Fragment>
        {isBeingTested === 'true' ? (
          <Wrapper>{children}</Wrapper>
        ) : (
          <LazyLoad height={200} offset={100}>
            <Wrapper>{children}</Wrapper>
          </LazyLoad>
        )}
      </React.Fragment>
    );
  };

  LazyLoadWrapper.propTypes = {
    isBeingTested: PropTypes.bool
  };

  return (
    <LazyLoadWrapper isBeingTested={isBeingTested}>
      <Label>{label}</Label>
      <StoryWrapper
        isViewport={isViewport}
        styles={styles}
        isFullBleed={isFullBleed}
        {...demoProps}
      >
        {component}
      </StoryWrapper>
    </LazyLoadWrapper>
  );
};

StoryFrame.propTypes = {
  component: PropTypes.node,
  label: PropTypes.string,
  isFullBleed: PropTypes.bool,
  isViewport: PropTypes.bool
};

export default StoryFrame;
