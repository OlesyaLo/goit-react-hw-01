import css from "./FriendListItem.module.css"

export default function FriendListItem({friends:{avatar, name, isOnline}}) {
    return (
        <div className={css.itemContainer}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    );
}
