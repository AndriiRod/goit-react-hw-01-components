import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import { Wrap } from './App.styled';

export const App = () => {
  return (
    <Wrap>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        statsArr={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrap>
  );
};
