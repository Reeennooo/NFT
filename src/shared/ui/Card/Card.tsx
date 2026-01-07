import {type FC, useEffect, useState} from 'react';
import styles from './Card.module.scss';
import {SquircleWrap} from 'shared/ui/SquircleWrap/SquircleWrap.tsx';
import {Button} from 'shared/ui/Button/Button.tsx';
import {Icon} from 'shared/ui/Icon/Icon.tsx';
import Timer from 'shared/ui/Timer/Timer.tsx';
import {useWindowWidth} from 'shared/hooks/useWindowWidth.ts';

interface Props {
  image: string;
  title: string;
  bid: number;
  timestamp: number;
}

export const Card: FC<Props> = (props) => {
  const {image, bid, title, timestamp} = props;
  const windowWidth = useWindowWidth();
  const [isTablet, setIsTablet] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 1024
  )

  useEffect(() => {
    setIsTablet(window.innerWidth <= 1024)
  }, [
    windowWidth
  ])

  const cornerRadius = isTablet ? 18 : 24
  return (
    <div className={styles.shadowRoot}>
      <SquircleWrap className={styles.root} cornerRadius={cornerRadius}>
        <SquircleWrap className={styles.imageWrapper}>
          <Timer timestamp={timestamp} className={styles.timer} />
          <img src={image} alt={'card-image'} />
        </SquircleWrap>
        <span className={styles.title}>{title}</span>
        <div className={styles.footer}>
          <div className={styles.info}>
            <span className={styles.bidTitle}>Current bid</span>
            <div className={styles.bid}>
              <Icon name={'ethereum'} properties={{className: styles.eth}} />
              <span>{bid}</span>
            </div>
          </div>
          <Button
            text={'Place bid'}
            onClick={() => {}}
            style={'primary'}
            size={'small'}
            textTransform={'textUppercase'}
            className={styles.button}
          />
        </div>
      </SquircleWrap>
    </div>
  );
};