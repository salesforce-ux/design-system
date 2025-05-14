import React from 'react';
import PropTypes from 'prop-types';
import CodeView from './CodeView';

const RequiredLabelExample = () => (
  <CodeView exampleOnly demoStyles="2rem">
    <label class="slds-form-element__label" for="">
      <abbr class="slds-required" title="required" aria-hidden="true">* </abbr>denotes a required field
    </label>
  </CodeView>
);

RequiredLabelExample.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string
};

export default RequiredLabelExample;
