/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Menu from 'ui/components/menus/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only" style={{height: '640px'}}>
  <div>
    <div aria-hidden="false" role="dialog" className={pf('action-overflow--touch')}>
      <div className={pf('action-overflow--touch__container')}>
        <div className={pf('action-overflow--touch__content')}>
          <div className={pf('action-overflow--touch__body')}>
            <ul role="menu" className={pf('has-block-links--space has-dividers--bottom')}>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-share-post m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="share_post">
                      </SvgIcon>
                    </span>
                    <span>Post</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-task m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_task">
                      </SvgIcon>
                    </span>
                    <span>New Task</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-contact m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_contact">
                      </SvgIcon>
                    </span>
                    <span>New Contact</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-opportunity m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_opportunity">
                      </SvgIcon>
                    </span>
                    <span>New Opportunity</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-lead-convert m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="lead_convert">
                      </SvgIcon>
                    </span>
                    <span>Convert</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-edit m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="edit">
                      </SvgIcon>
                    </span>
                    <span>Edit</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-share-post m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="share_post">
                      </SvgIcon>
                    </span>
                    <span>Post</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-task m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_task">
                      </SvgIcon>
                    </span>
                    <span>New Task</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-contact m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_contact">
                      </SvgIcon>
                    </span>
                    <span>New Contact</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-opportunity m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_opportunity">
                      </SvgIcon>
                    </span>
                    <span>New Opportunity</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-lead-convert m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="lead_convert">
                      </SvgIcon>
                    </span>
                    <span>Convert</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-edit m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="edit">
                      </SvgIcon>
                    </span>
                    <span>Edit</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-share-post m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="share_post">
                      </SvgIcon>
                    </span>
                    <span>Post</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-task m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_task">
                      </SvgIcon>
                    </span>
                    <span>New Task</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-contact m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_contact">
                      </SvgIcon>
                    </span>
                    <span>New Contact</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-new-opportunity m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="new_opportunity">
                      </SvgIcon>
                    </span>
                    <span>New Opportunity</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-lead-convert m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="lead_convert">
                      </SvgIcon>
                    </span>
                    <span>Convert</span>
                  </p>
                </a>
              </li>
              <li className={pf('item')}>
                <a role="menuitem" href="javascript:void(0);">
                  <p className={pf('truncate')}>
                    <span className={pf('icon_container icon_container--circle icon-action-edit m-right--medium')}>
                      <SvgIcon aria-hidden="true" className={pf('icon icon--small')} sprite="action" symbol="edit">
                      </SvgIcon>
                    </span>
                    <span>Edit</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={pf('action-overflow--touch__footer')}>
          <button className="slds-button slds-button--neutral">Cancel</button>
        </div>
      </div>
    </div>
    <div className="slds-backdrop slds-backdrop--open"></div>
  </div>
</div>
);
