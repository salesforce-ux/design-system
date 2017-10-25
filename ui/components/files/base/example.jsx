// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { ButtonGroup } from '../../button-groups/base/example';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let ActionsMenu = props => {
  let buttonIconClassName;
  if (props.whiteIcons) {
    buttonIconClassName = 'slds-button_icon-inverse';
  }

  return (
    <div className="slds-file__actions-menu">
      <ButtonGroup className={props.className}>
        <ButtonIcon
          className={classNames(
            'slds-button_icon slds-button_icon-x-small',
            buttonIconClassName
          )}
          symbol="download"
          assistiveText="Download"
          title="Download"
        />
        <ButtonIcon
          className={classNames(
            'slds-button_icon slds-button_icon-x-small',
            buttonIconClassName
          )}
          symbol="down"
          aria-haspopup="true"
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    </div>
  );
};

let ActionsConditional = props =>
  props.scrim ? (
    <div className="slds-file__title slds-file__title_scrim">
      <ActionsMenu whiteIcons={props.whiteIcons} />
    </div>
  ) : (
    <ActionsMenu whiteIcons={props.whiteIcons} />
  );

export let ExternalIcon = props => (
  <div className="slds-file__external-icon">
    <span
      className="slds-file__icon slds-icon_container"
      title={'salesforce1' || props.symbol}
    >
      <SvgIcon
        className="slds-icon slds-icon-text-default"
        sprite="utility"
        symbol={'salesforce1' || props.symbol}
      />
      <span className="slds-assistive-text">
        Data provided by: {'salesforce1' || props.symbol}
      </span>
    </span>
  </div>
);

export let File = props => (
  <div className={classNames('slds-file', props.className)}>
    <figure>
      <a
        href="javascript:void(0);"
        className={classNames('slds-file__crop', props.cropClass)}
      >
        {props.overlay ? <div className="slds-file_overlay" /> : null}
        {props.image ? (
          <img
            src="/assets/images/placeholder-img@16x9.jpg"
            alt="Description of the image"
          />
        ) : (
          <span
            className="slds-file__icon slds-icon_container"
            title={props.symbol || 'unknown file type'}
          >
            <SvgIcon
              className={classNames('slds-icon', props.iconType)}
              sprite={props.sprite || 'doctype'}
              symbol={props.symbol || 'unknown'}
            />
            <span className="slds-assistive-text">
              {props.title || 'Image Title'}
            </span>
          </span>
        )}
      </a>
      {!props.noCaption ? (
        <figcaption
          className={classNames('slds-file__title', props.titleClass, {
            'slds-file-has-actions': props.actions
          })}
        >
          <div className="slds-media slds-media_small slds-media_center">
            <div className="slds-media__figure slds-line-height_reset">
              {props.symbol ? (
                <span
                  className="slds-icon_container"
                  title={props.symbol || 'unknown file type'}
                >
                  <SvgIcon
                    className="slds-icon slds-icon_x-small"
                    sprite="doctype"
                    symbol={props.symbol || 'unknown'}
                  />
                  <span className="slds-assistive-text">
                    {props.symbol || 'unknown file type'}
                  </span>
                </span>
              ) : null}
            </div>
            <div className="slds-media__body">
              <span
                className="slds-file__text slds-truncate"
                title={props.title || 'Image Title'}
              >
                {props.title || 'Image Title'}
                {props.overlay ? (
                  <span className="slds-assistive-text">more files</span>
                ) : null}
              </span>
            </div>
          </div>
        </figcaption>
      ) : null}
    </figure>
    {props.externalSource ? <ExternalIcon /> : null}
    {props.actions ? (
      <ActionsConditional scrim={props.scrim} whiteIcons={props.whiteIcons} />
    ) : null}
  </div>
);

export let AttachmentLink = props => (
  <a
    href="javascript:void(0);"
    className="slds-media slds-box slds-grow slds-text-link_reset"
  >
    <div className="slds-media__figure slds-medium-show">
      <div className="slds-file slds-size_small">
        <div className="slds-file__crop slds-file__crop_16-by-9">
          <img
            src="/assets/images/placeholder-img@16x9.jpg"
            alt={props.title || 'Image Title'}
          />
        </div>
      </div>
    </div>
    <div className="slds-media__body">
      <h3 className="slds-text-heading_small">
        {props.articleTitle || 'Article Title'}
      </h3>
      <p>{props.articleDescription || 'Article Description'}</p>
      <span className="slds-text-body_small">
        {props.articleTitle || 'http://www.linkurl.com'}
      </span>
    </div>
  </a>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div style={{ width: '20rem' }}>
    <File
      className="slds-file_card"
      titleClass="slds-file__title_card"
      symbol="pdf"
      title="Proposal.pdf"
      image
    />
  </div>
);

export let examples = [
  {
    id: 'attachment-file-no-image',
    label: 'File with no image',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="image"
          title="Image Title"
        />
      </div>
    )
  },
  {
    id: 'attachment-file-no-title',
    label: 'File with no title',
    element: (
      <div style={{ width: '20rem' }}>
        <File className="slds-file_card" noCaption symbol="pdf" image />
      </div>
    )
  },
  {
    id: 'attachment-file-with-actions',
    label: 'File with actions',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="pdf"
          title="Proposal.pdf"
          actions
          image
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
    )
  },
  {
    id: 'attachment-file-external-icon',
    label: 'File with external icon',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          symbol="pdf"
          title="Proposal.pdf"
          externalSource
        />
      </div>
    )
  },
  {
    id: 'attachment-file-loading-no-title',
    label: 'File in loading state with title',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          className="slds-file_card"
          titleClass="slds-file__title_card"
          iconType="slds-file__loading-icon slds-icon_large"
          sprite="utility"
          symbol="image"
        />
      </div>
    )
  },
  {
    id: 'attachment-file-loading',
    label: 'File in loading state without title',
    element: (
      <div style={{ width: '20rem' }}>
        <File
          className="slds-file_card slds-file_center-icon"
          iconType="slds-file__loading-icon slds-icon_large"
          sprite="utility"
          symbol="image"
          noCaption
        />
      </div>
    )
  },
  {
    id: 'multi-attachments',
    label: '< 3 file attachments',
    element: (
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
    )
  },
  {
    id: 'multi-attachments-overflow',
    label: '> 3 file attachments',
    element: (
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
  }
];
