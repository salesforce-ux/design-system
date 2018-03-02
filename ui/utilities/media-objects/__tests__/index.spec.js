/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import MediaObject from '../index.react';
import { Avatar } from '../../../components/avatar/base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const image = (
  <Avatar className="slds-avatar_large">
    <img
      alt="Person name"
      src="/assets/images/avatar3.jpg"
      title="User avatar"
    />
  </Avatar>
);

describe('renders media object utilities', () => {
  it('renders media object with left figure', () =>
    matchesMarkupAndStyle(
      <MediaObject figureLeft={image}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));

  it('renders media object with right figure', () =>
    matchesMarkupAndStyle(
      <MediaObject figureRight={image}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));

  it('renders media object with left and right figure', () =>
    matchesMarkupAndStyle(
      <MediaObject figureLeft={image} figureRight={image}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));

  it('renders media object with left figure centered', () =>
    matchesMarkupAndStyle(
      <MediaObject figureLeft={image} flavor="center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));

  it('renders media object with small space between figure and text', () =>
    matchesMarkupAndStyle(
      <MediaObject figureLeft={image} className="slds-media_small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));

  it('renders media object with large space between figure and text', () =>
    matchesMarkupAndStyle(
      <MediaObject figureLeft={image} className="slds-media_large">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
          molestias reprehenderit consequuntur sapiente. Modi veritatis totam
          accusantium numquam assumenda.
        </p>
      </MediaObject>
    ));
});
