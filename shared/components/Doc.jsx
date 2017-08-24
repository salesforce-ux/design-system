// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from "react";

import styles from "../styles/doc.scss";

export default class extends React.Component {
  componentDidMount() {
    styles.use();
  }
  componentWillUnmount() {
    styles.unuse();
  }
  render() {
    return <div {...this.props} className="🎉" />;
  }
}
