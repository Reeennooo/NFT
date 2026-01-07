import styles from './Banner.module.scss';
import {SquircleWrap} from 'shared/ui/SquircleWrap/SquircleWrap.tsx';
import type {FC} from 'react';
import {Button} from 'shared/ui/Button/Button.tsx';

interface Props {
  title: string;
  text: string;
}

export const Banner: FC<Props> = (props) => {
  const {text, title} = props;

  return (
    <div className={styles.root}>
      <SquircleWrap className={styles.wrapper} cornerRadius={30}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.buttons}>
            <Button
              text={'Explore More'}
              onClick={() => {}}
              style={'secondary'}
              size={'large'}
            />
            <Button
              text={'Sell Artwork'}
              onClick={() => {}}
              style={'primary'}
              size={'large'}
            />
          </div>
        </div>
        <SquircleWrap className={styles.image}>
          <img src={'/images/cards/5.jpg'} alt={'nft'} />
        </SquircleWrap>
      </SquircleWrap>
      <SquircleWrap className={styles.imageMobile}>
        <img src={'/images/cards/card-with-shadow.png'} alt={'nft'} />
      </SquircleWrap>
    </div>
  );
};