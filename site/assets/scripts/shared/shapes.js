/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fastdom from 'fastdom';
import Gator from 'gator';
import { $, forEach, setClassName } from '../framework/helpers';

const HALF_PI = Math.PI / 2.0;
const TAU = Math.PI * 2.0;
const LIGHT_STRENGTH = 0.6;

class DynamicShapes {

  constructor(node, props) {
    this.node = node;
    this.props = props;
    this.state = this.getInitialState();
    this.refs = {
      tri: node.querySelector('[data-slds-shape="tri"]'),
      cub: node.querySelector('[data-slds-shape="cub"]'),
      dten: node.querySelector('[data-slds-shape="dten"]'),
      rect: node.querySelector('[data-slds-shape="rect"]')
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    // Listen for move events
    Gator(document).on('mousemove', 'body', this.handleMouseMove);
    // Start
    fastdom.mutate(() => {
      setClassName(node, 'site-shapes--on');
      this.updateLightning();
    });
  }

  destroy() {
    Gator(document).off('mousemove', 'body', this.handleMouseMove);
  }

  setState(nextState) {
    fastdom.clear(this.layoutId);
    this.state = Object.assign({}, this.state, nextState);
    this.layoutId = fastdom.mutate(() => this.layout());
  }

  /**
   * Angles are in radians but below are shown in degrees because
   * it's easier to type nnn/360. 0 rad = 0 deg = right. 1/2 PI =
   * 90 deg = up. PI = 180 deg = left. PI 1 1/2 = 270 deg = down.
   *
   * left/top/width/height: The center point and size of the shape.
   *
   * light: The full-strength color of the face in light.
   *   Will be multiplied by LIGHT_STRENGTH.
   *
   * baseFillsAngles: Tuples per face in the format
   *     [red, green, blue, angle of face]
   *
   * fills: DO NOT SET -- updated with current mouse position.
   */
  getInitialState(props) {
    return {
      mouseX: 0,
      mouseY: 0,
      bal: {
        left: -90, top: -207, width: 130, height: 130,
        light: [248, 202, 114],
        baseFillsAngles: [[214, 123, 44, TAU * 26 / 360], [234, 153, 49, TAU * 26 / 360], [234, 153, 49, TAU * 206 / 360], [214, 123, 44, TAU * 206 / 360]],
        fills: [null, null, null, null]
      },
      cub: {
        left: -262, top: -107, width: 250, height: 250,
        light: [204, 208, 253],
        baseFillsAngles: [[119, 121, 203, TAU * 344 / 360], [119, 121, 203, TAU * 150 / 360], [119, 121, 203, TAU * 250 / 360]],
        // baseFillsAngles: [[105, 108, 180, TAU * 344 / 360], [119, 121, 203, TAU * 150 / 360], [131, 132, 227, TAU * 250 / 360]],
        fills: [null, null, null]
      },
      dten: {
        left: 280, top: -284, width: 128, height: 128,
        light: [243, 189, 207],
        baseFillsAngles: [[233, 114, 147, TAU * 334 / 360], [233, 114, 147, TAU * 152 / 360], [233, 114, 147, TAU * 206 / 360]],
        // baseFillsAngles: [[192, 76, 118, TAU * 334 / 360], [239, 114, 153, TAU * 152 / 360], [211, 84, 123, TAU * 206 / 360]],
        fills: [null, null, null]
      },
      rect: {
        left: 140, top: -120, width: 110, height: 110,
        light: [149, 244, 226],
        baseFillsAngles: [[76, 162, 152, TAU * 330 / 360], [87, 187, 176, TAU * 118 / 360], [101, 207, 195, TAU * 240 / 360]],
        fills: [null, null, null]
      },
      tri: {
        left: -77, top: -282, width: 160, height: 160,
        light: [151, 236, 185],
        baseFillsAngles: [[80, 161, 120, TAU * 0 / 360], [80, 161, 120, TAU * 120 / 360], [80, 161, 120, TAU * 240 / 360]],
        // baseFillsAngles: [[72, 145, 108, TAU * 0 / 360], [80, 161, 120, TAU * 120 / 360], [90, 183, 134, TAU * 240 / 360]],
        fills: [null, null, null]
      }
    };
  }

  getIlluminatedRGB(baseR, baseG, baseB, baseAngle, lightR, lightG, lightB, lightAngle) {
    const angleDiff = lightAngle - baseAngle;
    const mix = Math.cos(angleDiff) * LIGHT_STRENGTH;
    const mixLR = (a, b, mix) => Math.floor(a + ((b - a) * mix));
    return `rgb(${mixLR(baseR, lightR, mix)}, ${mixLR(baseG, lightG, mix)}, ${mixLR(baseB, lightB, mix)})`;
  }

  handleMouseMove(event) {
    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY
    });
    this.updateLightning();
  }

  updateLightning() {
    const { x, y } = this.props;
    const { mouseX, mouseY } = this.state;
    ['bal', 'cub', 'dten', 'rect', 'tri'].forEach(shapeName => {
      const shape = Object.assign({}, this.state[shapeName]);
      const deltaX = mouseX - (x + shape.left + shape.width / 2);
      const deltaY = mouseY - (y + shape.top + shape.height / 2);
      const dist = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
      // Ultimate angle is 0 to absolute right, PI/2 to top, PI to absolute left,
      // PI*3/2 to bottom. Subtract PI/2 because atan2() overrotates.
      const angle = Math.atan2(deltaX, deltaY) - HALF_PI;
      const light = shape.light;
      shape.baseFillsAngles.forEach((rgbA, idx) => {
        shape.fills[idx] = this.getIlluminatedRGB(
          rgbA[0], rgbA[1], rgbA[2], rgbA[3],
          light[0], light[1], light[2], angle
        );
      });
      this.setState({
        [shapeName]: shape
      });
    });
  }

  getShapesStyles() {
    return {
      tri: {
        position: 'absolute', top: this.state.tri.top, left: this.state.tri.left,
        width: this.state.tri.width, height: this.state.tri.height,
        animation: 'floater 24s ease-out .5s infinite'
      },
      cub: {
        position: 'absolute', top: this.state.cub.top, left: this.state.cub.left,
        width: this.state.cub.width, height: this.state.cub.height,
        animation: 'floater 32s ease-out .5s infinite'
      },
      dten: {
        position: 'absolute', top: this.state.dten.top, left: this.state.dten.left,
        width: this.state.dten.width, height: this.state.dten.height,
        animation: 'floater-2 24s ease-out infinite'
      },
      rect: {
        position: 'absolute', top: this.state.rect.top, left: this.state.rect.left,
        width: this.state.rect.width, height: this.state.rect.height,
        animation: 'floater 24s ease-out .5s infinite'
      }
    };
  }

  layout() {
    const styles = this.getShapesStyles();
    const keys = Object.keys;
    keys(styles).forEach(ref => {
      const style = styles[ref];
      keys(style).forEach(key => {
        this.refs[ref].style[key] = style[key];
        forEach(this.refs[ref].querySelectorAll('[data-fill]'), node => {
          const idx = parseInt(node.getAttribute('data-fill'), 10);
          node.setAttribute('fill', this.state[ref].fills[idx]);
        });
      });
    });
  }

}

export default () => ({
  hooks: {
    listen_dom: delegate => {
      $('[data-slds-shapes]').forEach(node => {
        const props = JSON.parse(node.getAttribute('data-slds-shapes'));
        const shapes = new DynamicShapes(node, props);
      });
    }
  }
});
