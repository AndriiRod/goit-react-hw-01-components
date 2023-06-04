import PropTypes from 'prop-types';

import {
  UserCard,
  Img,
  BaseInfo,
  Teg,
  Wrap,
  Text,
  InfoList,
  Item,
  Label,
  Indicators,
} from './Profile.styled';

export const Profile = ({ name, tag, location, avatarUrl, statsArr }) => {
  return (
    <UserCard>
      <BaseInfo>
        <Img src={avatarUrl} alt="User avatar" />
        <Wrap>
          <Text>{name}</Text>
          <Text>{location}</Text>
        </Wrap>
        <Teg>@{tag}</Teg>
      </BaseInfo>

      <InfoList>
        <Item>
          <Label>Followers</Label>
          <Indicators>{statsArr.followers}</Indicators>
        </Item>
        <Item>
          <Label>Views</Label>
          <Indicators>{statsArr.views}</Indicators>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Indicators>{statsArr.likes}</Indicators>
        </Item>
      </InfoList>
    </UserCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  statsArr: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
