/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  PageHeader,
  PageHeaderRow,
  PageHeaderTitle,
  PageHeaderMetaText,
  PageHeaderControls,
  PageHeaderControl,
  PageHeaderDetailRow,
  PageHeaderDetailList,
  PageHeaderDetailItem,
  PageHeaderDetailListItem,
  PageHeaderDetailTitle,
  PageHeaderDetailBody
} from '../index';
import { PageHeaderBase } from '../base/example';
import { PageHeaderDeprecated } from '../base/deprecated';
import { ObjectHome } from '../object-home/example';
import { ObjectHomeDeprecated } from '../object-home/deprecated';
import { RecordHome } from '../record-home/example';
import { RecordHomeDeprecated } from '../record-home/deprecated';
import { RelatedList } from '../related-list/example';
import { RelatedListDeprecated } from '../related-list/deprecated';
import { RecordHomeVertical } from '../record-home-vertical/example';
import { RecordHomeVerticalDeprecated } from '../record-home-vertical/deprecated';
const { matchesMarkup } = createHelpers(__dirname);

describe('Page Header', () => {
  it('renders the page header', () =>
    matchesMarkup(<PageHeader>content</PageHeader>));

  it('renders the page header in vertical orientation', () =>
    matchesMarkup(<PageHeader orientation="vertical">content</PageHeader>));

  it('renders the page header with related list modifier', () =>
    matchesMarkup(<PageHeader isRelatedList>content</PageHeader>));

  it('renders the page header row', () =>
    matchesMarkup(<PageHeaderRow>content</PageHeaderRow>));

  it('renders the page header row with gutters', () =>
    matchesMarkup(<PageHeaderRow hasGutters>content</PageHeaderRow>));

  it('renders the page header column', () =>
    matchesMarkup(<PageHeaderRow>content</PageHeaderRow>));

  it('renders the page header column with title modifier', () =>
    matchesMarkup(<PageHeaderRow type="title">content</PageHeaderRow>));

  it('renders the page header column with actions modifier', () =>
    matchesMarkup(<PageHeaderRow type="actions">content</PageHeaderRow>));

  it('renders the page header column with meta modifier', () =>
    matchesMarkup(<PageHeaderRow type="meta">content</PageHeaderRow>));

  it('renders the page header column with controls modifier', () =>
    matchesMarkup(<PageHeaderRow type="type">content</PageHeaderRow>));

  it('renders the page header title', () =>
    matchesMarkup(<PageHeaderTitle titleText="Page Title" />));

  it('renders the page header title with an icon', () =>
    matchesMarkup(
      <PageHeaderTitle titleText="Page Title" symbol="opportunity" />
    ));

  it('renders the page header title with an object name', () =>
    matchesMarkup(
      <PageHeaderTitle titleText="Page Title" objectName="Opportunity" />
    ));

  it('renders the page header title with a list view switcher', () =>
    matchesMarkup(<PageHeaderTitle titleText="Page Title" hasSwitcher />));

  it('renders the page header title with meta-text', () =>
    matchesMarkup(
      <PageHeaderTitle
        titleText="Page Title"
        metaText="Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15"
      />
    ));

  it('renders the page header title with only meta text if meta text and object name are both supplied', () =>
    matchesMarkup(
      <PageHeaderTitle
        titleText="Page Title"
        metaText="Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15"
        objectName="Opportunity"
      />
    ));

  it('renders the page header meta-text', () =>
    matchesMarkup(<PageHeaderMetaText>content</PageHeaderMetaText>));

  it('renders the page header controls container', () =>
    matchesMarkup(<PageHeaderControls>content</PageHeaderControls>));

  it('renders the page header control container', () =>
    matchesMarkup(<PageHeaderControl>content</PageHeaderControl>));

  it('renders the page header detail container', () =>
    matchesMarkup(<PageHeaderDetailRow>content</PageHeaderDetailRow>));

  it('renders the page header detail block container', () =>
    matchesMarkup(<PageHeaderDetailItem>content</PageHeaderDetailItem>));

  it('renders the page header detail title container', () =>
    matchesMarkup(
      <PageHeaderDetailTitle title="content">content</PageHeaderDetailTitle>
    ));

  it('renders the page header detail body container', () =>
    matchesMarkup(
      <PageHeaderDetailBody title="content">content</PageHeaderDetailBody>
    ));

  it('renders the page header detail vertical list', () =>
    matchesMarkup(<PageHeaderDetailList>content</PageHeaderDetailList>));

  it('renders the page header detail vertical list item', () =>
    matchesMarkup(
      <PageHeaderDetailListItem>content</PageHeaderDetailListItem>
    ));
});

describe('Renders a page header', () => {
  it('renders base page header', () => matchesMarkup(<PageHeaderBase />));

  it('renders deprecated base page header', () =>
    matchesMarkup(<PageHeaderDeprecated />));

  it('renders object home page header', () => matchesMarkup(<ObjectHome />));

  it('renders deprecated object home page header', () =>
    matchesMarkup(<ObjectHomeDeprecated />));

  it('renders record home page header', () => matchesMarkup(<RecordHome />));

  it('renders deprecated record home page header', () =>
    matchesMarkup(<RecordHomeDeprecated />));

  it('renders vertical record home page header', () =>
    matchesMarkup(<RecordHomeVertical />));

  it('renders deprecated vertical record home page header', () =>
    matchesMarkup(<RecordHomeVerticalDeprecated />));

  it('renders related list home page header', () =>
    matchesMarkup(<RelatedList />));

  it('renders deprecated related list home page header', () =>
    matchesMarkup(<RelatedListDeprecated />));
});
