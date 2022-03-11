// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { Button } from '../../buttons/base/example';
import { getNubbinClass } from '../../../shared/helpers';

const tooltipContent =
  'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.';

export let Tooltip = props => {
  const computedClassnames = classNames(
    'slds-popover slds-popover_tooltip',
    props.className,
    props.nubbinPosition && getNubbinClass(props.nubbinPosition)
  );

  return (
    <div
      className={computedClassnames}
      role="tooltip"
      id={props.id}
      style={props.style}
    >
      <div className="slds-popover__body">
        {props.children}
        {props.hasLearnMore && (
          <div className="slds-m-top_x-small" aria-hidden="true">
            Click{' '}
            <UtilityIcon
              className="slds-icon slds-icon_xx-small"
              symbol="info"
              assistiveText="Help"
              title="Help"
            />{' '}
            to learn more.
          </div>
        )}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasLearnMore: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object
};

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div
        style={{ paddingLeft: '2rem', paddingTop: '5rem', position: 'relative' }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'link',
    label: 'As an icon link',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '6.75rem',
          position: 'relative'
        }}
      >
        <a href="#" onClick={e => e.preventDefault()} aria-describedby="help">
          <UtilityIcon
            className="slds-icon slds-icon_xx-small slds-icon-text-default"
            symbol="info"
            assistiveText="Click here to learn more"
            title={false}
          />
        </a>
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          hasLearnMore
          style={{ position: 'absolute', top: '-4px', left: '15px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'button-icon',
    label: 'As a Button Icon',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <ButtonIcon
          className="slds-button slds-button_icon"
          symbol="info"
          aria-describedby="help"
          aria-disabled="true"
          assistiveText="Help"
          title="Help"
        />
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '15px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'button',
    label: 'As a Button',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button isNeutral aria-describedby="help" aria-disabled="true">
          Button
        </Button>
        <Tooltip
          className="slds-nubbin_bottom-left"
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '45px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'bottom-to-top',
    label: 'Bottom to Top',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={[
            'slds-nubbin_bottom-left',
            'slds-slide-from-bottom-to-top'
          ].join(' ')}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'top-to-bottom',
    label: 'Top to Bottom',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={[
            'slds-nubbin_bottom-left',
            'slds-slide-from-top-to-bottom'
          ].join(' ')}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'right-to-left',
    label: 'Right to Left',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={[
            'slds-nubbin_bottom-left',
            'slds-slide-from-right-to-left'
          ].join(' ')}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'left-to-right',
    label: 'Left to Right',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={[
            'slds-nubbin_bottom-left',
            'slds-slide-from-left-to-right'
          ].join(' ')}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'rise',
    label: 'Rise',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={['slds-nubbin_bottom-left', 'slds-rise-from-ground'].join(
            ' '
          )}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  },
  {
    id: 'fall',
    label: 'Fall',
    element: (
      <div
        style={{
          paddingLeft: '2rem',
          paddingTop: '5rem',
          position: 'relative'
        }}
      >
        <Button aria-describedby="help" aria-disabled="true">
          Help Text
        </Button>
        <Tooltip
          className={['slds-nubbin_bottom-left', 'slds-fall-into-ground'].join(
            ' '
          )}
          id="help"
          style={{ position: 'absolute', top: '-4px', left: '35px' }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    )
  }
];
