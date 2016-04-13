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
import { prefix as pf } from 'app_modules/ui/util/component';
import navigation, { getActiveNavItems } from 'app_modules/site/navigation';

export default React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    badge: React.PropTypes.string,
    actions: React.PropTypes.node,
    path: React.PropTypes.string
  },

  getNavItems() {
    return _.drop(getActiveNavItems(navigation(), this.props.path));
  },

  rootNavName() {
    // pick a fallback that will hopefully stay around
    const fallback = 'resources';
    return this.getNavItems().map(item => item.id)[0] || fallback;
  },

  render() {
    return (
      <header className={pf('site-masthead grid wrap')}>
        <div className={pf('site-masthead-title col has-flexi-truncate align-middle')}>
          <div className={pf('media media--center media--responsive')}>
            <span className={pf('media__figure')}>
              <img src={`/assets/images/header-${this.rootNavName()}.svg`} alt="" />
            </span>
            <div className={pf('media__body')}>
              <div className={pf('grid')}>
                <h1 title={this.props.title}>{this.props.title}</h1>
              </div>
            </div>
          </div>
        </div>
        {this.props.actions}
      </header>
    );
  },

  renderBadge() {
    if (!this.props.badge) return null;
    return (
      <span className={pf('badge m-left--medium shrink-none align-middle')}>
        {this.props.badge}
      </span>
    );
  }

});
