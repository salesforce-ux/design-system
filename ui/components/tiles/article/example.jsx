// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Tile, TileMedia } from '../base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'tile-article',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>by Steve Author</p>
          <ul className="slds-list_horizontal slds-has-dividers_right">
            <li className="slds-item">Breaking News</li>
            <li className="slds-item">1 day ago</li>
          </ul>
        </Tile>
      </div>
    )
  },
  {
    id: 'tile-article-liker-bar',
    label: 'With like bar',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <Tile title="Company One beats Company Two to the 200-mile affordable electric car">
          <p>
            ...an introduction for beginners about climbing ropes and how they
            can use...
          </p>
          <ul className="slds-list_horizontal slds-has-dividers_right slds-m-top_xx-small">
            <li className="slds-item">000001296</li>
            <li className="slds-item">Published</li>
            <li className="slds-item">How to Guide</li>
          </ul>
          <p>Last Modified: 1/14/16</p>
          <ul className="slds-list_horizontal slds-m-top_xx-small">
            <li className="slds-m-right_small">
              <button
                className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
                aria-pressed="false"
              >
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="like"
                />
                <span className="slds-assistive-text">Upvote</span>
              </button>
              <span className="slds-align-middle">1320</span>
            </li>
            <li>
              <button
                className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small"
                aria-pressed="false"
              >
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="dislike"
                />
                <span className="slds-assistive-text">Downvote</span>
              </button>
              <span className="slds-align-middle">362</span>
            </li>
          </ul>
        </Tile>
      </div>
    )
  }
];
