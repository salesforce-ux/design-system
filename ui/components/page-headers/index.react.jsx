/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
const PT = React.PropTypes;
import Heading from 'ui/components/heading/index.react';
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


class AnchorDetailBody extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    return <dd {...this.props}>{this.props.children}</dd>;
  }
}

class AnchorDetailLabel extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    return <dt {...this.props}>{this.props.children}</dt>;
  }
}

class AnchorDetailItem extends React.Component {
  static propTypes = { label: PT.string, truncate: PT.number };
  // static contextTypes = { childLength: PT.number };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  renderLabelAndBody(className) {
    return (
      <dl className={pf(className)} {...this.props}>
        <AnchorDetailLabel>
          <Heading truncate={this.props.truncate} flavor="label">{this.props.label}</Heading>
        </AnchorDetailLabel>
        <AnchorDetailBody>{this.props.children}</AnchorDetailBody>
      </dl>
    );
  }
  renderChildren(className) {
    return (
      <dl className={pf(className)} {...this.props}>
        { this.props.children }
      </dl>
    );
  }
  render() {
    const gridClass = pf('page-header__detail-block');
    const manuallyAssembled = !this.props.label;
    return (
      <div className={gridClass}>
        { manuallyAssembled ? this.renderChildren() : this.renderLabelAndBody() }
      </div>
    );
  }
}

class AnchorDetailRow extends React.Component {
  static childContextTypes = { childLength: PT.number };

  constructor(props) {
    super(props);
    componentUtil.install(this);
  }

  getChildContext() {
    return { childLength: React.Children.count(this.props.children) };
  }

  render() {
    const className = this.$getClassName(pf('grid page-header__detail-row'));
    return (
      <div className={className} {...this.props}>
        { this.props.children }
      </div>
    );
  }
}

class AnchorDetail extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassName(pf('text-body--small page-header__info'));
    return (
      <p className={className}>
        { this.props.children }
      </p>
    );
  }
}

class Anchor extends React.Component {
  static propTypes = { flavor: componentUtil.PropTypes.flavor('home', 'object-home') };
  static flavorClasses = {'home': 'page-header--rec-home', 'object-home': 'page-header--obj-home'};
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassName(pf('page-header', Anchor.flavorClasses[this.props.flavor]));
    return (
      <div className={className} role="banner">
        { this.props.children }
      </div>
    );
  }
}

Anchor.Detail = AnchorDetail;
Anchor.DetailRow = AnchorDetailRow;
Anchor.DetailItem = AnchorDetailItem;
Anchor.DetailLabel = AnchorDetailLabel;
Anchor.DetailBody = AnchorDetailBody;

export default Anchor;
