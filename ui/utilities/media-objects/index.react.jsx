// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Component extends React.Component {
  render() {
    const className = classNames('slds-media', this.props.className, {
      [`slds-media_${this.props.flavor}`]: this.props.flavor
    });
    return (
      <div className={className}>
        {this.renderFigure(
          this.props.figureCenter,
          classNames(
            'slds-media__figure_stacked',
            this.props.figureCenterClassName
          )
        )}
        {this.renderFigure(
          this.props.figureLeft,
          this.props.figureLeftClassName
        )}
        <div className="slds-media__body">{this.props.children}</div>
        {this.renderFigure(
          this.props.figureRight,
          classNames(
            'slds-media__figure_reverse',
            this.props.figureRightClassName
          )
        )}
      </div>
    );
  }
  renderFigure(figure, className) {
    if (!figure) return null;
    className = classNames('slds-media__figure', className);
    return <div className={className}>{figure}</div>;
  }
}

Component.displayName = 'MediaObject';
Component.propTypes = {
  figureLeft: PropTypes.node,
  figureLeftClassName: PropTypes.string,
  figureRight: PropTypes.node,
  figureRightClassName: PropTypes.string,
  figureCenter: PropTypes.node,
  figureCenterClassName: PropTypes.string,
  flavor: PropTypes.oneOf(['center', 'small', 'stacked', 'responsive'])
};

export default Component;
