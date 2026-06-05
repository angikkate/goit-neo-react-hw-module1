import {Profile} from './Profile/Profile';

import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

import user from 'data/user';
// import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </>
  );
};