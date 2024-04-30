/* eslint-disable react/prop-types */
import styles from "./MovieCarousel.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Mousewheel } from "swiper/modules";

import MovieCard from "@components/MovieCard/MovieCard";

import "swiper/scss";
import "swiper/scss/pagination";

import "swiper/css";

function MovieCarousel({ title, movies }) {
  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel_title}>{title}</h2>
      <Swiper
        className={styles.custom_swiper}
        modules={[A11y, Mousewheel]}
        direction="horizontal"
        loop={true}
        mousewheel={{ enabled: true, forceToAxis: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          860: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {movies &&
          movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default MovieCarousel;
