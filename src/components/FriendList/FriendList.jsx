import PropTypes from 'prop-types';

import { FriendsList, Item, Indicator, Text } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Indicator isOnline={isOnline}></Indicator>
            <img src={avatar} alt="User avatar" width="48" />
            <Text>{name}</Text>
          </Item>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
