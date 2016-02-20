/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import componentUtil from './index';

import {
  isCompositeComponent,
  renderIntoDocument
} from 'react-addons-test-utils';

class Item extends React.Component {
  componentDidMount() {
    componentUtil.install(this);
  }
  render() {
    return <div />;
  }
}

// currently intermittent failures are killing ci. Pending these tests until we figure out the cause
xdescribe('Util', () => {
  describe('Component', () => {
    let cmp;
    beforeEach(() => {
      cmp = renderIntoDocument(<Item />);
    });
    describe('#install', () => {
      it('throws an error if "context" isn’t an object', () => {
        expect(componentUtil.install).to.throw(/context/);
      });
      it('throws an error if "methods" isn’t an array', () => {
        expect(() => {
          componentUtil.install({}, true);
        }).to.throw(/methods/);
      });
      it('throws an error if an invalid method tries to be installed', () => {
        expect(() => {
          componentUtil.install({}, ['foobar']);
        }).to.throw(/"foobar" is not a valid/);
      });
      it('installs the methods', () => {
        const context = {};
        componentUtil.install(context);
        expect(context.hasOwnProperty('$getClassName')).to.be.true;
        expect(context.hasOwnProperty('$getClassNameWithFlavor')).to.be.true;
        expect(context.hasOwnProperty('$propsWithoutKeys')).to.be.true;
      });
    });
    describe('$getClassName', () => {
      it('adds the specified classNames', () => {
        const result = cmp.$getClassName('foo', 'bar', 'baz');
        expect(result).to.equal('foo bar baz');
      });
      it('adds the specified classNames along with this.props.className', () => {
        cmp = renderIntoDocument(<Item className="hello" />);
        const result = cmp.$getClassName('foo', 'bar');
        expect(result).to.equal('foo bar hello');
      });
    });
    describe('$getClassNameWithFlavor', () => {
      it('throws an error if an invalid classNameBase is provided', () => {
        expect(cmp.$getClassNameWithFlavor).to.throw(/classNameBase/);
      });
      it('returns the correct className with no flavors', () => {
        const result = cmp.$getClassNameWithFlavor('button');
        expect(result).to.equal('button');
      });
      it('appends this.props.className', () => {
        cmp = renderIntoDocument(<Item className="hello" />);
        const result = cmp.$getClassNameWithFlavor('button');
        expect(result).to.equal('button hello');
      });
      it('adds the correct flavor classNames', () => {
        cmp = renderIntoDocument(<Item className="hello" flavor="test" />);
        const result = cmp.$getClassNameWithFlavor('button');
        expect(result).to.equal('button button--test hello');
      });
      it('adds the correct flavor classNames if mulitple flavors are provided', () => {
        cmp = renderIntoDocument(<Item className="hello" flavor="a,b" />);
        const result = cmp.$getClassNameWithFlavor('button');
        expect(result).to.equal('button button--a button--b hello');
      });
      it('uses options.prop', () => {
        cmp = renderIntoDocument(<Item foo="bar" />);
        const result = cmp.$getClassNameWithFlavor('button', {
          prop: 'foo'
        });
        expect(result).to.equal('button button--bar');
      });
      it('only adds this.props.className if options.includeClassName=true', () => {
        cmp = renderIntoDocument(<Item flavor="a" className="baz" />);
        const result = cmp.$getClassNameWithFlavor('button', {
          includeClassName: false
        });
        expect(result).to.equal('button button--a');
      });
      it('appends options.additionalClassName', () => {
        cmp = renderIntoDocument(<Item flavor="hello" className="baz" />);
        const result = cmp.$getClassNameWithFlavor('button', {
          additionalClassName: 'world'
        });
        expect(result).to.equal('button button--hello baz world');
      });
    });
    describe('$propsWithoutKeys', () => {
      it('returns a new object', () => {
        const props = cmp.$propsWithoutKeys('foo', 'hello');
        expect(props).not.to.equal(cmp.props);
      });
      it('returns a new object without the specified keys', () => {
        let props;
        cmp = renderIntoDocument(<Item foo="bar" hello="world" />);
        props = cmp.$propsWithoutKeys('foo');
        expect(props).to.have.keys({ hello: 'world' });
        cmp = renderIntoDocument(<Item foo="bar" hello="world" />);
        props = cmp.$propsWithoutKeys('foo', 'hello');
        expect(props).not.to.have.keys('foo', 'hello');
      });
    });

    // TODO: test for prefix()
  });
});
