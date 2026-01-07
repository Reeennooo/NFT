import {Container} from 'shared/ui/Container/Container.tsx';
import styles from './Hero.module.scss'
import {Button} from 'shared/ui/Button/Button.tsx';
import {StatisticItem} from 'features/Hero/ui/StatisticItem.tsx';
import {HeroDecor} from 'features/Hero/ui/HeroDecor.tsx';
import {motion, easeOut} from 'framer-motion';
import classNames from 'classnames';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const Hero = () => {
  return (
    <section className={styles.root} >
      <Container>
        <div className={styles.inner}>
          <motion.div
            className={styles.info}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.title} variants={itemVariants}>
              <div className={styles.statisticsMobile}>
                <div className={styles.statisticsMobile__line}/>
                <span>OVER 1M CREATORS</span>
              </div>
              <h1>Discover And<br/>Create NFTs</h1>
            </motion.div>
            <motion.p variants={itemVariants} className={styles.text}>
              Discover, Create and Sell NFTs On Our NFT Marketplace<br/>With Over Thousands Of NFTs And Get a <span className={styles.bold}>$20 bonus</span>.
            </motion.p>
            <motion.div variants={itemVariants} className={styles.buttons}>
              <Button
                text={'Explore more'}
                style={'primary'}
                size={'medium'}
                textTransform={'textUppercase'}
                onClick={() => {}}
                className={styles.button}
              />
              <Button
                text={'Create nft'}
                style={'secondary'}
                size={'medium'}
                textTransform={'textUppercase'}
                onClick={() => {}}
                className={classNames(styles.button, styles.small)}
              />
            </motion.div>
            <motion.div variants={itemVariants} className={styles.statistics}>
              <StatisticItem title={'430K+'} subtitle={'Art Works'} />
              <StatisticItem title={'159K+'} subtitle={'Creators'} />
              <StatisticItem title={'87K+'} subtitle={'Collections'} />
            </motion.div>
          </motion.div>
          <HeroDecor />
        </div>
      </Container>
    </section>
  );
};