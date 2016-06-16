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
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
  <PageBody anchorTitle="Localization" contentClassName={pf('site-design site-design-layout')}>
    <div className={pf('container--large')}>
      <p className="site-text-introduction">
        Salesforce is committed to providing a high-quality experience to
        international customers.
      </p>

      <h2 className="site-text-heading--large">Introduction</h2>

      <figure>
        <blockquote>
          “Internationalization (i18n) is the process of designing a software
          application so that it can potentially be adapted to various
          languages and regions without engineering changes. Localization
          (l10n) is the process of adapting internationalized software for a
          specific region or language by adding locale-specific components and
          translating text.”
        </blockquote>

        <figcaption>
          <cite>
            &mdash;
            <a
              href="https://en.wikipedia.org/wiki/Internationalization_and_localization"
              title="Internationalization and localization on Wikipedia">
              Wikipedia
            </a>
          </cite>
        </figcaption>
      </figure>

      <p>
        Here are a number of guidelines for writing content for international
        audiences:
      </p>

      <h2 className="site-text-heading--large">Think About Global Users</h2>

      <h3 className="site-text-heading--medium">
        Be Aware of the Cultural Significance of Colors
      </h3>

      <p>
        For example, the color red is associated with warning and danger in
        Western cultures, while it symbolizes luck and happiness in some Asian
        cultures, like China and Japan.
      </p>

      <h3 className="site-text-heading--medium">
        Avoid Using Flags to Represent Languages
      </h3>

      <p>
        Language and country are different concepts. Flags are symbols that
        represent countries or nations while languages represent a shared
        method of communication between people. For example, Spanish is spoken
        in 29 countries and Spain is only one of them. Countries like Canada
        have more than 1 official language. Which language do you think the
        maple flag represents?
      </p>

      <p>
        When designing a language selector, use plain text despite its lack of
        visual appeal. Only use flags to represent countries, not languages.
      </p>

      <h2 className="site-text-heading--large">Design for Text Expansion</h2>

      <p>
        When English text gets translated to another language, the translated
        text can be as much as three times longer. Leave blank space around
        condensed UI components, such as buttons and tabs.
      </p>

      <p>
        Make UI components expandable whenever possible. Do not assign a
        fixed-width or height to your UI component unless you have a good
        reason.
      </p>

      <p>
        For longer text, wrapping is a good solution. Be aware of the
        potential vertical expansion since translated text will take more
        lines.
      </p>

      <p>
        Truncation with hover text can be a compromise. Be aware that this
        brings the risk of making the UI less effective.
      </p>

      <h2 className="site-text-heading--large">
        Make Label Text and Inline Forms Independent from Each Other
      </h2>

      <p>
        Another typical UI pattern that introduces a localization issue is the
        use of inline forms such as input fields or dropdown lists in the
        middle of a sentence. This problem is caused by the fact that most
        languages do not follow the same word order as English. Due to this
        fact, the inline forms need to be repositioned to accommodate correct
        sentence structure in translated text.
      </p>

      <figure className={pf('p-vertical--xx-large')}>
        <form className={pf('form--inline')} aria-hidden>
          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="name">
              Date Range
            </label>

            <div className={pf('form-element__control')}>
              <div className={pf('slds-select_container')}>
                <select className={pf('slds-select')} tabIndex={-1}
                  value="Current FQ">
                  <option>Current FQ</option>
                </select>
              </div>
            </div>
          </div>

          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="name">
              From
            </label>

            <div className={pf('form-element__control')}>
              <input id="name" className={pf('input')} type="text"
                value="10/1/2015" tabIndex={-1} />
            </div>
          </div>

          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="email">
              To
            </label>

            <div className={pf('form-element__control')}>
              <input id="email" className={pf('input')} type="text"
                value="12/31/2015" tabIndex={-1} />
            </div>
          </div>
        </form>

        <figcaption className={pf('text-body--small p-top--large')}>
          Example inline form with From and To form fields with labels
          reading: From Date To Date.
        </figcaption>
      </figure>

      <p>
        When “From DATE1 To DATE2” is translated into other languages, for
        example Japanese, the word order will change to “DATE1 から、DATE2
        まで” (DATE1 From DATE2 To), which will cause grammatically incorrect
        translation unless we reposition inline forms in Japanese
        specifically. This will require language-specific CSS, which increases
        complexity.
      </p>

      <p>
        Since repositioning inline forms per language is not practical and
        adds CSS maintenance costs, we suggest avoiding any UI components in
        the middle of a sentence. If you have to, consider using a colon to
        connect the label and UI component and try to make the label a full
        sentence. In the previous example, we can use “Start: DATE1 End:
        DATE2” to make the label more independent.
      </p>

      <figure className={pf('p-vertical--xx-large')}>
        <form className={pf('form--inline')} aria-hidden>
          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="name">
              Date Range
            </label>

            <div className={pf('form-element__control')}>
              <div className={pf('slds-select_container')}>
                <select className={pf('slds-select')} tabIndex={-1}
                  value="Current FQ">
                  <option>Current FQ</option>
                </select>
              </div>
            </div>
          </div>

          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="name">
              From:
            </label>

            <div className={pf('form-element__control')}>
              <input id="name" className={pf('input')} type="text"
                value="10/1/2015" tabIndex={-1} />
            </div>
          </div>

          <div className={pf('form-element')}>
            <label className={pf('form-element__label')} for="email">
              To:
            </label>

            <div className={pf('form-element__control')}>
              <input id="email" className={pf('input')} type="text"
                value="12/31/2015" tabIndex={-1} />
            </div>
          </div>
        </form>

        <figcaption className={pf('text-body--small p-top--large')}>
          Example inline form with From and To form fields each having a
          colon after their labels.
        </figcaption>
      </figure>

      <div className={pf('grid grid--pull-padded wrap m-top--xx-large')}>
        <div className={pf('col--padded size--1-of-1 large-size--2-of-3')}>
          <h2 className="site-text-heading--large">
            Make Your CSS Localization-Friendly
          </h2>

          <h3 className="site-text-heading--medium">
            Avoid Forced Capitalization in CSS
          </h3>

          <p>
            Capitalization can be very tricky, even in English. There are
            different rules for capitalization at the title, header, and
            sentence level. These rules keep changing. In most English style
            guides, almost every word in a title or heading is capitalized
            except for articles and prepositions. Here is an example of
            dropdown in Chatter Feed. Every word in English is capitalized:
          </p>
        </div>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-3')}>
          <figure>
            <img
              src="/assets/images/design/localization/localization-menu-english.png"
              alt="Dropdown menu in English" />

            <figcaption className={pf('text-body--small p-top--large')}>
              Example dropdown menu in English with capitalized words in
              options.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={pf('grid grid--pull-padded wrap m-vertical--xx-large')}>
        <div className={pf('col--padded size--1-of-1 large-size--2-of-3')}>
          <p>
            In French, however, only the first word is capitalized. This also
            applies to other continental European languages (Spanish, Italian)
            and Nordic languages (Danish, Finnish, Norwegian). In fact, in
            many languages, capitalization is used less than in English. For
            example, a language’s name, calendar months and organization names
            are capitalized in English, but none of these are capitalized in
            French.
          </p>

          <p>
            Due to these differences, it’s important that a developer avoids
            using CSS to handle capitalization. Leave capitalization up to the
            translators since they are the experts when it comes to styling
            rules in their own languages.
          </p>
        </div>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-3')}>
          <figure>
            <img
              src="/assets/images/design/localization/localization-menu-french.png"
              alt="Dropdown menu in French" />

            <figcaption className={pf('text-body--small p-top--large')}>
              Example dropdown menu in French with only the first letter of
              each option capitalized.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={pf('grid grid--pull-padded wrap m-vertical--xx-large')}>
        <div className={pf('col--padded size--1-of-1 large-size--2-of-3')}>
          <h3 className="site-text-heading--medium">
            Enforce Text Alignment in a Smart Way
          </h3>

          <p>
            Text alignment is a common styling in CSS and is widely used for
            UI text in components such as buttons, menus and tabs. As in text
            editors where you can use space to center a text, in CSS you can
            center text by adding padding to a component. But a simpler and
            more localization-friendly way is using CSS text align property.
          </p>

          <p>
            Here is an example of a case record from Milestone Tracker. The
            word “Done!” here is centered by adding a 40-pixel padding to the
            left and right as well as a width.
          </p>
        </div>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-3')}>
          <figure>
            <img
              src="/assets/images/design/localization/localization-button-done-english.png"
              alt="Button with centered text 'Done!'" />

            <figcaption className={pf('text-body--small p-top--large')}>
              Example dropdown menu in English with capitalized words in options.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={pf('grid grid--pull-padded wrap m-vertical--xx-large')}>
        <div className={pf('col--padded size--1-of-1 large-size--2-of-3')}>
          <p>
            This looks perfect in English; however, when “Done!” gets
            translated into Portuguese, the text becomes longer and begins to
            overflow.
          </p>

          <p>
            The hassle-free way to handle alignment is using the
            CSS <code>text-align</code> property, which is a better solution
            than moving text over using padding.
          </p>
        </div>

        <div className={pf('col--padded size--1-of-1 large-size--1-of-3')}>
          <figure>
            <img
              src="/assets/images/design/localization/localization-button-done-portuguese.png"
              alt="Button with centered text 'Done!'" />

            <figcaption className={pf('text-body--small')}>
              Button with centered text &lsquo;Done!&rsquo;
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="site-text-heading--large">
        Text Length and Size Expansion Considerations
      </h2>

      <p>
        When UI text gets translated into another language, the text length
        often changes. For example, English is a very compact language,
        leading to longer translated text in most cases.
      </p>

      <p>
        The general rule for text expansion is: &ldquo;the shorter the English
        text, the longer the translated text is likely to be&rdquo;. The
        following table shows the average text expansion rate for different
        English text lengths from <a
          href="http://www-01.ibm.com/software/globalization/guidelines/a3.html"
          title="IBM: Guideline A, User interface">
          IBM’s localization guidelines
        </a>:
      </p>

      <figure className={pf('p-vertical--xx-large')}>
        <table className={pf('table table--bordered')}>
          <thead>
            <tr className={pf('text-heading--label')}>
              <th scope="col">
                <div className={pf('truncate')}>English Text Length</div>
              </th>

              <th scope="col">
                <div className={pf('truncate')}>Expansion</div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>1 - 10</th>

              <td className={pf('truncate')}>100 - 200%</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>11 - 20</th>

              <td className={pf('truncate')}>80 - 100%</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>21 - 30</th>

              <td className={pf('truncate')}>60 - 80%</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>31 - 50</th>

              <td className={pf('truncate')}>40 - 60%</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>51 - 70</th>

              <td className={pf('truncate')}>50 - 70%</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>71+</th>

              <td className={pf('truncate')}>30%</td>
            </tr>
          </tbody>
        </table>

        <figcaption className={pf('text-body--small p-top--large')}>
          English word expansion guidelines
        </figcaption>
      </figure>

      <p>
        In addition to English text length, the target language also has an
        impact upon the amount of expansion. The following table shows the
        expansion factor for the English text “Share” into various languages:
      </p>

      <figure className={pf('p-vertical--xx-large')}>
        <table className={pf('table table--bordered')}>
          <thead>
            <tr className={pf('text-heading--label')}>
              <th scope="col">
                <div className={pf('truncate')}>Language</div>
              </th>

              <th scope="col">
                <div className={pf('truncate')}>“Share”</div>
              </th>

              <th scope="col">
                <div className={pf('truncate')}>Expansion Factor</div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>English</th>

              <td className={pf('truncate')}>Share</td>

              <td className={pf('truncate')}>1.0</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>German</th>

              <td className={pf('truncate')}>Freigeben</td>

              <td className={pf('truncate')}>1.8</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>French</th>

              <td className={pf('truncate')}>Partager</td>

              <td className={pf('truncate')}>1.5</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>Spanish</th>

              <td className={pf('truncate')}>Compartir</td>

              <td className={pf('truncate')}>1.8</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>Italian</th>

              <td className={pf('truncate')}>Condividi</td>

              <td className={pf('truncate')}>1.7</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>Japanese</th>

              <td className={pf('truncate')}>共有</td>

              <td className={pf('truncate')}>0.8</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>Chinese</th>

              <td className={pf('truncate')}>共享</td>

              <td className={pf('truncate')}>0.8</td>
            </tr>

            <tr className={pf('hint-parent')}>
              <th className={pf('truncate')}>Korean</th>

              <td className={pf('truncate')}>공유</td>

              <td className={pf('truncate')}>0.7</td>
            </tr>
          </tbody>
        </table>

        <figcaption className={pf('text-body--small p-top--large')}>
          Expansion factor for the English word “Share”
        </figcaption>
      </figure>

      <p>
        In general, Asian languages are more space-friendly since they tend to
        be more compact than European languages. But there’s no “always”. CJK
        (Chinese, Japanese and Korean) languages have more complicated
        characters than Latin characters and their characters tend to be more
        square, thus taking more horizontal space. Japanese is especially
        problematic due to it’s use of Katakana for transliteration of foreign
        words. For example, “Follow” in English and Japanese both have 6
        characters, but Japanese is 20% longer than English due to wider
        characters.
      </p>

      <figure className={pf('p-vertical--xx-large')}>
        <div className={pf('grid grid--pull-padded wrap')}>
          <div className={pf('col--padded size--1-of-1 large-size--1-of-2')}>
            <img
              src="/assets/images/design/localization/localization-anchor-english.png"
              alt="Page header English" />
          </div>

          <div className={pf('col--padded size--1-of-1 large-size--1-of-2')}>
            <img
              src="/assets/images/design/localization/localization-anchor-japanese.png"
              alt="Page header Japanese" />
          </div>
        </div>

        <figcaption className={pf('text-body--small p-top--large')}>
          Comparison of Japanese text expansion of “Follow”
        </figcaption>
      </figure>
    </div>
  </PageBody>
);
