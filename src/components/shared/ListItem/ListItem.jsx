import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import iconWindows from '../../../assets/images/icon_windows.svg'
import iconBrowser from '../../../assets/images/icon_browser.svg'

import styles from './ListItem.module.scss'

const ListItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "Web Browser" ? iconBrowser : iconWindows}></img>);

  return (
    <article className={styles.list_item}>
      <Link to={`/details/${game.id}`}>
        <div className={styles.hero}>
          <img src={game.thumbnail} alt="game-thumbnail" />
        </div>
      </Link>
      <div className={styles.content}>
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
      </div>
      <div className={styles.details}>
        <Button
          title={"Details"}
          path={`/details/${game.id}`}
        />
      </div>
      <div className={styles.info}>
        <Link>{platformIcon}</Link>
        <Link>{game.genre}</Link>
      </div>
    </article>
  );
}

export default ListItem;