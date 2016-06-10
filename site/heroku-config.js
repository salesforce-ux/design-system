// This is used by the express server deployed by design-system-archive
module.exports = {
  redirects: [
    {
      source: '/components/grid-system',
      destination: '/components/utilities/grid',
      status: 301
    },
    {
      source: '/components/media-objects',
      destination: '/components/utilities/media-objects',
      status: 301
    }
  ]
};
