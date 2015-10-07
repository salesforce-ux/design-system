/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only demo-container'>
  <div className={pf('grid wrap')}>
    <nav className={pf('col size--1-of-1')}>Header</nav>
    <main className={pf('col size--1-of-2 medium-size--5-of-6 large-size--8-of-12')}>Main</main>
    <aside className={pf('col size--1-of-2 medium-size--1-of-6 large-size--4-of-12')}>Aside</aside>
    <section className={pf('col size--1-of-1 medium-size--1-of-2 large-size--1-of-3')}>Complementary</section>
    <section className={pf('col size--1-of-1 medium-size--1-of-2 large-size--1-of-3')}>Complementary</section>
    <footer className={pf('col size--1-of-1 medium-size--1-of-1 large-size--1-of-3')}>
      <div className={pf('grid wrap')}>
        <div className={pf('col size--1-of-2 medium-size--1-of-1 large-size--6-of-12')}>Content Info</div>
        <div className={pf('col size--1-of-2 medium-size--1-of-1 large-size--6-of-12')}>Content Info</div>
      </div>
    </footer>
  </div>
</div>
);

