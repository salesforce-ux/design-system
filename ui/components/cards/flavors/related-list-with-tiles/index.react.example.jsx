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
// Partial(s)
///////////////////////////////////////////

const icon = (
  <div className={pf('icon_container')}>
    <SvgIcon className={pf('icon icon-standard-contact icon--small')} sprite="standard" symbol="contact" />
    <span className={pf('assistive-text')}>Contact</span>
  </div>
);

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Card>
    <CardHeader symbol="contact" actions><span className={pf('text-heading--small')}>Contacts (3)</span></CardHeader>
    <CardBody>
      <div className={pf('card__body--inner grid wrap grid--pull-padded')}>
        <TileMedia title="Related Record Title 1" media={ icon } actions className={pf('card__tile col--padded grow-none size--1-of-1 small-size--1-of-2 medium-size--1-of-3 large-size--1-of-4')}>
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
        </TileMedia>
        <TileMedia title="Related Record Title 1" media={ icon } actions className={pf('card__tile col--padded grow-none size--1-of-1 small-size--1-of-2 medium-size--1-of-3 large-size--1-of-4')}>
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
        </TileMedia>
        <TileMedia title="Related Record Title 1" media={ icon } actions className={pf('card__tile col--padded grow-none size--1-of-1 small-size--1-of-2 medium-size--1-of-3 large-size--1-of-4')}>
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
        </TileMedia>
      </div>
    </CardBody>
    <CardFooter><a href="javascript:void(0);">View All <span className={pf('assistive-text')}>entity type</span></a></CardFooter>
  </Card>
);
