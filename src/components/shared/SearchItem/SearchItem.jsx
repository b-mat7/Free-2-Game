import { Link } from 'react-router-dom';

import styles from './SearchItem.module.scss'

const SearchItem = ({ game }) => {

  return (
    <Link to={`/details/${game.id}`}>
      <article className={styles.search_item}>
        <p className={styles.title}>{game.title}</p>
        <img className={styles.image} src={game.thumbnail} alt="thumbnail" />
      </article>
    </Link>
  );
}

export default SearchItem;