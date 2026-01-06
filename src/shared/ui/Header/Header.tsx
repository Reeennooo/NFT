import {type FC, useEffect, useState} from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import LogoSvg from 'shared/assets/logo.svg?react'
import {Container} from 'shared/ui/Container/Container.tsx';
import {Button} from 'shared/ui/Button/Button.tsx';

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // на случай если страница уже проскроллена

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(
      styles.root,
      scrolled ? styles.scrolled : undefined
    )}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <LogoSvg className={styles.logo} />
            <div className={styles.navigation}>
              <a href={'#'}>discover</a>
              <a href={'#'}>creators</a>
              <a href={'#'}>sell</a>
              <a href={'#'}>stats</a>
            </div>
          </div>
          <Button
            text={'Connect Wallet'}
            style={'primary'}
            size={'standard'}
            textTransform={'textUppercase'}
            width={'200px'}
            className={styles.button}
            onClick={() => {}}
          />
        </div>
      </Container>
    </header>
  );
};