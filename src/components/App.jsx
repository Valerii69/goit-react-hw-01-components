import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

// import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
    </>
  );
};
