import styles from './CardsSlider.module.scss';
import {Card} from 'shared/ui/Card/Card.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {useRef} from 'react';

export const CardsSlider = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Weekly - Top NFT</h2>
      <Swiper
        slidesPerView='auto'
        spaceBetween={40}
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={() => {
          setTimeout((swiper: any) => {
            if (prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          })
        }}
      >
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Card image={'/images/cards/1.jpg'} title={'Sun-Glass'} bid={1.75} />
        </SwiperSlide>
      </Swiper>
      <div>
        <button ref={prevRef}>Назад</button>
        <button ref={nextRef}>Вперед</button>
      </div>
    </div>
  );
};