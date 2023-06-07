import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, rating, genres }) {
  return (
    <li>
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
          <div>{title}</div>
          <div>{rating}</div>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </Link>
      </div>
    </li>
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
