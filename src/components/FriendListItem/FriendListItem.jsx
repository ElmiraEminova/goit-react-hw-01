import clsx from "clsx"
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
const status = clsx(isOnline ? css.isOnline : css.isOffline)

    return (
    <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
    )
}