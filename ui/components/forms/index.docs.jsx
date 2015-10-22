/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Radio = require('ui/components/forms/flavors/radio/index.react');
const Checkbox = require('ui/components/forms/flavors/checkbox/index.react');
const Input = require('ui/components/forms/flavors/input/index.react');
const Textarea = require('ui/components/forms/flavors/textarea/index.react');
const Select = require('ui/components/forms/flavors/select/index.react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const globals = require('app_modules/global');
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
<ComponentDocs>
  <p className="site-text-introduction">An HTML form contains interactive controls to submit information to a web server.</p>
  <p>For optimum spacing and layout, wrap each element in <CodeClass className="form-element" />. Layout helper classes are available through the following class names, <CodeClass className="form--stacked" />, <CodeClass className="form--horizontal" /> and <CodeClass className="form--inline" />.</p>
  <p>Every form field requires an associated, non-empty text <code>&lt;label&gt;</code> element, which is linked to the form field either by wrapping the <code>&lt;label&gt;</code> tag around the field or by giving the <code>&lt;label&gt;</code> a <code>for</code> attribute whose value is that input field&rsquo;s id. This association ensures that assistive technology users can tell what information to enter where.</p>
  <h3 className={pf('text-heading--small')}>Form Example</h3>
  <form role="form" className={pf('form--stacked grid wrap grid--pull-padded-large m-top--large')}>
    <div className={pf('col--padded size--1-of-1 medium-size--1-of-2')}>
      <Input label="Opportunity Name" placeholder="Moderna 10k" assistiveText="Opportunity Name" />
      <Input label="Account Name" placeholder="Moderno Bistro" assistiveText="Account Name" />
      <Input label="Contact Name" placeholder="John Smith" assistiveText="Contact Name" />
      <Input label="Contact Email" placeholder="jsmith@moderna.com" assistiveText="Contact Email" help="Example Form Element Help" />
      <Textarea label="Notes" assistiveText="textarea"></Textarea>
    </div>
    <div className={pf('col--padded size--1-of-1 medium-size--1-of-2')}>
      <div className={pf('form-element has-divider--bottom')}>
        <span className={pf('form-element__label')}>Opportunity Owner</span>
        <div className={pf('form-element__control')}>
          <span className={pf('form-element__static')}>Erin Buck</span>
        </div>
      </div>
      <Input label="Amount" assistiveText="Amount" />
      <Input label="Probability" placeholder="100" assistiveText="Probability" />
      <fieldset className={pf('form-element is-required')}>
        <legend className={pf('form-element__label form-element__label--top')}>Options</legend>
        <div className={pf('form-element__control')}>
          <Radio name="options" label="Lead Generation" assistiveText="lead" />
          <Radio name="options" label="Education Leads" assistiveText="education" />
          <Radio name="options" label="Pass to Partner" assistiveText="partner" />
        </div>
      </fieldset>
      <fieldset className={pf('form-element')}>
        <legend className={pf('form-element__label form-element__label--top')}>Default</legend>
        <div className={pf('form-element__control')}>
          <Checkbox name="default" label="All opportunities owned by you" assistiveText="opportunities ownership" />
          <Checkbox name="default" label="All contacts in the account owned by you" assistiveText="contact ownership" />
        </div>
      </fieldset>
    </div>
  </form>
</ComponentDocs>
);
