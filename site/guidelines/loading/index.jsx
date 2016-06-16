/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PageBody from 'app_modules/site/components/page/body';
import CodeBlock from 'app_modules/ui/code-block';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Loading" contentClassName={pf('site-guidelines site-guidelines-loading site-text-longform')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">Loading indicators help to reassure the user that the system is actively retrieving data.</p>

      {/* Spinners */}
      <h2 className={pf('site-text-heading--large')}>Spinners</h2>
      <p><strong>Show spinners when retrieving data or performing slow computations.</strong></p>
      <p>Spinners are animated SVGs or GIFs. They reduce the use of awkward white screens and blank containers to communicate that the system is working. Use spinners when a component on a page is making an asynchronous update without refreshing the page.</p>
      <div className={pf('site-diagram-section-list grid wrap')}>
        <figure className={pf('large-size--1-of-2')}>
          <img className="image" src="/assets/images/loading/img-loading-card.svg" alt="Wireframe image of card loading" />
          <figcaption>Card</figcaption>
        </figure>
        <div className={pf('site-diagram-section-middle large-size--1-of-2')}>
          <p>Center the spinner horizontally and vertically within the container. Don’t place spinners directly over text or other visual elements on a page without first applying a light or dark mask.</p>
        </div>
      </div>
      <div className={pf('site-diagram-section-list grid wrap')}>
        <figure className={pf('large-size--1-of-2')}>
          <img className="image" src="/assets/images/loading/img-loading-lazy.svg" alt="Wireframe image of lazy loading" />
          <figcaption>List View</figcaption>
        </figure>
        <div className={pf('site-diagram-section-middle large-size--1-of-2')}>
          <p>If necessary, you can use a text label to communicate what the system is doing, such as “Uploading data …”</p>
        </div>
      </div>

      {/* Spinner Examples */}
      <div className={pf('p-vertical--x-large')}>
        <p>Example Spinner Loading Process:</p>
        <ul className={pf('grid wrap grid--pull-padded-large')}>
          <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2 medium-size--1-of-3')}>
            <figure>
              <img className="image" src="/assets/images/loading/img-loading-record.svg" alt="Wireframe image of record home card loading" />
              <figcaption>Card Loading</figcaption>
            </figure>
          </li>
          <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2 medium-size--1-of-3')}>
            <figure>
              <img className="image" src="/assets/images/loading/img-loading-lazy.svg" alt="Wireframe image of lazy loading" />
              <figcaption>Lazy Loading</figcaption>
            </figure>
          </li>
          <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2 medium-size--1-of-3')}>
            <figure>
              <img className="image" src="/assets/images/loading/img-loading-list.svg" alt="Wireframe image of list loading" />
              <figcaption>List Loading</figcaption>
            </figure>
          </li>
          <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2 medium-size--1-of-3')}>
            <figure>
              <img className="image" src="/assets/images/loading/img-loading-modal.svg" alt="Wireframe image of modal loading" />
              <figcaption>Modal Loading</figcaption>
            </figure>
          </li>
          <li className={pf('col--padded-large size--1-of-1 small-size--1-of-2 medium-size--1-of-3')}>
            <figure>
              <img className="image" src="/assets/images/loading/img-loading-page.svg" alt="Wireframe image of full screen loading" />
              <figcaption>Full Screen Loading</figcaption>
            </figure>
          </li>
        </ul>
      </div>

      {/* Stencils */}
      <div className={pf('p-vertical--x-large')}>
        <h2 className={pf('site-text-heading--large')}>Stencils</h2>
        <p><strong>Stencils are placeholders that visually communicate that content is in the process of loading.</strong></p>
        <div className={pf('site-side-by-side site-side-by-side--img-left grid wrap m-bottom--x-large')}>
          <figure className={pf('size--1-of-1 medium-size--1-of-2 shrink-none')}>
            <img className={pf('image')} src="/assets/images/loading/img-stencils.svg" alt="Wireframe image of stencil loading" />
          </figure>
          <div className={pf('size--1-of-1 medium-size--1-of-2 grow-none')}>
            <p className={pf('p-top--x-large')}>Stencils abstractly represent what the resulting content layout will look like. Use stencils for full page refreshes, not asynchronous updates. Stencils offer a more visually appealing experience than dozens of spinners animating at the same time or a blank white page.</p>
            <p>Use stencils when data takes longer than 300 ms to retrieve. For less than 300 ms, just show the data. If the data takes 301 ms to load, the stencil fades-in promptly and then cross-fades to the data. Do not have a “white flash” between stencils and data.</p>
            <p>If a component is only displayed when it has data, then don’t show a stencil.</p>
          </div>
        </div>
        <p>Keep stencils simple and lightweight, by using simple, subtle shapes to indicate content, but don’t include the placement of buttons and other UI elements. Keep the shape heights consistent to reduce visual noise.</p>
        <p>Stencils should be responsive and stretch to fill the container that they are in.</p>
        <p>Load stencils from the top left of the page to the bottom right.</p>
      </div>

      {/* Stencils */}
      <div className={pf('grid wrap nowrap--medium grid--pull-padded-large p-vertical--x-large')}>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className={pf('site-text-heading--medium')}>Table Data Loading Stencil</h2>
          <p className={pf('grow')}>For table lists, don’t fill the screen up with stencils. Render a table data row stencil 20 times and reduce the opacity of each row by 5% to create a fade effect from 100% to 0% opacity, giving an infinite data effect. (see example below)</p>
          <figure>
            <img className={pf('image')} src="/assets/images/loading/img-stencil-table.svg" alt="Wireframe image of table stencil" />
          </figure>
        </div>
        <div className={pf('grid grid--vertical col--padded-large medium-size--1-of-2')}>
          <h2 className={pf('site-text-heading--medium')}>Record Detail Stencil</h2>
          <p className={pf('grow')}>Feed fades out over five instances to indicate infinite scroll. Each related list shows one instance of the component-specific stencil. </p>
          <figure>
            <img className={pf('image')} src="/assets/images/loading/img-stencil-record.svg" alt="Wireframe image of record stencil" />
          </figure>
        </div>
      </div>
    </div>
  </PageBody>
);
