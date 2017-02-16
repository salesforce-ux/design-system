/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonGroup } from 'ui/components/button-groups/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let ActionsMenu = props => {
  let buttonIconClassName;
  if (props.whiteIcons) {
    buttonIconClassName = 'slds-button--icon-inverse';
  }

  return (
    <div className="slds-col--bump-left">
      <ButtonGroup className={props.className}>
        <ButtonIcon
          className={classNames('slds-button--icon slds-button--icon-x-small', buttonIconClassName)}
          symbol="download"
          assistiveText="Download"
          title="Download"
        />
        <ButtonIcon
          className={classNames('slds-button--icon slds-button--icon-x-small', buttonIconClassName)}
          symbol="down"
          aria-haspopup="true"
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    </div>
  );
};

export let ExternalIcon = props =>
  <div className="slds-image__external-icon">
    <ButtonIcon
      className="slds-button--icon"
      iconClassName="slds-button__icon--large"
      symbol="salesforce1"
      assistiveText="salesforce1"
      title="salesforce1"
    />
  </div>;

export let File = props =>
  <figure className={classNames('slds-file', props.className)}>
    <a href="javascript:void(0);" className={classNames('slds-file__crop', props.cropClass)}>
      { props.overlay ? <div className="slds-file--overlay"></div> : null }
      { props.image ?
        <img src="/assets/images/placeholder-img@16x9.jpg" alt="Description of the image" /> :
        <span className="slds-file__icon slds-icon_container" title={ props.symbol || 'unknown file type' }>
          <SvgIcon className={classNames('slds-icon', props.iconType)} sprite={ props.sprite || 'doctype' } symbol={ props.symbol || 'unknown' } />
          <span className="slds-assistive-text">{ props.title || 'Image Title' }</span>
        </span>
      }
    </a>
    { !props.noTitle ?
      <div className={classNames('slds-file__title', props.titleClass)}>
        { !props.noCaption ?
          <figcaption className="slds-media slds-media--small slds-media--center">
            <div className="slds-media__figure slds-line-height--reset">
              { props.symbol ?
                <span className="slds-icon_container" title={ props.symbol || 'unknown file type' }>
                  <SvgIcon
                    className="slds-icon slds-icon--x-small"
                    sprite="doctype"
                    symbol={ props.symbol || 'unknown' }
                  />
                  <span className="slds-assistive-text">{ props.symbol || 'unknown file type' }</span>
                </span>
              : null }
            </div>
            <div className="slds-media__body">
              <span className="slds-file__text slds-truncate" title={ props.title || 'Image Title' }>
                { props.title || 'Image Title' }
                { props.overlay ? <span className="slds-assistive-text">more files</span> : null }
              </span>
            </div>
          </figcaption>
        : null }
        { props.actions ?
          <ActionsMenu whiteIcons={ props.whiteIcons } />
        : null }
      </div>
    : null }
  </figure>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'attachment-file-with-image',
    label: 'File with image',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title--card"
          symbol="pdf"
          title="Proposal.pdf"
          image />
      </div>
  },
  {
    id: 'attachment-file-no-image',
    label: 'File with no image',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title--card"
          symbol="image"
          title="Image Title" />
      </div>
  },
  {
    id: 'attachment-file-no-title',
    label: 'File with no title',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          noTitle
          symbol="pdf"
          image />
      </div>
  },
  {
    id: 'attachment-file-with-actions',
    label: 'File with actions',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title--card"
          symbol="pdf"
          title="Proposal.pdf"
          actions
          image />
      </div>
  },
  {
    id: 'attachment-file-with-no-title-actions',
    label: 'File with no title + actions',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title_scrim"
          symbol="pdf"
          title="Proposal.pdf"
          actions
          whiteIcons
          noCaption
          image />
      </div>
  },
  {
    id: 'attachment-file-external-icon',
    label: 'File with external icon',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title--card"
          symbol="pdf"
          title="Proposal.pdf" />
        <ExternalIcon />
      </div>
  },
  {
    id: 'attachment-file-loading-no-title',
    label: 'File in loading state with title',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card"
          cropClass="slds-file__crop--16-by-9"
          titleClass="slds-file__title--card"
          iconType="slds-file__loading-icon slds-icon_large"
          sprite="utility"
          symbol="image"
        />
      </div>
  },
  {
    id: 'attachment-file-loading',
    label: 'File in loading state without title',
    element:
      <div className="demo-only" style={{ width: '20rem' }}>
        <File
          className="slds-file--card slds-file_center-icon"
          cropClass="slds-file__crop--16-by-9"
          iconType="slds-file__loading-icon slds-icon_large"
          sprite="utility"
          symbol="image"
          noTitle
        />
      </div>
  }
];
