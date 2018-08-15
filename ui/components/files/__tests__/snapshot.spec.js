// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import { File, AttachmentLink } from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

const demoStyles = {
  width: '20rem'
};

describe('File Component', () => {
  it('renders base component', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File
          isCard
          hasCrop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          hasImage
        />
      </div>
    ));

  it('renders icon (no image) with title', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File isCard hasCrop hasTitleCard symbol="image" title="Image Title" />
      </div>
    ));

  it('renders image with no title', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File isCard hasCrop noCaption symbol="pdf" hasImage />
      </div>
    ));

  it('renders image with title and actions', () =>
    matchesMarkup(
      <div style={demoStyles}>
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
    ));

  it('renders image with actions and no title', () =>
    matchesMarkup(
      <div style={demoStyles}>
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
    ));

  it('renders file with external icon', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File
          isCard
          hasCrop
          hasTitleCard
          symbol="pdf"
          title="Proposal.pdf"
          isExternalSource
        />
      </div>
    ));

  it('renders file in loading state with title', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File
          isCard
          hasCrop
          hasTitleCard
          sprite="utility"
          symbol="image"
          isLoading
        />
      </div>
    ));

  it('renders file in loding state without title', () =>
    matchesMarkup(
      <div style={demoStyles}>
        <File isCard hasCrop isLoading noCaption />
      </div>
    ));

  it('renders fewer than 3 file attachments', () =>
    matchesMarkup(
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
    ));

  it('renders more than 3 file attachments', () =>
    matchesMarkup(
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
    ));

  it('renders a link attachment', () =>
    matchesMarkup(
      <AttachmentLink
        articleTitle="Maui By Air The Best Way Around The Island"
        articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
      />
    ));
});
