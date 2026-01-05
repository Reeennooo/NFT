import {Container} from 'shared/ui/Container/Container.tsx';
import styles from './Hero.module.scss'
import {Text} from 'shared/ui/Text/Text';
import {Button} from 'shared/ui/Button/Button.tsx';
import {StatisticItem} from 'features/Hero/ui/StatisticItem.tsx';
import {HeroDecor} from 'features/Hero/ui/HeroDecor.tsx';

export const Hero = () => {
  return (
    <div className={styles.root} >
      <Container>
        <div className={styles.inner}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Discover And<br/>Create NFTs
            </h1>
            <p className={styles.text}>
              Discover, Create and Sell NFTs On Our NFT Marketplace<br/>With Over Thousands Of NFTs And Get a <span className={styles.bold}>$20 bonus</span>.
            </p>
            <div className={styles.buttons}>
              <Button
                text={'Explore more'}
                style={'primary'}
                size={'medium'}
                textTransform={'textUppercase'}
                width={'180px'}
                onClick={() => {}}
                className={styles.button}
              />
              <Button
                text={'Create nft'}
                style={'secondary'}
                size={'medium'}
                textTransform={'textUppercase'}
                width={'140px'}
                onClick={() => {}}
                className={styles.button}
              />
            </div>
            <div className={styles.statistics}>
              <StatisticItem title={'430K+'} subtitle={'Art Works'} />
              <StatisticItem title={'159K+'} subtitle={'Creators'} />
              <StatisticItem title={'87K+'} subtitle={'Collections'} />
            </div>
          </div>
          <HeroDecor />
        </div>
      </Container>
    </div>
  );
};