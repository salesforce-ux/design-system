/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import _ from 'lodash';
import ui from '.generated/ui';
import CTALink from 'app_modules/site/components/cta-link';
import Prefs from 'app_modules/site/preferences';
import PrefsMixin from 'app_modules/site/preferences/mixin';

const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const Utilities = React.createClass({
  mixins: [PrefsMixin],

  render: function() {
    return (
      <div className="site-text-longform">
        <p className="site-text-introduction">
          Creating a new custom component or need some help laying out a page?
          Utilities provide useful helper classes that you can include in your
          markup to consistently and easily accomplish specific spacing
          and layout tasks.
        </p>
        {this.renderDownload()}
      </div>
    );
  },

  renderDownload: function() {
    if (this.hasPreference('role', Prefs.roles.regular)) return null;
    return (
      <a
        href={`/assets/downloads/aura/css/_dev/utilities/index.css`}
        className={pf('button button--neutral')}
        download={`utilities.css`}>
        Download Utilities CSS
      </a>
    );
  }

});

export default (
  <PageBody anchorTitle="Utilities" contentClassName={pf('site-text-longform container--medium')}>
    <Utilities />
  </PageBody>
);
