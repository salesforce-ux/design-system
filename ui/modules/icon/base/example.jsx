import React from 'react';
import Icon from '../';

export default (
  <Icon sprite="utility" symbol="add" title="add" assistiveText="add" />
);

export let examples = [
  {
    id: 'action',
    label: 'Action Icons',
    element: (
      <React.Fragment>
        <Icon sprite="action" symbol="call" />
        <Icon sprite="action" symbol="new_campaign" size="x-large" />
        <Icon sprite="action" symbol="dial_in" size="large" />
        <Icon sprite="action" symbol="approval" size="medium" />
        <Icon sprite="action" symbol="flow" size="small" />
        <Icon sprite="action" symbol="call" size="x-small" />
        <Icon sprite="action" symbol="call" size="xx-small" />
      </React.Fragment>
    )
  },
  {
    id: 'standard',
    label: 'Standard Icons',
    element: (
      <React.Fragment>
        <Icon sprite="standard" symbol="opportunity" title="opportunity" />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="x-large"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="large"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="medium"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="small"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="x-small"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          size="xx-small"
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          unset
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          unset
          color="success"
        />
      </React.Fragment>
    )
  },
  {
    id: 'custom',
    label: 'Custom Icons',
    element: (
      <React.Fragment>
        <Icon sprite="custom" symbol="custom1" />
        <Icon sprite="custom" symbol="custom2" size="x-large" />
        <Icon sprite="custom" symbol="custom3" size="large" />
        <Icon sprite="custom" symbol="custom4" size="medium" />
        <Icon sprite="custom" symbol="custom5" size="small" />
        <Icon sprite="custom" symbol="custom6" size="x-small" />
        <Icon sprite="custom" symbol="custom7" size="xx-small" />
        <Icon sprite="custom" symbol="custom1" unset />
        <Icon sprite="custom" symbol="custom1" unset color="muted" />
      </React.Fragment>
    )
  },
  {
    id: 'doctype',
    label: 'Doctype Icons',
    element: (
      <React.Fragment>
        <Icon sprite="doctype" symbol="ai" />
        <Icon sprite="doctype" symbol="html" size="x-large" />
        <Icon sprite="doctype" symbol="quip_sheet" size="large" />
        <Icon sprite="doctype" symbol="gform" size="medium" />
        <Icon sprite="doctype" symbol="excel" size="small" />
        <Icon sprite="doctype" symbol="link" size="x-small" />
        <Icon sprite="doctype" symbol="xml" size="xx-small" />
      </React.Fragment>
    )
  },
  {
    id: 'utility',
    label: 'Utility Icons',
    element: (
      <React.Fragment>
        <Icon sprite="utility" symbol="add" />
        <Icon sprite="utility" symbol="animal_and_nature" size="x-large" />
        <Icon sprite="utility" symbol="answer" size="large" />
        <Icon sprite="utility" symbol="change_record_type" size="medium" />
        <Icon sprite="utility" symbol="database" size="small" />
        <Icon sprite="utility" symbol="dislike" size="x-small" />
        <Icon sprite="utility" symbol="favorite" size="xx-small" />
      </React.Fragment>
    )
  },
  {
    id: 'sizes',
    label: 'Icons sizes',
    element: (
      <React.Fragment>
        <Icon size="x-large" symbol="animal_and_nature" />
        <Icon size="large" symbol="classic_interface" />
        <Icon size="medium" symbol="collapse_all" />
        <Icon size="small" symbol="date_time" />
        <Icon size="x-small" symbol="download" />
        <Icon size="xx-small" symbol="filterList" />
      </React.Fragment>
    )
  },
  {
    id: 'boundary',
    label: 'Icons with Boundary Sizes',
    element: (
      <React.Fragment>
        <Icon />
        <Icon boundarySize="x-large" symbol="animal_and_nature" />
        <Icon boundarySize="large" symbol="classic_interface" />
        <Icon boundarySize="medium" symbol="collapse_all" />
        <Icon boundarySize="small" symbol="date_time" />
        <Icon boundarySize="x-small" symbol="download" />
      </React.Fragment>
    )
  },
  {
    id: 'colors',
    label: 'Icons with colors',
    element: (
      <React.Fragment>
        <Icon color="success" symbol="like" />
        <Icon color="warning" symbol="warning" />
        <Icon color="error" symbol="error" />
        <Icon color="muted" symbol="info_alt" />
      </React.Fragment>
    )
  },
  {
    id: 'unset',
    label: 'Unset background and color',
    element: (
      <React.Fragment>
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          unset
        />
        <Icon
          sprite="standard"
          symbol="opportunity"
          title="opportunity"
          unset
          color="success"
        />
        <Icon sprite="custom" symbol="custom1" unset />
        <Icon sprite="custom" symbol="custom1" unset color="muted" />
      </React.Fragment>
    )
  },
  {
    id: 'with-text',
    label: 'Icons with Text',
    element: (
      <React.Fragment>
        <div className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <Icon symbol="pinned" boundarySize="small" />
          </span>
          <span className="slds-media__body">Pinned Item</span>
        </div>
        <div className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <Icon sprite="standard" symbol="account" size="small" />
          </span>
          <span className="slds-media__body">Accounts</span>
        </div>
        <div className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <Icon sprite="action" symbol="call" />
          </span>
          <span className="slds-media__body">Call</span>
        </div>
      </React.Fragment>
    )
  }
];
