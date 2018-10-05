import React, { Component } from 'react';
import ButtonIcon from '../../button-icons/';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IsDependentOn } from '../../../shared/helpers';

export const TreeItem = props => (
  <div className="slds-tree__item">
    <ButtonIcon
      aria-hidden="true"
      assistiveText={`Expand ${props.itemLabel}`}
      className={classNames(
        'slds-m-right_x-small',
        !props.isBranch && 'slds-is-disabled'
      )}
      iconClassName="slds-button__icon_small"
      symbol="chevronright"
      tabIndex="-1"
      title={`Expand ${props.itemLabel}`}
    />
    <span className="slds-has-flexi-truncate">
      <span
        className="slds-tree__item-label slds-truncate"
        title={props.itemLabel}
      >
        {props.itemLabel}
      </span>
      {props.metaTextLabel && (
        <span
          className="slds-tree__item-meta slds-truncate"
          title={props.metaTextLabel}
        >
          <span className="slds-assistive-text">:</span>
          {props.metaTextLabel}
        </span>
      )}
    </span>
    {props.children}
  </div>
);

TreeItem.displayName = 'TreeItem';
TreeItem.propTypes = {
  children: PropTypes.node,
  isBranch: PropTypes.bool,
  itemLabel: PropTypes.string,
  metaTextLabel: PropTypes.string
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
    const {
      ariaLevel,
      tabIndex,
      isBranch,
      isExpanded,
      isSelected,
      itemLabel,
      metaTextLabel
    } = this.props;
    return (
      <li
        role="treeitem"
        aria-level={ariaLevel}
        tabIndex={tabIndex}
        aria-expanded={isBranch ? isExpanded || false : null}
        aria-label={
          isBranch ? this.getBranchAriaLabel(itemLabel, metaTextLabel) : null
        }
        aria-selected={isSelected}
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
  <ul className="slds-tree" role="tree" aria-labelledby={props.headerId}>
    {props.children}
  </ul>
);

TreeList.displayName = 'TreeList';
TreeList.propTypes = {
  children: PropTypes.node,
  headerId: PropTypes.string
};

export const TreeGroup = props => <ul role="group">{props.children}</ul>;

TreeGroup.displayName = 'TreeGroup';
TreeGroup.propTypes = {
  children: PropTypes.node
};

export const TreeContainer = props => (
  <div className="slds-tree_container">{props.children}</div>
);

TreeContainer.displayName = 'TreeContainer';
TreeContainer.propTypes = {
  children: PropTypes.node
};

export const DefaultTree = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} tabIndex={0}>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem
      ariaLevel={1}
      itemLabel="Tree Item with a Really Really Long Name That Should Truncate"
    >
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
DefaultTree.displayName = 'DefaultTree';

export const ExpandedTree = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} tabIndex={0}>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem
      ariaLevel={1}
      itemLabel="Tree Item with a Really Really Long Name That Should Truncate"
    >
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
ExpandedTree.displayName = 'ExpandedTree';

export const SelectedTree = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1}>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2} isSelected tabIndex={0}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1}>
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
SelectedTree.displayName = 'SelectedTree';

export const DeeplyNestedTree = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} tabIndex={0}>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
        <TreeListItem ariaLevel={2} isBranch itemLabel="Tree Branch" isExpanded>
          <TreeItem isBranch itemLabel="Tree Branch" />
          <TreeGroup>
            <TreeListItem ariaLevel={3}>
              <TreeItem />
            </TreeListItem>
            <TreeListItem ariaLevel={3}>
              <TreeItem />
            </TreeListItem>
            <TreeListItem ariaLevel={3} isBranch itemLabel="Tree Branch">
              <TreeItem isBranch itemLabel="Tree Branch" />
              <TreeGroup>
                <TreeListItem ariaLevel={4}>
                  <TreeItem />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
            <TreeListItem
              ariaLevel={3}
              isBranch
              isExpanded
              itemLabel="Tree Branch"
            >
              <TreeItem isBranch itemLabel="Tree Branch" />
              <TreeGroup>
                <TreeListItem ariaLevel={4}>
                  <TreeItem />
                </TreeListItem>
                <TreeListItem ariaLevel={4}>
                  <TreeItem itemLabel="Another Tree Item with Really Really Long Text That Should Truncate" />
                </TreeListItem>
                <TreeListItem ariaLevel={4}>
                  <TreeItem />
                </TreeListItem>
                <TreeListItem
                  ariaLevel={4}
                  isBranch
                  isExpanded
                  itemLabel="Tree Branch"
                >
                  <TreeItem isBranch itemLabel="Tree Branch" />
                  <TreeGroup>
                    <TreeListItem ariaLevel={5}>
                      <TreeItem />
                    </TreeListItem>
                    <TreeListItem ariaLevel={5}>
                      <TreeItem />
                    </TreeListItem>
                    <TreeListItem ariaLevel={5}>
                      <TreeItem />
                    </TreeListItem>
                  </TreeGroup>
                </TreeListItem>
                <TreeListItem ariaLevel={4}>
                  <TreeItem />
                </TreeListItem>
              </TreeGroup>
            </TreeListItem>
            <TreeListItem ariaLevel={3}>
              <TreeItem />
            </TreeListItem>
          </TreeGroup>
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1}>
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
DeeplyNestedTree.displayName = 'DeeplyNestedTree';

export const MetaTextTree = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} tabIndex={0}>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch isExpanded itemLabel="Tree Branch">
      <TreeItem isBranch itemLabel="Tree Branch" />
      <TreeGroup>
        <TreeListItem
          ariaLevel={2}
          itemLabel="Tree Item"
          metaTextLabel="Tree Item Metatext with a Really Really Long Name That Should Truncate"
        >
          <TreeItem
            itemLabel="Tree Item"
            metaTextLabel="Tree Item Metatext with a Really Really Long Name That Should Truncate"
          />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem
      ariaLevel={1}
      isBranch
      itemLabel="Tree Branch"
      metaTextLabel="Tree Branch Metatext"
    >
      <TreeItem
        isBranch
        itemLabel="Tree Branch"
        metaTextLabel="Tree Branch Metatext"
      />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1}>
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
MetaTextTree.displayName = 'MetaTextTree';
