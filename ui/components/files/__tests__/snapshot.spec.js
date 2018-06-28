// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import { File, AttachmentLink } from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const demoStyles = {
  width: '20rem'
};

describe('File Component', () => {
  it('renders base component', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="pdf"
          title="Proposal.pdf"
          image
        />
      </div>
    ));

  it('renders icon (no image) with title', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="image"
          title="Image Title"
        />
      </div>
    ));

  it('renders image with no title', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File className="slds-file_card" noCaption symbol="pdf" image />
      </div>
    ));

  it('renders image with title and actions', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="pdf"
          title="Proposal.pdf"
          actions
          image
        />
      </div>
    ));

  it('renders image with actions and no title', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          symbol="pdf"
          title="Proposal.pdf"
          actions
          whiteIcons
          scrim
          noCaption
          image
        />
      </div>
    ));

  it('renders file with external icon', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="pdf"
          title="Proposal.pdf"
          externalSource
        />
      </div>
    ));

  it('renders file in loading state with title', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          sprite="utility"
          symbol="image"
          isLoading
          loadingClass="slds-spinner_medium"
        />
      </div>
    ));

  it('renders file in loding state without title', () =>
    matchesMarkupAndStyle(
      <div style={demoStyles}>
        <File
          className="slds-file_card"
          isLoading
          loadingClass="slds-spinner_medium"
          noCaption
        />
      </div>
    ));

  it('renders fewer than 3 file attachments', () =>
    matchesMarkupAndStyle(
      <ul className="slds-grid slds-grid_pull-padded">
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            className="slds-file_card"
            titleClass="slds-file__title_card"
            symbol="pdf"
            title="Proposal.pdf"
            image
          />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            className="slds-file_card"
            titleClass="slds-file__title_card"
            symbol="pdf"
            title="Proposal.pdf"
          />
        </li>
      </ul>
    ));

  it('renders more than 3 file attachments', () =>
    matchesMarkupAndStyle(
      <ul className="slds-grid slds-grid_pull-padded">
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            className="slds-file_card"
            titleClass="slds-file__title_card"
            symbol="pdf"
            title="Proposal.pdf"
            image
          />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show">
          <File
            className="slds-file_card"
            titleClass="slds-file__title_card"
            symbol="pdf"
            title="Proposal.pdf"
          />
        </li>
        <li className="slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3">
          <File
            className="slds-file_card"
            titleClass="slds-file__title_overlay slds-align_absolute-center slds-text-heading_large"
            title="+22"
            image
            overlay
          />
        </li>
      </ul>
    ));

  xit('renders a link attachment', () =>
    matchesMarkupAndStyle(
      <AttachmentLink
        articleTitle="Maui By Air The Best Way Around The Island"
        articleDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
      />
    ));
});
