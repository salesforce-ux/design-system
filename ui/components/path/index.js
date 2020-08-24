import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../buttons/base/example';
import ButtonIcon from '../button-icons';
import SvgIcon from '../../shared/svg-icon';
import RecordDetail from '../form-element/record-detail';

/**
 * @name Path - Path container element
 * @param {*} props
 * @prop {boolean} hasCoaching - set to true if the Path has a Coaching section
 * @prop {coachingOpen} - set to true if the Path coaching should display in an open state
 *
 */
export const Path = props => (
  <div
    className={classNames('slds-path', {
      'slds-path_has-coaching': props.hasCoaching,
      'slds-is-expanded': props.coachingOpen
    })}
  >
    {props.children}
  </div>
);

Path.propTypes = {
  hasCoaching: PropTypes.bool,
  coachingOpen: PropTypes.bool
};

Path.defaultProps = {
  hasCoaching: false,
  coachingOpen: false
};

/**
 * @name PathTrack - Track container for Path Steps
 * @param {*} props
 * @prop {boolean} hasCaoching - When true, adds the Coaching Button Toggle and preps Path Track for coaching support
 * @prop {boolean} coachingOpen - When true, displays the Coaching Button Toggle in an active state
 * @prop {boolean} hasOverflow - When true, presents the Path Steps in a scroller wrapper with control buttons
 * @prop {string} coachingId - Id of Coaching container element
 * @prop {string} stageName - Visible name of the current stage
 * @prop {node} actionButtonLabel - Visible content of the Action Button
 */
export const PathTrack = props => {
  const {
    hasCoaching,
    coachingOpen,
    hasOverflow,
    coachingId,
    stageName,
    actionButtonLabel
  } = props;

  return (
    <div
      className={classNames('slds-grid slds-path__track', {
        'slds-has-overflow': hasOverflow
      })}
    >
      <div className="slds-grid slds-path__scroller-container">
        {hasCoaching ? (
          <ButtonIcon
            symbol="chevronright"
            theme="neutral"
            className={classNames('slds-path__trigger', {
              'slds-path__trigger_open': coachingOpen
            })}
            assistiveText="Show Details"
            title="Toggle Sales Coaching"
            aria-expanded={coachingOpen}
            aria-controls={coachingId}
          />
        ) : null}

        <div className="slds-path__scroller">
          <div className="slds-path__scroller_inner">
            <ul
              className="slds-path__nav"
              role="listbox"
              aria-orientation="horizontal"
            >
              {props.children}
            </ul>

            {hasOverflow ? (
              <div className="slds-path__scroll-controls">
                <ButtonIcon
                  symbol="left"
                  theme="neutral"
                  assistiveText="Scroll left"
                  title="Scroll left"
                  tabIndex="-1"
                />

                <ButtonIcon
                  symbol="right"
                  theme="neutral"
                  assistiveText="Scroll right"
                  title="Scroll right"
                  tabIndex="-1"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="slds-grid slds-path__action">
        <span className="slds-path__stage-name">Stage: {stageName}</span>
        <Button isBrand className="slds-path__mark-complete">
          {actionButtonLabel}
        </Button>
        {hasCoaching ? (
          <Button
            isNeutral
            className="slds-path__trigger-coaching-content"
            aria-expanded={coachingOpen}
            aria-controls={coachingId}
          >
            {coachingOpen ? 'Show Less' : 'Show More'}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

PathTrack.propTypes = {
  hasCoaching: PropTypes.bool,
  coachingOpen: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  coachingId: PropTypes.string,
  stageName: PropTypes.string,
  actionButtonLabel: PropTypes.node
};

PathTrack.defaultProps = {
  hasCoaching: false,
  coachingOpen: false,
  hasOverflow: false,
  coachingId: '',
  stageName: 'Unqualified',
  actionButtonLabel: (
    <Fragment>
      <SvgIcon
        className="slds-button__icon slds-button__icon_left"
        sprite="utility"
        symbol="check"
        aria-hidden="true"
      />
      Mark Status as Complete
    </Fragment>
  )
};

/**
 * @name PathStep - Individual Path Step
 * @param {*} props
 * @prop {string} label - Visible label for Path Step
 * @prop {array} stepState - Array of states for the current step
 * @prop {integer} index - unique index for the step
 */
export class PathStep extends Component {
  constructor() {
    super();

    this.state = {
      itemRef: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { setTooltipRef } = this.props;
    const { itemRef } = this.state;

    if (setTooltipRef && itemRef !== prevState.itemRef) {
      setTooltipRef(itemRef);
    }
  }

  render() {
    const { label, stepState, index } = this.props;
    const isActive = stepState.indexOf('active') > -1;
    const isComplete = stepState.indexOf('complete') > -1;
    const isCurrent = stepState.indexOf('current') > -1;
    let stageAssistiveText = null;

    if (isComplete) {
      stageAssistiveText = 'Stage Complete';
    } else if (isCurrent) {
      stageAssistiveText = 'Current Stage:';
    }

    return (
      <li
        className={classNames(
          'slds-path__item',
          stepState.map(stateClass => `slds-is-${stateClass}`)
        )}
        role="presentation"
        ref={itemRef => {
          if (!this.state.itemRef) this.setState({ itemRef });
        }}
      >
        <a
          aria-selected={isActive}
          className="slds-path__link"
          href="#"
          onClick={e => e.preventDefault()}
          id={`path-${index}`}
          role="option"
          tabIndex={isActive ? 0 : -1}
        >
          <span className="slds-path__stage">
            <SvgIcon
              className="slds-icon slds-icon_x-small"
              sprite="utility"
              symbol="check"
            />

            {stageAssistiveText ? (
              <span className="slds-assistive-text">{stageAssistiveText}</span>
            ) : null}
          </span>
          <span className="slds-path__title">{label}</span>
        </a>
      </li>
    );
  }
}

PathStep.propTypes = {
  label: PropTypes.string,
  stepState: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number
};

PathStep.defaultProps = {
  label: 'Undefined',
  stepState: ['incomplete'],
  index: 0
};

/**
 * @name PathCoaching - Example Coaching Section
 * @param {*} props
 * @prop {string} coachingId - ID attribute for the coaching container.
 * @prop {boolean} isHidden - visibility state of the Path Coaching section.
 */
export const PathCoaching = props => {
  const { coachingId, isHidden, coachingData, pathGuidance } = props;

  return (
    <div
      className={classNames('slds-path__content', {
        'slds-is-collapsed': isHidden
      })}
      id={coachingId}
    >
      <div className="slds-path__coach slds-grid">
        <div className="slds-path__keys">
          <div className="slds-grid slds-grid_align-spread slds-path__coach-title">
            <h2>Key Fields This Stage</h2>
            <Button className="slds-path__coach-edit slds-text-body_small">
              Edit
            </Button>
          </div>

          <RecordDetail
            direction="stacked"
            snapshot={coachingData}
            isViewMode
          />
        </div>

        <div className="slds-path__guidance">
          <h2 className="slds-path__coach-title">Guidance for Success</h2>
          <div className="slds-text-longform slds-path__guidance-content">
            {pathGuidance}
          </div>
        </div>
      </div>
    </div>
  );
};

PathCoaching.propTypes = {
  coachingId: PropTypes.string,
  isHidden: PropTypes.bool,
  coachingData: PropTypes.object,
  pathGuidance: PropTypes.arrayOf(PropTypes.node)
};

PathCoaching.defaultProps = {
  coachingId: null,
  isHidden: false,
  coachingData: {
    rows: [
      {
        fields: [
          {
            type: 'text',
            label: 'Expected Budget',
            value: '$10,000'
          }
        ]
      },
      {
        fields: [
          {
            type: 'text',
            label: 'Lead Source',
            value: 'Marketing and Web Referral'
          }
        ]
      },
      {
        fields: [
          {
            type: 'text',
            label: 'Support Engineer',
            value: 'Jane Authur'
          }
        ]
      }
    ]
  },
  pathGuidance: [
    <p key="guidance-1">
      Regularly cross-sell related products using{' '}
      <a href="#" onClick={e => e.preventDefault()}>
        cross-sell tactics and principles
      </a>
      .
    </p>,
    <p key="guidance-2">
      Prepare demo deck using the{' '}
      <a href="#" onClick={e => e.preventDefault()}>
        latest template
      </a>{' '}
      and review with Marketing and Sales teams. Review demo copy with Legal and
      Doc team.
    </p>,
    <p key="guidance-3">
      Look up{' '}
      <a href="#" onClick={e => e.preventDefault()}>
        needs analysis principles
      </a>{' '}
      and review selling plan with Sales Engineer.
    </p>
  ]
};
