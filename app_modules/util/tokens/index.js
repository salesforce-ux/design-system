/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const {getContrastRatio} = require('./color');

/**
 * Add contrast rations to a set of properties
 *
 * @param {object} set - A design properties json object
 */
function addContrastRatios(set) {
  const backgroundColorNames = [
    'COLOR_BACKGROUND_ALT',
    'COLOR_BACKGROUND_INVERSE',
    'COLOR_BACKGROUND'
  ];
  // Find the color values for the specified prop names
  const backgroundColors = _(set.props)
    .filter(prop => _.includes(backgroundColorNames, prop.name))
    .value();
  // If the color values were found in this set
  if (backgroundColors.length) {
    // Check each prop
    _.forEach(set.props, prop => {
      // Find each "text-color"
      if (prop.category === 'text-color') {
        let textColor = prop.value;
        prop['.contrastRatios'] = backgroundColors.map(backgroundColor => {
          const ratio = getContrastRatio(textColor, backgroundColor.value);
          return {
            backgroundColor: backgroundColor,
            ratio: ratio,
            large: ratio >= 3.0,
            normal: ratio >= 4.5
          };
        });
      }
    });
  }
}
/**
 * If a property contains a value with an "rem" suffix, convert it
 * to "px" and add it to the prop as ".pxValue"
 *
 * @param {object} prop - adesign property object
 */
function addPxValue(prop) {
  const meta = prop['.meta'] || {};
  const baseFontPercentage = typeof meta.baseFontPercentage === 'number'
    ? meta.baseFontPercentage
    : 100;
  var baseFontPixel = typeof meta.baseFontPixel === 'number'
    ? meta.baseFontPixel
    : 16;
  let value = prop.value.replace(/rem$/g, '');
  value = value * baseFontPixel * (baseFontPercentage / 100);
  prop['.pxValue'] = `${value}px`;
}

module.exports = {
  addContrastRatios,
  addPxValue
};
