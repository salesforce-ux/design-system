// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';
import { ButtonGroup } from '../button-groups/base/example';
import ButtonIcon from '../button-icons/';
import { Spinner } from '../spinners/base/example';

/**
 * ActionsMenu - controls the display of white or black-colored icons in the title card
 * whiteIcons - triggers white icons to be used (default: black icons, used with a title)
 */
const ActionsMenu = ({ whiteIcons }) => {
  const buttonIconClassNames = classNames(
    'slds-button_icon slds-button_icon-x-small',
    {
      'slds-button_icon-inverse': whiteIcons
    }
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
  whiteIcons: PropTypes.bool
};

/**
 * ActionsConditional - controls the display of a wrapper div for actions
 * scrim - triggers a gradient background behind the action items when used without a title
 * whiteIcons - triggers white icons to be used (default: black icons)
 */
const ActionsConditional = ({ scrim, whiteIcons }) => {
  if (scrim) {
    return (
      <div className="slds-file__title slds-file__title_scrim">
        <ActionsMenu whiteIcons={whiteIcons} />
      </div>
    );
  } else {
    return <ActionsMenu whiteIcons={whiteIcons} />;
  }
};

ActionsConditional.propTypes = {
  scrim: PropTypes.bool,
  whiteIcons: PropTypes.bool
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
     * hasIcon - determines if an icon should be rendered within the title card
     * hasCaption - determines if a title should be rendered
     * hasTitle - determines if an additional class should be added for hover states on Files with a title card. This does not include Files with the `slds-file__title_overlay` class.
     */
    this.state = {
      hasIcon: this.props.symbol,
      hasCaption: !this.props.noCaption,
      hasTitle: this.props.hasTitleCard && !this.props.hasOverlay
    };

    this.renderContent = this.renderContent.bind(this);
  }

  /**
   * renderContent - Determines what media to render within a File component
   * isLoading - renders Spinner
   * hasImage - renders a landscape-oriented image
   * hasImagePortrait - renders a portrait-oriented image
   * default - renders an icon
   */
  renderContent() {
    const {
      isLoading,
      hasImage,
      hasImagePortrait,
      symbol,
      sprite,
      title
    } = this.props;

    if (isLoading) {
      return <Spinner className="slds-spinner_medium" />;
    } else if (hasImage) {
      return (
        <img
          src="/assets/images/placeholder-img@16x9.jpg"
          alt="Description of the image"
        />
      );
    } else if (hasImagePortrait) {
      return (
        <img
          src="/assets/images/placeholder-img@9x16.jpg"
          alt="Description of the image"
        />
      );
    } else {
      return (
        <span className="slds-file__icon slds-icon_container" title={symbol}>
          <SvgIcon className="slds-icon" sprite={sprite} symbol={symbol} />
          <span className="slds-assistive-text">{title}</span>
        </span>
      );
    }
  }

  render() {
    const {
      isLoading,
      isCard,
      hasCrop,
      has16x9Crop,
      has4x3Crop,
      has1x1Crop,
      hasImagePortrait,
      hasOverlay,
      hasTitleCard,
      hasActions,
      symbol,
      title,
      isExternalSource,
      hasScrim,
      hasWhiteIcons
    } = this.props;

    const { hasIcon, hasCaption, hasTitle } = this.state;

    // If no crop prop is passed, default to `slds-file__figure`
    const figureClasses =
      classNames({
        'slds-file__crop': hasCrop,
        'slds-file__crop slds-file__crop_16-by-9': has16x9Crop,
        'slds-file__crop slds-file__crop_4-by-3': has4x3Crop,
        'slds-file__crop slds-file__crop-1-by-1': has1x1Crop,
        'slds-file__figure slds-file__figure_portrait': hasImagePortrait
      }) || 'slds-file__figure';

    return (
      <div
        className={classNames('slds-file', {
          'slds-file_card': isCard,
          'slds-file__loading': isLoading,
          'slds-has-title': hasTitle
        })}
      >
        <figure className={figureClasses}>
          {/*
            aXe is reporting an a11y violation where it says the <a> does not detect any discernible text when using <Spinner>, despite this not being the case (Spinner has "Loading" in .slds-assistive-text). To prevent this from breaking the build, we're excluding `.slds-file figure > a` from aXe linting. Tread carefully.
          */}
          <a href="javascript:void(0);">
            {hasOverlay && <div className="slds-file_overlay" />}

            {this.renderContent()}
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
          <ActionsConditional scrim={hasScrim} whiteIcons={hasWhiteIcons} />
        )}
      </div>
    );
  }
}

File.propTypes = {
  isLoading: PropTypes.bool,
  hasImage: PropTypes.bool,
  hasImagePortrait: PropTypes.bool,
  symbol: PropTypes.string,
  sprite: PropTypes.string,
  title: PropTypes.string,
  isCard: PropTypes.bool,
  hasCrop: PropTypes.bool,
  has16x9Crop: PropTypes.bool,
  has4x3Crop: PropTypes.bool,
  has1x1Crop: PropTypes.bool,
  hasOverlay: PropTypes.bool,
  hasTitleCard: PropTypes.bool,
  hasActions: PropTypes.bool,
  isExternalSource: PropTypes.bool,
  hasScrim: PropTypes.bool,
  hasWhiteIcons: PropTypes.bool,
  noCaption: PropTypes.bool
};

File.defaultProps = {
  sprite: 'doctype',
  title: 'Image Title'
};

/**
 * AttachmentLink
 * articleTitle
 * articleDescription
 */
export const AttachmentLink = ({ articleTitle, articleDescription }) => (
  <a
    href="javascript:void(0);"
    className="slds-media slds-box slds-grow slds-text-link_reset"
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
      <h3 className="slds-text-heading_small">{articleTitle}</h3>
      <p>{articleDescription}</p>
      <span className="slds-text-body_small">{articleTitle}</span>
    </div>
  </a>
);

AttachmentLink.propTypes = {
  articleTitle: PropTypes.string,
  articleDescription: PropTypes.string
};

AttachmentLink.defaultProps = {
  articleTitle: 'Article Title',
  articleDescription: 'Article Description'
};
