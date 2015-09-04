/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';

const HALF_PI = Math.PI / 2.0;
const TAU = Math.PI * 2.0;

const LIGHT_STRENGTH = 0.6;

class DynamicShapes extends React.Component {

  constructor(props) {
    super(props);

    // Angles are in radians but below are shown in degrees because
    // it's easier to type nnn/360. 0 rad = 0 deg = right. 1/2 PI =
    // 90 deg = up. PI = 180 deg = left. PI 1 1/2 = 270 deg = down.
    //
    // left/top/width/height: The center point and size of the shape.
    // light: The full-strength color of the face in light. Will be
    //     multiplied by LIGHT_STRENGTH.
    // baseFillsAngles: Tuples per face in the format
    //     [red, green, blue, angle of face]
    // fills: DO NOT SET -- updated with current mouse position.

    this.state = {
      isLoaded: false,
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

  componentDidMount() {
    this.updateLightning();
    this.setState({ isLoaded: true });
  }

  componentWillReceiveProps(props) {
    this.updateLightning(props);
  }

  // Angles in radians. Intensity is mixing amount multiplied by
  // global LIGHT_STRENGTH.
  getIlluminatedRGB(baseR, baseG, baseB, baseAngle, lightR, lightG, lightB, lightAngle) {
    let angleDiff = lightAngle - baseAngle;
    let mix = Math.cos(angleDiff) * LIGHT_STRENGTH;

    function mixLR(a, b, mix) {
      return Math.floor(a + ((b - a) * mix));
    }

    return `rgb(${mixLR(baseR, lightR, mix)}, ${mixLR(baseG, lightG, mix)}, ${mixLR(baseB, lightB, mix)})`;
  }

  updateLightning(overrideProps) {
    const { x, y, mouseX, mouseY } = overrideProps || this.props;

    ['tri', 'cub', 'bal', 'dten', 'rect'].forEach(shapeName => {
      let shape = this.state[shapeName];
      let deltaX = mouseX - (x + shape.left + shape.width / 2);
      let deltaY = mouseY - (y + shape.top + shape.height / 2);
      let dist = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

      // Ultimate angle is 0 to absolute right, PI/2 to top, PI to absolute left,
      // PI*3/2 to bottom. Subtract PI/2 because atan2() overrotates.
      let angle = Math.atan2(deltaX, deltaY) - HALF_PI;
      let light = shape.light;
      shape.baseFillsAngles.forEach((rgbA, idx) => {
        this.state[shapeName].fills[idx] = this.getIlluminatedRGB(
          rgbA[0], rgbA[1], rgbA[2], rgbA[3],
          light[0], light[1], light[2], angle
        );
      });

      this.setState({
        [shapeName]: this.state[shapeName]
      });
    });
  }

  render() {
    return <div className={classNames('site-shapes', {'site-shapes--on': this.state.isLoaded})} style={{width: 1, height: 1, position: 'absolute', left: this.props.x, top: this.props.y}}>
      <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" style={{
          position: 'absolute', top: this.state.tri.top, left: this.state.tri.left,
          width: this.state.tri.width, height: this.state.tri.height,
          animation: 'floater 24s ease-out .5s infinite'
          }}>
        <path id="tri240" fill={this.state.tri.fills[2]} d="M90.8,0.5c-1-0.6-2.3-0.6-3.3,0L6.6,47.3c-1,0.6-1.6,1.6-1.6,2.8s0.6,2.2,1.6,2.8l80.9,46.7 c1,0.6,2.3,0.6,3.3,0s1.6-1.6,1.6-2.8V3.3C92.4,2.1,91.8,1.1,90.8,0.5z"/>
        <path id="tri120" fill={this.state.tri.fills[1]} d="M90.8,0.5L90.8,0.5c-1-0.6-2.3-0.6-3.3,0L6.6,47.3c-1,0.6-1.6,1.6-1.6,2.8 c28,0,57.2,0,57.2,0L90.8,0.5z"/>
        <path id="tri0" fill={this.state.tri.fills[0]} d="M62.2,50.1c0,0,14.6-25.3,28.6-49.6c1,0.6,1.6,1.7,1.6,2.8v93.5c0,1.2-0.6,2.2-1.6,2.8 l0,0L62.2,50.1z"/>
      </svg>

      <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" style={{
          position: 'absolute', top: this.state.cub.top, left: this.state.cub.left,
          width: this.state.cub.width, height: this.state.cub.height,
          animation: 'floater 32s ease-out .5s infinite'
          }}>
        <path id="cub240" fill={this.state.cub.fills[2]} d="M95.2,30.3c0.1-0.8-0.3-1.6-0.9-2L51.6,0.4c-0.5-0.3-1-0.4-1.5-0.3l0,0c-0.3,0.1-0.7,0.3-0.9,0.5L13.9,31.2 c-0.3,0.3-0.5,0.7-0.6,1.1L4.8,69l0,0v0.2C4.6,70,5,70.9,5.7,71.3l43.8,28.4c0.3,0.2,0.6,0.3,1,0.3s0.8-0.1,1.2-0.4L88,73.8 c0.2-0.1,0.3-0.3,0.4-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9L95.2,30.3z"/>
        <path id="cub120" fill={this.state.cub.fills[1]} d="M39.8,41.2L50.1,0.1c-0.3,0.1-0.7,0.3-0.9,0.5L13.9,31.2c-0.3,0.3-0.5,0.7-0.6,1.1L4.8,69 L39.8,41.2z"/>
        <path id="cub0" fill={this.state.cub.fills[0]} d="M94.3,28.3L51.6,0.4c-0.5-0.3-1-0.4-1.5-0.3L39.8,41.2l48.6,32.2c0.2-0.3,0.3-0.6,0.4-0.9 l6.4-42.2C95.3,29.5,94.9,28.7,94.3,28.3z"/>
      </svg>



      <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" style={{
          position: 'absolute', top: this.state.dten.top, left: this.state.dten.left,
          width: this.state.dten.width, height: this.state.dten.height,
          animation: 'floater-2 24s ease-out infinite'
          }}>
        <path id="dtenCenter" fill="rgb(233, 114, 147)" d="M99.6,41.8L69.9,3.5c-0.2-0.2-0.3-0.3-0.6-0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7-0.1-1-0.1L20,9.3 c-0.7,0.1-1.3,0.6-1.6,1.3L0.1,55.4C0.1,55.6,0,55.8,0,56c0,0.1,0,0.2,0,0.3c0,0.4,0.2,0.8,0.4,1.1L30,95.7c0.4,0.5,1,0.8,1.6,0.8 c0.1,0,0.2,0,0.3,0l48-6.5c0.4-0.1,0.6-0.2,0.9-0.4c0.1,0,0.1-0.1,0.1-0.1c0.2-0.2,0.5-0.6,0.6-0.9l18.3-44.8 C100.1,43.2,100,42.4,99.6,41.8z"/>
        <path id="dtenc" fill={this.state.dten.fills[2]} d="M0,56.3c0,0.4,0.2,0.8,0.4,1.1L30,95.7c0.4,0.5,1,0.8,1.6,0.8c0.1,0,0.2,0,0.3,0l48-6.5 c0.4-0.1,0.6-0.2,0.9-0.4L0,56.3z"/>
        <path id="dtena" fill={this.state.dten.fills[0]} d="M99.6,41.8L69.9,3.5c-0.2-0.2-0.3-0.3-0.6-0.5l11.6,86.5c0.2-0.2,0.5-0.6,0.6-0.9l18.3-44.8 C100.1,43.2,100,42.4,99.6,41.8z"/>
        <path id="dtenb" fill={this.state.dten.fills[1]} d="M69,2.9c-0.3-0.1-0.7-0.1-1-0.1L20,9.3c-0.7,0.1-1.3,0.6-1.6,1.3L0.1,55.4C0.1,55.6,0,55.8,0,56 L69,2.9z"/>
      </svg>

      <svg x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" style={{
          position: 'absolute', top: this.state.rect.top, left: this.state.rect.left,
          width: this.state.rect.width, height: this.state.rect.height,
          animation: 'floater 24s ease-out .5s infinite'
          }}>
        <path fill={this.state.rect.fills[2]} d="M94.2,65.2L83.6,14.1c-0.1-0.2-0.2-0.5-0.3-0.6c-0.3-0.7-0.9-1.2-1.7-1.4l-52.4-12c-1.1-0.3-2.2,0.3-2.8,1.3L0.3,52 c-0.1,0.3-0.2,0.6-0.3,0.8c-0.1,0.8,0.2,1.6,0.8,2.2l40.6,35.9c0.3,0.3,0.6,0.4,1,0.5l31.4,8.6c0.2,0.1,0.4,0.1,0.7,0.1 s0.7-0.1,1-0.2l0,0c0.5-0.2,0.9-0.6,1.2-1.1L94,66.9C94.2,66.3,94.3,65.8,94.2,65.2z"/>
        <path fill={this.state.rect.fills[0]} d="M94.2,65.2L83.6,14.1c0-0.2-0.1-0.4-0.2-0.5l-30.1,52l22.2,34.3c0.5-0.2,0.9-0.6,1.2-1.1 L94,66.9C94.2,66.3,94.3,65.8,94.2,65.2z"/>
        <path fill={this.state.rect.fills[1]} d="M53.2,65.5l30.1-52c-0.3-0.7-0.9-1.2-1.7-1.4L29.2,0.1c-1.1-0.3-2.2,0.3-2.8,1.3L0.3,52 c-0.1,0.3-0.2,0.6-0.3,0.8L53.2,65.5z"/>
      </svg>
    </div>;
  }
}

export default DynamicShapes;
