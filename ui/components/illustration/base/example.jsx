// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

import { LakeMountain, FishingDeals, NoEvents, NoTask, Setup } from '../custom';

import { GoingCamping, Maintenance } from '../informational';

import { Desert, OpenRoad } from '../nodata';

import {
  NoAccess,
  NoConnection,
  NotAvailableInLightning,
  PageNotAvailable,
  WalkthroughNotAvailable
} from '../error';

import {
  GoneFishing,
  NoAccess2,
  NoContent,
  NoPreview,
  Preview,
  Research
} from '../misc';

export const Illustration = props => (
  <div className="slds-illustration slds-illustration_small">
    {props.children}
  </div>
);

export const IllustrationText = props => (
  <div className="slds-text-longform">
    {props.heading && (
      <h3 className="slds-text-heading_medium">{props.heading}</h3>
    )}
    {props.message &&
      props.secondaryCTA && (
        <p className="slds-text-body_regular">
          {props.message}{' '}
          <a
            href="javascript:void(0);"
            className="slds-truncate"
            title={props.secondaryCTA}
          >
            {props.secondaryCTA}
          </a>
        </p>
      )}
    {props.message &&
      !props.secondaryCTA && (
        <p className="slds-text-body_regular">{props.message}</p>
      )}
  </div>
);

export const IllustrationCTA = props => (
  <article className="slds-card">
    <div className="slds-card__header slds-grid">
      <header>
        <h2>
          <a
            href="javascript:void(0);"
            className="slds-card__header-link slds-truncate"
            title="Today's Tasks"
          >
            <span className="slds-text-heading_small">Today's Tasks</span>
          </a>
        </h2>
      </header>
    </div>
    {props.children}
    <footer className="slds-card__footer">
      {props.link && <a href="javascript:void(0);">View All</a>}
      {props.button && <button className={props.button}>Create Task</button>}
    </footer>
  </article>
);

export default (
  <Illustration>
    <FishingDeals />
    <IllustrationText
      heading="Lorem ipsum dolor"
      message="Lorem ipsum dolor sit amet, consectetur"
    />
  </Illustration>
);

export let states = [
  {
    id: 'lake-mountain',
    label: 'Lake Mountain',
    element: (
      <Illustration>
        <LakeMountain />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-events',
    label: 'No Events',
    element: (
      <Illustration>
        <NoEvents />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-task',
    label: 'No Task',
    element: (
      <Illustration>
        <NoTask />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'setup',
    label: 'Setup',
    element: (
      <Illustration>
        <Setup />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'going-camping',
    label: 'Going Camping',
    element: (
      <Illustration>
        <GoingCamping />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    element: (
      <Illustration>
        <Maintenance />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'desert',
    label: 'Desert',
    element: (
      <Illustration>
        <Desert />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'open-road',
    label: 'Open Road',
    element: (
      <Illustration>
        <OpenRoad />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-access',
    label: 'No Access',
    element: (
      <Illustration>
        <NoAccess />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-connection',
    label: 'No Connection',
    element: (
      <Illustration>
        <NoConnection />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'not-available-in-lightning',
    label: 'Not Available In Lightning',
    element: (
      <Illustration>
        <NotAvailableInLightning />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'page-not-available',
    label: 'Page Not Available',
    element: (
      <Illustration>
        <PageNotAvailable />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'walkthrough-not-available',
    label: 'Walkthrough Not Available',
    element: (
      <Illustration>
        <WalkthroughNotAvailable />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'gone-fishing',
    label: 'Gone Fishing',
    element: (
      <Illustration>
        <GoneFishing />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-access-2',
    label: 'NoAccess2',
    element: (
      <Illustration>
        <NoAccess2 />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-content',
    label: 'No Content',
    element: (
      <Illustration>
        <NoContent />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'no-preview',
    label: 'No Preview',
    element: (
      <Illustration>
        <NoPreview />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'preview',
    label: 'Preview',
    element: (
      <Illustration>
        <Preview />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  },
  {
    id: 'research',
    label: 'Research',
    element: (
      <Illustration>
        <Research />
        <IllustrationText
          heading="Lorem ipsum dolor"
          message="Lorem ipsum dolor sit amet, consectetur"
        />
      </Illustration>
    )
  }
];

export let examples = [
  {
    id: 'headline-only',
    label: 'Headline Only',
    element: (
      <Illustration>
        <FishingDeals />
        <IllustrationText heading="Lorem ipsum dolor" />
      </Illustration>
    )
  }
];
