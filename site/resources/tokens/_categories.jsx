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

import Heading from 'app_modules/site/components/page/heading';
import RowHeader from './_components/row-header';
import Row from './_components/row';
import ValueCell from './_components/cell-value';
import ExampleCell from './_components/cell-example';
import { prefix as pf } from 'app_modules/ui/util/component';

const MAX_EXAMPLE_WIDTH_REMS = 10;

const FORM_FACTORS = [
  {
    id: 'small',
    label: 'Small',
    symbol: 'phone_portrait',
    className: 'icon-utility-phone-portrait',
    roles: ['aura']
  },
  {
    id: 'medium',
    label: 'Medium',
    symbol: 'tablet_portrait',
    className: 'icon-utility-tablet-portrait',
    roles: ['aura']
  },
  {
    id: 'large',
    label: 'Large',
    symbol: 'desktop',
    className: 'icon-utility-desktop',
    roles: ['aura', 'regular']
  }
];

class CategorySection extends React.Component {

  constructor(props) {
    super(props);
    const valueFormats = props.category.getValueFormats();
    this.state = {
      valueFormats,
      valueFormat: valueFormats[0] || null
    };
  }

  onChangeValueFormat(e) {
    this.setState({
      valueFormat: _.find(this.state.valueFormats, { value: e.currentTarget.value })
    });
  }

  getFormFactors() {
    let { options } = this.props;
    return FORM_FACTORS.filter(factor => {
      return _.includes(factor.roles, options.role);
    });
  }

  render() {
    const {category, tokens} = this.props;
    if (!tokens.length) return null;
    return (
      <section className={pf(`site-tokens ${category.key}`)}>
        <Heading type="h2" id={`category-${category.key}`} className={pf('p-top--xx-large site-text-heading--large site-text-heading--callout')}>
          <span className={pf('grid grid--align-spread wrap')}>
            <span className={pf('col align-bottom')}>{category.label}</span>
            {this.renderValueFormatSelect()}
          </span>
        </Heading>

        <div className={pf('scrollable--x')}>
          <table className={pf('table max-medium-table--stacked')}>
            <RowHeader
              key={`${category.key}-header`}
              formFactors={this.getFormFactors()} />
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  renderValueFormatSelect() {
    const {valueFormats, valueFormat} = this.state;
    if (!valueFormats.length) return null;
    const options = valueFormats.map(format => {
      return (
        <option
          key={format.value}
          value={format.value}>
          {format.label}
        </option>
      );
    });
    return (
      <span className={pf('col shrink-none align-bottom')}>
        <label className={pf('assistive-text')} htmlFor="select">Select Output</label>
        <select
          id="select"
          className={pf('select')}
          aria-label="select"
          value={valueFormat.value}
          onChange={this.onChangeValueFormat.bind(this)}>
          {options}
        </select>
      </span>
    );
  }

  renderRows() {
    const {category, tokens, options} = this.props;
    const {nameFormat} = options;
    const {valueFormat} = this.state;
    return tokens.map(token => {
      return (
        <Row
          key={`${token.name}-row`}
          category={category}
          token={token}
          nameFormat={nameFormat}
          valueFormat={valueFormat}
          formFactors={this.getFormFactors()} />
      );
    });
  }

}

class Category {
  constructor(options) {
    // Override any internal methods/properties with ones provided
    _.forEach(options, (value, key) => {
      this[key] = value;
    });
  }
  /**
   * Return a list of formats that a value for this category can be displayed as
   */
  getValueFormats() {
    return [];
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

const toRgbString = _.memoize(value => tinyColor(value).toRgbString());
const toHexString = _.memoize(value => tinyColor(value).toHexString());
const toAliasString = _.memoize((value, token) => {
  value = token['.rawValue'] || value;
  return value.replace(/^\{\!/, '').replace(/\}$/, '');
});

/**
 * Array of formatters used for sections that represent colors
 */
const colorValueFormats = [
  {
    label: 'RGB',
    value: 'rgb',
    formatter: toRgbString
  },
  {
    label: 'Hex',
    value: 'hex',
    formatter: toHexString
  },
  {
    label: 'Color Name',
    value: 'alias',
    formatter: toAliasString
  }
];

/**
 * When displaying the a releaseSet, "props" will be grouped by category
 * and each category needs a slightly different <ExampleCell />
 */
const categories = {

  'background-color': new Category({
    label: 'Background Color',
    getValueFormats() {
      return colorValueFormats;
    },
    renderExample(token) {
      return (
        <ExampleCell style={{backgroundColor: token.value}} />
      );
    }
  }),

  'text-color': new Category({
    label: 'Text Color',
    getValueFormats() {
      return colorValueFormats;
    },
    renderExample(token) {
      const className = classNames('site-example', 'site-example-color-text', {
        'site-example-color-text-inverse': tinyColor.readability('#FFF', token.value) < 3
      });
      return (
        <ExampleCell className={className}>
          <span style={{color: token.value}}>Aa</span>
        </ExampleCell>
      );
    },
    renderExampleText(token) {
      /*if (this.options.showAccessibility === true) {
        return (
          <table>
            <tr>
              {this.renderExampleContrastRatios(token)}
            </tr>
          </table>
        );
      }*/
    }
    /*renderExampleContrastRatios(token) {
      return token['.contrastRatios'].map((ratio, index) => {
        const className = `site-example-${_.kebabCase(ratio.backgroundColor.name)}`;
        return (
          <td className={className} key={index}>
            {this.renderExampleLarge(token, ratio)}
            {this.renderExampleNormal(token, ratio)}
          </td>
        );
      });
    },
    renderExampleLarge(token, ratio) {
      let passes = ratio.large === true;
      let title = passes
        ? `This text color "${token.name}" (${token.value}) is okay to use on
          "${ratio.backgroundColor.name}" (${ratio.backgroundColor.value}) at sizes greater than 19px.`
        : `This text color "${token.name}" (${token.value}) must not be used on
          "${ratio.backgroundColor.name}" (${ratio.backgroundColor.value}) at sizes greater than 19px.`;
      let className = classNames({
        'site-indicator-pass': passes,
        'site-indicator-fail': !passes
      });
      let text = passes ? 'PASSES' : 'FAILS';
      return (
        <figure title={title}>
          <span style={{color: token.value}}>Aa</span>
          <figcaption className={className}>{text}</figcaption>
        </figure>
      );
    },
    renderExampleNormal(token, ratio) {
      let passes = ratio.normal === true;
      let title = passes
        ? `This text color "${token.name}" (${token.value}) is okay to use on
          "${ratio.backgroundColor.name}" (${ratio.backgroundColor.value}) at any size.`
        : `This text color "${token.name}" (${token.value}) must not be used on
          "${ratio.backgroundColor.name}" (${ratio.backgroundColor.value}) at sizes smaller than 20px.`;
      let className = classNames({
        'site-indicator-pass': passes,
        'site-indicator-fail': !passes
      });
      let text = passes ? 'PASSES' : 'FAILS';
      return (
        <figure title={title}>
          <span style={{color: token.value}}>Aa</span>
          <figcaption className={className}>{text}</figcaption>
        </figure>
      );
    }*/
  }),

  'border-color': new Category({
    label: 'Border Color',
    getValueFormats() {
      return colorValueFormats;
    },
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
    renderExample(token) {
      return (
        <ExampleCell style={{fontFamily: token.value}}>
          Aa
        </ExampleCell>
      );
    }
  }),

  'font-size': new Category({
    label: 'Font Size',
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
    renderExample(token) {
      return (
        <ExampleCell className="site-example site-example-time" />
      );
    }
  }),

  'media-query': new Category({
    label: 'Media Query',
    renderExample() {
      return (
        <ExampleCell />
      );
    }
  }),

  'z-index': new Category({
    label: 'Z-index',
    renderExample() {
      return (
        <ExampleCell />
      );
    }
  }),

  'misc': new Category({
    label: 'Misc',
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
