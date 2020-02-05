import React, { useState } from 'react';
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
import Heading from '../../shared/element/heading';

import common from '../common/index.scss';
import accordion from './base/index.scss';

const AccordionHeader = ({
  title,
  headingType,
  isExpanded,
  refId,
  showSource,
  hideSourceOf,
  onClick
}) => {
  const stateClassName = {
    'lwc-accordion__title_is-expanded': isExpanded
  };

  const computedClassNames = classNames(stateClassName);

  return (
    <div className="lwc-accordion__header">
      <Heading
        type={headingType}
        className={classNames(computedClassNames, 'lwc-accordion__title')}
        onClick={onClick}
      >
        <Button
          leftIcon={<Icon size="x-small" symbol="switch" />}
          ariaControls={refId}
          ariaExpanded={isExpanded}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
        >
          {title}
        </Button>
      </Heading>
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
  headingType: PropTypes.string,
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
  headingType,
  isExpanded,
  refId,
  isStart,
  isEnd,
  role,
  children,
  shadow,
  showSource,
  hideSourceOf,
  customization
}) => {
  const [setIsExpanded, setIsExpandedState] = useState(isExpanded);

  function toggleAccordion() {
    setIsExpandedState(setIsExpanded !== true);
  }

  const css = rollupAdoptedStylesheets([common, accordion, customization]);

  const positionClassName = {
    'lwc-accordion__section_start': isStart,
    'lwc-accordion__section_end': isEnd
  };

  const computedClassNames = classNames(positionClassName);

  return (
    <Shadow.on
      name="accordion-section"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    >
      <section
        className={classNames(computedClassNames, 'lwc-accordion__section ')}
        role={role}
      >
        <AccordionHeader
          title={title}
          headingType={headingType}
          isExpanded={setIsExpanded}
          refId={refId}
          showSource={showSource}
          hideSourceOf={hideSourceOf}
          onClick={toggleAccordion}
        />
        <AccordionBody
          isExpanded={setIsExpanded}
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
  headingType: PropTypes.string,
  isExpanded: PropTypes.bool,
  refId: PropTypes.string.isRequired,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  role: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

AccordionSection.defaultProps = {
  headingType: 'h3'
};

const Accordion = ({
  role,
  children,
  shadow,
  customization,
  showSource,
  hideSourceOf
}) => {
  const css = rollupAdoptedStylesheets([common, accordion, customization]);

  return (
    <Shadow.on
      name="accordion"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    >
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
