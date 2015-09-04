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
const SvgIcon = require('app_modules/ui/svg-icon');
const pf = componentUtil.prefix;

class Component extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    return (
      <div className={pf('form-element')}>
        <label className={pf('form-element__label')} htmlFor={this.props.assistiveText.replace(' ','-')}>{this.props.label}</label>
        <div className={pf('form-element__control')}>
          {this.renderIconInput()}
          {this.renderInput()}
          {this.renderHelp(this.props.help)}
        </div>
      </div>
    );
  }
  renderHelp(help) {
    if (!help) return null;
    const className = this.$getClassName(pf('form-element__help'));
    return (
      <div className={className}>
        {help}
      </div>
    );
  }
  renderIconInput() {
    if (!this.props.sprite) return null;
    const iconClassName = this.$getClassNameWithFlavor('input-has-icon', {
      prop: 'iconFlavor',
      includeClassName: false
    });
    const {sprite,symbol} = this.props;
    const props = this.$propsWithoutKeys('className', 'sprite', 'symbol');
    return (
      <div className={pf(iconClassName)}>
        <SvgIcon className={pf('input__icon icon-text-default')} sprite={sprite} symbol={symbol} />
        <input id={this.props.assistiveText.replace(' ','-')} className={pf('input')} type="text" placeholder={this.props.placeholder} {...this.props} />
      </div>
    );
  }
  renderInput() {
    if (this.props.sprite) return null;
    return (
      <input id={this.props.assistiveText.replace(' ','-')} className={pf('input')} type="text" placeholder={this.props.placeholder} />
    );
  }
}

Component.displayName = 'Input';
Component.propTypes = {
  label: React.PropTypes.node.isRequired,
  placeholder: React.PropTypes.node,
  assistiveText: React.PropTypes.string.isRequired,
  help: React.PropTypes.node,
  iconFlavor: componentUtil.PropTypes.flavor(
    'left', 'right'
  ),
  sprite: React.PropTypes.string,
  symbol: React.PropTypes.string
};

module.exports = Component;
