// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import Tabs from '../../tabs/index.react';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="slds-card-wrapper">
        <Card>
          <CardHeader
            title="Contacts"
            href
            symbol="contact"
            action={
              <button className="slds-button slds-button_neutral">New</button>
            }
          />
          <CardBody>
            This is a card inside an `slds-card-wrapper` to show how styling is
            removed when cards are nested inside.
          </CardBody>
          <CardFooter>
            View All <span className="slds-assistive-text">Contacts</span>
          </CardFooter>
        </Card>
        <Card hasCardBoundary>
          <CardHeader
            title="Contacts"
            href
            symbol="contact"
            action={
              <button className="slds-button slds-button_neutral">New</button>
            }
          />
          <CardBody hasPadding>
            This is a card inside an `slds-card-wrapper` to illustrate how
            `slds-card_boundary` adds a rounded border when desired.
          </CardBody>
          <CardFooter>
            View All <span className="slds-assistive-text">Contacts</span>
          </CardFooter>
        </Card>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'tabs-wrapper',
    label: 'Card wrapper for tabs',
    element: (
      <div className="slds-card-wrapper">
        <Tabs selectedIndex={0}>
          <Tabs.Item title="Item One" id="tab-default-1">
            <Card>
              <CardHeader
                title="Contacts"
                href
                symbol="contact"
                action={
                  <button className="slds-button slds-button_neutral">
                    New
                  </button>
                }
              />
              <CardBody>
                This is a card inside an `slds-card-wrapper` to show how styling
                is removed when cards are nested inside.
              </CardBody>
              <CardFooter>
                View All <span className="slds-assistive-text">Contacts</span>
              </CardFooter>
            </Card>
            <Card hasCardBoundary>
              <CardHeader
                title="Contacts"
                href
                symbol="contact"
                action={
                  <button className="slds-button slds-button_neutral">
                    New
                  </button>
                }
              />
              <CardBody hasPadding>
                This is a card inside an `slds-card-wrapper` to illustrate how
                `slds-card_boundary` adds a rounded border when desired.
              </CardBody>
              <CardFooter>
                View All <span className="slds-assistive-text">Contacts</span>
              </CardFooter>
            </Card>
          </Tabs.Item>
          <Tabs.Item title="Item Two" id="tab-default-2">
            Item Two Content
          </Tabs.Item>
          <Tabs.Item title="Item Three" id="tab-default-3">
            Item Three Content
          </Tabs.Item>
        </Tabs>
      </div>
    )
  },
  {
    id: 'styling-hooks',
    label: 'Styling Hooks',
    demoStyles: `
      --slds-c-card-color-background: #f3f3f3;
      --slds-c-card-radius-border: 8px;
      --slds-c-card-shadow: rgba(0,0,0,.15) 0 4px 8px, rgba(0,0,0,.05) 0 2px 4px;
      --slds-c-card-spacing-block-start: 1.5rem;
      --slds-c-card-spacing-block-end: 0.5rem;
      --slds-c-card-title-font-size: 1.5rem;
      --slds-c-card-header-spacing-block-start: 0;
      --slds-c-card-header-spacing-inline-start: 1.5rem;
      --slds-c-card-header-spacing-inline-end: 1.5rem;
      --slds-c-card-body-spacing-inline-start: 1.5rem;
      --slds-c-card-body-spacing-inline-end: 1.5rem;
      --slds-c-card-body-spacing-block-end: 1rem;
      --slds-c-card-footer-spacing-block-start: 0.5rem;
      --slds-c-card-footer-spacing-block-end: 0;
      --slds-c-card-footer-spacing-inline-start: 1.5rem;
      --slds-c-card-footer-spacing-inline-end: 1.5rem;
      --slds-c-card-footer-font-size: 0.75rem;
      --slds-c-card-footer-text-align: right;
    `,
    storybookStyles: true,
    element: (
      <div className="slds-card-wrapper">
        <Tabs selectedIndex={0}>
          <Tabs.Item title="Item One" id="tab-default-1">
            <Card>
              <CardHeader
                title="Contacts"
                href
                symbol="contact"
                action={
                  <button className="slds-button slds-button_neutral">
                    New
                  </button>
                }
              />
              <CardBody>
                This is a card inside an `slds-card-wrapper` to show how styling
                is removed when cards are nested inside.
              </CardBody>
              <CardFooter>
                View All <span className="slds-assistive-text">Contacts</span>
              </CardFooter>
            </Card>
            <Card hasCardBoundary>
              <CardHeader
                title="Contacts"
                href
                symbol="contact"
                action={
                  <button className="slds-button slds-button_neutral">
                    New
                  </button>
                }
              />
              <CardBody hasPadding>
                This is a card inside an `slds-card-wrapper` to illustrate how
                `slds-card_boundary` adds a rounded border when desired.
              </CardBody>
              <CardFooter>
                View All <span className="slds-assistive-text">Contacts</span>
              </CardFooter>
            </Card>
          </Tabs.Item>
          <Tabs.Item title="Item Two" id="tab-default-2">
            Item Two Content
          </Tabs.Item>
          <Tabs.Item title="Item Three" id="tab-default-3">
            Item Three Content
          </Tabs.Item>
        </Tabs>
      </div>
    )
  }
];
