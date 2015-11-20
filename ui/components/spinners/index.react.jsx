/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const componentUtil = require('app_modules/ui/util/component');
const classNames = require('classnames');
const imageNameForColor = {
  'base': 'slds_spinner.gif', // 9FAAB5
  'brand': 'slds_spinner_brand.gif', // 1589EE
  'inverse': 'slds_spinner_inverse.gif' // FFFFFF
};
const globals = require('app_modules/global');
const cssPrefix = globals.cssPrefix;

import Img from 'app_modules/ui/img';

class Spinner extends React.Component {
  static propTypes = {
    flavor: componentUtil.PropTypes.flavor(
      'small', 'medium', 'large',
      'brand-small', 'brand-medium', 'brand-large',
      'inverse-small', 'inverse-medium', 'inverse-large'
    )
  };

  constructor(props) {
    super(props);
    componentUtil.install(this);
    this.state = {};
  };

  getSpinnerImage(flavor) {
    let imageFileName;

    flavor = flavor || '';
    if (flavor.indexOf('brand') >= 0) {
      imageFileName = imageNameForColor.brand;
    } else if (flavor.indexOf('inverse') >= 0) {
      imageFileName = imageNameForColor.inverse;
    } else {
      imageFileName = imageNameForColor.base;
    }

    return `/assets/images/spinners/${imageFileName}`;
  };

  render() {
    var { className, flavor, children } = this.props;
    const classnames = classNames(className, {
      [`${cssPrefix}spinner--small`]: !flavor || flavor === '' || flavor === 'small' || flavor === 'brand-small' || flavor === 'inverse-small',
      [`${cssPrefix}spinner--medium`]: flavor === 'medium' || flavor === 'brand-medium' || flavor === 'inverse-medium',
      [`${cssPrefix}spinner--large`]: flavor === 'large' || flavor === 'brand-large' || flavor === 'inverse-large'
    });
    const spinnerImage = this.getSpinnerImage(flavor);
    const props = this.$propsWithoutKeys('className', 'flavor');
    return (
      <div className={classnames} {...props}>
        <Img src={spinnerImage} alt="Loading..." />
        {children}
      </div>
    );
  }
}

module.exports = Spinner;
