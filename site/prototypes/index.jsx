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
import Heading from 'app_modules/site/components/page/heading';
import PageBody from 'app_modules/site/components/page/body';
import Status from 'app_modules/site/util/component/status';
import { prefix as pf } from 'app_modules/ui/util/component';
import { generateUI } from '../../scripts/gulp/generate-ui';

const crazyHackForUtilitiesNav = url =>
  url.replace('/utilities', '/components/utilities');

class Prototypes extends React.Component {

  prototypes() {
    return _.flatMap(generateUI(), 'components')
    .filter(x => Status.isPrototype(x.status))
    .map(c => this.renderComponentLink(c));
  }

  renderComponentLink(c) {
    const [flavor] = c.flavors;
    const link = crazyHackForUtilitiesNav(`/${c.path}/#flavor-${flavor.id}`);
    return (
      <li>
        <a href={link}>
          {c.title}
        </a>
      </li>
    );
  }

  render () {
    return (
      <PageBody {...this.props} anchorTitle="Prototypes" contentClassName={pf('grid wrap')}>
        <Heading type="h2" id="prototypes" className="site-text-heading--large">Prototypes</Heading>
        <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
          <ul className={pf('list--dotted')}>
            {this.prototypes()}
          </ul>
        </div>
      </PageBody>
    );
  }

}

export default <Prototypes />;
