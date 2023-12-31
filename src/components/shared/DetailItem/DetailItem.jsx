import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PlatformContext } from '../../../contexts/PlatformContext'
import { GenreContext } from '../../../contexts/GenreContext'
import { SortByContext } from '../../../contexts/SortByContext'

import buttonStyles from '../../../modules/ButtonStyle.module.scss'
import detailGridStyles from '../../../modules/DetailGrid.module.scss'
import styles from './DetailItem.module.scss'

const DetailItem = ({ game }) => {

  const { platform, setPlatform } = useContext(PlatformContext);
  const { genre, setGenre } = useContext(GenreContext);
  const { sortBy, setSortBy } = useContext(SortByContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    setPlatform(platform);
    setGenre(genre);
    setSortBy(sortBy);
  }
  return (
    <article className={styles.details_item}>
      <div className={styles.hero}>
        <img src={game.screenshots[0].image}></img>
      </div>
      <div className={styles.content}>
        <h1>{game.title}</h1>
        <div className={detailGridStyles.element_wrapper}>
          <div className={styles.overview}>
            <img src={game.thumbnail}></img>
            <div className={styles.facts}>
              <div>
                <p>Platform:</p>
                <p>Genre:</p>
              </div>
              <div>
                <p>{`${game.platform}`}</p>
                <p>{`${game.genre}`}</p>
              </div>
            </div>
            <div className={styles.links}>
              <a className={buttonStyles.button}
                href={`${game.game_url}`}
                target='blank'
              >Play Now</a>
              <button className={buttonStyles.button}
                onClick={(() => handleClick())}
              >Back</button>
            </div>
          </div>
          <div className={styles.about}>
            <h3>About</h3>
            <p>{game.description}</p>
          </div>
        </div>
        {game.screenshots.length >= 3 &&
          <div className={detailGridStyles.element_wrapper}>
            <img src={game?.screenshots[1].image}></img>
            <img src={game?.screenshots[2].image}></img>
          </div>
        }
        <div className={detailGridStyles.element_wrapper}>
          <div>
            <h3>Addtl. Information</h3>
            <div className={styles.developer}>
              <div>
                <p>Developer:</p>
                <p>Publisher:</p>
                <p>Released:</p>
              </div>
              <div>
                <p>{game.developer}</p>
                <p>{game.publisher}</p>
                <p>{game.release_date}</p>
              </div>
            </div>
          </div>
          {game.platform !== "Web Browser"
            ? <div className={styles.system}>
              <h3>Minimum System Requirements</h3>
              <p>{game.minimum_system_requirements.os}</p>
              <p>{game.minimum_system_requirements.processor}</p>
              <p>{game.minimum_system_requirements.graphics}</p>
              <p>{game.minimum_system_requirements.memory}</p>
              <p>{game.minimum_system_requirements.storage}</p>
            </div>
            : <div className={styles.system}>
              <h3>Minimum System Requirements</h3>
              <p>Modern, up-tp-date web browser</p>
            </div>
          }
        </div>
      </div>
    </article>
  );
}

export default DetailItem;