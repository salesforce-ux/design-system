/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only">
  <div className={pf('tree_container')} role="application">
    <h4 className={pf('text-heading--label')} id="treeheading">Tree Group Header</h4>

    <ul className={pf('tree')} role="tree" aria-labelledby="treeheading" aria-activedescendant="tree0-node1">

      <li id="tree0-node0" role="treeitem" aria-level="1">
        <div className={pf('tree__item')}>
          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
        </div>
      </li>

      <li id="tree0-node1" role="treeitem" aria-level="1" aria-expanded="true">

        <div className={pf('tree__item')} >
          <ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
          <a href="#" id="tree0-node1__label" tabIndex="-1" role="presentation">Tree Branch</a>
        </div>

        <ul className={pf('is-expanded')} role="group" aria-labelledby="tree0-node1__label">

          <li id="tree0-node1-0" role="treeitem" aria-level="2">
            <div className={pf('tree__item')}>
              <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
            </div>
          </li>

          <li id="tree0-node1-1" role="treeitem" aria-level="2" aria-expanded="true">

            <div className={pf('tree__item')} >
              <ButtonIcon aria-controls="tree0-node1-1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
              <a href="#" id="tree0-node1-1__label" tabIndex="-1" role="presentation">Tree Branch</a>
            </div>

            <ul className={pf('is-expanded')} role="group" aria-labelledby="tree0-node1-1__label">

              <li id="tree0-node1-1-0" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                </div>
              </li>

              <li id="tree0-node1-1-1" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                  <span className={pf('pill shrink-none align-middle m-left--small')}>
                    <span className={pf('pill__label')}>Label</span>
                  </span>
                </div>
              </li>

              <li id="tree0-node1-1-2" role="treeitem" aria-level="3" aria-expanded="false">

                <div className={pf('tree__item')} >
                  <ButtonIcon aria-controls="tree0-node1-1-2" className={pf('align-middle m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
                  <a href="#" id="tree0-node1-1-2__label" tabIndex="-1" role="presentation">Tree Branch</a>
                </div>

                <ul className={pf('is-collapsed')} role="group" aria-labelledby="tree0-node1-1-2__label">

                  <li id="tree0-node1-1-2-0" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                    </div>
                  </li>

                  <li id="tree0-node1-1-2-1" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                      <span className={pf('pill shrink-none align-middle m-left--small')}>
                        <span className={pf('pill__label')}>Label</span>
                      </span>
                    </div>
                  </li>

                  <li id="tree0-node1-1-2-2" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                    </div>
                  </li>

                </ul>
              </li>

              <li id="tree0-node1-1-3" role="treeitem" aria-level="3" aria-expanded="true">

                <div className={pf('tree__item')} >
                  <ButtonIcon aria-controls="tree0-node1-1-3" className={pf('align-middle m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
                  <a href="#" id="tree0-node1-1-3__label" tabIndex="-1" role="presentation">Tree Branch</a>
                </div>

                <ul className={pf('is-expanded')} role="group" aria-labelledby="tree0-node1-1-3__label">

                  <li id="tree0-node1-1-3-1" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                    </div>
                  </li>

                  <li id="tree0-node1-1-3-2" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                      <span className={pf('pill shrink-none align-middle m-left--small')}>
                        <span className={pf('pill__label')}>Label</span>
                      </span>
                    </div>
                  </li>

                  <li id="tree0-node1-1-3-3" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                    </div>
                  </li>

                  <li id="tree0-node1-1-3-4" role="treeitem" aria-level="4" aria-expanded="true">

                    <div className={pf('tree__item')} >
                      <ButtonIcon aria-controls="tree0-node1-1-3-4" className={pf('align-middle m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
                      <a href="#" id="tree0-node1-1-3-4__label" tabIndex="-1" role="presentation">Tree Branch</a>
                    </div>

                    <ul className={pf('is-expanded')} role="group" aria-labelledby="tree0-node1-1-3__label">

                      <li id="tree0-node1-1-3-4-1" role="treeitem" aria-level="5">
                        <div className={pf('tree__item')}>
                          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                        </div>
                      </li>

                      <li id="tree0-node1-1-3-4-2" role="treeitem" aria-level="5">
                        <div className={pf('tree__item')}>
                          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                          <span className={pf('pill shrink-none align-middle m-left--small')}>
                            <span className={pf('pill__label')}>Label</span>
                          </span>
                        </div>
                      </li>

                      <li id="tree0-node1-1-3-4-3" role="treeitem" aria-level="5">
                        <div className={pf('tree__item')}>
                          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                        </div>
                      </li>

                    </ul>
                  </li>

                  <li id="tree0-node1-1-3-5" role="treeitem" aria-level="4">
                    <div className={pf('tree__item')}>
                      <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                    </div>
                  </li>
                </ul>
              </li>

              <li id="tree0-node1-1-4" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                </div>
              </li>

            </ul>
          </li>

          <li id="tree0-node1-2" role="treeitem" aria-level="2">
            <div className={pf('tree__item')}>
              <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
            </div>
          </li>

          <li id="tree0-node1-3" role="treeitem" aria-level="2">
            <div className={pf('tree__item')}>
              <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
            </div>
          </li>

          <li id="tree0-node1-4" role="treeitem" aria-level="2" aria-expanded="true">

            <div className={pf('tree__item')} >
              <ButtonIcon aria-controls="tree0-node1-4" className={pf('align-middle m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
              <a href="#" id="tree0-node1-4__label" tabIndex="-1" role="presentation">Tree Branch</a>
            </div>

            <ul className={pf('is-expanded')} role="group" aria-labelledby="tree0-node1-4__label">

              <li id="tree0-node1-4-1" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                </div>
              </li>

              <li id="tree0-node1-4-2" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                  <span className={pf('pill shrink-none align-middle m-left--small')}>
                    <span className={pf('pill__label')}>Label</span>
                  </span>
                </div>
              </li>

              <li id="tree0-node1-4-3" role="treeitem" aria-level="3">
                <div className={pf('tree__item')}>
                  <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
                </div>
              </li>
            </ul>
          </li>

        </ul>
      </li>

      <li id="tree0-node2" role="treeitem" aria-level="1">
        <div className={pf('tree__item')}>
          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
        </div>
      </li>

      <li id="tree0-node3" role="treeitem" aria-level="1">
        <div className={pf('tree__item')}>
          <a href="#" tabIndex="-1" role="presentation" className={pf('truncate')}>Tree Item</a>
        </div>
      </li>

    </ul>
  </div>
</div>
);
