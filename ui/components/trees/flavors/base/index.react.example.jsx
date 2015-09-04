/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const StatefulClass = require('ui/components/lib/stateful.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only'>
  <div className={pf('tree-container')} role="application">
    <h4 className={pf('text-heading--label')} id="treeheading">Tree Group Header</h4>
    <ul className={pf('tree')} role="tree" aria-labelledby="treeheading" aria-activedescendant="tree0-node0">
      <li id="tree0-node0" className={pf('tree__branch is-open')} role="treeitem" aria-level="1" aria-expanded="true">
        <div className={pf('tree__item')}>
          <ButtonIcon className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
          <a href="#" id="tree0-node0-link" tabIndex="-1" role="presentation">Tree Branch</a>
        </div>
        <ul className={pf('tree__group nested is-expanded')} role="group" aria-labelledby="tree0-node0-link">
          <li id="tree0-node0-0" className={pf('tree__branch is-open')} role="treeitem" aria-level="2" aria-expanded="true">
            <div className={pf('tree__item')}>
              <ButtonIcon className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
              <a href="#" id="tree0-node0-0-link" tabIndex="-1" role="presentation">Tree Branch</a>
            </div>
            <ul className={pf('tree__group nested is-expanded')} role="group" aria-labelledby="tree0-node0-0-link">
              <li id="tree0-node0-0-1" className={pf('tree__item')} role="treeitem" aria-level="3">
                <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
              </li>
              <li id="tree0-node0-0-2" className={pf('tree__item')} role="treeitem" aria-level="3">
                <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                <span className={pf('pill shrink-none align-middle')}>
                  <span className={pf('pill__label')}>Label</span>
                </span>
              </li>
              <li id="tree0-node0-0-3" className={pf('tree__item')} role="treeitem" aria-level="3">
                <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
              </li>
            </ul>
          </li>
          <li id="tree0-node0-1" className={pf('tree__item')} role="treeitem" aria-level="2">
            <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
          </li>
          <li id="tree0-node0-2" className={pf('tree__item')} role="treeitem" aria-level="2">
            <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
          </li>
          <li id="tree0-node0-2" className={pf('tree__item')} role="treeitem" aria-level="2">
            <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
);
