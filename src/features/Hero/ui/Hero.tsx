import {Container} from 'shared/ui/Container/Container.tsx';
import styles from './Hero.module.scss'
import {Button} from 'shared/ui/Button/Button.tsx';
import {StatisticItem} from 'features/Hero/ui/StatisticItem.tsx';
import {HeroDecor} from 'features/Hero/ui/HeroDecor.tsx';
import {motion, easeOut} from 'framer-motion';

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
    <div className={styles.root} >
      <Container>
        <div className={styles.inner}>
          <motion.div
            className={styles.info}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              Discover And<br/>Create NFTs
            </motion.h1>

            <motion.p variants={itemVariants} className={styles.text}>
              Discover, Create and Sell NFTs On Our NFT Marketplace<br/>With Over Thousands Of NFTs And Get a <span className={styles.bold}>$20 bonus</span>.
            </motion.p>
            <motion.div variants={itemVariants} className={styles.buttons}>
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
    </div>
  );
};