import React from 'react';

export default props => {
  const { title, Docs } = props;

  return (
    <div>
      <h1 className="slds-text-heading_large slds-m-bottom_medium">{title}</h1>
      <Docs />
    </div>
  );
};
