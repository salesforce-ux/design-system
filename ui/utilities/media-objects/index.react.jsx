// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

class Component extends React.Component {
  render () {
    const className = classNames('slds-media', this.props.className, {
      [`slds-media--${this.props.flavor}`]: this.props.flavor
    });
    return (
      <div className={className}>
        {this.renderFigure(
          this.props.figureCenter,
          classNames('slds-media__figure--stacked', this.props.figureCenterClassName)
        )}
        {this.renderFigure(
          this.props.figureLeft,
          this.props.figureLeftClassName
        )}
        <div className="slds-media__body">
          {this.props.children}
        </div>
        {this.renderFigure(
          this.props.figureRight,
          classNames('slds-media__figure--reverse', this.props.figureRightClassName)
        )}
      </div>
    );
  }
  renderFigure (figure, className) {
    if (!figure) return null;
    className = classNames('slds-media__figure', className);
    return (
      <div className={className}>
        {figure}
      </div>
    );
  }
}

Component.displayName = 'MediaObject';
Component.PropTypes = {
  figureLeft: React.PropTypes.node,
  figureLeftClassName: React.PropTypes.string,
  figureRight: React.PropTypes.node,
  figureRightClassName: React.PropTypes.string,
  figureCenter: React.PropTypes.node,
  figureCenterClassName: React.PropTypes.string,
  flavor: React.PropTypes.oneOf(['center', 'small', 'stacked'])
};

export default Component;
