// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from "react";
import classNames from "classnames";

let StatefulButton = props =>
  <button
    className={classNames("slds-button slds-button_stateful", props.className)}
    disabled={props.disabled}
    aria-live="assertive"
  />;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <StatefulButton className="slds-button_neutral slds-not-selected" />
);
