import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import ButtonIcon from '../button-icon';
import Shadow from '../../shared/shadow';
import {
  rollupAdoptedStylesheets,
  recursivelyCloneChildren
} from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import accordion from './base/index.scss';

const AccordionHeader = ({
  title,
  isExpanded,
  refId,
  showSource,
  hideSourceOf
}) => {
  return (
    <div className="lwc-accordion__header">
      <h3 className="lwc-accordion__title">
        <Button
          leftIcon={
            <Icon
              size="x-small"
              symbol="switch"
              orientation={!isExpanded && 'neg90deg'}
              showSource={showSource}
              hideSourceOf={hideSourceOf}
            />
          }
          ariaControls={refId}
          ariaExpanded={isExpanded}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
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
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      />
    </div>
  );
};

AccordionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

const AccordionBody = ({
  children,
  isExpanded,
  refId,
  showSource,
  hideSourceOf
}) => {
  // add shadow related props to all child elements
  const childElements = recursivelyCloneChildren(
    children,
    showSource,
    hideSourceOf
  );

  return (
    <div id={refId} hidden={!isExpanded}>
      <slot>{childElements}</slot>
    </div>
  );
};

AccordionBody.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

const AccordionSection = ({
  title,
  isExpanded,
  refId,
  position,
  role,
  children,
  shadow,
  showSource,
  hideSourceOf,
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
    <Shadow.on
      name="accordion-section"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    >
      <section
        className={'lwc-accordion__section ' + computedClassNames}
        role={role}
      >
        <AccordionHeader
          title={title}
          isExpanded={isExpanded}
          refId={refId}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
        />
        <AccordionBody
          isExpanded={isExpanded}
          refId={refId}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
        >
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
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
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
