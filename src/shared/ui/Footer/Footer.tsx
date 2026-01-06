import {memo} from 'react';
import styles from './Footer.module.scss';
import LogoSvg from 'shared/assets/logo.svg?react'
import {Container} from 'shared/ui/Container/Container.tsx';
import {SocialLinks} from 'shared/ui/SocialLinks/SocialLinks.tsx';

export const Footer = memo(() => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <LogoSvg className={styles.logoSvg} />
              DiveSea
            </div>
            <div className={styles.navigation}>
              <a href={'#'}>Privacy Policy</a>
              <a href={'#'}>Term & Conditions</a>
              <a href={'#'}>About Us</a>
              <a href={'#'}>Contact</a>
            </div>
          </div>
          <div className={styles.social}>
            <p className={styles.rights}>© 2023 <span>DiveSea All Rights Reserved.</span></p>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
});