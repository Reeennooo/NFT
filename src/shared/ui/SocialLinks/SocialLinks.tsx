import {type FC, memo} from 'react';
import styles from './SocialLinks.module.scss';
import {Icon} from 'shared/ui/Icon/Icon.tsx';
import classNames from 'classnames';

interface Props {
  iconSize?: 'size24'
  className?: string
}

export const SocialLinks: FC<Props> = memo((props) => {
  const {iconSize, className} = props;
  return (
    <div className={classNames(styles.root, iconSize && styles[iconSize], className)}>
      <a href={'#'}><Icon name={'inst'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'linkedin'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'facebook'} properties={{className: styles.icon}} /></a>
      <a href={'#'}><Icon name={'twitter'} properties={{className: styles.icon}} /></a>
    </div>
  );
});