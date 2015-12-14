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
import { createChainedFunction } from 'app_modules/ui/util/component';
import { logCTAEvent } from 'app_modules/site/util/analytics';
import { Link } from 'react-router';
import { find } from 'lodash';
import sitemap from 'app_modules/site/navigation/sitemap';
import _ from 'lodash';

class CTALink extends React.Component {

  onClick() {
    logCTAEvent(this.props.ctaEventName, this.props.ctaExtraValues);
  }

  render() {
    let click = createChainedFunction(this.props.onClick, this.onClick.bind(this));
    let props = _.assign({}, this.props, {onClick: click});
    let hasRoute = sitemap.getRouteByPath(props.href);
    if (hasRoute) {
      return <Link to={props.href} {...props}>{this.props.children}</Link>;
    } else {
      return <a {...props}>{this.props.children}</a>;
    }
  }

}

CTALink.displayName = 'CTALink';
CTALink.propTypes = {
  ctaEventName: React.PropTypes.string,
  ctaExtraValues: React.PropTypes.object
};

export default CTALink;
