const React = require('react');
const ReactDOM = require('react-dom/server');

export const renderWithBetterError = (element, msg) => {
  try {
    return ReactDOM.renderToStaticMarkup(element);
  } catch (e) {
    throw new Error(`${msg}: ${e}`);
  }
};
