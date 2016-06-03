/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Card, CardHeader, CardBody, CardFooter } from 'ui/components/cards/flavors/base/index.react.example';
import className from 'classnames';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ minWidth: '230px', maxWidth: '320px' }}>
    <Card className={pf('card--narrow')}>
      <CardHeader symbol="contact" actions="overflow"><span className={pf('text-heading--small')}>Contacts (3)</span></CardHeader>
      <CardBody>
        <div className={pf('card__body--inner')}>
          <Tile title="Related Record Title 1">
            <dl className={pf('dl--horizontal')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Type">Type:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="Visit">Visit</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Date">Date:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="1/31/15 3:45PM">1/31/15 3:45PM</p>
              </dd>
            </dl>
          </Tile>
          <Tile title="Related Record Title 2">
            <dl className={pf('dl--horizontal')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Type">Type:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="Visit">Visit</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Date">Date:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="1/31/15 3:45PM">1/31/15 3:45PM</p>
              </dd>
            </dl>
          </Tile>
          <Tile title="Related Record Title 3">
            <dl className={pf('dl--horizontal')}>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Type">Type:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="Visit">Visit</p>
              </dd>
              <dt className={pf('dl--horizontal__label')}>
                <p className={pf('truncate')} title="Date">Date:</p>
              </dt>
              <dd className={pf('dl--horizontal__detail tile__meta')}>
                <p className={pf('truncate')} title="1/31/15 3:45PM">1/31/15 3:45PM</p>
              </dd>
            </dl>
          </Tile>
        </div>
      </CardBody>
      <CardFooter><a href="javascript:void(0);">View All <span className={pf('assistive-text')}>entity type</span></a></CardFooter>
    </Card>
  </div>
);
