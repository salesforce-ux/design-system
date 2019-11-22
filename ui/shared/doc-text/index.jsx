// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from '../../../shared/components/Blockquote';

export let MobileBlurb = props => {
  const { patternSpecificText } = props;

  return (
    <Blockquote type="note">
      On mobile devices, such as phones and other devices that have touch as the
      primary method of interaction, {patternSpecificText}. Below is a live
      example of what to expect in that context. No code changes are needed in
      the Salesforce platform context as this change occurs automatically when
      needed. For those users not on the Salesforce platform, adding the class{' '}
      <code class="doc">slds-is-mobile</code> to the{' '}
      <code class="doc">body</code> HTML element will trigger these mobile
      styles.
    </Blockquote>
  );
};

export let MobileNotice = props => {
  const { docsLink, header, elementName } = props;

  return (
    <Blockquote type="note" header={header}>
      Please be aware that in a mobile context <strong>{elementName}</strong>{' '}
      will automatically change slightly as shown in the example below. For more
      details{' '}
      <a href={docsLink}>please see the mobile specific documentation</a> above.
    </Blockquote>
  );
};

MobileNotice.propTypes = {
  docsLink: PropTypes.string,
  header: PropTypes.string
};

export default MobileNotice;
