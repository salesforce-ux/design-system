/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';

export default (props = {}) =>
  <div
    className="site-shapes"
    style={{
      width: 1, height: 1,
      left: props.x, top: props.y,
      position: 'absolute'
    }}
    data-slds-shapes={JSON.stringify(props)}>
    <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" data-slds-shape="tri">
      <path data-fill="2" d="M90.8,0.5c-1-0.6-2.3-0.6-3.3,0L6.6,47.3c-1,0.6-1.6,1.6-1.6,2.8s0.6,2.2,1.6,2.8l80.9,46.7 c1,0.6,2.3,0.6,3.3,0s1.6-1.6,1.6-2.8V3.3C92.4,2.1,91.8,1.1,90.8,0.5z"/>
      <path data-fill="1" d="M90.8,0.5L90.8,0.5c-1-0.6-2.3-0.6-3.3,0L6.6,47.3c-1,0.6-1.6,1.6-1.6,2.8 c28,0,57.2,0,57.2,0L90.8,0.5z"/>
      <path data-fill="0" d="M62.2,50.1c0,0,14.6-25.3,28.6-49.6c1,0.6,1.6,1.7,1.6,2.8v93.5c0,1.2-0.6,2.2-1.6,2.8 l0,0L62.2,50.1z"/>
    </svg>

    <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" data-slds-shape="cub">
      <path data-fill="2" d="M95.2,30.3c0.1-0.8-0.3-1.6-0.9-2L51.6,0.4c-0.5-0.3-1-0.4-1.5-0.3l0,0c-0.3,0.1-0.7,0.3-0.9,0.5L13.9,31.2 c-0.3,0.3-0.5,0.7-0.6,1.1L4.8,69l0,0v0.2C4.6,70,5,70.9,5.7,71.3l43.8,28.4c0.3,0.2,0.6,0.3,1,0.3s0.8-0.1,1.2-0.4L88,73.8 c0.2-0.1,0.3-0.3,0.4-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9L95.2,30.3z"/>
      <path data-fill="1" d="M39.8,41.2L50.1,0.1c-0.3,0.1-0.7,0.3-0.9,0.5L13.9,31.2c-0.3,0.3-0.5,0.7-0.6,1.1L4.8,69 L39.8,41.2z"/>
      <path data-fill="0" d="M94.3,28.3L51.6,0.4c-0.5-0.3-1-0.4-1.5-0.3L39.8,41.2l48.6,32.2c0.2-0.3,0.3-0.6,0.4-0.9 l6.4-42.2C95.3,29.5,94.9,28.7,94.3,28.3z"/>
    </svg>

    <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" data-slds-shape="dten">
      <path id="dtenCenter" fill="rgb(233, 114, 147)" d="M99.6,41.8L69.9,3.5c-0.2-0.2-0.3-0.3-0.6-0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.1-1-0.1L20,9.3 c-0.7,0.1-1.3,0.6-1.6,1.3L0.1,55.4C0.1,55.6,0,55.8,0,56c0,0.1,0,0.2,0,0.3c0,0.4,0.2,0.8,0.4,1.1L30,95.7c0.4,0.5,1,0.8,1.6,0.8 c0.1,0,0.2,0,0.3,0l48-6.5c0.4-0.1,0.6-0.2,0.9-0.4c0.1,0,0.1-0.1,0.1-0.1c0.2-0.2,0.5-0.6,0.6-0.9l18.3-44.8 C100.1,43.2,100,42.4,99.6,41.8z"/>
      <path data-fill="2" d="M0,56.3c0,0.4,0.2,0.8,0.4,1.1L30,95.7c0.4,0.5,1,0.8,1.6,0.8c0.1,0,0.2,0,0.3,0l48-6.5 c0.4-0.1,0.6-0.2,0.9-0.4L0,56.3z"/>
      <path data-fill="0" d="M99.6,41.8L69.9,3.5c-0.2-0.2-0.3-0.3-0.6-0.5l11.6,86.5c0.2-0.2,0.5-0.6,0.6-0.9l18.3-44.8 C100.1,43.2,100,42.4,99.6,41.8z"/>
      <path data-fill="1"  d="M69,2.9c-0.3-0.1-0.7-0.1-1-0.1L20,9.3c-0.7,0.1-1.3,0.6-1.6,1.3L0.1,55.4C0.1,55.6,0,55.8,0,56 L69,2.9z"/>
    </svg>

    <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" data-slds-shape="rect">
      <path data-fill="2" d="M94.2,65.2L83.6,14.1c-0.1-0.2-0.2-0.5-0.3-0.6c-0.3-0.7-0.9-1.2-1.7-1.4l-52.4-12c-1.1-0.3-2.2,0.3-2.8,1.3L0.3,52 c-0.1,0.3-0.2,0.6-0.3,0.8c-0.1,0.8,0.2,1.6,0.8,2.2l40.6,35.9c0.3,0.3,0.6,0.4,1,0.5l31.4,8.6c0.2,0.1,0.4,0.1,0.7,0.1 s0.7-0.1,1-0.2l0,0c0.5-0.2,0.9-0.6,1.2-1.1L94,66.9C94.2,66.3,94.3,65.8,94.2,65.2z"/>
      <path data-fill="0" d="M94.2,65.2L83.6,14.1c0-0.2-0.1-0.4-0.2-0.5l-30.1,52l22.2,34.3c0.5-0.2,0.9-0.6,1.2-1.1 L94,66.9C94.2,66.3,94.3,65.8,94.2,65.2z"/>
      <path data-fill="1" d="M53.2,65.5l30.1-52c-0.3-0.7-0.9-1.2-1.7-1.4L29.2,0.1c-1.1-0.3-2.2,0.3-2.8,1.3L0.3,52 c-0.1,0.3-0.2,0.6-0.3,0.8L53.2,65.5z"/>
    </svg>
  </div>;
