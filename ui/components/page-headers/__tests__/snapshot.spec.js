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
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Page Header', () => {
  it('renders the page header', () =>
    matchesMarkupAndStyle(<PageHeader>content</PageHeader>));

  it('renders the page header in vertical orientation', () =>
    matchesMarkupAndStyle(
      <PageHeader orientation="vertical">content</PageHeader>
    ));

  it('renders the page header with related list modifier', () =>
    matchesMarkupAndStyle(<PageHeader isRelatedList>content</PageHeader>));

  it('renders the page header row', () =>
    matchesMarkupAndStyle(<PageHeaderRow>content</PageHeaderRow>));

  it('renders the page header row with gutters', () =>
    matchesMarkupAndStyle(<PageHeaderRow hasGutters>content</PageHeaderRow>));

  it('renders the page header column', () =>
    matchesMarkupAndStyle(<PageHeaderRow>content</PageHeaderRow>));

  it('renders the page header column with title modifier', () =>
    matchesMarkupAndStyle(<PageHeaderRow type="title">content</PageHeaderRow>));

  it('renders the page header column with actions modifier', () =>
    matchesMarkupAndStyle(
      <PageHeaderRow type="actions">content</PageHeaderRow>
    ));

  it('renders the page header column with meta modifier', () =>
    matchesMarkupAndStyle(<PageHeaderRow type="meta">content</PageHeaderRow>));

  it('renders the page header column with controls modifier', () =>
    matchesMarkupAndStyle(<PageHeaderRow type="type">content</PageHeaderRow>));

  it('renders the page header title', () =>
    matchesMarkupAndStyle(<PageHeaderTitle titleText="Page Title" />));

  it('renders the page header title with an icon', () =>
    matchesMarkupAndStyle(
      <PageHeaderTitle titleText="Page Title" symbol="opportunity" />
    ));

  it('renders the page header title with an object name', () =>
    matchesMarkupAndStyle(
      <PageHeaderTitle titleText="Page Title" objectName="Opportunity" />
    ));

  it('renders the page header title with a list view switcher', () =>
    matchesMarkupAndStyle(
      <PageHeaderTitle titleText="Page Title" hasSwitcher />
    ));

  it('renders the page header title with meta-text', () =>
    matchesMarkupAndStyle(
      <PageHeaderTitle
        titleText="Page Title"
        metaText="Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15"
      />
    ));

  it('renders the page header title with only meta text if meta text and object name are both supplied', () =>
    matchesMarkupAndStyle(
      <PageHeaderTitle
        titleText="Page Title"
        metaText="Mark Jaeckal &bull; Unlimited Customer &bull; 11/13/15"
        objectName="Opportunity"
      />
    ));

  it('renders the page header meta-text', () =>
    matchesMarkupAndStyle(<PageHeaderMetaText>content</PageHeaderMetaText>));

  it('renders the page header controls container', () =>
    matchesMarkupAndStyle(<PageHeaderControls>content</PageHeaderControls>));

  it('renders the page header control container', () =>
    matchesMarkupAndStyle(<PageHeaderControl>content</PageHeaderControl>));

  it('renders the page header detail container', () =>
    matchesMarkupAndStyle(<PageHeaderDetailRow>content</PageHeaderDetailRow>));

  it('renders the page header detail block container', () =>
    matchesMarkupAndStyle(
      <PageHeaderDetailItem>content</PageHeaderDetailItem>
    ));

  it('renders the page header detail title container', () =>
    matchesMarkupAndStyle(
      <PageHeaderDetailTitle title="content">content</PageHeaderDetailTitle>
    ));

  it('renders the page header detail body container', () =>
    matchesMarkupAndStyle(
      <PageHeaderDetailBody title="content">content</PageHeaderDetailBody>
    ));

  it('renders the page header detail vertical list', () =>
    matchesMarkupAndStyle(
      <PageHeaderDetailList>content</PageHeaderDetailList>
    ));

  it('renders the page header detail vertical list item', () =>
    matchesMarkupAndStyle(
      <PageHeaderDetailListItem>content</PageHeaderDetailListItem>
    ));
});

describe('Renders a page header', () => {
  it('renders base page header', () =>
    matchesMarkupAndStyle(<PageHeaderBase />));

  it('renders deprecated base page header', () =>
    matchesMarkupAndStyle(<PageHeaderDeprecated />));

  it('renders object home page header', () =>
    matchesMarkupAndStyle(<ObjectHome />));

  it('renders deprecated object home page header', () =>
    matchesMarkupAndStyle(<ObjectHomeDeprecated />));

  it('renders record home page header', () =>
    matchesMarkupAndStyle(<RecordHome />));

  it('renders deprecated record home page header', () =>
    matchesMarkupAndStyle(<RecordHomeDeprecated />));

  it('renders vertical record home page header', () =>
    matchesMarkupAndStyle(<RecordHomeVertical />));

  it('renders deprecated vertical record home page header', () =>
    matchesMarkupAndStyle(<RecordHomeVerticalDeprecated />));

  it('renders related list home page header', () =>
    matchesMarkupAndStyle(<RelatedList />));

  it('renders deprecated related list home page header', () =>
    matchesMarkupAndStyle(<RelatedListDeprecated />));
});
