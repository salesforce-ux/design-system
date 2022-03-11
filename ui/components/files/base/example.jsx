// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { File, AttachmentLink } from '../';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          hasCrop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasImage
        />
      </div>
    )
  }
];

export let examples = [
  {
    id: 'attachment-file-no-image',
    label: 'File with no image',
    element: (
      <div style={{ width: '20rem' }}>
        <File isCard hasCrop hasTitleCard symbol="image" title="Image Title" />
      </div>
    )
  },
  {
    id: 'attachment-file-no-title',
    label: 'File with no title',
    element: (
      <div style={{ width: '20rem' }}>
        <File isCard hasCrop noCaption symbol="pdf" hasImage />
      </div>
    )
  },
  {
    id: 'attachment-file-truncate-title',
    label: 'File with truncating title',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          title="super-super-long-file-name-that-will-truncate.pdf"
          symbol="pdf"
          isCard
          hasCrop
          hasTitleCard
          hasActions
        />
      </div>
    )
  },
  {
    id: 'attachment-file-with-actions',
    label: 'File with actions',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          hasCrop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasActions
          hasImage
        />
      </div>
    )
  },
  {
    id: 'attachment-file-with-no-title-actions',
    label: 'File with no title + actions',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          hasCrop
          symbol="pdf"
          title="Proposal.pdf"
          hasActions
          iconColor="white"
          hasScrim
          noCaption
          hasImage
        />
      </div>
    )
  },
  {
    id: 'attachment-file-external-icon',
    label: 'File with external icon',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          hasCrop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          isExternalSource
        />
      </div>
    )
  },
  {
    id: 'attachment-file-loading-with-title',
    label: 'File in loading state with title',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          hasCrop
          hasTitleCard
          sprite="utility"
          symbol="image"
          isLoading
        />
      </div>
    )
  },
  {
    id: 'attachment-file-loading-no-title',
    label: 'File in loading state without title',
    element: (
      <div style={{ width: '20rem' }}>
        <File isCard hasCrop isLoading noCaption />
      </div>
    )
  },
  {
    id: 'multi-attachments',
    label: 'Less than 3 file attachments',
    element: (
      <ul className="slds-grid slds-grid_pull-padded">
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            isCard
            hasCrop
            hasTitleCard
            symbol="pdf"
            title="Proposal.pdf"
            hasImage
          />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File isCard hasCrop hasTitleCard symbol="pdf" title="Proposal.pdf" />
        </li>
      </ul>
    )
  },
  {
    id: 'multi-attachments-overflow',
    label: 'Greater than 3 file attachments',
    element: (
      <ul className="slds-grid slds-grid_pull-padded">
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            isCard
            hasCrop
            hasTitleCard
            symbol="pdf"
            title="Proposal.pdf"
            hasImage
          />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show">
          <File isCard hasCrop hasTitleCard symbol="pdf" title="Proposal.pdf" />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File isCard hasCrop title="+22" hasImage hasOverlay />
        </li>
      </ul>
    )
  },
  {
    id: 'link-attachment',
    label: 'Link attachment',
    element: (
      <AttachmentLink
        articleTitle="Maui By Air The Best Way Around The Island"
        articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
      />
    )
  },
  {
    id: 'crop-4-by-3',
    label: 'Crop 4 x 3',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          has4x3Crop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasImage
        />
      </div>
    )
  },
  {
    id: 'crop-16-by-9',
    label: 'Crop 16 x 9',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          has16x9Crop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasImage
        />
      </div>
    )
  },
  {
    id: 'crop-1-by-1',
    label: 'Crop 1 by 1',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          isCard
          has1x1Crop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasImage
        />
      </div>
    )
  }
];
