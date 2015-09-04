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
const Truncate = require('ui/components/lib/truncate/index.react.jsx');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

class LabelHeading extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassName(pf('text-heading--label'));
    return (
      <p {...this.props} className={className}>
        {this.props.children}
      </p>
    );
  }
}

class MediumHeading extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassName(pf('text-heading--medium'));
    return (
      <h1 {...this.props} className={className}>
        {this.props.children}
      </h1>
    );
  }
}

class Heading extends React.Component {
  static propTypes = {
    flavor: componentUtil.PropTypes.flavor('label', 'medium'),
    truncate: PT.number
  };
  static defaultProps = { flavor: 'label' }

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  render() {
    const props = this.$propsWithoutKeys('flavor');
    const Tag = this.props.flavor === 'medium' ? MediumHeading : LabelHeading;
    const truncate = this.props.truncate;
    return (
      <Tag {...props }>
        { truncate ? <Truncate amount={truncate}>{this.props.children}</Truncate> : this.props.children }
      </Tag>
    );
  }
}

module.exports = Heading;
