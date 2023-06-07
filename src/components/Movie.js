import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, rating, genres }) {
  return (
    <div>
      <div className={styles.movie}>
        <figure className={styles.imgWrap}>
          <img className={styles.movieImg} src={coverImg} alt={title} />

          <figcaption className={styles.figcaption}>
            <Link className={styles.Link} to={`/movie/${id}`}>
              <div className={styles.info}>
                <h2 className={styles.movieTitle}>{title}</h2>
                <div>{rating}</div>
                <p>
                  {summary.length > 235
                    ? `${summary.slice(0, 235)}...`
                    : summary}
                </p>
                <div className={styles.genres}>Genres</div>
                <ul>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
