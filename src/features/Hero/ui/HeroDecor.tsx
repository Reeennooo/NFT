import styles from './HeroDecor.module.scss';
import classNames from 'classnames';
import ArrowSvg from 'shared/assets/arrow.svg?react';
import DotsSvg from 'shared/assets/dots.svg?react';
import {motion} from 'framer-motion';

const MotionArrow = motion(ArrowSvg);

export const HeroDecor = () => {
  return (
    <div className={styles.root}>
      <motion.img
        src={'/images/decor1.png'}
        className={classNames(styles.decor1)}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <motion.img
        src={'/images/decor2.png'}
        className={classNames(styles.decor2)}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <MotionArrow
        className={styles.arrow}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.6,
          duration: 0.6,
          ease: "easeOut",
        }}
      />
      <DotsSvg className={styles.dots} />
    </div>
  );
};