/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import ExampleCell from './cell-example';
import ValueCell from './cell-value';

class Row extends React.Component {

  getName() {
    const { token, nameFormat } = this.props;
    return nameFormat.formatter(token.name);
  }

  render() {
    const { token, options } = this.props;
    const tokenData = JSON.stringify({
      name: token.name,
      value: token.value,
      valueRaw: token['.rawValue']
    });
    return (
      <tr
        className={this.props.className}
        data-slds-token={tokenData}>
        <td>
          <code data-slds-token-name>{this.getName()}</code>
        </td>
        {this.renderValue()}
      </tr>
    );
  }

  renderValue() {
    const { category, token, formFactors } = this.props;
    const example = token
      ? category.renderExample(token)
      : <ExampleCell />;
    const isSizeToken = token.name.toString().match(/^SIZE_/);
    const className = classNames({
      'token': token,
      'token--empty': _.isUndefined(token),
      'site-token__generic-size': isSizeToken
    });
    const value = token.value;
    return <ValueCell
      value={token.value}
      valueRaw={token['.rawValue']}
      example={example}
      className={className} />;
  }

}

Row.propTypes = {
  category: React.PropTypes.object.isRequired,
  token: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any.isRequired
  }),
  nameFormat: React.PropTypes.object.isRequired
};

export default Row;
