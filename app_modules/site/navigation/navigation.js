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
    url: 'https://salesforce.az1.qualtrics.com/SE/?SID=SV_9Ae8M28m6cNf0rP',
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
