import {memo} from 'react';
import styles from './SocialLinks.module.scss';
import {Icon} from 'shared/ui/Icon/Icon.tsx';

export const SocialLinks = memo(() => {
  return (
    <div className={styles.root}>
      <a href={'#'}><Icon name={'inst'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'linkedin'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'facebook'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'twitter'} properties={{className: styles.icon}} /></a>
    </div>
  );
});