// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from "react";
import classNames from "classnames";

export let Button = props =>
  <button
    className={classNames("slds-button", props.className)}
    disabled={props.disabled}
  >
    {props.children}
  </button>;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Button>Button</Button>;

export let states = [
  {
    id: "disabled",
    label: "Disabled",
    element: <Button disabled>Button</Button>
  }
];
