export const SearchResults = {
  option0: {
    name: 'Recent Items',
    label: true
  },
  option1: {
    name: 'Salesforce - 1,000 Licenses',
    entityMeta: true,
    entityType: 'Opportunity',
    entityField: 'Propecting'
  },
  option2: {
    name: 'Art Vandelay',
    entityMeta: true,
    entityType: 'Contact',
    entityField: 'avandelay@vandelay.com'
  },
  option3: {
    name: 'Vandelay Industries',
    entityMeta: true,
    entityType: 'Account',
    entityField: 'San Francisco'
  },
  option4: {
    name: 'Salesforce UK 2016 Events',
    entityMeta: true,
    entityType: 'Event',
    entityField: '$20,000'
  },
  option5: {
    name: 'H.E. Pennypacker',
    entityMeta: true,
    entityType: 'Lead',
    entityField: 'Nursing'
  }
};

export const SearchResultsTypeahead = {
  option1: {
    term: 'Salesforce',
    beforeTerm: '',
    afterTerm: '.com',
    entityMeta: true,
    entityType: 'Account',
    entityLocation: 'San Francisco, CA'
  },
  option2: {
    term: 'Salesforce',
    beforeTerm: '',
    afterTerm: '.org',
    entityMeta: true,
    entityType: 'Account',
    entityLocation: 'New York, NY'
  },
  option3: {
    term: 'Salesforce',
    beforeTerm: '',
    afterTerm: 'HQ',
    entityMeta: true,
    entityType: 'Account',
    entityLocation: 'San Francisco, CA'
  }
};
