import styles from './CardsSlider.module.scss';
import {Card} from 'shared/ui/Card/Card.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {useEffect, useRef, useState} from 'react';
import {SquircleWrap} from 'shared/ui/SquircleWrap/SquircleWrap.tsx';
import {Icon} from 'shared/ui/Icon/Icon.tsx';
import {type NftCard, useGetNftsListQuery} from 'entities/nftCards';
import {getRandomFloat, getRandomImage, getRandomTimestampWithinDay} from 'shared/utils';
import {useWindowWidth} from 'shared/hooks/useWindowWidth.ts';

const imagesPaths = [
  '/images/cards/1.jpg',
  '/images/cards/2.jpg',
  '/images/cards/3.jpg',
  '/images/cards/4.jpg',
  '/images/cards/5.jpg',
];

export const CardsSlider = () => {
  const {cards} = useGetNftsListQuery(undefined, {
    selectFromResult: ({ data }): {cards: NftCard[]} => ({
      cards: data?.map(card => ({
        id: card.id,
        title: card.name,
        image: getRandomImage(imagesPaths),
        bid: getRandomFloat(),
        timestamp: getRandomTimestampWithinDay(),
      })) || [],
    })
  });

  const windowWidth = useWindowWidth();
  const [isTablet, setIsTablet] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 1024
  )
  useEffect(() => {
    setIsTablet(window.innerWidth <= 1024)
  }, [
    windowWidth
  ])

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Weekly - Top NFT</h2>
      <Swiper
        className={styles.swiper}
        slidesPerView='auto'
        spaceBetween={isTablet ? 32 : 40}
        initialSlide={Math.floor(cards.length / 2)}
        centeredSlides={true}
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
        {
          cards.map((card: NftCard) => (
            <SwiperSlide className={styles.slide} key={card.id}>
              <Card image={card.image} title={card.title} bid={card.bid} timestamp={card.timestamp} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationRoot}>
          <SquircleWrap className={styles.navigation} cornerRadius={isTablet ? 12 : 24}>
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