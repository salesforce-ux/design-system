// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React, { Component, Fragment } from 'react';
import SLDSFrame from '../../../../shared/components/SLDSFrame';

import { Tooltip } from '../../tooltips/base/example';

import { Path, PathTrack, PathStep, PathCoaching } from '../';

const PathBase = () => (
  <Path>
    <PathTrack>
      <PathStep label="Contacted" stepState={['current', 'active']} index={1} />
      <PathStep label="Open" stepState={['incomplete']} index={2} />
      <PathStep label="Unqualified" stepState={['incomplete']} index={3} />
      <PathStep label="Nurturing" stepState={['incomplete']} index={4} />
      <PathStep label="Closed" stepState={['incomplete']} index={5} />
    </PathTrack>
  </Path>
);

const PathLaterStage = () => (
  <Path>
    <PathTrack>
      <PathStep label="Contacted" stepState={['complete']} index={6} />
      <PathStep label="Open" stepState={['complete']} index={7} />
      <PathStep label="Unqualified" stepState={['complete']} index={8} />
      <PathStep label="Nurturing" stepState={['current', 'active']} index={9} />
      <PathStep label="Closed" stepState={['incomplete']} index={10} />
    </PathTrack>
  </Path>
);

const PathDifferentStage = () => (
  <Path>
    <PathTrack actionButtonLabel="Mark as Current Stage">
      <PathStep label="Contacted" stepState={['current']} index={11} />
      <PathStep label="Open" stepState={['incomplete']} index={12} />
      <PathStep label="Unqualified" stepState={['active']} index={13} />
      <PathStep label="Nurturing" stepState={['incomplete']} index={14} />
      <PathStep label="Closed" stepState={['incomplete']} index={15} />
    </PathTrack>
  </Path>
);

class PathVisibleTooltip extends Component {
  constructor() {
    super();

    this.updateTooltipOffset = this.updateTooltipOffset.bind(this);
    this.setTooltipRef = this.setTooltipRef.bind(this);

    this.state = {
      tooltipRef: null,
      tooltipLeft: 0,
      tooltipTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateTooltipOffset);
    this.updateTooltipOffset();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateTooltipOffset);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tooltipRef && !prevState.tooltipRef) {
      this.updateTooltipOffset();
    }
  }

  updateTooltipOffset() {
    const { tooltipRef } = this.state;
    let tooltipLeft = 0;
    let tooltipTop = 0;

    if (tooltipRef) {
      tooltipLeft = tooltipRef.offsetLeft + tooltipRef.offsetWidth / 2;
      tooltipTop = tooltipRef.offsetTop + tooltipRef.offsetHeight + 14;
    }

    this.setState({
      tooltipLeft,
      tooltipTop
    });
  }

  setTooltipRef(tooltipRef) {
    this.setState({ tooltipRef });
  }

  render() {
    const { tooltipLeft, tooltipTop } = this.state;

    return (
      <Fragment>
        <Path>
          <PathTrack actionButtonLabel="Mark as Current Stage">
            <PathStep label="Contacted" stepState={['complete']} index={16} />
            <PathStep label="Open" stepState={['complete']} index={17} />
            <PathStep
              label="Unqualified"
              stepState={['current']}
              index={18}
              setTooltipRef={tooltip => this.setTooltipRef(tooltip)}
            />
            <PathStep label="Nurturing" stepState={['active']} index={19} />
            <PathStep label="Closed" stepState={['incomplete']} index={20} />
          </PathTrack>
          <Tooltip
            className="slds-nubbin_top"
            style={{
              left: `${tooltipLeft}px`,
              transform: 'translateX(-50%)',
              top: `${tooltipTop}px`,
              position: 'absolute'
            }}
          >
            3 Days in Unqualified
          </Tooltip>
        </Path>
      </Fragment>
    );
  }
}

const PathWithCoaching = () => {
  const coachingId = 'path-coaching-1';

  return (
    <Path hasCoaching>
      <PathTrack coachingId={coachingId} hasCoaching>
        <PathStep label="Contacted" stepState={['complete']} index={21} />
        <PathStep label="Open" stepState={['complete']} index={22} />
        <PathStep
          label="Unqualified"
          stepState={['active', 'current']}
          index={23}
        />
        <PathStep label="Nurturing" stepState={['incomplete']} index={24} />
        <PathStep label="Closed" stepState={['incomplete']} index={25} />
      </PathTrack>

      <PathCoaching coachingId={coachingId} labelledBy="path-23" isHidden />
    </Path>
  );
};

const PathWithCoachingOpen = () => {
  const coachingId = 'path-coaching-2';

  return (
    <Path hasCoaching coachingOpen>
      <PathTrack coachingId={coachingId} hasCoaching coachingOpen>
        <PathStep label="Contacted" stepState={['complete']} index={26} />
        <PathStep label="Open" stepState={['complete']} index={27} />
        <PathStep label="Unqualified" stepState={['current']} index={28} />
        <PathStep
          label="Nurturing"
          stepState={['incomplete', 'active']}
          index={29}
        />
        <PathStep label="Closed" stepState={['incomplete']} index={30} />
      </PathTrack>

      <PathCoaching coachingId={coachingId} labelledBy="path-28" />
    </Path>
  );
};

const PathWon = () => (
  <Path>
    <PathTrack actionButtonLabel="Change Closed State">
      <PathStep label="Contacted" stepState={['complete']} index={31} />
      <PathStep label="Open" stepState={['complete']} index={32} />
      <PathStep label="Unqualified" stepState={['complete']} index={33} />
      <PathStep label="Nurturing" stepState={['complete']} index={34} />
      <PathStep
        label="Closed Won"
        stepState={['won', 'active', 'current']}
        index={35}
      />
    </PathTrack>
  </Path>
);

const PathLost = () => (
  <Path>
    <PathTrack actionButtonLabel="Change Closed State">
      <PathStep label="Contacted" stepState={['incomplete']} index={36} />
      <PathStep label="Open" stepState={['incomplete']} index={37} />
      <PathStep label="Unqualified" stepState={['incomplete']} index={38} />
      <PathStep label="Nurturing" stepState={['incomplete']} index={39} />
      <PathStep
        label="Closed Lost"
        stepState={['lost', 'active', 'current']}
        index={40}
      />
    </PathTrack>
  </Path>
);

const PathWithOverflow = () => (
  <Path>
    <PathTrack hasOverflow>
      <PathStep label="Prospecting" stepState={['complete']} index={41} />
      <PathStep label="Qualification" stepState={['complete']} index={42} />
      <PathStep
        label="Needs Analysis"
        stepState={['active', 'current']}
        index={43}
      />
      <PathStep
        label="Value Proposition"
        stepState={['incomplete']}
        index={44}
      />
      <PathStep
        label="Id. Decision Maker"
        stepState={['incomplete']}
        index={45}
      />
      <PathStep
        label="Perception Analysis"
        stepState={['incomplete']}
        index={46}
      />
      <PathStep
        label="Proposal / Pricing"
        stepState={['incomplete']}
        index={47}
      />
      <PathStep
        label="Negotiation / Review"
        stepState={['incomplete']}
        index={48}
      />
      <PathStep label="Closed" stepState={['incomplete']} index={49} />
    </PathTrack>
  </Path>
);

const PathMedium = () => (
  <div className="slds-region_medium" style={{ width: '700px' }}>
    <Path>
      <PathTrack>
        <PathStep label="Contacted" stepState={['complete']} index={50} />
        <PathStep label="Open" stepState={['complete']} index={51} />
        <PathStep
          label="Unqualified"
          stepState={['active', 'current']}
          index={52}
        />
        <PathStep label="Nurturing" stepState={['incomplete']} index={53} />
        <PathStep label="Closed" stepState={['incomplete']} index={54} />
      </PathTrack>
    </Path>
  </div>
);

const PathMediumCoaching = () => {
  const coachingId = 'path-coaching-2';

  return (
    <div className="slds-region_medium" style={{ width: '700px' }}>
      <Path hasCoaching coachingOpen>
        <PathTrack
          stageName="Needs Analysis"
          coachingId={coachingId}
          hasCoaching
          coachingOpen
          hasOverflow
        >
          <PathStep label="Prospecting" stepState={['complete']} index={55} />
          <PathStep label="Qualification" stepState={['complete']} index={56} />
          <PathStep
            label="Needs Analysis"
            stepState={['active', 'current']}
            index={57}
          />
          <PathStep
            label="Value Proposition"
            stepState={['incomplete']}
            index={58}
          />
          <PathStep
            label="Id. Decision Maker"
            stepState={['incomplete']}
            index={59}
          />
          <PathStep
            label="Perception Analysis"
            stepState={['incomplete']}
            index={60}
          />
          <PathStep
            label="Proposal / Pricing"
            stepState={['incomplete']}
            index={61}
          />
          <PathStep
            label="Negotiation / Review"
            stepState={['incomplete']}
            index={62}
          />
          <PathStep label="Closed" stepState={['incomplete']} index={63} />
        </PathTrack>
        <PathCoaching coachingId={coachingId} labelledBy="path-57" />
      </Path>
    </div>
  );
};

const PathSmall = () => {
  const coachingId = 'path-coaching-3';

  return (
    <div className="slds-region_small" style={{ width: '360px' }}>
      <Path hasCoaching coachingOpen>
        <PathTrack
          stageName="Needs Analysis"
          coachingId={coachingId}
          hasOverflow
          hasCoaching
          coachingOpen
        >
          <PathStep label="Prospecting" stepState={['complete']} index={64} />
          <PathStep label="Qualification" stepState={['complete']} index={65} />
          <PathStep
            label="Needs Analysis"
            stepState={['active', 'current']}
            index={66}
          />
          <PathStep
            label="Value Proposition"
            stepState={['incomplete']}
            index={67}
          />
          <PathStep
            label="Id. Decision Maker"
            stepState={['incomplete']}
            index={68}
          />
          <PathStep
            label="Perception Analysis"
            stepState={['incomplete']}
            index={69}
          />
          <PathStep
            label="Proposal / Pricing"
            stepState={['incomplete']}
            index={70}
          />
          <PathStep
            label="Negotiation / Review"
            stepState={['incomplete']}
            index={71}
          />
          <PathStep label="Closed" stepState={['incomplete']} index={72} />
        </PathTrack>
        <PathCoaching coachingId={coachingId} labelledBy="path-66" />
      </Path>
    </div>
  );
};

export default <PathBase />;

export const states = [
  {
    id: 'later-stage',
    label: 'In a later stage',
    element: <PathLaterStage />
  },
  {
    id: 'different-stage-selected',
    label: 'With different stage selected',
    element: <PathDifferentStage />
  },
  {
    id: 'with-visible-tooltip',
    label: 'With visible tooltip',
    element: <PathVisibleTooltip />
  },
  {
    id: 'with-coaching',
    label: 'With coaching available',
    element: <PathWithCoaching />
  },
  {
    id: 'different-coaching',
    label: 'With different stage selected - with coaching',
    element: <PathWithCoachingOpen />
  },
  {
    id: 'lost',
    label: 'Lost',
    element: <PathLost />
  },
  {
    id: 'won',
    label: 'Won',
    element: <PathWon />
  },
  {
    id: 'with-overflow',
    label: 'Path with overflow',
    element: <PathWithOverflow />
  },
  {
    id: 'medium',
    label: 'Medium viewport',
    element: <PathMedium />
  },
  {
    id: 'medium-coaching',
    label: 'Medium viewport with coaching',
    element: <PathMediumCoaching />
  },
  {
    id: 'small-coaching',
    label: 'Small viewport',
    element: <PathSmall />
  },
  {
    id: 'mobile-default',
    label: 'Mobile: default',
    element: (
      <SLDSFrame hideDeviceSelector frameTitle="Example mobile styles for path">
        <PathBase />
      </SLDSFrame>
    )
  }
];
