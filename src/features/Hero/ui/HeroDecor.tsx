import styles from './HeroDecor.module.scss';
import classNames from 'classnames';
import ArrowSvg from 'shared/assets/arrow.svg?react';
import DotsSvg from 'shared/assets/dots.svg?react';

export const HeroDecor = () => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.imageWrapper, styles.decor1)}>
        <img src={'/images/decor1.png'} alt={''} />
      </div>
      <div className={classNames(styles.imageWrapper, styles.decor2)}>
        <img src={'/images/decor2.png'} alt={''} />
      </div>
      <ArrowSvg className={styles.arrow} />
      <DotsSvg className={styles.dots} />
    </div>
  );
};