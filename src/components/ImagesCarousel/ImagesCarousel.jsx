/* eslint-disable react/prop-types */
import styles from "./ImagesCarousel.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Mousewheel } from "swiper/modules";

import "swiper/scss";

function ImagesCarousel({ title, images }) {
  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel_title}>{title}</h2>
      <Swiper
        className={styles.custom_swiper}
        modules={[A11y, Mousewheel]}
        direction="horizontal"
        loop={true}
        mousewheel={{ enabled: true, forceToAxis: true }}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 2,
          },
        }}
      >
        {images &&
          images.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  className={styles.carousel_image}
                  src={"https://image.tmdb.org/t/p/w500" + image.file_path}
                  alt="Фотография фильма"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default ImagesCarousel;
