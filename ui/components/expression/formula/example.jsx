// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { ExpressionOptions } from '../';
import { Button } from '../../buttons/base/example';
import {
  RichTextEditor,
  RteToolbar,
  RteTextarea,
  RteFormula
} from '../../rich-text-editor';

export const Formula = props => (
  <div className="slds-expression">
    <ExpressionOptions optionSelected={props.optionSelected} />
    <div className="slds-expression_formula__rte">
      <RichTextEditor label="Formula">
        <RteToolbar>
          <RteFormula />
        </RteToolbar>
        <RteTextarea label="Compose formula" placeholder="Compose formula..." />
      </RichTextEditor>
    </div>
    <div className="slds-m-top_small">
      <Button isNeutral>Check Syntax</Button>
    </div>
  </div>
);

Formula.propTypes = {
  optionSelected: PropTypes.string
};

export default <Formula optionSelected="formula" />;
