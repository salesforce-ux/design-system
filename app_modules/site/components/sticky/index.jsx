/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    fixedElementsAbove: React.PropTypes.string,
    fixedElementsBelow: React.PropTypes.string,
    fixedContentPadding: React.PropTypes.shape({
      top: React.PropTypes.string,
      right: React.PropTypes.string,
      bottom: React.PropTypes.string,
      left: React.PropTypes.string
    }),
    pinBottom: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      pinBottom: false
    };
  },
  render() {
    const content = React.Children.only(this.props.children);
    const contentClassName = classNames(content.props.className, {
      'sticky': true,
    });
    return (
      <div className={this.props.className} data-slds-sticky>
        {React.cloneElement(content, {
          contentClassName,
          'data-slds-sticky-content': true,
          'data-slds-sticky-fixed-elements-above': this.props.fixedElementsAbove,
          'data-slds-sticky-fixed-elements-below': this.props.fixedElementsBelow,
          'data-slds-sticky-fixed-content-padding': JSON.stringify(
            Object.assign({}, this.props.fixedContentPadding)
          ),
          'data-slds-sticky-pin-bottom': this.props.pinBottom ? true : null
        })}
        <div
          className={'sticky__placeholder'}
          data-slds-sticky-placeholder />
      </div>
    );
  }
});
