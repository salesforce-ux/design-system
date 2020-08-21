// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';
import { ButtonGroup } from '../button-groups/base/example';
import ButtonIcon from '../button-icons/';
import { Spinner } from '../spinners/base/example';

/**
 * ActionsMenu - controls the display of action icons in the title card
 * iconColor - sets the color of the action icons
 */
const ActionsMenu = props => {
  const buttonIconClassNames = classNames(
    'slds-button_icon slds-button_icon-x-small',
    props.iconColor === 'white' && 'slds-button_icon-inverse'
  );

  return (
    <div className="slds-file__actions-menu">
      <ButtonGroup>
        <ButtonIcon
          className={buttonIconClassNames}
          symbol="download"
          assistiveText="Download"
          title="Download"
        />
        <ButtonIcon
          className={buttonIconClassNames}
          symbol="down"
          aria-haspopup="true"
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    </div>
  );
};

ActionsMenu.propTypes = {
  iconColor: PropTypes.oneOf(['white', 'black'])
};

/**
 * ActionsConditional - controls the display of a wrapper div for actions
 * scrim - triggers a gradient background behind the action items when used without a title
 * iconColor - sets the color of the action icons
 */
const ActionsConditional = props => {
  return props.scrim ? (
    <div className="slds-file__title slds-file__title_scrim">
      <ActionsMenu iconColor={props.iconColor} />
    </div>
  ) : (
    <ActionsMenu iconColor={props.iconColor} />
  );
};

ActionsConditional.propTypes = {
  iconColor: PropTypes.oneOf(['white', 'black']),
  scrim: PropTypes.bool
};

/**
 * ExternalIcon - controls the display of the Salesforce logo
 */
const ExternalIcon = () => (
  <div className="slds-file__external-icon">
    <span className="slds-file__icon slds-icon_container" title="salesforce1">
      <SvgIcon
        className="slds-icon slds-icon-text-default"
        sprite="utility"
        symbol="salesforce1"
      />
      <span className="slds-assistive-text">Data provided by: salesforce1</span>
    </span>
  </div>
);

/// ////////////////////////////////////////
// Exports
/// ////////////////////////////////////////

/**
 * File component
 */
export class File extends Component {
  constructor(props) {
    super(props);

    /**
     * State
     * hasCaption - determines if a title should be rendered
     * hasIcon - determines if an icon should be rendered within the title card
     * hasTitle - determines if an additional class should be added for hover states on Files with a title card. This does not include Files with the `slds-file__title_overlay` class.
     */
    this.state = {
      hasCaption: !this.props.noCaption,
      hasIcon: this.props.symbol,
      hasTitle: this.props.hasTitleCard && !this.props.hasOverlay
    };

    this.fileContents = this.fileContents.bind(this);
  }

  /**
   * fileContents - Determines what media to render within a File component
   * isLoading - renders Spinner
   * hasImage - renders a landscape-oriented image
   * hasImagePortrait - renders a portrait-oriented image
   * default - renders an icon
   */
  fileContents() {
    const {
      hasImage,
      hasImagePortrait,
      isLoading,
      sprite,
      symbol,
      title
    } = this.props;

    if (isLoading) {
      return <Spinner className="slds-spinner_medium" />;
    } else if (hasImage) {
      return (
        <Fragment>
          <span className="slds-assistive-text">Preview:</span>
          <img
            src="/assets/images/placeholder-img@16x9.jpg"
            alt="Description of the image"
          />
        </Fragment>
      );
    } else if (hasImagePortrait) {
      return (
        <Fragment>
          <span className="slds-assistive-text">Preview:</span>
          <img
            src="/assets/images/placeholder-img@9x16.jpg"
            alt="Description of the image"
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <span className="slds-assistive-text">Preview:</span>
          <span className="slds-file__icon slds-icon_container" title={symbol}>
            <SvgIcon className="slds-icon" sprite={sprite} symbol={symbol} />
            <span className="slds-assistive-text">{title}</span>
          </span>
        </Fragment>
      );
    }
  }

  render() {
    const {
      has16x9Crop,
      has1x1Crop,
      has4x3Crop,
      hasActions,
      hasCrop,
      hasImagePortrait,
      hasOverlay,
      hasScrim,
      hasTitleCard,
      iconColor,
      isCard,
      isExternalSource,
      isLoading,
      symbol,
      title
    } = this.props;

    const { hasCaption, hasIcon, hasTitle } = this.state;

    // If no crop prop is passed, default to `slds-file__figure`
    const figureClasses =
      classNames({
        'slds-file__crop': hasCrop,
        'slds-file__crop slds-file__crop_16-by-9': has16x9Crop,
        'slds-file__crop slds-file__crop_4-by-3': has4x3Crop,
        'slds-file__crop slds-file__crop_1-by-1': has1x1Crop,
        'slds-file__figure slds-file__figure_portrait': hasImagePortrait
      }) || 'slds-file__figure';

    return (
      <div
        className={classNames('slds-file', {
          'slds-file_card': isCard,
          'slds-file_loading': isLoading,
          'slds-has-title': hasTitle
        })}
      >
        <figure>
          {/*
            aXe is reporting an a11y violation where it says the <a> does not detect any discernible text when using <Spinner>, despite this not being the case (Spinner has "Loading" in .slds-assistive-text). To prevent this from breaking the build, we're excluding `.slds-file figure > a` from aXe linting. Tread carefully.
          */}
          <a
            href="#"
            className={figureClasses}
            onClick={e => e.preventDefault()}
          >
            {hasOverlay && <div className="slds-file_overlay" />}

            {this.fileContents()}
          </a>
          {hasCaption && (
            <figcaption
              className={classNames('slds-file__title', {
                'slds-file__title_card': hasTitleCard,
                'slds-file__title_overlay slds-align_absolute-center slds-text-heading_large': hasOverlay,
                'slds-file-has-actions': hasActions
              })}
            >
              <div className="slds-media slds-media_small slds-media_center">
                <div className="slds-media__figure slds-line-height_reset">
                  {hasIcon && (
                    <span className="slds-icon_container" title={symbol}>
                      <SvgIcon
                        className="slds-icon slds-icon_x-small"
                        sprite="doctype"
                        symbol={symbol}
                      />
                      <span className="slds-assistive-text">{symbol}</span>
                    </span>
                  )}
                </div>
                <div className="slds-media__body">
                  <span className="slds-file__text slds-truncate" title={title}>
                    {title}
                    {hasOverlay && (
                      <span className="slds-assistive-text">more files</span>
                    )}
                  </span>
                </div>
              </div>
            </figcaption>
          )}
        </figure>
        {isExternalSource && <ExternalIcon />}
        {hasActions && (
          <ActionsConditional scrim={hasScrim} iconColor={iconColor} />
        )}
      </div>
    );
  }
}

File.propTypes = {
  has16x9Crop: PropTypes.bool,
  has1x1Crop: PropTypes.bool,
  has4x3Crop: PropTypes.bool,
  hasActions: PropTypes.bool,
  hasCrop: PropTypes.bool,
  hasImage: PropTypes.bool,
  hasImagePortrait: PropTypes.bool,
  hasOverlay: PropTypes.bool,
  hasScrim: PropTypes.bool,
  hasTitleCard: PropTypes.bool,
  iconColor: PropTypes.oneOf(['white', 'black']),
  isCard: PropTypes.bool,
  isExternalSource: PropTypes.bool,
  isLoading: PropTypes.bool,
  noCaption: PropTypes.bool,
  sprite: PropTypes.string,
  symbol: PropTypes.string,
  title: PropTypes.string
};

File.defaultProps = {
  iconColor: 'black',
  sprite: 'doctype',
  title: 'Image Title'
};

/**
 * AttachmentLink
 * articleTitle
 * articleDescription
 */
export const AttachmentLink = props => (
  <a
    href="#"
    className="slds-media slds-box slds-grow slds-text-link_reset"
    onClick={e => e.preventDefault()}
  >
    <div className="slds-media__figure slds-medium-show">
      <div className="slds-file slds-size_small">
        <figure className="slds-file__crop slds-file__crop_16-by-9">
          <img
            src="/assets/images/placeholder-img@16x9.jpg"
            alt="Description of the image"
          />
        </figure>
      </div>
    </div>
    <div className="slds-media__body">
      <h3 className="slds-text-heading_small">{props.articleTitle}</h3>
      <p>{props.articleDescription}</p>
      <span className="slds-text-body_small">{props.articleTitle}</span>
    </div>
  </a>
);

AttachmentLink.propTypes = {
  articleDescription: PropTypes.string,
  articleTitle: PropTypes.string
};

AttachmentLink.defaultProps = {
  articleDescription: 'Article Description',
  articleTitle: 'Article Title'
};
