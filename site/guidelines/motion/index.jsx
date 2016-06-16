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
import ToggleExample from 'app_modules/site/components/motion-and-animation/toggle-example';
import Button from 'ui/components/buttons/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Motion" contentClassName={pf('site-guidelines site-guidelines-motion')}>
    <div className={pf('container--x-large')}>
      <div className={pf('m-bottom--xx-large')}>
        <h2 className="site-text-heading--large">Key Principles</h2>
        <ul className={pf('site-motion-principle-list grid wrap grid--pull-padded-large text-align--center')}>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-timing.svg" alt="Timing Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Timing</dt>
                <dd><hr className="hr hr--blue" />
                  A “grid of time” creates consistent rhythm. Animation is defined as multiples of a base grid.
                </dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-elevation.svg" alt="Elevation Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Elevation</dt>
                <dd><hr className="hr hr--blue"/>Utilizing the Z-axis to support spatial organization aids in creating a visual hierarchy we refer to as “atmosphere”.</dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 large-size--1-of-3')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-effects.svg" alt="Effects Image" style={{height: '60px'}} />
              <dl>
                <dt className="site-text-heading--label-weak-large">Effects</dt>
                <dd><hr className="hr hr--blue" />Attributes are animated over time to create a vocabulary of effects.</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
      <div className={pf('m-bottom--xx-large')}>
        <h2 className="site-text-heading--large">Type of Animation</h2>
        <ul className={pf('site-motion-principle-list grid wrap grid--pull-padded-large text-align--center')}>
          <li className={pf('col--padded-large size--1-of-1 medium-size--1-of-2 large-size--1-of-4')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-enter-exit.svg" alt="Enter then Exit Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Enter & Exit</dt>
                <dd><hr className="hr hr--blue" />
                  The appearance or disappearance of an object on the screen.
                </dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 medium-size--1-of-2 large-size--1-of-4')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-emphasis.svg" alt="Emphasis Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Emphasis</dt>
                <dd><hr className="hr hr--blue"/>Drawing attention to an object that is already on the screen.</dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 medium-size--1-of-2 large-size--1-of-4')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-transitional.svg" alt="Transitional Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Transitional </dt>
                <dd><hr className="hr hr--blue" />Informing the user that a context change is taking place.</dd>
              </dl>
            </div>
          </li>
          <li className={pf('col--padded-large size--1-of-1 medium-size--1-of-2 large-size--1-of-4')}>
            <div className="grid-card">
              <img src="/assets/images/motion/img-personality.svg" alt="Personality and Branding Image" />
              <dl>
                <dt className="site-text-heading--label-weak-large">Personality & Branding</dt>
                <dd><hr className="hr hr--blue" />Characteristics or sequences of engaging animation that create surprise and delight.</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>

      <div className={pf('grid wrap grid--pull-padded-large p-bottom--xx-large')}>
        <div className={pf('col--padded-large size--1-of-1 large-size--1-of-2 p-top--large')}>
          <h2 className="site-text-heading--large">Physical Mass</h2>
          <p>Objects in the physical world have mass, thus they speed up from a
            standstill and slow down to a stop. When choose easing:</p>
          <ul>
            <li>use <strong>ease-in-out</strong> for moving point to point</li>
            <li>use <strong>ease-out</strong> for entering elements</li>
            <li>use <strong>ease-in</strong> for exiting elements</li>
            <li>use <strong>linear</strong> for opacity or color changes</li>
          </ul>
        </div>
        <div className={pf('col--padded-large size--1-of-1 large-size--1-of-2 p-top--large')}>
          <h2 className="site-text-heading--large">Other Considerations</h2>
          <p>The object being moved or animated should abide by these guiding principles:</p>
          <ul>
            <li><strong>subtle motion</strong> is preferred</li>
            <li><strong>short timing</strong> makes the interface brisk</li>
            <li><strong>avoid strong flashing or large motion</strong> as it can lead to user discomfort</li>
          </ul>
        </div>
      </div>
      <div className={pf('site-side-by-side grid wrap m-bottom--xx-large')}>
        <div className={pf('size--1-of-1 medium-size--1-of-2 grow-none')}>
          <h2 className={pf('site-text-heading--large p-top--xx-large')}>Elevation</h2>
            <p>Elevation suggests a conceptual hierarchy that makes use of box shadows
              to indicate visual hierarchy. The actual Z-index is up to the developer
              to maintain the correct shadows.</p>
            <p>Atmosphere is the virtual space in front and behind the screen. The plane
              of the screen has an X,Y coordinate system with <code>0,0</code> in the top left.
              However, the Z elevation is the imaginary normal pointed at the user, -Z
              descent is beyond the plane of the screen.</p>
            <p><em>Note: the Z axis is not the same as the CSS Z-index (which is
                a DOM element stacking order). The Z-indexes should be set as
                to maintain the sense of Z being towards the user.</em></p>
            <p>The elevation of an object in the atmosphere is visually rendered as
              box shadows. The amount of elevation is <em>not</em> the same as the Z-index, rather
              its relative elevation which aids in rendering the shadow.</p>
        </div>
        <figure className={pf('size--1-of-1 medium-size--1-of-2 shrink-none text-align--left')}>
          <img className={pf('image')} src="/assets/images/motion/img-elevation-perspective.svg" alt="Elevation Perspective Image" />
        </figure>
      </div>

      <div className={pf('p-vertical--xx-large')}>
        <div className={pf('atmosphere-graph')}>
          <div className="atmosphere-vertical-ruler" />

          <div className="atmosphere-hline" style={{bottom: '26rem'}} />
          <div className="atmosphere-hline" style={{bottom: '25rem'}} />
          <div className="atmosphere-hline" style={{bottom: '24rem'}} />
          <div className="atmosphere-hline" style={{bottom: '23rem'}} />

          <div className="atmosphere-hlabel" style={{bottom: '22rem'}}>
            <span>15</span>
            <div className="atmosphere-hline" />
          </div>

          <div className="atmosphere-hline" style={{bottom: '21rem'}} />
          <div className="atmosphere-hline" style={{bottom: '20rem'}} />
          <div className="atmosphere-hline" style={{bottom: '19rem'}} />
          <div className="atmosphere-hline" style={{bottom: '18rem'}} />

          <div className="atmosphere-hlabel" style={{bottom: '17rem'}}>
            <span>10</span>
            <div className="atmosphere-hline" />
          </div>

          <div className="atmosphere-hline" style={{bottom: '16rem'}} />
          <div className="atmosphere-hline" style={{bottom: '15rem'}} />
          <div className="atmosphere-hline" style={{bottom: '14rem'}} />
          <div className="atmosphere-hline" style={{bottom: '13rem'}} />

          <div className="atmosphere-hlabel" style={{bottom: '12rem'}}>
            <span>5</span>
            <div className="atmosphere-hline" />
          </div>

          <div className="atmosphere-hline" style={{bottom: '11rem'}} />
          <div className="atmosphere-hline" style={{bottom: '10rem'}} />
          <div className="atmosphere-hline" style={{bottom: '9rem'}} />
          <div className="atmosphere-hline" style={{bottom: '8rem'}} />

          <div className="atmosphere-hline atmosphere-0-line" style={{bottom: '7rem'}} />
          <div className="atmosphere-hlabel" style={{bottom: '8rem'}}>
            <span>GROUND</span>
          </div>

          <div className="atmosphere-hline" style={{bottom: '6rem'}} />
          <div className="atmosphere-hline" style={{bottom: '5rem'}} />
          <div className="atmosphere-hline" style={{bottom: '4rem'}} />
          <div className="atmosphere-hline" style={{bottom: '3rem'}} />

          <div className="atmosphere-hlabel" style={{bottom: '2rem'}}>
            <span>-5</span>
            <div className="atmosphere-hline" />
          </div>

          <div className="atmosphere-hline" style={{bottom: '1rem'}} />

          <span className="elevation-dot elevation-dot-sunken"><span>-3</span></span>
          <span className="elevation-dot elevation-dot-grounded"><span>0</span></span>
          <span className="elevation-dot elevation-dot-raised"><span>2</span></span>
          <span className="elevation-dot elevation-dot-floating"><span>4</span></span>
          <span className="elevation-dot elevation-dot-flying"><span>16</span></span>
        </div>
      </div>

      <div className={pf('p-vertical--xx-large')}>
        To implement the shadows in code there are <a href="/tokens/#category-atmosphere">Design Tokens</a> you
        can include in the CSS <code>box-shadow</code> attribute.
      </div>
      <div className={pf('p-bottom--xx-large')}>
        <h2 className="site-text-heading--large">Timing</h2>
        <p>Timings are a set of duration values. Values are calculated as even
          multiples of <code>100ms</code>, which is 6 frames at 60 frames-per-second (3 frames at 30 frames-per-second).</p>
        <p>To use the timing tokens see the <a href="/tokens/#category-timing">timing section</a>.</p>
      </div>
      <div>
        <h2 className="site-text-heading--large">Named Animations</h2>
        <p>This is a vocabulary of animations. Click to run individual demos:</p>
        <ul className={pf('grid wrap grid--pull-padded-large')}>
          <ToggleExample which="fade" toggle={true} title="fade out, fade in" description="opacity change" />
          <ToggleExample which="color" toggle={true} title="color" description="color transition" />
          <ToggleExample which="grow" toggle={true} title="grow" description="scale increase" />
          <ToggleExample which="shrink" toggle={true} title="shrink" description="scale decrease" />
          <ToggleExample which="fall" toggle={true} title="fall, rise" description="Scaling, elevation, opacity" />
          <ToggleExample which="lower" toggle={true} title="lower" description="scale decrease, elevation" />
          <ToggleExample which="raise" toggle={true} title="raise" description="scale increase, elevation" />
          <ToggleExample which="pop" toggle={false} title="pop" description="scaling, elevation" />
          <ToggleExample which="punch" toggle={false} title="punch" description="scaling, elevation" />
          <ToggleExample which="shake" toggle={false} title="shake" description="horizontal translation" />
          <ToggleExample which="jiggle" toggle={false} title="jiggle" description="vertical translation" />
          <ToggleExample which="slide" toggle={true} title="slide" description="translation, opacity" />
          <ToggleExample which="flip" toggle={true} title="flip" description="Y-axis rotate" />
          <ToggleExample which="roll" toggle={true} title="roll" description="X-axis rotate" />
          <ToggleExample which="spin" toggle={true} title="spin" description="full rotation" />
          <ToggleExample which="tilt" toggle={true} title="tilt" description="slight X-axis rotation" />
          <ToggleExample which="twist" toggle={true} title="twist" description="slight rotation" />
        </ul>
      </div>
    </div>
  </PageBody>
);
