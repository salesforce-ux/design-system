/* eslint-env jest */
import React from 'react';
import Carousel from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a carousel, first tab active', () =>
  matchesMarkupAndStyle(<Carousel panelActive="1" />));

it('renders a carousel, second tab active', () =>
  matchesMarkupAndStyle(<Carousel panelActive="2" />));

it('renders a carousel, third tab active', () =>
  matchesMarkupAndStyle(<Carousel panelActive="3" />));

it('renders a carousel, auto-play enabled', () =>
  matchesMarkupAndStyle(<Carousel panelActive="1" autoPlay />));

it('renders a carousel, auto-play disabled', () =>
  matchesMarkupAndStyle(<Carousel panelActive="1" autoPlay="stop" />));
