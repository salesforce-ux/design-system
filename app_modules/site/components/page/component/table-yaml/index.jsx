/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import CodeClass from 'app_modules/site/components/code-class';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';
import g from 'app_modules/global';

class TableYAML extends React.Component {

  getRows() {
    const { data } = this.props;

    return (data.classes || []).map((d, dIndex) => {
      let sanitizedClass = d.class.replace(/\W/g, '');
      let required = null;

      if (d.required) {
        required = [
          <SvgIcon key={`required-${dIndex}-icon`} className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="check" />,
          <span key={`required-${dIndex}-asst`} className={pf('assistive-text')}>Required</span>
        ];
      }
      return <tr key={`tableyaml-${sanitizedClass}-${dIndex}`}>
        <th scope="row"><CodeClass className={d.class} /></th>
        <td data-label="Outcome" dangerouslySetInnerHTML={{__html: d.description}} />
        <td data-label="Required" className={pf('cell-shrink')}>{required}</td>
        <td data-label="Applied to" className={pf('cell-shrink')} dangerouslySetInnerHTML={{__html: d.applied}}></td>
        <td data-label="Comments" dangerouslySetInnerHTML={{__html: d.notes}} />
      </tr>;
    });
  }

  render() {
    const { data } = this.props;
    return <div id="overview">
      <div className={pf('site-text-longform m-bottom--medium')}>
        <h4 className={pf('p-top--xx-large site-text-heading--large')}>Component Overview</h4>
        <div dangerouslySetInnerHTML={{__html: data.description}} />
      </div>
      <div className={pf('scrollable--x')}>
        <table className={pf('table table--bordered max-medium-table--stacked no-row-hover')}>
          <thead>
            <tr className="site-text-heading--label">
              <th scope="col">{g.abbreviatedName} class</th>
              <th scope="col">Outcome</th>
              <th scope="col">Required</th>
              <th scope="col">Applied to</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    </div>;
  }

}

export default TableYAML;
