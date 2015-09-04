/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*eslint-disable */

/**
 * Sources of awesomeness:
 * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
 * http://webaim.org/resources/contrastchecker/
 * http://stackoverflow.com/a/5624139
 * http://stackoverflow.com/a/9733420
 */

/**
 * @param {String} color, RGB, RGBA, or hex value of a color
 * @returns {Object} an object with properties r,g,b,a
 */
function getRGB(color) {
  if(color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }

  // convert RGBA string to RGBA object
  var result = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/.exec(color);
  if(result) return {
    r: result[1],
    g: result[2],
    b: result[3],
    a: result[4]
  };

  // convert RGB string to RGB object
  var result = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.exec(color);
  if(result) return {
    r: result[1],
    g: result[2],
    b: result[3]
  };

  // convert hex string to RGB object
  // expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = color.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });
  // get RGB values from hex
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if(result) return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  };

  // nothing! sad!
  return null;
}


/**
 * @param {Object} rgba object representing color
 * @param {Object} rgb object representing background
 */
function getRGBfromRGBA(color, background) {
  var newStuff= {
    r: Math.ceil((color.r * color.a) + (background.r * (1.0 - color.a))),
    g: Math.ceil((color.g * color.a) + (background.g * (1.0 - color.a))),
    b: Math.ceil((color.b * color.a) + (background.b * (1.0 - color.a)))
  }
  return newStuff;
}

/**
 * @param {Object} rgb, an object with properties r,g,b
 * @returns {Number} the luminance of this particular color
 */
//
function getLuminance(rgb) {
  // convert RGB to sRGB
  var sRGB = [rgb.r, rgb.g, rgb.b].map(function(value) {
    value /= 255;
    return (value <= 0.03928) ? (value / 12.92) : Math.pow( ((value+0.055)/1.055), 2.4);
  });
  // calculate luminance
  return (sRGB[0] * 0.2126) + (sRGB[1] * 0.7152) + (sRGB[2] * 0.0722);
}


/**
 * @param {Object} foreground RGB or RGBA for foreground color
 * @param {Object} background RGB or RGBA for background color
 * @returns {Number} the contrast between these two colors
 */
function getContrastRatio(foreground, background) {
  background = getRGB(background);
  foreground = getRGB(foreground);
  var backgroundRGB = {
    r: background.r,
    g: background.g,
    b: background.b,
    a: background.a
  };
  if(backgroundRGB.a) backgroundRGB = getRGBfromRGBA(backgroundRGB, {r:255, g:255, b:255});
  var foregroundRGB = {
    r: foreground.r,
    g: foreground.g,
    b: foreground.b,
    a: foreground.a
  };
  if(foregroundRGB.a) foregroundRGB = getRGBfromRGBA(foregroundRGB, backgroundRGB);

  var L1 = getLuminance(foregroundRGB);
  var L2 = getLuminance(backgroundRGB);
  return (Math.round(((Math.max(L1, L2) + 0.05)/(Math.min(L1, L2) + 0.05))*100)/100);
}

var passesForLargeText = function(ratio) {
  return ratio >= 3.0;
}

var passesForNormalText = function(ratio) {
  return ratio >= 4.5;
}

var doesNotPass = function(ratio) {
  return ratio < 3.0;
}

module.exports = {
  getContrastRatio: getContrastRatio
}
