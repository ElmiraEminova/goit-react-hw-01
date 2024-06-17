import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  console.log(name, tag, location, image, stats);  

  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image}
          src={image}
          alt="User avatar"
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}