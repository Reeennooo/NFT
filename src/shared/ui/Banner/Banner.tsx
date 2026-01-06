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
    <SquircleWrap className={styles.root} cornerRadius={30}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.buttons}>
          <Button
            text={'Explore More'}
            onClick={() => {}}
            style={'secondary'}
            size={'large'}
            width={'180px'}
          />
          <Button
            text={'Sell Artwork'}
            onClick={() => {}}
            style={'primary'}
            size={'large'}
            width={'180px'}
          />
        </div>
      </div>
      <SquircleWrap className={styles.image}>
        <img src={'/images/cards/5.jpg'} alt={'nft'} />
      </SquircleWrap>
    </SquircleWrap>
  );
};