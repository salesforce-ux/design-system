/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

import Heading from 'app_modules/site/components/page/heading';
import RowHeader from './row-header';
import Row from './row';
import ValueCell from './cell-value';
import { prefix as pf } from 'app_modules/ui/util/component';

export default class CategorySection extends React.Component {

  constructor(props) {
    super(props);
    this.key = '';
  }

  render() {
    const { category, tokens } = this.props;
    if (!tokens.length) return null;
    return (
      <section
        className={pf(`site-tokens ${category.key}`)}
        data-slds-tokens-section={category.key}>
        <Heading
          type="h2"
            id={`category-${category.key}`}
            className={pf('p-top--xx-large site-text-heading--large site-text-heading--callout')}>
          <span className={pf('grid wrap')}>
            <span className={pf('col align-bottom')}>{category.label}</span>
          </span>
        </Heading>
        {!category.description ? null : <p className="slds-m-bottom--x-large">
          {category.description}
        </p>}
        <div className={pf('scrollable--x')}>
          <table className={pf('table max-medium-table--stacked')}>
            <RowHeader key={`${category.key}-header`} />
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  renderRows() {
    const { category, tokens, options } = this.props;
    const { nameFormat } = options;
    return tokens.map(token => {
      return (
        <Row
          key={`${token.name}-row`}
          category={category}
          token={token}
          nameFormat={nameFormat} />
      );
    });
  }

}
