import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <img className={css.avatar} src={avatar} alt="User avatar" width="78" />
      <p className={css.name}>{name}</p>

      <span className={isOnline ? css.true : css.false}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </>
  );
};

export default FriendListItem;