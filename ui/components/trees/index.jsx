import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';

import { IsDependentOn } from '../../shared/helpers';

export const TreeItem = props => {
  const markString = (string, term) => {
    // Return the string but with the term wrapped in mark elements
    return string.replace(new RegExp(term, 'gi'), term => {
      return `<mark>${term}</mark>`;
    });
  };

  const renderLabel = label => {
    if (props.termToMark) {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: markString(label, props.termToMark)
          }}
        />
      );
    } else {
      return <React.Fragment>{label}</React.Fragment>;
    }
  };

  return (
    <div className={classNames('slds-tree__item', props.className)}>
      <ButtonIcon
        aria-hidden="true"
        assistiveText={`Expand ${props.itemLabel}`}
        className={classNames('slds-m-right_x-small', (!props.isBranch || props.isDisabled) && 'slds-hidden')}
        iconClassName="slds-button__icon_small"
        symbol="chevronright"
        tabIndex="-1"
        title={`Expand ${props.itemLabel}`}
      />
      <span className="slds-has-flexi-truncate">
        <span className="slds-tree__item-label slds-truncate" title={props.itemLabel}>
          {renderLabel(props.itemLabel)}
        </span>
        {props.metaTextLabel && (
          <span className="slds-tree__item-meta slds-truncate" title={props.metaTextLabel}>
            <span className="slds-assistive-text">:</span>
            {renderLabel(props.metaTextLabel)}
          </span>
        )}
      </span>
      {props.children}
    </div>
  );
};

TreeItem.displayName = 'TreeItem';
TreeItem.propTypes = {
  children: PropTypes.node,
  isBranch: PropTypes.bool,
  isDisabled: PropTypes.bool,
  itemLabel: PropTypes.string,
  metaTextLabel: PropTypes.string,
  /** Term or string to highlight within the itemLabel */
  termToMark: PropTypes.string
};

TreeItem.defaultProps = {
  itemLabel: 'Tree Item'
};

export class TreeListItem extends Component {
  getBranchAriaLabel(branchLabel, metaTextLabel) {
    if (metaTextLabel) {
      return branchLabel + ': ' + metaTextLabel;
    } else {
      return branchLabel;
    }
  }

  render() {
    const { ariaLevel, tabIndex, isBranch, isExpanded, isSelected, isDisabled, itemLabel, metaTextLabel } = this.props;

    return (
      <li
        aria-expanded={isBranch ? isExpanded || false : null}
        aria-label={isBranch ? this.getBranchAriaLabel(itemLabel, metaTextLabel) : null}
        aria-level={ariaLevel}
        aria-selected={isSelected}
        aria-disabled={isDisabled}
        role="treeitem"
        tabIndex={tabIndex}
      >
        {this.props.children}
      </li>
    );
  }
}

TreeListItem.displayName = 'TreeListItem';
TreeListItem.propTypes = {
  ariaLevel: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isBranch: IsDependentOn('itemLabel', PropTypes.bool),
  isExpanded: IsDependentOn('isBranch', PropTypes.bool),
  isSelected: PropTypes.bool,
  itemLabel: PropTypes.string,
  metaTextLabel: IsDependentOn('itemLabel', PropTypes.string),
  tabIndex: PropTypes.number
};

export const TreeHeader = props => (
  <h4 className="slds-tree__group-header" id={props.id}>
    {props.children}
  </h4>
);

TreeHeader.displayName = 'TreeHeader';
TreeHeader.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired
};

export const TreeList = props => (
  <ul aria-labelledby={props.headerId} className="slds-tree" id={props.id} role="tree">
    {props.children}
  </ul>
);

TreeList.displayName = 'TreeList';
TreeList.propTypes = {
  children: PropTypes.node,
  headerId: PropTypes.string,
  id: PropTypes.string
};

export const TreeGroup = props => <ul role="group">{props.children}</ul>;

TreeGroup.displayName = 'TreeGroup';
TreeGroup.propTypes = {
  children: PropTypes.node
};

export const TreeContainer = props => <div className="slds-tree_container">{props.children}</div>;

TreeContainer.displayName = 'TreeContainer';
TreeContainer.propTypes = {
  children: PropTypes.node
};
