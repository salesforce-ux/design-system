import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Avatar, AvatarIcon, AvatarInitials } from '../avatar';

export const AvatarGroupContent = props => {
  const { isPrimary, isInverse, type } = props;
  const getContentType = (type, isPrimary) => {
    switch (type) {
      case 'icon':
        return <AvatarGroupedIcon />;
      case 'user-initials':
        return <AvatarGroupedUserInitials isInverse={isInverse} />;
      case 'image':
      default:
        return <AvatarImage imgType={isPrimary ? '1' : '2'} />;
    }
  };

  return (
    <Fragment>
      <AvatarGrouped isPrimary isInverse={isInverse}>
        {getContentType(type, isPrimary)}
      </AvatarGrouped>
      <AvatarGrouped isInverse={isInverse}>
        {getContentType(type, false)}
      </AvatarGrouped>
    </Fragment>
  );
};

AvatarGroupContent.defaultProps = {
  type: 'image'
};

AvatarGroupContent.propTypes = {
  type: PropTypes.oneOf(['image', 'icon', 'user-initials']),
  isPrimary: PropTypes.bool,
  isInverse: PropTypes.bool
};

export const AvatarGroup = props => (
  <span
    className={classNames('slds-avatar-group', {
      [`slds-avatar-group_${props.size}`]: props.size
    })}
  >
    {props.children}
  </span>
);

AvatarGroup.defaultProps = {
  children: <AvatarGroupContent />
};

AvatarGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large'])
};

export const AvatarGrouped = props => {
  const { children, isPrimary, isInverse } = props;
  return (
    <Avatar isGrouped isPrimary={isPrimary} isInverse={isInverse}>
      {children}
    </Avatar>
  );
};

AvatarGrouped.propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
  isInverse: PropTypes.bool
};

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

export const AvatarGroupedIcon = props => (
  <AvatarIcon symbol="user" isGrouped />
);

export const AvatarGroupedUserInitials = props => (
  <AvatarInitials
    isGrouped
    isInverse={props.isInverse}
    title="Person name"
    initials="WW"
  />
);

AvatarGroupedUserInitials.propTypes = {
  isInverse: PropTypes.bool
};
