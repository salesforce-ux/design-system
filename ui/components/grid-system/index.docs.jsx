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
import Img from 'app_modules/ui/img';
import { Link } from 'react-router';
import CTALink from 'app_modules/site/components/cta-link';
import { prefix as pf } from 'app_modules/ui/util/component';

import CodeClass from 'app_modules/site/components/code-class';
import globals from 'app_modules/global';

export default (
<ComponentDocs>
<p className="site-text-introduction">The {globals.displayName} grid, based on Flexbox, provides a flexible, mobile-first, device-agnostic scaffolding system. It includes helper classes that you can use to alter the look and behavior of your grid, such as alignment, order, flow, and padding helpers.</p>

<h2 className={pf('site-text-heading--label')}>Grid Wrapper</h2>
<p>To use the grid system, add the class <CodeClass className="grid"/> to an element, component, or page layout. Grid definitions are independent of one another, define attributes of the grid to a specific region in the app, <em>not</em> an all or nothing solution.</p>
<p>Adding the class <CodeClass className="wrap"/> causes the flow of your <CodeClass className="col"/> elements to wrap when they exceed 100% of their parent’s width.</p>
<p>Easily change the flow direction of your grid by adding a modifier class to the <CodeClass className="grid"/> element. To stack your columns vertically instead of the default row behavior, use <CodeClass className="grid--vertical"/>. Additionally, you can reverse the left to right or top to bottom behavior by adding <CodeClass className="grid--reverse"/></p>
<p>If you want your application to take 100% of the width and height of the viewport and nest other grids within, use the top-level app helper class <CodeClass className="grid--frame"/>.</p>

<h2 className={pf('site-text-heading--label')}>Grid Items (Regions/Colums)</h2>
<p>By adding the class <CodeClass className="col"/> to the grid items, they will use an equal amount of space in the parent container. This automatic sizing allows you to achieve most desired outcomes. However, you can add manual <Link to="/components/utilities/sizing/">sizing classes</Link> to the columns if you need specific column widths.</p>
<p>Grid items have no gutters. They are simply equal divisions of their parent. If you want gutters, remove the class <CodeClass className="col"/> and replace with the class <CodeClass className="col--padded"/>, which adds a 0.75rem (12px) gutter to the left and right side of your column.</p>
<p>Using the manual sizing class helpers, you can specify a column span across the following grids &ndash;2, 3, 4, 5, 6, and 12. The grid supports up to 12 columns.</p>
<p>See <Link to="/components/utilities/sizing/">sizing utilities</Link> for more information and examples.</p>

<h2 className={pf('site-text-heading--label')}>Visual Glossary of Terminology</h2>
<Img className={pf('image')} src="/assets/images/grid/grid-flex-diagram.svg" alt="" />
</ComponentDocs>
);
