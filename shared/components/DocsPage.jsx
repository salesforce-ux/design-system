import React from 'react';

export default props => {
  const { title, Docs } = props;

  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{title}</h1>
      <Docs />
    </div>
  );
};
