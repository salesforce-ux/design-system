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

import ExampleCell from '../cell-example';
import ValueCell from '../cell-value';

class Row extends React.Component {

  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.token !== nextProps.token) return true;
    if (this.props.nameFormat !== nextProps.nameFormat) return true;
    return false;
  }*/

  getName() {
    const {token, nameFormat} = this.props;
    return nameFormat.formatter(token.name);
  }

  handleMouseUp() {
    let sel = window.getSelection && window.getSelection();
  }

  render() {
    const {token, options} = this.props;
    const className = classNames('', this.props.className);
    return (
      <tr className={className}>
        <td>
          <code onMouseUp={this.handleMouseUp.bind(this)}>{this.getName()}</code>
        </td>
        {this.renderValues()}
      </tr>
    );
  }

  renderValues() {
    const {category, token, valueFormat, formFactors} = this.props;
    const overrides = token.overrides || {};
    // List of categories where we should show the small example for an override
    // even if the override for the given form factor was undefined
    const list = ['background-color'];
    const tokenValues = formFactors.map((formFactor, index) => {
      // Get the token for the given form facctor
      let t = index === 0 ? token : overrides[formFactor.id];
      // Show the value if the token is defined
      const showValue = !_.isUndefined(t);
      // If no token was found for a given override, but the category is in "list"
      // make the token value equal to the first form factor token
      if (_.isUndefined(t) && _.includes(list, token.category)) t = token;
      // Format the value
      let value = showValue ? t.value : null;
      if (value && valueFormat) {
        value = valueFormat.formatter(value, t);
      }
      return { token: t, value, formFactor };
    });
    return tokenValues.map(({token, value, formFactor}) => {
      const example = token ? category.renderExample(token) : <ExampleCell />;
      const isSizeToken = token && token.name && token.name.toString().match(/^SIZE_/);
      const className = classNames({
        'token': token,
        'token--empty': _.isUndefined(token),
        'site-token__generic-size': isSizeToken
      });
      return <ValueCell
        key={formFactor.id}
        value={value}
        example={example}
        formFactor={formFactor.id}
        className={className} />;
    });
  }

}

Row.propTypes = {
  category: React.PropTypes.object.isRequired,
  token: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any.isRequired
  }),
  nameFormat: React.PropTypes.object.isRequired,
  valueFormat: React.PropTypes.object
};

export default Row;
