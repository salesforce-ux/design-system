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

const anyFlavorIsPrototype = comp =>
  [comp.flavors.map(x => x.status)]
  .map(Status.and)
  .map(Status.isPrototype)[0];

const componentsWithPrototypes = () =>
  _.flatMap(generateUI(), 'components')
  .filter(anyFlavorIsPrototype);

const Leaf = props => (
  <div className="slds-tree__item">
    <a href={props.link} tabIndex="-1" role="presentation" className="slds-truncate">{props.id}</a>
  </div>
);

const Branch = props => (
  <ul className="slds-tree" role="tree" aria-labelledby="treeheading">
    <li role="treeitem" aria-level="1">
      <Leaf link={props.path} id={props.id} />
      <ul className="slds-tree" role="tree" aria-labelledby="treeheading">
        <li role="treeitem" aria-level="2">
          {props.items.map(i => <Leaf {...i} />) }
        </li>
      </ul>
    </li>
  </ul>
);

const Tree = props => (
  <div className="slds-tree_container" role="application">
    { props.children }
  </div>
);

const flavorLink = (comp, flavor) =>
  crazyHackForUtilitiesNav(`/${comp.path}/#flavor-${flavor.id}`);

const flavors = comp =>
  comp.flavors.map(fl => Object.assign({link: flavorLink(comp, fl)}, fl));

const Prototypes = props => (
  <PageBody {...props} anchorTitle="Prototypes" contentClassName={pf('grid wrap')}>
    <Heading type="h2" id="prototypes" className="site-text-heading--large">Prototypes</Heading>
    <div className={pf('site-main-content col col-rule--right size--1-of-1 large-size--4-of-6 large-order--1')}>
      <Tree>
        { componentsWithPrototypes().map(comp => <Branch id={comp.id} items={flavors(comp)} />) }
      </Tree>
    </div>
  </PageBody>
);

export default <Prototypes />;
