// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'ui/components/cards/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';

export default (
  <Card>
    <CardHeader symbol="contact" actions="search" search><span className="slds-text-heading--small">Contacts (2)</span></CardHeader>
    <CardBody>
      <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col">
              <label className="slds-checkbox" htmlFor="select-all">
                <input type="checkbox" name="options" id="select-all" />
                <span className="slds-checkbox--faux"></span>
                <span className="slds-assistive-text">Select All</span>
              </label>
            </th>
            <th scope="col"><div className="slds-truncate" title="Name">Name</div></th>
            <th scope="col"><div className="slds-truncate" title="Company">Company</div></th>
            <th scope="col"><div className="slds-truncate" title="Title">Title</div></th>
            <th scope="col"><div className="slds-truncate" title="Email">Email</div></th>
          </tr>
        </thead>
        <tbody>
          <tr className="slds-hint-parent slds-is-selected">
            <td className="slds-cell-shrink">
              <label className="slds-checkbox" htmlFor="select-row-01">
                <input type="checkbox" name="options" id="select-row-01" defaultChecked />
                <span className="slds-checkbox--faux"></span>
                <span className="slds-assistive-text">Select Row</span>
              </label>
            </td>
            <th scope="row"><div className="slds-truncate" title="Adam Choi"><a href="javascript:void(0);">Adam Choi</a></div></th>
            <td><div className="slds-truncate" title="Company One">Company One</div></td>
            <td><div className="slds-truncate" title="Director of Operations">Director of Operations</div></td>
            <td><div className="slds-truncate" title="adam@company.com">adam@company.com</div></td>
          </tr>
          <tr className="slds-hint-parent">
            <td className="slds-cell-shrink">
              <label className="slds-checkbox" htmlFor="select-row-01">
                <input type="checkbox" name="options" id="select-row-01" />
                <span className="slds-checkbox--faux"></span>
                <span className="slds-assistive-text">Select Row</span>
              </label>
            </td>
            <th scope="row"><div className="slds-truncate" title="Adam Choi"><a href="javascript:void(0);">Adam Choi</a></div></th>
            <td><div className="slds-truncate" title="Company One">Company One</div></td>
            <td><div className="slds-truncate" title="Director of Operations">Director of Operations</div></td>
            <td><div className="slds-truncate" title="adam@company.com">adam@company.com</div></td>
          </tr>
        </tbody>
      </table>
    </CardBody>
    <CardFooter><a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a></CardFooter>
  </Card>
);
