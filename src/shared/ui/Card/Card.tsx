import type {FC} from 'react';
import styles from './Card.module.scss';
import {SquircleWrap} from 'shared/ui/SquircleWrap/SquircleWrap.tsx';
import {Button} from 'shared/ui/Button/Button.tsx';
import {Icon} from 'shared/ui/Icon/Icon.tsx';

interface Props {
  image: string;
  title: string;
  bid: number;
  counterDate?: Date;
}

export const Card: FC<Props> = (props) => {
  const {image, bid, title} = props;
  return (
    <SquircleWrap className={styles.root} cornerRadius={24}>
      <SquircleWrap className={styles.imageWrapper}>
        <div className={styles.timer}>
          07h 09m 12s
        </div>
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
          width={'120px'}
          className={styles.button}
        />
      </div>
    </SquircleWrap>
  );
};