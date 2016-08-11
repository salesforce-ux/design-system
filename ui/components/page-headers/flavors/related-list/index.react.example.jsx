/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import BreadCrumbs from 'ui/components/breadcrumbs/index.react';
const {Crumb} = BreadCrumbs;
import Button from 'ui/components/buttons/index.react';
import { ButtonIcon } from 'ui/components/button-icon/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import Heading from 'ui/components/heading/index.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
  <div className="slds-page-header" role="banner">
    <div className={pf('grid')}>
      <div className={pf('col has-flexi-truncate')}>
        <BreadCrumbs className={pf('m-bottom--xx-small')}>
          <Crumb href="javascript:void(0);">Accounts</Crumb>
          <Crumb href="javascript:void(0);">Company One</Crumb>
        </BreadCrumbs>
        <h1 className={pf('page-header__title truncate')} title="Contacts (will truncate)">Contacts (will truncate)
        </h1>
      </div>
      <div className={pf('col no-flex grid align-top')}>
        <div className={pf('button-group')}>
          <Button flavor="neutral">
            Add Contact
          </Button>
          <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
            <ButtonIcon
              className={pf('button--icon-border-filled')}
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions" />
          </div>
        </div>
      </div>
    </div>
    <div className={pf('grid')}>
      <div className={pf('col align-bottom')}>
        <p className={pf('text-body--small')}>10 items &bull; sorted by name</p>
      </div>
      <div className={pf('col no-flex grid align-bottom')}>
        <div className={pf('dropdown-trigger dropdown-trigger--click')} aria-expanded="false">
          <ButtonIcon
            className={pf('button--icon-more')}
            symbol="table"
            hasDropdown
            assistiveText="Change view" />
        </div>
        <div className={pf('button-group m-left--xx-small')} role="group">
          <ButtonIcon
            className={pf('button--icon-border')}
            symbol="chart"
            assistiveText="Chart" />
          <ButtonIcon
            className={pf('button--icon-border')}
            symbol="filterList"
            assistiveText="Filter List" />
          <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
            <ButtonIcon
              className={pf('button--icon-more')}
              symbol="sort"
              hasDropdown
              assistiveText="Sort" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
