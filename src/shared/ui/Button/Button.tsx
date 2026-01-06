import {type FC, memo, useMemo} from 'react';
import {SquircleWrap} from '../SquircleWrap/SquircleWrap.tsx';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface IProps {
  text: string;
  onClick: () => void;
  style: ButtonStyle;
  size: ButtonSize;
  width: string;
  textTransform?: ButtonTextTransform;
  fontFamily?: ButtonFontFamily;
  className?: string;
}

type ButtonStyle = 'primary' | 'secondary';
type ButtonTextTransform = 'textUppercase' | 'textInitial';
type ButtonSize = 'large' | 'medium' | 'standard' | 'small';
type ButtonFontFamily = 'inter' | 'poppins' | 'publicSans';

export const Button: FC<IProps> = memo((props) => {
  const {
    text,
    width,
    className,
    style,
    textTransform = 'intial',
    size = 'standard',
    fontFamily = 'inter',
    onClick
  } = props;

  const cornerRadius = useMemo(() => {
    if (
      size === 'small'
      || size === 'medium'
      || size === 'large'
    ) {
      return 12
    }
    return 16
  }, [
    size
  ])

  const cornerRadiusInner = cornerRadius - 2;

  const onClickCustom = () => {
    onClick();
  }

  return (
    <button
      style={{width}}
      className={classNames(styles.root,
        styles[style],
        styles[size],
        styles[textTransform],
        styles[fontFamily],
        className
      )}
      onClick={onClickCustom}
    >
      <SquircleWrap
        className={classNames(styles.rootSquircle)}
        cornerRadius={cornerRadius}
      >
        <SquircleWrap cornerRadius={cornerRadiusInner} className={styles.inner}>
          <span>{text}</span>
        </SquircleWrap>
      </SquircleWrap>
    </button>
  );
});