// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import classNames from 'classnames';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import React from 'react';

import debounce from './debounce';
import { upperFirst } from './string';

const TRBL = ['top', 'right', 'bottom', 'left'];

const PADDING_IDENTITY = (value = 0) =>
  TRBL.reduce(
    (padding, prop) => Object.assign({}, padding, { [prop]: value }),
    {}
  );

const getPadding = (node, padding) =>
  TRBL.filter(prop => padding.hasOwnProperty(prop)).reduce(
    (padding, side) =>
      Object.assign({}, padding, {
        [side]:
          parseFloat(window.getComputedStyle(node)[`padding-${side}`], 10) || 0
      }),
    {}
  );

const convertPadding = padding => {
  const node = document.createElement('div');
  TRBL.filter(prop => padding.hasOwnProperty(prop)).forEach(prop => {
    const styleProp = `padding-${prop}`;
    if (padding[prop]) {
      node.style.setProperty(styleProp, padding[prop]);
    }
  });
  document.body.appendChild(node);
  const calculatedPadding = getPadding(node, padding);
  node.parentElement.removeChild(node);
  return calculatedPadding;
};

class Sticky extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    fixedElementsAbove: PropTypes.string,
    fixedElementsBelow: PropTypes.string,
    fixedContentPadding: PropTypes.shape({
      top: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      left: PropTypes.string
    }),
    pinBottom: PropTypes.bool
  };
  static defaultProps = {
    pinBottom: false,
    fixedContentPadding: {}
  };
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      mounted: false,
      isFixed: false,
      origin: {},
      size: {},
      contentPaddingFixed: {},
      contentPaddingFixedDeafult: {}
    };
  }
  componentDidMount() {
    this.setState(
      {
        contentPaddingFixed: convertPadding(this.props.fixedContentPadding),
        contentPaddingFixedDeafult: convertPadding(
          this.props.fixedContentPadding
        )
      },
      () => {
        this.calc(true);
        this.onResize = debounce(this.onResize, 1000);
        window.addEventListener('resize', this.onResize, false);
        window.addEventListener('scroll', this.onScroll, false);
      }
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false);
    window.removeEventListener('scroll', this.onScroll, false);
  }
  calc(first) {
    // Calculate the extra offset added by any other fixed elements above this one
    const fixedElementsAbove = Array.prototype.slice.call(
      document.querySelectorAll(this.props.fixedElementsAbove)
    );
    const fixedOffsetAbove = fixedElementsAbove.reduce(
      (offset, el) => offset + el.getBoundingClientRect().height,
      0
    );
    // Calculate the extra offset added by any other fixed elements below this one
    const fixedElementsBelow = Array.prototype.slice.call(
      document.querySelectorAll(this.props.fixedElementsBelow)
    );
    const fixedOffsetBelow = fixedElementsBelow.reduce(
      (offset, el) => offset + el.getBoundingClientRect().height,
      0
    );
    // Content
    const contentNode = this.contentNode;
    const contentRect = contentNode.getBoundingClientRect();
    const contentPadding = getPadding(contentNode, PADDING_IDENTITY());
    const contentPaddingFixed = Object.assign(
      {},
      PADDING_IDENTITY(),
      this.state.contentPaddingFixed
    );
    // If there are fixed elements below, add that offset to the padding
    if (fixedOffsetBelow) {
      this.setState({
        contentPaddingFixed: Object.assign(
          {},
          this.state.contentPaddingFixedDeafult,
          {
            bottom:
              fixedOffsetBelow +
              (this.state.contentPaddingFixedDeafult.bottom
                ? this.state.contentPaddingFixedDeafult.bottom
                : 0)
          }
        )
      });
    }
    this.setState({
      origin: {
        top: contentPadding.top + fixedOffsetAbove,
        left: this.node.getBoundingClientRect().left
      },
      size: {
        width: contentRect.width + contentPadding.left + contentPadding.right,
        height: contentRect.height + contentPadding.top
      }
    });
    if (first) {
      this.setState({
        scrollOffset:
          contentRect.top -
          fixedOffsetAbove -
          contentPadding.top -
          contentPaddingFixed.top +
          window.pageYOffset
      });
    }
  }
  onResize() {
    this.calc();
  }
  onScroll() {
    // The page has scrolled past the top of the nav
    // Attempt to stick it to the top
    if (window.pageYOffset > this.state.scrollOffset) {
      // It only needs to be adjusted once
      if (!this.state.isFixed) {
        this.setState({
          isFixed: true
        });
      }
    } else {
      // The page has scrolled up past the original top of the nav
      // Attempt to unstick it
      if (this.state.isFixed) {
        this.setState({
          isFixed: false
        });
      }
    }
  }
  render() {
    const { isFixed, origin, size, contentPaddingFixed } = this.state;
    const { pinBottom } = this.props;
    const contentPadding = isFixed
      ? contentPaddingFixed
      : PADDING_IDENTITY(null);
    const contentPaddingStyle = TRBL.filter(prop =>
      contentPadding.hasOwnProperty(prop)
    ).reduce(
      (padding, key) =>
        Object.assign(padding, {
          [`padding${upperFirst(key)}`]: contentPadding[key]
        }),
      {}
    );
    return (
      <div
        ref={node => {
          this.node = node;
        }}
        className={this.props.className}
      >
        <div
          ref={node => {
            this.contentNode = node;
          }}
          className={classNames(this.props.contentClassName, 'site-sticky', {
            'site-sticky--fixed': isFixed
          })}
          style={Object.assign(
            {
              top: isFixed && origin.top ? origin.top : null,
              left: isFixed && origin.left ? origin.left : null,
              bottom: pinBottom && isFixed ? 0 : null,
              overflowY: pinBottom && isFixed ? 'auto' : null
            },
            contentPaddingStyle
          )}
        >
          {this.props.children}
        </div>
        <div
          style={{
            height: isFixed && size.height ? size.height : null
          }}
          className={classNames('sticky__placeholder', {
            'site-sticky__placeholder--on': isFixed
          })}
        />
      </div>
    );
  }
}

export default Sticky;
