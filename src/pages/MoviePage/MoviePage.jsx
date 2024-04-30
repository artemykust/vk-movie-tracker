/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieStore from "@stores/movieStore";

import styles from "./MoviePage.module.scss";
import MovieCarousel from "@components/MovieCarousel/MovieCarousel";
import ImagesCarousel from "@components/ImagesCarousel/ImagesCarousel";

function Icon({ text }) {
  return (
    <div className={styles.icon_container}>
      <span className={styles.icon_text}>{text}</span>
    </div>
  );
}

export default function MoviePage() {
  const { id } = useParams();
  const { movie, images, similar, getMovie, getMovieImages, getSimilar } =
    useMovieStore();

  useEffect(() => {
    getMovie(id);
    getSimilar(id);
    getMovieImages(id);
  }, [id, getMovie, getMovieImages, getSimilar]);

  console.log(movie);

  return (
    movie && (
      <main>
        <div className={styles.container}>
          <div className={styles.movie_about}>
            <img
              className={styles.movie_poster}
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
            <div className={styles.movie_info}>
              <h1 className={styles.movie_title}>{movie.title}</h1>
              <span className={styles.movie_original}>
                {movie.original_title}
              </span>
              <>
                <h3>Обзор</h3>
                <p className={styles.movie_overview}>
                  {movie.overview || "Описание фильма еще никто не добавил :("}
                </p>
              </>
              <span className={styles.movie_tagline}>
                Слоган: <i>{movie.tagline || "Отсутствует"}</i>
              </span>
              <span className={styles.movie_status}>
                Статус: {movie.status}
              </span>
              <span className={styles.movie_duration}>
                Длительность: {movie.runtime} мин.
              </span>
              <div className={styles.movie_categories}>
                {movie.genres &&
                  movie.genres.map((genre) => {
                    return <Icon text={genre.name} key={genre.id} />;
                  })}
              </div>
            </div>
            <div className={styles.movie_rating}>
              <h3 className={styles.movie_average}>
                {movie.vote_average?.toFixed(1)}
              </h3>
              <span className={styles.move_vote_count}>
                {movie.vote_count} оценок
              </span>
            </div>
          </div>
          <section className={styles.movie_images}>
            <ImagesCarousel title={"Фотографии"} images={images} />
          </section>
          <section className={styles.movie_similar}>
            <MovieCarousel title={"Похожие фильмы"} movies={similar} />
          </section>
        </div>
      </main>
    )
  );
}
