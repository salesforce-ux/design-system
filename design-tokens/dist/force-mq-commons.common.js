module.exports = {
  // Small form factor: devices smaller than tablet
  mqSmall: "only screen and (max-width: 47.9375em)",
  // Medium form factor:  devices larger than phone
  mqMedium: "only screen and (min-width: 48em)",
  // Medium form factor, landscape:  devices larger than phone, in landscape orientation
  mqMediumLandscape: "only screen and (min-width: 48em) and (min-aspect-ratio: 4/3)",
  // Large form factor:  devices larger than tablet
  mqLarge: "only screen and (min-width: 64.0625em)",
  // Retina displays
  mqHighRes: "only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-pixel-ratio: 2),screen and (min-resolution: 192dpi),screen and (min-resolution: 2dppx)",
  // Make record layout 1 col when its view port is < 600px
  mqSingleColumnRecordLayout: "(max-width: 599px)"
};