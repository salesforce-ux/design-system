/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import classNames from 'classnames';
import fastdom from 'fastdom';

import { $, setClassName, forEach } from '../framework/helpers';

const getPanel = tabLabel =>
  $(`#${tabLabel.getAttribute('aria-controls')}`);

const showPanel = tabLabel =>
  getPanel(tabLabel).forEach(p => setClassName(p, { 'slds-hide': false, 'slds-show': true }));

const hidePanel = tabLabel =>
  getPanel(tabLabel).forEach(p => setClassName(p, { 'slds-hide': true, 'slds-show': false }));

const addActive = tab => {
  const tabLabel = tab.firstChild;
  setClassName(tab, 'slds-active');
  tabLabel.setAttribute('aria-selected', true);
  tabLabel.focus();
  showPanel(tabLabel);
};

const removeActive = tab => {
  const tabLabel = tab.firstChild;
  setClassName(tab, {'slds-active': false});
  tabLabel.setAttribute('aria-selected', false);
  hidePanel(tabLabel);
};

const runTabClick = (tab, otherTabs) => {
  fastdom.mutate(() => {
    forEach(otherTabs, removeActive);
    addActive(tab);
  });
};

const activeTab = ul =>
  $('li', ul).reduce((acc, li) => li.className.indexOf('slds-active') > 0 ? li : acc, null);


const handleTabClick = li => {
  const ul = li.parentElement;
  runTabClick(li, ul.querySelectorAll('li'));
};

const handleKeydown = (event, ul) => {
  const active = activeTab(ul);
  const li = active.nextElementSibling ? active.nextElementSibling : active.previousElementSibling;
  handleTabClick(li);
};

/**
 * TABS
 * Takes an slds tab structure and adds active classes and shows panels
 */
export default () => ({
  hooks: {
    listen_dom: delegate =>  {
      delegate('keydown', '[role="tablist"]', handleKeydown);
      delegate('click', '[role="tablist"] > li', (event, li) => handleTabClick(li));
    }
  }
});
