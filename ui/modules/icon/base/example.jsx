import React from 'react';
import Icon from '../';

const IconExample = () => (
  <React.Fragment>
    <Icon />
    <Icon size="x-large" symbol="animal_and_nature" />
    <Icon size="large" symbol="classic_interface" />
    <Icon size="medium" symbol="collapse_all" />
    <Icon size="small" symbol="date_time" />
    <Icon size="x-small" symbol="download" />
    <Icon size="xx-small" symbol="filterList" />
    <Icon color="success" symbol="like" />
    <Icon color="warning" symbol="warning" />
    <Icon color="error" symbol="error" />
    <Icon color="muted" symbol="info_alt" />
  </React.Fragment>
);

export default IconExample;

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
        <Icon sprite="standard" symbol="opportunity" />
        <Icon sprite="standard" symbol="opportunity" size="x-large" />
        <Icon sprite="standard" symbol="opportunity" size="large" />
        <Icon sprite="standard" symbol="opportunity" size="medium" />
        <Icon sprite="standard" symbol="opportunity" size="small" />
        <Icon sprite="standard" symbol="opportunity" size="x-small" />
        <Icon sprite="standard" symbol="opportunity" size="xx-small" />
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
  }
];
