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
import CTALink from 'app_modules/site/components/cta-link';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Voice & Tone" contentClassName={pf('container--large')}>
    <p className="site-text-introduction">
      Your custom applications shouldn’t just look and act like the Salesforce
      app – they should sound like it too.
    </p>

    <p>
      At Salesforce, we have guidelines we follow when we create written
      content. We apply the guidelines to text that appears in the app,
      including on-screen instructions and error messages. We use the same
      guidelines for other types of information, such as online help,
      developer doc, Walkthroughs, and Trailhead modules.
    </p>

    <p>
      Use the Voice & Tone Guidelines to get a quick introduction to our unique voice and tone, and to
      understand how to apply it to your work. The doc provides some quick
      writing guidelines, and includes great examples of the voice and tone
      from the app and the doc.
    </p>

    <form className={pf('p-bottom--medium')} action="/assets/downloads/salesforce-voice-and-tone.pdf">
      <CTALink eventName="Download" eventType="voice-and-tone">
        <button className={pf('button button--neutral')}>
          Download Voice and Tone Guidelines
        </button>
      </CTALink>
    </form>

    <p>
      For more in-depth information about Salesforce style, including details
      around usage, terminology, and punctuation, use
      the <a href="https://developer.salesforce.com/docs/atlas.en-us.salesforce_pubs_style_guide.meta/salesforce_pubs_style_guide/">Salesforce Style Guide for Documentation and User Interface Text</a>.
      This is especially helpful if you’re writing customized help or training
      content.
    </p>
  </PageBody>
);
