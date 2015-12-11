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
import protectFromUnmount from 'app_modules/site/util/component/protect-from-unmount';
import CTALink from 'app_modules/site/components/cta-link';
import Img from 'app_modules/ui/img';
import { prefix as pf } from 'app_modules/ui/util/component';

class GithubButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stargazersCount: 0,
      repoData: {}
    };
  }

  getStars(cb) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.responseText) {
        const json = JSON.parse(req.responseText);
        cb(json);
      }
    };
    req.open('GET', 'https://api.github.com/repos/salesforce-ux/design-system', true);
    req.send();
    return req;
  }

  componentDidMount() {
    this.protect = protectFromUnmount();
    this.asyncReq = this.protect(this.getStars((data) => {
      this.setState({
        stargazersCount: data.stargazers_count || 0,
        repoData: data
      });
    }));
  }

  componentWillUnmount() {
    this.protect.unmount();
  }

  render() {
    const linkUrlRepo = 'https://github.com/salesforce-ux/design-system';
    const linkUrlGazer = linkUrlRepo + '/stargazers';
    const countStr = String(this.state.stargazersCount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const classesButtonGroup = classNames('site-button-group--social-counter');
    const classesBubbleButton = classNames('site-button--social-counter',
      pf('button button--neutral'),
      (this.state.stargazersCount > 0 ? 'is-loaded' : '')
    );

    return (
      <span className={classesButtonGroup}>
        <CTALink href={linkUrlRepo} className={pf('button button--neutral')}>
          <Img src="/assets/images/social-github-icon-only.svg" className={pf('button__icon--large button__icon--left')}/>
            Star
        </CTALink>
        <a href={linkUrlGazer} className={classesBubbleButton}>
          <span className="site-button--social-counter-bubble">{countStr}</span>
        </a>
      </span>
    );
  }

}

GithubButton.displayName = 'GithubButton';
GithubButton.propTypes = {};

export default GithubButton;
