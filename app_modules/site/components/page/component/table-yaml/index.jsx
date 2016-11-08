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
import g from 'app_modules/global';

class TableYAML extends React.Component {

  renderRows() {
    let classes = this.props.data.classes || [];
    return classes.map((d, index) => {
      let sanitizedClass = d.class.replace(/\W/g, '');
      let required = d.required
        ? <p>
            <SvgIcon key={`required-${index}-icon`} className="slds-icon slds-icon--x-small slds-icon-text-default" sprite="utility" symbol="check" />
            <span key={`required-${index}-asst`} className="slds-assistive-text">Required</span>
          </p>
        : <p>No, optional element or modifier</p>;
      let notes = d.notes
        ? <p dangerouslySetInnerHTML={{__html: d.notes}} />
        : <p>--</p>;
      let deprecated = d.deprecated
        ? <span className="slds-badge slds-shrink-none slds-align-middle badge--deprecated">Deprecated</span>
        : null;
      return (
        <tr key={`tableyaml-${sanitizedClass}-${index}`}>
          <th className="slds-cell-shrink slds-align-top" scope="row">
            <CodeClass className={d.class} />
            <div>
              {deprecated}
            </div>
          </th>
          <td className="slds-size--1-of-3 slds-cell-wrap slds-align-top" scope="col">
            <strong>Applied to:</strong>
            <p dangerouslySetInnerHTML={{__html: d.applied}} />
            <strong>Outcome:</strong>
            <p dangerouslySetInnerHTML={{__html: d.description}} />
          </td>
          <td className="slds-size--1-of-3 slds-cell-wrap slds-align-top" scope="col">
            <strong>Required:</strong>
            {required}
            <strong>Comments:</strong>
            {notes}
          </td>
        </tr>
      );
    });
  }

  render() {
    const { data } = this.props;
    return <div className="site-table--overview">
      <div className="site-text-longform slds-m-bottom--medium">
        <h4 className="slds-p-top--xx-large site-text-heading--label">Usage</h4>
        <div dangerouslySetInnerHTML={{__html: data.description}} />
      </div>
      <div className="slds-scrollable--x">
        <table className="slds-table slds-table--bordered slds-max-medium-table--stacked slds-no-row-hover">
          <thead>
            <tr className="site-text-heading--label">
              <th className="slds-theme--shade">Class Name</th>
              <th colSpan="2" className="slds-theme--shade">Usage</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    </div>;
  }

}

export default TableYAML;
