import styles from "./MainPage.module.scss";
import { useEffect } from "react";
import MovieCarousel from "@components/MovieCarousel/MovieCarousel";

import usePopularStore from "@stores/popularStore";
import useNowPlayingStore from "@stores/nowPlayingStore";
import useTopRatedStore from "@stores/topRatedStore";
import useUpcomingStore from "@stores/upcomingStore";

export default function MainPage() {
  const {
    title: popularTitle,
    movies: popularMovies,
    getPopularMovies,
  } = usePopularStore();

  const {
    title: nowPlayingTitle,
    movies: nowPlayingMovies,
    getNowPlayingMovies,
  } = useNowPlayingStore();

  const {
    title: topRatedTitle,
    movies: topRatedMovies,
    getTopRatedMovies,
  } = useTopRatedStore();

  const {
    title: upcomingTitle,
    movies: upcomingMovies,
    getUpcomingMovies,
  } = useUpcomingStore();

  useEffect(() => {
    getPopularMovies();
    getNowPlayingMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, [
    getPopularMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
  ]);

  return (
    <main>
      <div className={styles.container}>
        <MovieCarousel title={popularTitle} movies={popularMovies} />
        <MovieCarousel title={nowPlayingTitle} movies={nowPlayingMovies} />
        <MovieCarousel title={topRatedTitle} movies={topRatedMovies} />
        <MovieCarousel title={upcomingTitle} movies={upcomingMovies} />
      </div>
    </main>
  );
}
