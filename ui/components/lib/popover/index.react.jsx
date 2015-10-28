/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const PT = React.PropTypes;
const componentUtil = require('app_modules/ui/util/component');
const Registry = require('../control/registry');
const pf = componentUtil.prefix;

class Popover extends React.Component {
  static propTypes = { id: PT.string, visible: PT.bool };
  static defaultProps = { visible: true };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  componentWillMount() {
    Registry.register(this);
  }

  componentWillUnmount() {
    Registry.unregister(this);
  }

  visibilityClass() {
    return this.props.visible ? 'show' : 'hide';
  }

  children() {
    return React.Children.map(this.props.children, c => {
      return React.cloneElement(c, {initialFocus: true});
    });
  }

  render() {
    return (
      <div {...this.props} className={this.$getClassName(pf(`${this.visibilityClass()}`))}>
      { this.children() }
      </div>
    );
  }
}

module.exports = Popover;
