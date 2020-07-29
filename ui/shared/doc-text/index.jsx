// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from '../../../shared/components/Blockquote';

export let MobileBlurb = props => {
  const { patternSpecificText } = props;

  return (
    <Blockquote type="note">
      <p>
        On mobile devices, such as phones and other devices that have touch as
        the primary method of interaction, {patternSpecificText}.
      </p>
      <p>
        Below is a live example of what to expect in that context. No code
        changes are needed in the Salesforce platform context as this change
        occurs automatically in Salesforce native mobile applications. For
        those users not on the Salesforce platform, these modifications will
        occur automatically when the secondary touch stylesheet is loaded and
        the device has touch as the primary method of interaction.
      </p>
    </Blockquote>
  );
};

MobileBlurb.propTypes = {
  patternSpecificText: PropTypes.node.isRequired
};

export let MobileNotice = props => {
  const { docsLink, header, elementName } = props;

  return (
    <Blockquote type="note" header={header}>
      <p>
        Please be aware that in a mobile context <strong>{elementName}</strong>{' '}
        will automatically change slightly as shown in the example below. For
        more details{' '}
        <a href={docsLink}>please see the mobile specific documentation</a>{' '}
        above.
      </p>
    </Blockquote>
  );
};

MobileNotice.propTypes = {
  docsLink: PropTypes.string,
  header: PropTypes.string,
  elementName: PropTypes.string
};

export default MobileNotice;
