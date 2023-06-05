import PropTypes from 'prop-types';

import { Indicator, Text } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <Indicator isOnline={isOnline}></Indicator>
      <img src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
