/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" style={{width: '420px'}}>
    {props.children}
  </div>;

let Tile = props =>
  <div className={className(pf('tile'), props.className)}>
    {props.children}
  </div>;

let TileGrid = props =>
  <div className={pf('grid grid--align-spread has-flexi-truncate')}>
    {props.children}
  </div>;

let TileTitle = props =>
  <p className={pf('tile__title truncate')}>
    {props.children}
  </p>;

let TileBody = props =>
  <div className={pf('tile__detail text-body--small')}>
    {props.children}
  </div>;

let ActionButon = props =>
  <ButtonIcon
    className={pf('shrink-none')}
    flavor="icon-border-filled,icon-x-small"
    iconFlavor="hint,small"
    sprite="utility"
    symbol="down"
    assistiveText="Show More" />;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" id={props.id} disabled={props.disabled} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('form-element__label assistive-text')}>{props.label}</span>
  </label>;

const icon = (
  <SvgIcon className={pf('icon icon-standard-groups')} sprite="standard" symbol="groups" />
);

const image = (
  <span className={pf('avatar avatar--circle avatar--small')}>
    <img src="/assets/images/avatar2.jpg" alt="Person's name" />
  </span>
);

const checkbox = ( <Checkbox id="checkbox-01" label="Did you complete this task?" /> );

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Tile>
      <TileTitle><a href="javascript:void(0);">Salesforce UX</a></TileTitle>
      <TileBody>
        <p className={pf('truncate')}>26 Members</p>
      </TileBody>
    </Tile>
  </Demo>;

let WithIcon = props =>
  <Demo>
    <MediaObject figureLeft={icon} className={pf('tile')}>
      <TileTitle><a href="javascript:void(0);">Salesforce UX</a></TileTitle>
      <TileBody>
        <p className={pf('truncate')}>26 Members</p>
      </TileBody>
    </MediaObject>
  </Demo>;

let WithImage = props =>
  <Demo>
    <MediaObject figureLeft={image} className={pf('tile')}>
      <TileTitle><a href="javascript:void(0);">Lexee L. Jackson</a></TileTitle>
      <TileBody>
        <ul className={pf('list--horizontal has-dividers')}>
          <li className={pf('truncate list__item')}>VP, Marketing</li>
          <li className={pf('truncate list__item')}>Decision Maker</li>
        </ul>
      </TileBody>
    </MediaObject>
  </Demo>;

let WithAction = props =>
  <Demo>
    <MediaObject figureLeft={icon} className={pf('tile hint-parent')}>
      <TileGrid>
        <TileTitle><a href="javascript:void(0);">Salesforce UX</a></TileTitle>
        <ActionButon />
      </TileGrid>
      <TileBody>
        <p className={pf('truncate')}>26 Members</p>
      </TileBody>
    </MediaObject>
  </Demo>;

let WithBadge = props =>
  <Demo>
    <MediaObject figureLeft={image} className={pf('tile')}>
      <TileGrid>
        <TileTitle><a href="javascript:void(0);">Jack Rogers</a></TileTitle>
        <span className={pf('badge')}>Primary</span>
      </TileGrid>
      <TileBody>
        <p className={pf('truncate')}>VP, Facilities</p>
      </TileBody>
    </MediaObject>
  </Demo>;

let Generic = props =>
  <Demo>
    <MediaObject figureLeft={image} className={pf('tile hint-parent')}>
      <TileGrid>
        <TileTitle><a href="javascript:void(0);">Salesforce UX</a></TileTitle>
        <ActionButon />
      </TileGrid>
      <TileBody>
        <dl className={pf('dl--horizontal text-body--small')}>
          <dt className={pf('dl--horizontal__label')}>
            <p className={pf('truncate')}>Title:</p>
          </dt>
          <dd className={pf('dl--horizontal__detail tile__meta')}>
            <p className={pf('truncate')}>VP, Facilities</p>
          </dd>
          <dt className={pf('dl--horizontal__label')}>
            <p className={pf('truncate')}>Email:</p>
          </dt>
          <dd className={pf('dl--horizontal__detail tile__meta')}>
            <p className={pf('truncate')}>jrogers@burlingtion.com</p>
          </dd>
          <dt className={pf('dl--horizontal__label')}>
            <p className={pf('truncate')}>Phone:</p>
          </dt>
          <dd className={pf('dl--horizontal__detail tile__meta')}>
            <p className={pf('truncate')}>(415) 444-4444</p>
          </dd>
        </dl>
      </TileBody>
    </MediaObject>
  </Demo>;

let Task = props =>
  <Demo>
    <MediaObject figureLeft={checkbox} className={pf('tile')}>
      <TileGrid>
        <TileTitle><a href="javascript:void(0);">The Trammel Crow Company</a></TileTitle>
        <span className={pf('badge')}>Today</span>
      </TileGrid>
      <TileBody>
        <p className={pf('truncate')}>Assignee</p>
      </TileBody>
    </MediaObject>
  </Demo>;

let Author = props =>
  <Demo>
    <Tile>
      <TileTitle><a href="javascript:void(0);">Company One beats Company Two to the 200-mile affordable electric car</a></TileTitle>
      <TileBody>
        <p>by Steve Author</p>
        <ul className={pf('list--horizontal has-dividers tile__meta')}>
          <li className={pf('list__item')}>Breaking News</li>
          <li className={pf('list__item')}>1 day ago</li>
        </ul>
      </TileBody>
    </Tile>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'tile-with-icon',
    label: 'With icon',
    element: <WithIcon />
  },
  {
    id: 'tile-with-image',
    label: 'With image',
    element: <WithImage />
  },
  {
    id: 'tile-with-action',
    label: 'With action',
    element: <WithAction />
  },
  {
    id: 'tile-with-badge',
    label: 'With badge',
    element: <WithBadge />
  },
  {
    id: 'tile-generic',
    label: 'Generic',
    element: <Generic />
  },
  {
    id: 'tile-task',
    label: 'Task',
    element: <Task />
  },
  {
    id: 'tile-author',
    label: 'Author',
    element: <Author />
  }
];
