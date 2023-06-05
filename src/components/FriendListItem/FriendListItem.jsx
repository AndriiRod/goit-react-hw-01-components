import PropTypes from 'prop-types';

import { Indicator, Text, Item } from './FriendListItem.styled';

export const FriendListItem = ({ key, isOnline, avatar, name }) => {
  return (
    <Item key={key}>
      <Indicator isOnline={isOnline}></Indicator>
      <img src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </Item>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
