/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const Helper = {
  focusable: function(element) {
    var nodeName = element.nodeName.toLowerCase(),
      hasTabIndex = element.tabIndex >= 0;
    return /input|select|textarea|button|object/.test(nodeName)
      ? !element.disabled
      : nodeName === 'a' || nodeName === 'area'
        ? element.href || hasTabIndex
        : hasTabIndex;
  },

  tabbable: function(element) {
    return (element.tabIndex >= 0) || Helper.focusable(element);
  },

  keys: {
    space: 32,
    esc: 27,
    tab: 9,
    directions: {'37': 'left', '38': 'up', '39': 'right', '40': 'down'}
  },

  stopEvent: function(e) {
    e.preventDefault();
    e.stopPropagation();
    return true;
  },

  click: function(target) {
    const event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': true });
    target.dispatchEvent(event);
  }

};

export default Helper;
