import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.itemList}>
          <FriendListItem 
            key={id}
            avatar={avatar} 
            name={name}
            isOnline={isOnline} 
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;