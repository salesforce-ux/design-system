/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ComponentDocs from 'app_modules/site/components/page/component/docs';
import { prefix as pf } from 'app_modules/ui/util/component';

import CodeClass from 'app_modules/site/components/code-class';
import globals from 'app_modules/global';

export const intro = (
  <p className="site-text-introduction">
    The {globals.displayName} grid, based on Flexbox, provides a flexible, mobile-first, device-agnostic scaffolding system. It includes helper classes that you can use to alter the look and behavior of your grid, such as alignment, order, flow, and padding helpers.
  </p>
);

export default (
<ComponentDocs>
<h2 className={pf('site-text-heading--label')}>Grid Wrapper</h2>
<p>To use the grid system, add the class <CodeClass className="grid" /> to an element, component, or page layout. Each grid is independent of other nested grids. You can limit attributes of each grid to specific regions in the app. A grid style is <em>not</em> an all or nothing solution.</p>
<p>Adding the class <CodeClass className="wrap" /> causes the flow of your <CodeClass className="col" /> elements to wrap when they exceed 100% of their parent’s width.</p>
<p>You can easily change the flow direction of your grid by adding a modifier class to the <CodeClass className="grid" /> element. To stack your columns vertically instead of their default row behavior, use <CodeClass className="grid--vertical" />. You can also reverse the left to right behavior by adding <CodeClass className="grid--reverse" /> or top to bottom by adding <CodeClass className="grid--vertical-reverse" />.</p>
<p>If you want your application to fill 100% of the width and height of the viewport and nest other grids inside, use the top-level app helper class <CodeClass className="grid--frame" />. An assortment of <CodeClass className="container"/> classes are available to contain your grids.</p>

<h2 className={pf('site-text-heading--label')}>Grid Items (Regions/Colums)</h2>
<p>When you add the class <CodeClass className="col" /> to the grid items, no padding or gutters are added. They are simply divisions of their parent. If you want gutters, remove the class <CodeClass className="col" /> and replace it with one of the <CodeClass className="col--padded" /> classes. These will add different sized gutters to the left and right side of your column.</p>
<p>By default, the width of each column within a grid row is determined by the content within. Though this automatic sizing allows you to achieve most desired outcomes, you can add manual <a href="/components/utilities/sizing/">sizing classes</a> to the columns if you need specific column widths.</p>
<p>Using the manual sizing class helpers, you can specify a column span across the following grids &ndash;2, 3, 4, 5, 6, and 12. The grid supports up to 12 columns.</p>

<h2 className={pf('site-text-heading--label')}>Visual Glossary of Terminology</h2>
<img className={pf('image')} src="/assets/images/grid/grid-flex-diagram.svg" alt="" />
</ComponentDocs>
);
