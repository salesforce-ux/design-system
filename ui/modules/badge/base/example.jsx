import React from 'react';
import Badge from '..';

const label = '423 Credits Available';
const icon = 'moneybag';

// Default
export default <Badge label={label} />;

// Examples
export const examples = [
  {
    id: 'icon',
    label: 'With Icon',
    element: <Badge label={label} icon={icon} />
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: <Badge label={label} icon={icon} isInverse />
  },
  {
    id: 'positive',
    label: 'Positive',
    element: <Badge label={label} icon={icon} isPositive />
  },
  {
    id: 'negative',
    label: 'Negative',
    element: <Badge label={label} icon={icon} isNegative />
  },
  {
    id: 'warning',
    label: 'Warning',
    element: <Badge label={label} icon={icon} isWarning />
  },
  {
    id: 'reverse',
    label: 'Reverse',
    element: <Badge label={label} icon={icon} isReverse />
  },
  {
    id: 'assistive-text',
    label: 'Assistive Text',
    element: <Badge icon={icon} assistiveText={label} />
  }
];
