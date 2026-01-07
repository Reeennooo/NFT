import {type FC, memo} from 'react';
import styles from './LogoDiveSea.module.scss';
import LogoSvg from 'shared/assets/logo.svg?react'
import classNames from 'classnames';

interface LogoDiveSeaProps {
  color: 'dark' | 'light'
  size: 'small' | 'medium';
  showText?: boolean;
}

export const LogoDiveSea: FC<LogoDiveSeaProps> = memo((props) => {
  const {color, showText, size} = props;
  return (
    <div className={classNames(styles.logo, styles[color], styles[size])}>
      <LogoSvg className={styles.logoSvg} />
      {showText && 'DiveSea'}
    </div>
  );
});