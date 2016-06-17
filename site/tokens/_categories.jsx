/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from'react';
import classNames from 'classnames';
import _ from 'lodash';
import tinyColor from 'tinycolor2';

import CategorySection from './_components/category-section';
import ExampleCell from './_components/cell-example';

const MAX_EXAMPLE_WIDTH_REMS = 10;

class Category {
  constructor(options) {
    // Override any internal methods/properties with ones provided
    _.forEach(options, (value, key) => {
      this[key] = value;
    });
  }
  /**
   * Render a <RowHeader /> and <Row /> only if tokens is not empty
   *
   * @param {array} tokens
   * @param {Immutable.Map} options
   * @return {[React.PropTypes.node]}
   */
  render(tokens, options) {
    this.options = options;
    return (
      <CategorySection
        key={this.key}
        category={this}
        tokens={tokens}
        options={options} />
    );
  }
  /**
   * This method will most commonly be overwritten to provide
   * a different example for each type
   *
   * @param {object} token
   * @return {React.PropTypes.node}
   */
  renderExample(token) {
    return <ExampleCell />;
  }
  /**
   * Render an optional descripton below the title
   *
   * @return {React.PropTypes.node}
   */
  renderDescription() {
    return null;
  }
}



/**
 * When displaying the a releaseSet, "props" will be grouped by category
 * and each category needs a slightly different <ExampleCell />
 */
const categories = {

  'background-color': new Category({
    label: 'Background Color',
    description: ' Use these tokens for background colors only. Do not use these for border colors or text colors.',
    valueFormat: 'color',
    renderExample(token) {
      return (
        <ExampleCell style={{backgroundColor: token.value}} />
      );
    }
  }),

  'text-color': new Category({
    label: 'Text Color',
    description: 'Use these tokens for text colors only. Do not use these for border colors or background colors.',
    valueFormat: 'color',
    renderExample(token) {
      const className = classNames('site-example', 'site-example-color-text', {
        'site-example-color-text-inverse': tinyColor.readability('#FFF', token.value) < 3
      });
      return (
        <ExampleCell className={className}>
          <span style={{color: token.value}}>Aa</span>
        </ExampleCell>
      );
    }
  }),

  'border-color': new Category({
    label: 'Border Color',
    description: 'Use these tokens for border colors only. Do not use these for background colors or text colors.',
    valueFormat: 'color',
    renderExample(token) {
      return (
        <ExampleCell className="site-example site-example-color-border">
          <div className="site-box-color-border" style={{borderColor: token.value}} />
        </ExampleCell>
      );
    }
  }),

  'font': new Category({
    label: 'Font',
    description: 'Use these font weights to change how thin or heavy the weight is for our font.',
    renderExample(token) {
      return (
        // if the token value isn't a number, it's a font-family
        // if it's a number, it is a font-weight
        <ExampleCell style={
          (isNaN(token.value)) ? { fontFamily: token.value } : { fontWeight: token.value }
        }>
          {/* Making the text larger to make weights more obvious */}
          <span style={{fontSize: '2rem'}}>Aa</span>
        </ExampleCell>
      );
    }
  }),

  'font-size': new Category({
    label: 'Font Size',
    description: 'Use these sizing tokens for font sizes.',
    renderExample(token) {
      return (
        <ExampleCell className="site-example-color-border" style={{fontSize: token.value}}>
          Aa
        </ExampleCell>
      );
    }
  }),

  'line-height': new Category({
    label: 'Line Height',
    description: 'Use these tokens for changing the line-height of elements. Usually, the line-height-text is already inherited by default. Only set it if you need to apply it again.',
    renderExample(token) {
      return (
        <ExampleCell style={{lineHeight: token.value}}>
          Scenester cliche try-hard 3 wolf moon, lomo banjo cardigan meditation retro. Flannel DIY narwhal cornhole, brunch PBR bicycle rights YOLO seitan Marfa fanny pack XOXO locavore.
        </ExampleCell>
      );
    }
  }),

  'spacing': new Category({
    label: 'Spacing',
    description: 'Spacing tokens are used for padding, margins, and position coordinates. Border-width tokens are used for the border property.',
    renderExample(token) {
      return (
        <ExampleCell className="site-example-spacing">
          <div className="site-box-spacing" style={{width: token.value, height: token.value}} />
        </ExampleCell>
      );
    }
  }),

  'radius': new Category({
    label: 'Radius',
    description: 'Use radius tokens to change the border-radius size (rounded corners).',
    renderExample(token) {
      return (
        <ExampleCell className="site-example-radius">
          <div className="site-box-radius" style={{borderRadius: token.value}} />
        </ExampleCell>
      );
    }
  }),

  'sizing': new Category({
    label: 'Sizing',
    description: 'Use sizing tokens to set elements to our sizing scale. Size tokens can be used for the width and height properties. Square tokens are used for both width and height.',
    renderExample(token) {
      const intWidth = parseInt(token.value);
      let width;
      if (token.name.match(/^SIZE_/)) {
        width = '100%';
      } else {
        width = intWidth > MAX_EXAMPLE_WIDTH_REMS ? '100%' : `${intWidth}rem`;
      }
      return (
        <ExampleCell className="site-example-spacing">
          <div className="site-box-spacing" style={{width: width, height: token.value}} />
        </ExampleCell>
      );
    }
  }),

  'shadow': new Category({
    label: 'Shadow',
    description: 'Use shadow tokens to set a box shadow.',
    renderExample(token) {
      return (
        <ExampleCell className="site-example site-example-shadow">
          <div className="site-box-shadow" style={{boxShadow: token.value}} />
        </ExampleCell>
      );
    }
  }),

  'atmosphere': new Category({
    label: 'Atmosphere',
    description: 'Use atmosphere tokens for box shadows to create the appearance of elevation.',
    renderExample(token) {
      if (token.type === 'box-shadow') {
        return (
          <ExampleCell className="site-example site-example-atmosphere">
            <div className="site-atmosphere" style={{boxShadow: token.value}} />
          </ExampleCell>
        );
      } else {
        return <ExampleCell />;
      }
    }
  }),

  'time': new Category({
    label: 'Time',
    description: 'Use timing tokens for animation durations.',
    renderExample(token) {
      return (
        <ExampleCell className="site-example site-example-time" />
      );
    }
  }),

  'media-query': new Category({
    label: 'Media Query',
    description: 'Use media query tokens to set media query width ranges.',
    renderExample() {
      return (
        <ExampleCell />
      );
    }
  }),

  'z-index': new Category({
    label: 'Z-index',
    description: 'Use z-index tokens to set the z order layering of elements.',
    renderExample() {
      return (
        <ExampleCell />
      );
    }
  }),

  'misc': new Category({
    label: 'Misc',
    description: 'These sizing tokens will be moved to the sizing section. The width, height, max-height, max-width are tokens used for their respective CSS properties. Square tokens are used for both width and height. Flex tokens are used for flex box sizing.',
    renderExample() {
      return (
        <ExampleCell />
      );
    }
  })

};

/**
 * Return the categories as an array and inject the key into the category
 */
export default _.map(categories, (category, key) => {
  category.key = key;
  return category;
});
