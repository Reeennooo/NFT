import {type FC, memo, type SVGAttributes, useMemo} from 'react';
import {IconSize, type IconSizeType} from './types.ts';
import Cross from '../../assets/icons/cross.svg?react';
import Warning from '../../assets/icons/warning.svg?react';
import Settings from '../../assets/icons/settings.svg?react';
import ArrowTop from '../../assets/icons/arrow-top.svg?react';
import Camera from '../../assets/icons/camera.svg?react';
import Clock from '../../assets/icons/clock.svg?react';
import Ethereum from '../../assets/icons/ethereum.svg?react';
import ArrowLeft from '../../assets/icons/arrow-left.svg?react';
import ArrowRight from '../../assets/icons/arrow-right.svg?react';
import Inst from 'shared/assets/socials/inst.svg?react';
import Twitter from 'shared/assets/socials/twitter.svg?react';
import Facebook from 'shared/assets/socials/facebook.svg?react';
import Linkedin from 'shared/assets/socials/linkedin.svg?react';
import Burger from 'shared/assets/icons/burger.svg?react';

export type IconList =
  'cross'
  | 'settings'
  | 'arrow-top'
  | 'camera'
  | 'clock'
  | 'ethereum'
  | 'arrow-left'
  | 'arrow-right'
  | 'inst'
  | 'twitter'
  | 'facebook'
  | 'linkedin'
  | 'burger'
  | 'warning';

interface IProps {
  name: IconList;
  properties?: SVGAttributes<unknown>;
  size?: IconSizeType
}

export const Icon: FC<IProps> = memo(function Icon(props) {
  const { name, properties = {}, size } = props

  const sizePx = useMemo(() => {
    switch (size) {
    case IconSize.large:
      return 24
    case IconSize.medium:
      return 20
    case IconSize.small:
      return 16
    case IconSize.extraSmall:
      return 12
    }
    return undefined
  }, [size])

  if (sizePx) {
    properties.width = sizePx;
    properties.height = sizePx;
  }

  switch (name) {
  case 'cross':
    return <Cross {...properties} />;
  case 'warning':
    return <Warning {...properties} />;
  case 'settings':
    return <Settings {...properties} />;
  case 'arrow-top':
    return <ArrowTop {...properties} />;
  case 'camera':
    return <Camera {...properties} />;
  case 'clock':
    return <Clock {...properties} />;
  case 'ethereum':
    return <Ethereum {...properties} />;
  case 'arrow-right':
    return <ArrowRight {...properties} />;
  case 'arrow-left':
    return <ArrowLeft {...properties} />;
  case 'inst':
    return <Inst {...properties} />;
  case 'twitter':
    return <Twitter {...properties} />;
  case 'linkedin':
    return <Linkedin {...properties} />;
  case 'facebook':
    return <Facebook {...properties} />;
  case 'burger':
    return <Burger {...properties} />;
  }
});