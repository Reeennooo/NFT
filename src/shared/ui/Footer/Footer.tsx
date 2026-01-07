import {memo} from 'react';
import styles from './Footer.module.scss';
import {Container} from 'shared/ui/Container/Container.tsx';
import {SocialLinks} from 'shared/ui/SocialLinks/SocialLinks.tsx';
import {LogoDiveSea} from 'shared/ui/LogoDiveSea/LogoDiveSea.tsx';

export const Footer = memo(() => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.top}>
            <LogoDiveSea color={'light'} size={'medium'} showText={true} />
            <SocialLinks className={styles.socialMobile} />
            <div className={styles.navigation}>
              <a href={'#'}>Privacy Policy</a>
              <a href={'#'}>Term & Conditions</a>
              <a href={'#'}>About Us</a>
              <a href={'#'}>Contact</a>
            </div>
          </div>
          <div className={styles.social}>
            <p className={styles.rights}>© 2023 <span>DiveSea All Rights Reserved.</span></p>
            <SocialLinks className={styles.socialDesktop} />
          </div>
        </div>
      </Container>
    </footer>
  );
});