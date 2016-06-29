/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const foldMap = monoid => xs => xs.reduce((acc, x) => acc.concat(monoid.of(x)), monoid.empty()).value;

const states = {devReady: 'dev-ready', prototype: 'prototype'};

class Or {
  constructor(x) {
    this.value = x;
  }

  concat(other) {
    return (this.value === states.devReady || other.value === states.devReady) ? Or.of(states.devReady) : Or.of(states.prototype);
  }
}

Or.of = x => new Or(x);
Or.empty = () => Or.of(states.prototype);


class And {
  constructor(x) {
    this.value = x;
  }

  concat(other) {
    return (other.value === states.devReady && this.value === states.devReady) ? And.of(states.devReady) : And.of(states.prototype);
  }
}

And.of = x => new And(x);
And.empty = () => And.of(states.devReady);

const shouldDisplay = (pref, status) => {
  const showAll = !pref || pref === states.prototype;
  const missingStatusSoSkipForNow = !status;
  const isActuallyDevReady = status === states.devReady;
  return showAll || missingStatusSoSkipForNow || isActuallyDevReady;
};

const isPrototype = status =>
  states.prototype === status;

export default { and: foldMap(And), or: foldMap(Or), shouldDisplay, states, isPrototype };

