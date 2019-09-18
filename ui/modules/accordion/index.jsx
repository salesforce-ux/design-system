import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import ButtonIcon from '../button-icon';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import accordion from './base/index.scss';

const AccordionHeader = ({ title, isExpanded, refId }) => {
  return (
    <div className="lwc-accordion__header">
      <h3 className="lwc-accordion__title">
        <Button
          leftIcon={
            <Icon
              size="x-small"
              symbol="switch"
              orientation={!isExpanded && 'neg90deg'}
            />
          }
          ariaControls={refId}
          ariaExpanded={isExpanded}
        >
          {title}
        </Button>
      </h3>
      {/* Temporary placeholder until button menu is done */}
      <ButtonIcon
        boundarySize="x-small"
        variant="neutral"
        size="xx-small"
        symbol="down"
      />
    </div>
  );
};

AccordionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired
};

const AccordionBody = ({ children, isExpanded, refId }) => {
  return (
    <div id={refId} hidden={!isExpanded}>
      <slot>{children}</slot>
    </div>
  );
};

AccordionBody.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired
};

const AccordionSection = ({
  title,
  isExpanded,
  refId,
  position,
  role,
  children,
  shadow,
  customization
}) => {
  const css = rollupAdoptedStylesheets([common, accordion, customization]);

  const positionClassName = {
    'lwc-accordion__section_start': position === 'start',
    'lwc-accordion__section_end': position === 'end'
  };

  const stateClassName = {
    'lwc-accordion__section_is-expanded': isExpanded
  };

  const computedClassNames = classNames(positionClassName, stateClassName);

  return (
    <Shadow.on name="accordion-section" includes={css} shadow={shadow}>
      <section
        className={'lwc-accordion__section ' + computedClassNames}
        role={role}
      >
        <AccordionHeader title={title} isExpanded={isExpanded} refId={refId} />
        <AccordionBody isExpanded={isExpanded} refId={refId}>
          {children}
        </AccordionBody>
      </section>
    </Shadow.on>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired,
  position: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
  shadow: PropTypes.bool
};

const Accordion = ({ role, children, shadow, customization }) => {
  const css = rollupAdoptedStylesheets([common, accordion, customization]);

  return (
    <Shadow.on name="accordion" includes={css} shadow={shadow}>
      <div className="lwc-accordion" role={role}>
        <slot>{children}</slot>
      </div>
    </Shadow.on>
  );
};

Accordion.propTypes = {
  role: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
  shadow: PropTypes.bool
};

export { Accordion, AccordionSection };
