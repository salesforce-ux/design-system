import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// This component is used inside markdown structures, such as in a markdown table, to evaluate and render non-JSX block node elements, like JS expressions that return a node (e.g. { getDisplayElementById(…) })

export default class InlineFragment extends React.Component {
  render() {
    return <Fragment>{this.props.fragmentChildren}</Fragment>;
  }
}

InlineFragment.propTypes = {
  fragmentChildren: PropTypes.node.isRequired
};
