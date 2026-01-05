import styles from './StatisticItem.module.scss'
import type {FC} from 'react';

interface Props {
  title: string;
  subtitle: string;
}

export const StatisticItem: FC<Props> = (props) => {
  const {title, subtitle} = props;
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};