// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import ButtonIcon from '../button-icons/';
import classNames from 'classnames';
import _ from '../../shared/helpers';

/**
 * Vars
 */
export const contentId01 = 'content-id-01';
export const contentId02 = 'content-id-02';
export const contentId03 = 'content-id-03';

export const indicatorId01 = 'indicator-id-01';
export const indicatorId02 = 'indicator-id-02';
export const indicatorId03 = 'indicator-id-03';

/**
 * Indicator Sub Component
 */
const CarouselIndicator = props => (
  <li className="slds-carousel__indicator" role="presentation">
    <a
      id={props.id}
      className={classNames(
        'slds-carousel__indicator-action',
        props.isActive && 'slds-is-active',
        props.className
      )}
      href="javascript:void(0);"
      role="tab"
      tabIndex={props.isActive ? '0' : '-1'}
      aria-selected={props.isActive ? 'true' : 'false'}
      aria-controls={props.contentId}
      title={props.title}
    >
      <span className="slds-assistive-text">{props.title}</span>
    </a>
  </li>
);

/**
 * Content Sub Component
 */
const CarouselPanel = props => (
  <div
    id={props.id}
    className={classNames('slds-carousel__panel', props.className)}
    role="tabpanel"
    aria-hidden={props.isActive ? 'true' : 'false'}
    aria-labelledby={props.indicatorId}
  >
    <a
      href="javascript:void(0);"
      className="slds-carousel__panel-action slds-text-link_reset"
      tabIndex={props.isActive ? '0' : '-1'}
    >
      <div className="slds-carousel__image">
        <img src={props.src} alt={props.title} />
      </div>
      <div className="slds-carousel__content">
        <h2 className="slds-carousel__content-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </a>
  </div>
);

/**
 * Play/Pause Button Sub Component
 */
export const CarouselPlayToggle = props => (
  <span className="slds-carousel__autoplay">
    <ButtonIcon
      className="slds-button_icon-border-filled slds-button_icon-x-small"
      symbol={props.stop ? 'right' : 'pause'}
      aria-controls={props['aria-controls']}
      aria-pressed={props.stop}
      disabled={props.disabled}
      title="Stop auto-play"
      assistiveText="Stop auto-play"
    />
  </span>
);

class Carousel extends Component {
  render() {
    return (
      <div className={classNames('slds-carousel', this.props.className)}>
        <div className="slds-carousel__stage">
          {this.props.autoPlay && (
            <CarouselPlayToggle stop={this.props.autoPlay == 'stop'} />
          )}

          <div
            className="slds-carousel__panels"
            style={{
              transform: `translateX(-${(this.props.panelActive - 1) * 100}%)`
            }}
          >
            <CarouselPanel
              isActive={this.props.panelActive == '1'}
              id={contentId01}
              indicatorId={indicatorId01}
              title="Visit App Exchange"
              description="Extend Salesforce with the #1 business marketplace."
              src="/assets/images/carousel/carousel-01.jpg"
            />
            <CarouselPanel
              isActive={this.props.panelActive == '2'}
              id={contentId02}
              indicatorId={indicatorId02}
              title="Click to Customize"
              description="Use the Object Manager to add fields, build layouts, and more."
              src="/assets/images/carousel/carousel-02.jpg"
            />
            <CarouselPanel
              isActive={this.props.panelActive == '3'}
              id={contentId03}
              indicatorId={indicatorId03}
              title="Download SalesforceA"
              description="Get the mobile app that's just for Salesforce admins."
              src="/assets/images/carousel/carousel-03.jpg"
            />
          </div>

          <ul className="slds-carousel__indicators" role="tablist">
            <CarouselIndicator
              isActive={this.props.panelActive == '1'}
              id={indicatorId01}
              contentId={contentId01}
              title="Visit App Exchange tab"
            />
            <CarouselIndicator
              isActive={this.props.panelActive == '2'}
              id={indicatorId02}
              contentId={contentId02}
              title="Click to Customize tab"
            />
            <CarouselIndicator
              isActive={this.props.panelActive == '3'}
              id={indicatorId03}
              contentId={contentId03}
              title="Download SalesforceA tab"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
