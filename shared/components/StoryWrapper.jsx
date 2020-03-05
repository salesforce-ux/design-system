import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// We don't use design tokens or SLDS classes for styling here to prevent false failed tests for unrelated changes,
// this styling is cosmetic for Storybook only

const Wrapper = styled.div`
  transform: translate3d(0, 0, 0);
  position: ${props => props.isViewport && 'relative'};
  padding: ${props => (props.isFullBleed ? '0' : '1rem')};
  ${props => props.styles}

  > * {
    position: ${props => props.isViewport && 'absolute'};
  }
`;

// A bit barebones at the moment but in place for future extensibility
const StoryWrapper = props => {
  const { children, styles, isViewport, isFullBleed, dir, className } = props;

  return (
    <Wrapper
      className={className}
      styles={styles}
      isViewport={isViewport}
      isFullBleed={isFullBleed}
      dir={dir}
    >
      {children}
    </Wrapper>
  );
};

StoryWrapper.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
  isFullBleed: PropTypes.bool,
  isViewport: PropTypes.bool,
  dir: PropTypes.oneOf(['ltr', 'rtl'])
};

export default StoryWrapper;
