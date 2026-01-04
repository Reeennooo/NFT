import { type FC, type ReactNode, memo } from 'react';
import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export const Layout: FC<IProps> = memo(({ children, header, footer }) => {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.main}>
        {children}
      </main>
      {footer && (
        <div className={styles.footerWrapper}>
          {footer}
        </div>
      )}
    </div>
  );
});
