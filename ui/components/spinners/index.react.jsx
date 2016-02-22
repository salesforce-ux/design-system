/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import componentUtil from 'app_modules/ui/util/component';
import classNames from 'classnames';
import globals from 'app_modules/global';
const cssPrefix = globals.cssPrefix;
import { prefix as pf } from 'app_modules/ui/util/component';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {};
  };

  render() {
    var { className, flavor, children } = this.props;
    const classnames = classNames(className, {
      [`${cssPrefix}spinner`]: true,
      [`${cssPrefix}spinner--small`]: flavor === 'small' || flavor === 'brand-small' || flavor === 'inverse-small',
      [`${cssPrefix}spinner--medium`]: flavor === 'medium' || flavor === 'brand-medium' || flavor === 'inverse-medium',
      [`${cssPrefix}spinner--large`]: flavor === 'large' || flavor === 'brand-large' || flavor === 'inverse-large'
    });
    const props = this.$propsWithoutKeys('className', 'flavor');
    return (
      <div className={pf('spinner_container')}>
        <div className={classnames} {...props} aria-hidden="false" role="alert">
          <div className={pf('spinner__dot-a')}></div>
          <div className={pf('spinner__dot-b')}></div>
        </div>
        {children}
      </div>
    );
  }
}

Spinner.propTypes = {
  flavor: componentUtil.PropTypes.flavor(
    'small', 'medium', 'large',
    'brand-small', 'brand-medium', 'brand-large',
    'inverse-small', 'inverse-medium', 'inverse-large'
  )
};

export default Spinner;
