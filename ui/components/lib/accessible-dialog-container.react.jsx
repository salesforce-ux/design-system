/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Helper from 'ui/components/lib/dom-helpers';
import ReactDOM from 'react-dom';

class AccessibleDialogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex: 0};
    this.tabbables = [];
    this.keyup = this.escKeyHide.bind(this);
  }
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.tabbables = [].slice.call(node.querySelectorAll('*')).filter(Helper.tabbable);
    this.tabbables.forEach(t => t.onkeydown = this.tabFocus.bind(this));
    this.componentWillReceiveProps();
    const doc = ReactDOM.findDOMNode(this).ownerDocument || document;
    doc.addEventListener('keyup', this.keyup);
  }
  componentWillUnmount() {
    this.tabbables.forEach(t => t.onkeydown = undefined);
    const doc = ReactDOM.findDOMNode(this).ownerDocument || document;
    doc.removeEventListener('keyup', this.keyup);
  }
  componentWillReceiveProps() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      node.focus();
    }
  }
  escKeyHide(e) {
    if(e.keyCode === Helper.keys.esc) {
      this.props.onEsc();
    }
  }
  tabFocus(e) {
    if(e.keyCode !== Helper.keys.tab) { return true; }
    const currentIdx = this.state.currentIndex;
    const newIdx = e.shiftKey ? currentIdx - 1 : currentIdx + 1;
    this.setState({currentIndex: newIdx});

    if(!this.tabbables[newIdx]) {
      const backTo = e.shiftKey ? this.tabbables.length - 1 : 0;
      this.setState({currentIndex: backTo});
      this.tabbables[backTo].focus();
      Helper.stopEvent(e);
    }
  }
  render() {
    return <div {...this.props} />;
  }
}

export default AccessibleDialogContainer;
