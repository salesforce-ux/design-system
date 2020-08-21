import React from 'react';

export const PathSimple = () => (
  <div className="slds-grid">
    <div className="slds-tabs--path" role="application">
      <ul className="slds-tabs--path__nav" role="tablist">
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-96"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-97"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-current"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-98"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-99"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-100"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </a>
        </li>
      </ul>
    </div>
    <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small">
      <svg
        className="slds-button__icon slds-button__icon--left"
        aria-hidden="true"
      >
        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
      </svg>
      Mark Status as Complete
    </button>
  </div>
);

export const PathSimpleCoaching = () => (
  <div className="slds-grid">
    <button
      className="slds-button slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small"
      title="Open"
    >
      <svg className="slds-button__icon" aria-hidden="true">
        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
      </svg>
      <span className="slds-assistive-text">Open</span>
    </button>
    <div className="slds-tabs--path" role="application">
      <ul className="slds-tabs--path__nav" role="tablist">
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-101"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-102"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-current"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-103"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-104"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-105"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Closed</span>
          </a>
        </li>
      </ul>
    </div>
    <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small">
      <svg
        className="slds-button__icon slds-button__icon--left"
        aria-hidden="true"
      >
        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
      </svg>
      Mark Status as Complete
    </button>
  </div>
);

export const PathSimpleCoachingVisible = () => (
  <div className="slds-path-coach">
    <div className="slds-grid">
      <button
        className="slds-button slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small slds-flip--vertical"
        title="Close"
      >
        <svg className="slds-button__icon" aria-hidden="true">
          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
        </svg>
        <span className="slds-assistive-text">Close</span>
      </button>
      <div className="slds-tabs--path" role="application">
        <ul className="slds-tabs--path__nav" role="tablist">
          <li
            className="slds-tabs--path__item slds-is-complete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-106"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-tabs--path__title">Contacted</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-complete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-107"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-tabs--path__title">Open</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-current"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-108"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Unqualified</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-incomplete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-109"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Nurturing</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-incomplete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-110"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Closed</span>
            </a>
          </li>
        </ul>
      </div>
      <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small">
        <svg
          className="slds-button__icon slds-button__icon--left"
          aria-hidden="true"
        >
          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
        </svg>
        Mark Status as Complete
      </button>
    </div>
    <div
      id="content-path-1"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-1"
    >
      <h2>Item One Content</h2>
    </div>
    <div
      id="content-path-2"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-2"
    >
      <h2>Item Two Content</h2>
    </div>
    <div
      id="content-path-3"
      className="slds-tabs--path__content slds-show"
      role="tabpanel"
      aria-labelledby="tab-path-3"
    >
      <div className="slds-grid slds-grid--align-spread">
        <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
          <div className="slds-grid slds-grid--align-spread">
            <h2 className="slds-text-title--caps slds-p-bottom--small">
              Key Fields This Stage
            </h2>
            <span className="slds-text-body--small">
              <a href="#" onClick={e => e.preventDefault()}>
                Edit
              </a>
            </span>
          </div>
          <dl className="slds-dl--horizontal">
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Expected Budget
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              $10,000
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Lead Source
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              Marketing and Web Referral
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Support Engineer
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              <a href="#" onClick={e => e.preventDefault()}>
                Jack Arthur
              </a>
            </dd>
          </dl>
        </div>
        <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
          <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">
            Guidance for Success
          </h2>
          <div className="slds-text-longform slds-p-top--medium">
            <p>
              Regularly cross-sell related products using{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                cross-sell tactics and principles
              </a>
              .
            </p>
            <p>
              Prepare demo deck using the{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                latest template
              </a>{' '}
              and review with Marketing and Sales teams. Review demo copy with
              Legal and Doc team.
            </p>
            <p>
              Look up{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                needs analysis principles
              </a>{' '}
              and review selling plan with Sales Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="content-path-4"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-4"
    >
      <div className="slds-grid slds-grid--align-spread">
        <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
          <div className="slds-grid slds-grid--align-spread">
            <h2 className="slds-text-title--caps slds-p-bottom--small">
              Key Fields This Stage
            </h2>
            <span className="slds-text-body--small">
              <a href="#" onClick={e => e.preventDefault()}>
                Edit
              </a>
            </span>
          </div>
          <dl className="slds-dl--horizontal">
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Build State
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              In Motion
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Expected Sign Date
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">-</dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Key Buyer
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              <a href="#" onClick={e => e.preventDefault()}>
                -
              </a>
            </dd>
          </dl>
        </div>
        <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
          <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">
            Guidance for Success
          </h2>
          <div className="slds-text-longform slds-p-top--medium">
            <p>
              Check out the latest Negotiation and Review tactics on our{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                online portal here
              </a>
              .
            </p>
            <p>
              Review Quote with the Legal and Marketing team and be sure to
              approve with Exec.
            </p>
            <p>Set up at time to delivery schedule and check with Inventory.</p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="content-path-5"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-5"
    >
      <h2>Item Five Content</h2>
    </div>
  </div>
);

export const PathSimpleDifferentStage = () => (
  <div className="slds-path-coach">
    <div className="slds-grid">
      <button
        className="slds-button slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small slds-flip--vertical"
        title="Close"
      >
        <svg className="slds-button__icon" aria-hidden="true">
          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
        </svg>
        <span className="slds-assistive-text">Close</span>
      </button>
      <div className="slds-tabs--path" role="application">
        <ul className="slds-tabs--path__nav" role="tablist">
          <li
            className="slds-tabs--path__item slds-is-complete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-111"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-tabs--path__title">Contacted</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-complete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-112"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
                <span className="slds-assistive-text">Stage Complete</span>
              </span>
              <span className="slds-tabs--path__title">Open</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-current"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-113"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Unqualified</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-incomplete slds-is-active"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-114"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Nurturing</span>
            </a>
          </li>
          <li
            className="slds-tabs--path__item slds-is-incomplete"
            role="presentation"
          >
            <a
              className="slds-tabs--path__link"
              id="tabs-path-115"
              aria-controls="content-path-1"
              aria-selected="false"
              tabIndex="-1"
              role="tab"
              href="#"
              onClick={e => e.preventDefault()}
              aria-live="assertive"
            >
              <span className="slds-tabs--path__stage">
                <svg
                  className="slds-icon slds-icon--x-small"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
                </svg>
              </span>
              <span className="slds-tabs--path__title">Closed</span>
            </a>
          </li>
        </ul>
      </div>
      <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small slds-path__mark-current">
        Mark as Current Stage
      </button>
    </div>
    <div
      id="content-path-1"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-1"
    >
      <h2>Item One Content</h2>
    </div>
    <div
      id="content-path-2"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-2"
    >
      <h2>Item Two Content</h2>
    </div>
    <div
      id="content-path-3"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-3"
    >
      <div className="slds-grid slds-grid--align-spread">
        <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
          <div className="slds-grid slds-grid--align-spread">
            <h2 className="slds-text-title--caps slds-p-bottom--small">
              Key Fields This Stage
            </h2>
            <span className="slds-text-body--small">
              <a href="#" onClick={e => e.preventDefault()}>
                Edit
              </a>
            </span>
          </div>
          <dl className="slds-dl--horizontal">
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Expected Budget
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              $10,000
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Lead Source
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              Marketing and Web Referral
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Support Engineer
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              <a href="#" onClick={e => e.preventDefault()}>
                Jack Arthur
              </a>
            </dd>
          </dl>
        </div>
        <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
          <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">
            Guidance for Success
          </h2>
          <div className="slds-text-longform slds-p-top--medium">
            <p>
              Regularly cross-sell related products using{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                cross-sell tactics and principles
              </a>
              .
            </p>
            <p>
              Prepare demo deck using the{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                latest template
              </a>{' '}
              and review with Marketing and Sales teams. Review demo copy with
              Legal and Doc team.
            </p>
            <p>
              Look up{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                needs analysis principles
              </a>{' '}
              and review selling plan with Sales Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="content-path-4"
      className="slds-tabs--path__content slds-show"
      role="tabpanel"
      aria-labelledby="tab-path-4"
    >
      <div className="slds-grid slds-grid--align-spread">
        <div className="slds-coach__keys slds-size--1-of-2 slds-m-left--x-large">
          <div className="slds-grid slds-grid--align-spread">
            <h2 className="slds-text-title--caps slds-p-bottom--small">
              Key Fields This Stage
            </h2>
            <span className="slds-text-body--small">
              <a href="#" onClick={e => e.preventDefault()}>
                Edit
              </a>
            </span>
          </div>
          <dl className="slds-dl--horizontal">
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Build State
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              In Motion
            </dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Expected Sign Date
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">-</dd>
            <dt className="slds-coach__item slds-dl--horizontal__label">
              Key Buyer
            </dt>
            <dd className="slds-coach__value slds-dl--horizontal__detail">
              <a href="#" onClick={e => e.preventDefault()}>
                -
              </a>
            </dd>
          </dl>
        </div>
        <div className="slds-coach__guidance slds-size--1-of-2 slds-m-left--x-large">
          <h2 className="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">
            Guidance for Success
          </h2>
          <div className="slds-text-longform slds-p-top--medium">
            <p>
              Check out the latest Negotiation and Review tactics on our{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                online portal here
              </a>
              .
            </p>
            <p>
              Review Quote with the Legal and Marketing team and be sure to
              approve with Exec.
            </p>
            <p>Set up at time to delivery schedule and check with Inventory.</p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="content-path-5"
      className="slds-tabs--path__content slds-hide"
      role="tabpanel"
      aria-labelledby="tab-path-5"
    >
      <h2>Item Five Content</h2>
    </div>
  </div>
);

export const PathSimpleLost = () => (
  <div className="slds-grid">
    <button
      className="slds-button slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small"
      title="Open"
    >
      <svg className="slds-button__icon" aria-hidden="true">
        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
      </svg>
      <span className="slds-assistive-text">Open</span>
    </button>
    <div className="slds-tabs--path" role="application">
      <ul className="slds-tabs--path__nav" role="tablist">
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-116"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-117"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-118"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-incomplete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-119"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </a>
        </li>
        <li className="slds-tabs--path__item slds-is-lost" role="presentation">
          <a
            className="slds-tabs--path__link"
            id="tabs-path-120"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Closed Lost</span>
          </a>
        </li>
      </ul>
    </div>
    <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small">
      Change Closed State
    </button>
  </div>
);

export const PathSimpleWon = () => (
  <div className="slds-grid">
    <button
      className="slds-button slds-button--icon-border-filled slds-path__trigger slds-no-flex slds-m-horizontal--small"
      title="Open"
    >
      <svg className="slds-button__icon" aria-hidden="true">
        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
      </svg>
      <span className="slds-assistive-text">Open</span>
    </button>
    <div className="slds-tabs--path" role="application">
      <ul className="slds-tabs--path__nav" role="tablist">
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-121"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Contacted</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-122"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
              <span className="slds-assistive-text">Stage Complete</span>
            </span>
            <span className="slds-tabs--path__title">Open</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-123"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Unqualified</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-124"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Nurturing</span>
          </a>
        </li>
        <li
          className="slds-tabs--path__item slds-is-complete slds-is-won"
          role="presentation"
        >
          <a
            className="slds-tabs--path__link"
            id="tabs-path-125"
            aria-controls="content-path-1"
            aria-selected="false"
            tabIndex="-1"
            role="tab"
            href="#"
            onClick={e => e.preventDefault()}
            aria-live="assertive"
          >
            <span className="slds-tabs--path__stage">
              <svg className="slds-icon slds-icon--x-small" aria-hidden="true">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check" />
              </svg>
            </span>
            <span className="slds-tabs--path__title">Closed Won</span>
          </a>
        </li>
      </ul>
    </div>
    <button className="slds-button slds-button--brand slds-path__mark-complete slds-no-flex slds-m-horizontal--small">
      Change Closed State
    </button>
  </div>
);
