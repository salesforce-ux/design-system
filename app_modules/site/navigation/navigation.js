/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import _ from 'lodash';
import sitemap from './sitemap';

import {
  createNavItem,
  formatNavItem
} from './navigation-utils';

export default [
  {
    route: 'getting-started',
    label: 'Getting Started',
    aura: false,
    children: [
      {
        route: 'getting-started:visualforce',
        label: 'Visualforce'
      },
      {
        route: 'getting-started:lightning',
        label: 'Lightning'
      },
      {
        route: 'getting-started:heroku',
        label: 'Heroku'
      }
    ]
  },
  {
    route: 'design',
    label: 'Design',
    children: [
      {
        route: 'design:overview',
        label: 'Overview'
      },
      {
        route: 'design:color',
        label: 'Color'
      },
      {
        route: 'design:data-entry',
        label: 'Data Entry'
      },
      {
        route: 'design:displaying-data',
        label: 'Displaying Data'
      },
      {
        route: 'design:layout',
        label: 'Layout'
      },
      {
        route: 'design:loading',
        label: 'Loading'
      },
      {
        route: 'design:messaging',
        label: 'Messaging'
      },
      {
        route: 'design:motion',
        label: 'Motion'
      },
      {
        route: 'design:navigation',
        label: 'Navigation'
      }
    ]
  },
  {
    route: 'components',
    label: 'Components',
    children: sitemap.getRoute('components').routes
      .filter(route => route.component)
      .map(createNavItem)
      .concat([
        {
          route: 'components:utilities',
          label: 'Utilities',
          separator: true,
          children: sitemap.getRoute('components:utilities').routes
            .filter(route => route.component)
            .map(createNavItem)
        }
      ])
  },
  {
    route: 'voice-and-tone',
    label: 'Voice and Tone'
  },
  {
    route: 'native',
    label: 'Native',
    aura: false,
    children: [
      {
        route: 'native:ios',
        label: 'iOS',
        aura: false
      }
    ]
  },
  {
    route: 'resources',
    label: 'Resources',
    children: [
      {
        route: 'resources:downloads',
        label: 'Downloads',
        aura: false
      },
      {
        route: 'resources:icons',
        label: 'Icons'
      },
      {
        route: 'resources:tokens',
        label: 'Design Tokens'
      }
    ]
  },
  {
    route: 'faq',
    label: 'FAQ',
    abbrTitle: 'Frequently Asked Questions'
  },
  {
    label: 'Settings',
    settings: true,
    separator: true,
    internal: true
  },
  {
    label: 'Give Feedback',
    url: 'https://github.com/salesforce-ux/design-system/issues',
    internal: false
  },
  {
    label: 'Give Feedback',
    url: '/feedback',
    internal: true
  },
  {
    label: 'Log a bug',
    url: '/bugs',
    internal: true
  }
].map(formatNavItem);
