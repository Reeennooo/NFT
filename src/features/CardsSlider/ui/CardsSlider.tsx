import styles from './CardsSlider.module.scss';
import {Card} from 'shared/ui/Card/Card.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {useRef} from 'react';
import {SquircleWrap} from 'shared/ui/SquircleWrap/SquircleWrap.tsx';
import {Icon} from 'shared/ui/Icon/Icon.tsx';

export const CardsSlider = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Weekly - Top NFT</h2>
      <Swiper
        style={{padding: '70px 0'}}
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
            if (
              prevRef.current
              && nextRef.current
              && swiper
            ) {
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
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationRoot}>
          <SquircleWrap className={styles.navigation}>
            <button ref={prevRef}>
              <Icon name={'arrow-left'} properties={{className: styles.arrow}} />
            </button>
            <button ref={nextRef}>
              <Icon name={'arrow-right'} properties={{className: styles.arrow}} />
            </button>
          </SquircleWrap>
        </div>
      </div>
    </section>
  );
};