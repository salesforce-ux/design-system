import React from 'react';
import ReactDOM from 'react-dom/server';

export const flatten = items => items.reduce((a, b) => a.concat(b), []);

export const flattenElement = element =>
  React.isValidElement(element)
    ? [element].concat(
        flatten(
          React.Children.toArray(element.props.children).map(flattenElement)
        )
      )
    : [element];

export const mapElement = (element, fn) =>
  React.isValidElement(element)
    ? fn(
        React.cloneElement(element, {
          children: React.isValidElement(element.props.children)
            ? fn(element.props.children)
            : React.Children.map(element.props.children, element =>
                mapElement(element, fn)
              )
        })
      )
    : element;

export const renderWithBetterError = (element, msg) => {
  try {
    return ReactDOM.renderToStaticMarkup(element);
  } catch (e) {
    throw new Error(`${msg}: ${e}`);
  }
};
