// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let AppLauncherTile = props =>
  <a
    aria-describedby={ props.draggable ? props.referenceId : null }
    draggable={props.draggable}
    href="javascript:void(0);"
    className={classNames('slds-app-launcher__tile slds-text-link--reset', props.className, {
      'slds-is-draggable': props.draggable,
      'slds-app-launcher__tile--small': props.flavor === 'small',
      'slds-is-grabbed': props.grabbed
    })}
  >
    <div className={classNames('slds-app-launcher__tile-figure', {
      'slds-app-launcher__tile-figure--small': props.flavor === 'small'
    })}
  >
    { props.symbol ? <SvgIcon className={'slds-icon slds-icon-standard-' + props.symbol + ' slds-icon--large'} sprite="standard" symbol={ props.symbol } /> :
      <abbr className={classNames('slds-avatar slds-avatar--large slds-align--absolute-center', props.figureClass)}>{props.objectInitials}</abbr>
      }
      { props.draggable ?
        <span className="slds-icon_container" title="Drag item to a new location">
          <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default" sprite="utility" symbol="rows" />
        </span> : null}
      </div>
      <div className={classNames('slds-app-launcher__tile-body', {
        'slds-app-launcher__tile-body--small': props.flavor === 'small'
      })}
    >
      {props.children}
    </div>
  </a>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <AppLauncherTile objectInitials="SC" figureClass="slds-icon-custom-27">
          <h2 className="slds-text-link">Sales Cloud</h2>
          <p>The primary internal Salesforce org. Used to run our...<span className="slds-text-link">More</span></p>
        </AppLauncherTile>
      </div>
  },
  {
    id: 'draggable',
    label: 'Draggable',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <AppLauncherTile objectInitials="SC" figureClass="slds-icon-custom-27" draggable>
          <h2 className="slds-text-link">Sales Cloud</h2>
          <p>The primary internal Salesforce org. Used to run our...<span className="slds-text-link">More</span></p>
        </AppLauncherTile>
      </div>
  },
  {
    id: 'grabbed',
    label: 'Grabbed',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <AppLauncherTile objectInitials="SC" figureClass="slds-icon-custom-27" draggable grabbed>
          <h2 className="slds-text-link">Sales Cloud</h2>
          <p>The primary internal Salesforce org. Used to run our...<span className="slds-text-link">More</span></p>
        </AppLauncherTile>
      </div>
  }
];
