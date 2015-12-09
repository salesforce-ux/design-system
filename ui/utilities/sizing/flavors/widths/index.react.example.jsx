/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { prefix as pf } from 'app_modules/ui/util/component';
import globals from 'app_modules/global';

const cssPrefix = globals.cssPrefix;

export default (
  <div className='demo-only demo-container'>
    <div>
    <div className={pf('size--1-of-1')}>.{cssPrefix}size--1-of-1</div>
    <div className={pf('size--1-of-2')}>.{cssPrefix}size--1-of-2</div>
    <div className={pf('size--1-of-3')}>.{cssPrefix}size--1-of-3</div>
    <div className={pf('size--2-of-3')}>.{cssPrefix}size--2-of-3</div>
    <div className={pf('size--1-of-4')}>.{cssPrefix}size--1-of-4</div>
    <div className={pf('size--2-of-4')}>.{cssPrefix}size--2-of-4</div>
    <div className={pf('size--3-of-4')}>.{cssPrefix}size--3-of-4</div>
    <div className={pf('size--1-of-5')}>.{cssPrefix}size--1-of-5</div>
    <div className={pf('size--2-of-5')}>.{cssPrefix}size--2-of-5</div>
    <div className={pf('size--3-of-5')}>.{cssPrefix}size--3-of-5</div>
    <div className={pf('size--4-of-5')}>.{cssPrefix}size--4-of-5</div>
    <div className={pf('size--1-of-6')}>.{cssPrefix}size--1-of-6</div>
    <div className={pf('size--2-of-6')}>.{cssPrefix}size--2-of-6</div>
    <div className={pf('size--3-of-6')}>.{cssPrefix}size--3-of-6</div>
    <div className={pf('size--4-of-6')}>.{cssPrefix}size--4-of-6</div>
    <div className={pf('size--5-of-6')}>.{cssPrefix}size--5-of-6</div>
    <div className={pf('size--1-of-12')}>.{cssPrefix}size--1-of-12</div>
    <div className={pf('size--2-of-12')}>.{cssPrefix}size--2-of-12</div>
    <div className={pf('size--3-of-12')}>.{cssPrefix}size--3-of-12</div>
    <div className={pf('size--4-of-12')}>.{cssPrefix}size--4-of-12</div>
    <div className={pf('size--5-of-12')}>.{cssPrefix}size--5-of-12</div>
    <div className={pf('size--6-of-12')}>.{cssPrefix}size--6-of-12</div>
    <div className={pf('size--7-of-12')}>.{cssPrefix}size--7-of-12</div>
    <div className={pf('size--8-of-12')}>.{cssPrefix}size--8-of-12</div>
    <div className={pf('size--9-of-12')}>.{cssPrefix}size--9-of-12</div>
    <div className={pf('size--10-of-12')}>.{cssPrefix}size--10-of-12</div>
    <div className={pf('size--11-of-12')}>.{cssPrefix}size--11-of-12</div>
    </div>
  </div>
);
