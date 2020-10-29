import React from 'react';

import { TreeListItem, TreeItem, TreeGroup } from '../index';

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
        <TreeListItem ariaLevel={2} isBranch isExpanded itemLabel="Tree Branch">
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

export const TreeWithItemHovered = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} tabIndex={0}>
      <TreeItem className="slds-is-hovered" />
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
TreeWithItemHovered.displayName = 'TreeWithItemHovered';

export const TreeWithItemDisabled = () => (
  <React.Fragment>
    <TreeListItem ariaLevel={1} isDisabled>
      <TreeItem />
    </TreeListItem>
    <TreeListItem ariaLevel={1} isBranch isDisabled itemLabel="Tree Branch">
      <TreeItem
        isBranch
        isDisabled
        itemLabel="Tree Branch"
        metaTextLabel="Tree Branch Metatext"
      />
      <TreeGroup>
        <TreeListItem ariaLevel={2}>
          <TreeItem />
        </TreeListItem>
      </TreeGroup>
    </TreeListItem>
    <TreeListItem ariaLevel={1} tabIndex={0} isBranch itemLabel="Tree Branch">
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
    <TreeListItem
      ariaLevel={1}
      itemLabel="Tree Item with a Really Really Long Name That Should Truncate"
    >
      <TreeItem itemLabel="Tree Item with a Really Really Long Name That Should Truncate" />
    </TreeListItem>
  </React.Fragment>
);
TreeWithItemDisabled.displayName = 'TreeWithItemDisabled';
