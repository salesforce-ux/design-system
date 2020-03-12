import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// We don't use design tokens or SLDS classes for styling here to prevent false failed tests for unrelated changes,
// this styling is cosmetic for Storybook only

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  border: 1px solid whitesmoke;

  & + & {
    margin-left: 2rem;
  }

  .label {
    color: silver;
    font-size: 0.75rem;
    border-bottom: 1px solid whitesmoke;
    padding: 0 0.25rem;
  }

  .showcase {
    padding: 2rem;
  }
`;

// A bit barebones at the moment but in place for future extensibility
const AnimationComparison = props => {
  const { children, styles, className, version } = props;
  const title = `v${version}`;

  return (
    <Wrapper className={className} styles={styles}>
      <div className="label">{title}</div>
      <div className="showcase">{children}</div>
    </Wrapper>
  );
};

AnimationComparison.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string
};

AnimationComparison.defaultProps = {
  version: '3'
};

export default AnimationComparison;
