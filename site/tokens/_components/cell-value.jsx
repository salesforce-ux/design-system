/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';
import tinyColor from 'tinycolor2';


const toAliasString = (valueRaw) => valueRaw.replace(/\{\!/, '').replace(/\}$/, '');

class ValueCell extends React.Component {

  render() {
    const className = classNames('', this.props.className);
    return (
      <td className={className}>
        {this.props.example}
        {this.renderValue()}
      </td>
    );
  }

  renderValue() {
    if (!this.props.value) return null;

    let px;

    // We have a color, let's convert it to #RRGGBB
    let hex = (/^(rgb|hsl)\(/g.test(this.props.value)) ? tinyColor(this.props.value).toHexString() : null;

    // If the raw value is different from the value, let's clean it up and show it
    let raw = this.props.valueRaw !== this.props.value ? toAliasString(this.props.valueRaw) : null;

    let alternateHex = (hex === null) ? null : <div className="slds-text-body--small">{hex}</div>;
    let alternateRaw = (raw === null) ? null : <div className="slds-text-body--small">{raw}</div>;

    // Show values in pixels, useful for designers (and other normal people who
    // don't want to read values in rems)
    if (/^([0-9\.]+)rem$/.test(this.props.value)) {
      px = <div className="slds-text-body--small">{parseFloat(this.props.value) * 16}px</div>;
    }

    const className = classNames('cell-wrap', 'site-property-value');

    return (
      <code className={pf(className)} data-slds-token-value>
        {this.props.value}
        {alternateHex}
        {alternateRaw}
        {px}
      </code>
    );
  }

}

ValueCell.propTypes = {
  value: React.PropTypes.string,
  valueRaw: React.PropTypes.string,
  example: React.PropTypes.node
};

export default ValueCell;
