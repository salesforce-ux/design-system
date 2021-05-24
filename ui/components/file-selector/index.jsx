// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import SvgIcon from '../../shared/svg-icon/';

const FileSelector = props => {
  const primaryLabelId = uniqueId('file-selector-primary-label-');
  const secondaryLabelId = uniqueId('file-selector-secondary-label');
  const fileUploadInputId = uniqueId('file-upload-input-');
  const errorId = uniqueId('error-');

  return (
    <div
      className={classNames(
        'slds-form-element',
        {
          'slds-has-error': props.error
        }
      )}
    >
      <span className="slds-form-element__label" id={primaryLabelId}>
        Attachment
      </span>
      <div className="slds-form-element__control">
        <div className={classNames('slds-file-selector', {
          'slds-file-selector_files': props.files,
          'slds-file-selector_images': props.images
        })}>
          <div
            className={classNames(
              'slds-file-selector__dropzone',
              {
                'slds-has-drag-over': props.dragover
              }
            )}
          >
            <input
              className="slds-file-selector__input slds-assistive-text"
              accept="image/png"
              type="file"
              id={fileUploadInputId}
              disabled={props.dragoverError}
              aria-describedby={props.error ? errorId : null}
              aria-labelledby={classNames(primaryLabelId, secondaryLabelId)}
            />
            <label
              className="slds-file-selector__body"
              htmlFor={fileUploadInputId}
              id={secondaryLabelId}
            >
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                <SvgIcon
                  className="slds-button__icon slds-button__icon_left"
                  sprite="utility"
                  symbol="upload"
                />Upload {props.files ? 'Files' : 'Image'}
              </span>
              <span className="slds-file-selector__text slds-medium-show">
                or Drop {props.files ? 'Files' : 'Image'}
              </span>
            </label>
          </div>
        </div>
      </div>
      {props.error && (
        <div className="slds-form-element__help" id={errorId}>
          File type not supported
        </div>
      )}
    </div>
  )
};

export default FileSelector;
