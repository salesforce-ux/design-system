/* eslint-env jest */
import React from 'react';
import Carousel from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a carousel, first tab active', () =>
  matchesMarkup(<Carousel panelActive="1" />));

it('renders a carousel, second tab active', () =>
  matchesMarkup(<Carousel panelActive="2" />));

it('renders a carousel, third tab active', () =>
  matchesMarkup(<Carousel panelActive="3" />));

it('renders a carousel, auto-play enabled', () =>
  matchesMarkup(<Carousel panelActive="1" autoPlay />));

it('renders a carousel, auto-play disabled', () =>
  matchesMarkup(<Carousel panelActive="1" autoPlay="stop" />));
