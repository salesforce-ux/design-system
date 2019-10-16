import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';
import Icon from '../icon';

import common from '../common/index.scss';
import avatar from './base/index.scss';

export const AvatarImage = props => {
  const { imgType } = props;
  const assistiveText = `Person ${imgType} name`;
  return (
    <img
      alt={assistiveText}
      src={`/assets/images/avatar${imgType}.jpg`}
      title={assistiveText}
    />
  );
};

AvatarImage.defaultProps = {
  imgType: '1'
};

AvatarImage.propTypes = {
  imgType: PropTypes.oneOf(['1', '2']).isRequired
};

export const AvatarIcon = props => (
  <Icon sprite="standard" symbol={props.symbol} title={props.title} />
);

AvatarIcon.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export const AvatarInitials = props => {
  const { initials, title, isInverse } = props;

  return (
    <abbr
      className={classNames('lwc-avatar__initials', {
        'lwc-avatar__initials_inverse': isInverse
      })}
      title={title}
    >
      {initials}
    </abbr>
  );
};

AvatarInitials.propTypes = {
  title: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  isInverse: PropTypes.bool
};

export default class Avatar extends Component {
  render() {
    const {
      iconSymbol,
      imgType,
      initials,
      isInverse,
      shape,
      size,
      style,
      title,
      type,
      shadow,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([common, avatar, customization]);

    const computedClassNames = classNames('lwc-avatar', {
      [`lwc-avatar_${shape}`]: shape,
      [`lwc-avatar_${size}`]: size,
      'lwc-avatar_background-image': type === 'background-image'
    });

    return (
      <Shadow.on name="avatar" includes={css} shadow={shadow} style={style}>
        <span className={computedClassNames}>
          {type === 'image' && <AvatarImage imgType={imgType} />}
          {type === 'initials' && (
            <AvatarInitials
              initials={initials}
              title={title}
              isInverse={isInverse}
            />
          )}
          {type === 'icon' && <AvatarIcon symbol={iconSymbol} title={title} />}
        </span>
      </Shadow.on>
    );
  }
}

Avatar.propTypes = {
  shape: PropTypes.oneOf(['circle']),
  size: PropTypes.oneOf(['large', 'small', 'medium', 'x-small']),
  type: PropTypes.oneOf([
    'background-image',
    'group-icon',
    'image',
    'initials',
    'icon',
    'profile-icon'
  ]).isRequired,
  title: PropTypes.string.isRequired,
  iconSymbol: PropTypes.string,
  imgType: PropTypes.string,
  initials: PropTypes.string,
  isInverse: PropTypes.bool
};
