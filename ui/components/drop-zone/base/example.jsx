// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { UtilityIcon } from '../../icons/base/example';
import MediaObject from '../../../utilities/media-objects/index.react';
import ButtonIcon from '../../button-icons/';
import { ButtonGroup } from '../../button-groups/base/example';
import Card, { CardHeader, CardBody, CardFooter } from '../../cards';
import PropTypes from 'prop-types';

export const Demo = props => (
  <div className="demo-only" style={{ paddingTop: '2rem' }}>
    {props.children}
  </div>
);

Demo.propTypes = {
  children: PropTypes.node
};

export const DemoComponent = props => (
  <div
    className="demo-only demo-component"
    style={{ width: '100%', height: '10rem' }}
  >
    {props.children}
  </div>
);

DemoComponent.propTypes = {
  children: PropTypes.node
};

export const DropZone = props => (
  <div
    className={classNames('slds-drop-zone', {
      'slds-drop-zone_drag': props.isDragging
    })}
  >
    {props.children}
  </div>
);

DropZone.propTypes = {
  isDragging: PropTypes.bool,
  children: PropTypes.node
};

export const DropZoneInsertionPoint = props => (
  <div className="slds-drop-zone_drag__slot" />
);

export const DropZoneContainer = props => (
  <div
    className={classNames('slds-drop-zone__container', {
      'slds-is-hovered': props.isHovered
    })}
    tabIndex="-1"
  >
    <DropZoneLabel isContainer headerText="Component Name" />
    {props.children}
    {props.hasActions && (
      <div className="slds-drop-zone__actions">
        <ButtonGroup>
          <ButtonIcon
            className="slds-button_icon-x-small"
            theme="brand"
            symbol="move"
            assistiveText="Move"
            title="Move"
          />
          <ButtonIcon
            className="slds-button_icon-x-small"
            theme="brand"
            symbol="close"
            assistiveText="Close"
            title="Close"
          />
        </ButtonGroup>
      </div>
    )}
  </div>
);

DropZoneContainer.propTypes = {
  hasActions: PropTypes.bool,
  isHovered: PropTypes.bool,
  children: PropTypes.node
};

const DropZoneIcon = props => (
  <UtilityIcon
    symbol={props.isContainer ? 'connected_apps' : 'builder'}
    className="slds-icon slds-icon_x-small slds-icon-text-default"
    containerClassName="slds-current-color"
    title={false}
    assistiveText={false}
  />
);

DropZoneIcon.propTypes = {
  isContainer: PropTypes.bool
};

export const DropZoneLabel = props => (
  <div
    className={classNames('slds-drop-zone__label', {
      'slds-drop-zone__label_container': props.isContainer
    })}
  >
    <MediaObject
      figureLeft={<DropZoneIcon isContainer={props.isContainer} />}
      flavor="center"
    >
      {props.isContainer ? (
        <h2>
          <button className="slds-drop-zone__label_button slds-button_reset">
            <span className="slds-assistive-text">Edit: </span>
            <span>{props.headerText}</span>
          </button>
        </h2>
      ) : (
        <h2>{props.headerText}</h2>
      )}
    </MediaObject>
  </div>
);

DropZoneLabel.propTypes = {
  isContainer: PropTypes.bool,
  headerText: PropTypes.string
};

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <DropZone>
        <DemoComponent />
      </DropZone>
    )
  }
];

export let examples = [
  {
    id: 'drag-over',
    label: 'Drag Over',
    element: (
      <Demo>
        <DropZone isDragging>
          <DropZoneLabel headerText="Content" />
          <DemoComponent />
          <DropZoneInsertionPoint />
          <DemoComponent />
        </DropZone>
      </Demo>
    )
  },
  {
    id: 'with-populated-region',
    label: 'With Populated Region',
    element: (
      <Demo>
        <DropZone>
          <DemoComponent />
          <DropZoneContainer isHovered>
            <DemoComponent />
          </DropZoneContainer>
        </DropZone>
      </Demo>
    )
  },
  {
    id: 'with-populated-region-and-actions',
    label: 'With Populated Region and Actions',
    element: (
      <Demo>
        <DropZone>
          <DemoComponent />
          <DropZoneContainer hasActions isHovered>
            <DemoComponent />
          </DropZoneContainer>
        </DropZone>
      </Demo>
    )
  },
  {
    id: 'with-cards',
    label: 'With Cards',
    element: (
      <Demo>
        <DropZone>
          <DropZoneContainer hasActions>
            <Card className="slds-m-bottom_small">
              <CardHeader title="Accounts" showIcon symbol="account" />
              <CardBody hasPadding>Card Body</CardBody>
              <CardFooter linkTabIndex="-1">
                View All <span className="slds-assistive-text">Accounts</span>
              </CardFooter>
            </Card>
          </DropZoneContainer>
          <DropZoneContainer hasActions>
            <Card className="slds-m-top_small">
              <CardHeader title="Accounts" showIcon symbol="account" />
              <CardBody hasPadding>Card Body</CardBody>
              <CardFooter linkTabIndex="-1">
                View All <span className="slds-assistive-text">Accounts</span>
              </CardFooter>
            </Card>
          </DropZoneContainer>
        </DropZone>
      </Demo>
    )
  },
  {
    id: 'dragging-with-cards',
    label: 'Dragging With Cards',
    element: (
      <Demo>
        <DropZone isDragging>
          <DropZoneLabel headerText="Content" />
          <DropZoneContainer hasActions>
            <Card className="slds-m-bottom_small">
              <CardHeader title="Accounts" showIcon symbol="account" />
              <CardBody hasPadding>Card Body</CardBody>
              <CardFooter linkTabIndex="-1">
                View All <span className="slds-assistive-text">Accounts</span>
              </CardFooter>
            </Card>
          </DropZoneContainer>
          <DropZoneInsertionPoint />
          <DropZoneContainer hasActions>
            <Card className="slds-m-top_small">
              <CardHeader title="Accounts" showIcon symbol="account" />
              <CardBody hasPadding>Card Body</CardBody>
              <CardFooter linkTabIndex="-1">
                View All <span className="slds-assistive-text">Accounts</span>
              </CardFooter>
            </Card>
          </DropZoneContainer>
        </DropZone>
      </Demo>
    )
  }
];
