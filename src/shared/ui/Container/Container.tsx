import type {FC, ReactNode} from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = (props) => {
  const {children, className} = props;
  return (
    <div className={classNames(styles.root, className)}>
      {children}
    </div>
  );
};