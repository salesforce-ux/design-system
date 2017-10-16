// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let NewportFileSelector = props => (
  <div
    className={classNames(
      'slds-form-element',
      props.error ? 'slds-has-error' : null
    )}
  >
    <div className="slds-form-element__control">
      <div
        className={classNames(
          'slds-file-selector vlocity-newport-file-selector',
          props.className
        )}
      >
        <div
          className={classNames(
            'slds-file-selector__dropzone',
            props.draggover ? 'slds-has-drag-over' : null
          )}
        >
          <input
            className="slds-file-selector__input slds-assistive-text"
            accept="image/png"
            type="file"
            id="file-upload-input-01"
            disabled={props.draggoverError}
            aria-describedby={props.error ? 'error-01' : null}
            aria-labelledby="file-selector-primary-label file-selector-secondary-label"
          />
          <label
            className="slds-file-selector__body"
            htmlFor="file-upload-input-01"
            id="file-selector-secondary-label"
          >
            <span className="slds-file-selector__button slds-button slds-button_neutral">
              Attachment
            </span>
            <span className="vlocity-newport-file-icon">
              <SvgIcon
                className="slds-button__icon"
                sprite="utility"
                symbol="attach"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    {props.error ? (
      <div className="slds-form-element__help" id="error-01">
        File type not supported
      </div>
    ) : null}
  </div>
);

export let NewportFileSelectorWithFiles = props => (
  <div
    className={classNames(
      'slds-form-element',
      props.error ? 'slds-has-error' : null
    )}
  >
    <div className="slds-form-element__control">
      <div
        className={classNames(
          'slds-file-selector vlocity-newport-file-selector',
          props.className
        )}
      >
        <div
          className={classNames(
            'slds-file-selector__dropzone',
            props.draggover ? 'slds-has-drag-over' : null
          )}
        >
          <input
            className="slds-file-selector__input slds-assistive-text"
            accept="image/png"
            type="file"
            id="file-upload-input-01"
            disabled={props.draggoverError}
            aria-describedby={props.error ? 'error-01' : null}
            aria-labelledby="file-selector-primary-label file-selector-secondary-label"
          />
          <label
            className="slds-file-selector__body"
            htmlFor="file-upload-input-01"
            id="file-selector-secondary-label"
          >
            <span className="slds-file-selector__button slds-button slds-button_neutral">
              Attachment
            </span>
            <span className="vlocity-newport-file-icon">
              <SvgIcon
                className="slds-button__icon"
                sprite="utility"
                symbol="attach"
              />
            </span>
          </label>
          <ul className="vlocity-newport-file-list">
            <li>
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                peel-ux.png
              </span>
              <span className="vlocity-newport-file-icon">
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="clear"
                />
              </span>
            </li>
            <li>
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                peel-ux.png
              </span>
              <span className="vlocity-newport-file-icon">
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="clear"
                />
              </span>
            </li>
            <li>
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                peel-ux.png
              </span>
              <span className="vlocity-newport-file-icon">
                <SvgIcon
                  className="slds-button__icon"
                  sprite="utility"
                  symbol="clear"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {props.error ? (
      <div className="slds-form-element__help" id="error-01">
        File type not supported
      </div>
    ) : null}
  </div>
);

export default (
  <NewportFileSelector files className="slds-file-selector_files" />
);

export let states = [
  {
    id: 'file-selector-files-list',
    label: 'Selected Files',
    element: (
      <NewportFileSelectorWithFiles
        files
        className="slds-file-selector_files"
      />
    )
  },
  {
    id: 'file-selector-files-error',
    label: 'Error',
    element: (
      <NewportFileSelector files className="slds-file-selector_files" error />
    )
  },
  {
    id: 'file-selector-files-draggover',
    label: 'Dragover',
    element: (
      <NewportFileSelector
        files
        className="slds-file-selector_files"
        draggover
      />
    )
  },
  {
    id: 'file-selector-files-draggover-error',
    label: 'Dragover with error',
    element: (
      <NewportFileSelector
        files
        className="slds-file-selector_files"
        draggoverError
        error
      />
    )
  }
];
