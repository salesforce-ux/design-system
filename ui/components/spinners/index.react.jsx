/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {};
  };

  render() {
    let { flavor, children } = this.props;
    const className = classNames(this.props.className, {
      'slds-spinner': true,
      'slds-spinner--small': flavor === 'small' || flavor === 'brand-small' || flavor === 'inverse-small',
      'slds-spinner--medium': flavor === 'medium' || flavor === 'brand-medium' || flavor === 'inverse-medium',
      'slds-spinner--large': flavor === 'large' || flavor === 'brand-large' || flavor === 'inverse-large'
    });
    const props = _.omit(this.props, ['className', 'flavor']);
    return (
      <div className="slds-spinner_container">
        <div className={className} {...props} role="alert">
          <span className="slds-assistive-text">Loading</span>
          <div className="slds-spinner__dot-a"></div>
          <div className="slds-spinner__dot-b"></div>
        </div>
        {children}
      </div>
    );
  }
}

Spinner.propTypes = {
  flavor: React.PropTypes.oneOf([
    'small', 'medium', 'large',
    'brand-small', 'brand-medium', 'brand-large',
    'inverse-small', 'inverse-medium', 'inverse-large'
  ])
};

export default Spinner;
