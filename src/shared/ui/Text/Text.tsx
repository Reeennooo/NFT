import { type ElementType, type ReactNode } from 'react';
import clsx from 'classnames';
import styles from './Text.module.scss';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  color?: 'primary' | 'muted';
  className?: string;
};

export function Text<T extends ElementType = 'span'>({
  as,
  children,
  size = 'md',
  weight = 'regular',
  align = 'left',
  color = 'primary',
  className,
}: Props<T>) {
  const Component = as || 'span';

  return (
    <Component
      className={clsx(
        styles.text,
        styles[size],
        styles[weight],
        styles[align],
        styles[color],
        className
      )}
    >
      {children}
    </Component>
  );
}


