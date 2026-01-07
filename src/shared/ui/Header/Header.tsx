import {type FC, useCallback, useEffect, useState} from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import {Container} from 'shared/ui/Container/Container.tsx';
import {Button} from 'shared/ui/Button/Button.tsx';
import {LogoDiveSea} from 'shared/ui/LogoDiveSea/LogoDiveSea.tsx';
import {Icon} from 'shared/ui/Icon/Icon.tsx';
import {SocialLinks} from 'shared/ui/SocialLinks/SocialLinks.tsx';
import {useWindowWidth} from 'shared/hooks/useWindowWidth.ts';

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const openMenu = useCallback(() => {
    setMenuIsOpen(true)
  }, [])
  const closeMenu = useCallback(() => {
    setMenuIsOpen(false)
  }, [])

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
      menuIsOpen ? styles.open : undefined,
      scrolled ? styles.scrolled : undefined
    )}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <a href={'#'} className={styles.logoWrapper}>
              <LogoDiveSea
                color={'dark'}
                size={'small'}
                showText={windowWidth < 769}
              />
            </a>
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
            className={classNames(styles.connectButton, styles.desktop)}
            onClick={() => {}}
          />
          {
            menuIsOpen
              ? (
                <button className={styles.closeMenuButton} onClick={closeMenu}>
                  <Icon name={'cross'} />
                </button>
              )
              : (
                <button className={styles.menuButton} onClick={openMenu}>
                  <Icon name={'burger'} />
                </button>
              )
          }
        </div>
      </Container>
      <div className={classNames(styles.mobileMenu)}>
        <Container className={styles.mobileMenu__container}>
          <div className={styles.mobileMenu__inner}>
            <div>
              <div className={styles.mobileMenu__nav}>
                <a href={'#'}>discover</a>
                <a href={'#'}>creators</a>
                <a href={'#'}>sell</a>
                <a href={'#'}>stats</a>
              </div>
              <SocialLinks iconSize={'size24'} />
            </div>
            <Button
              text={'Connect Wallet'}
              style={'primary'}
              size={'large'}
              textTransform={'textUppercase'}
              cornerRadiusProp={15}
              className={classNames(styles.connectButton, styles.mobile)}
              onClick={() => {}}
            />
          </div>
        </Container>
      </div>
    </header>
  );
};