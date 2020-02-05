import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Accordion, AccordionSection } from '../';
import Card from '../../card';

// Reusable Sample

const AccordionSample = ({
  role,
  children,
  isExpanded,
  isAllExpanded,
  showSource,
  hideSourceOf
}) => {
  const sampleData = [
    {
      title: 'Accordion summary',
      content: 'Accordion details - A'
    },
    {
      title: 'Accordion summary',
      content: 'Accordion details - B'
    },
    {
      title: 'Accordion summary',
      content: 'Accordion details - C'
    }
  ];

  return (
    <Accordion role={role} showSource={showSource} hideSourceOf={hideSourceOf}>
      {Array.isArray(sampleData) &&
        sampleData.map(({ title, content }, idx) => (
          <AccordionSection
            title={title}
            key={uniqueId('accordion-section-')}
            isExpanded={isExpanded === idx || isAllExpanded}
            refId={uniqueId('ref-id-')}
            isStart={idx === 0}
            isEnd={idx === sampleData.length - 1}
            role={role === 'list' && 'listitem'}
            showSource={showSource}
            hideSourceOf={hideSourceOf}
          >
            {content}
            {/* Only first section has children as example */}
            {idx === 0 && children}
          </AccordionSection>
        ))}
    </Accordion>
  );
};

AccordionSample.propTypes = {
  role: PropTypes.string,
  isExpanded: PropTypes.number,
  isAllExpanded: PropTypes.bool,
  children: PropTypes.instanceOf(Object)
};

AccordionSample.defaultProps = {
  role: 'list',
  isExpanded: 0,
  isAllExpanded: false
};

// Default
export default <AccordionSample />;

// Examples
export const examples = [
  {
    id: 'nested-accordions',
    label: 'Nested Accordions',
    element: (
      <AccordionSample>
        <AccordionSample />
      </AccordionSample>
    )
  },
  {
    id: 'styled',
    label: 'Wrapped in Card',
    element: (
      <Card>
        <AccordionSample />
      </Card>
    )
  },
  // TODO: Remove placeholder when menu is available
  {
    id: 'has-action-overflow',
    label: 'Has Action Overflow Menu',
    element: <AccordionSample />
  }
];

// States
export const states = [
  {
    id: 'section-one-open',
    label: 'Section One Open',
    element: <AccordionSample />
  },
  {
    id: 'section-two-open',
    label: 'Section Two Open',
    element: <AccordionSample isExpanded={1} />
  },
  {
    id: 'section-three-open',
    label: 'Section Three Open',
    element: <AccordionSample isExpanded={2} />
  },
  {
    id: 'multiple-sections-open',
    label: 'Multiple Sections Open',
    element: <AccordionSample isAllExpanded />
  }
];
