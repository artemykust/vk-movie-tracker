/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

export default function MovieCard({ movie }) {
  return (
    <div className={styles.movie_card}>
      <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
        <img
          className={styles.movie_poster}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <h2 className={styles.movie_title}>{movie.title}</h2>
      </Link>
    </div>
  );
}
