import {type FC, memo, useMemo} from 'react';
import {SquircleWrap} from '../SquircleWrap/SquircleWrap.tsx';
import styles from './Button.module.scss';
import classNames from 'classnames';
import {useWindowWidth} from 'shared/hooks/useWindowWidth.ts';

interface IProps {
  text: string;
  onClick: () => void;
  style: ButtonStyle;
  size: ButtonSize;
  textTransform?: ButtonTextTransform;
  cornerRadiusProp?: number;
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
    className,
    style,
    textTransform = 'intial',
    size = 'standard',
    fontFamily = 'inter',
    onClick,
    cornerRadiusProp
  } = props;
  const windowWidth = useWindowWidth();
  const cornerRadius = useMemo(() => {
    if (cornerRadiusProp) {
      return cornerRadiusProp
    }

    if (windowWidth < 750) {
      return 6;
    }

    if (
      size === 'medium'
      || size === 'large'
      || size === 'small'
    ) {
      return 12;
    }

    return 16;
  }, [
    size,
    windowWidth,
    cornerRadiusProp
  ])
  const cornerRadiusInner = cornerRadius - 2;

  const onClickCustom = () => {
    onClick();
  }

  return (
    <button
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