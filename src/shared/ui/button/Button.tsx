import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';

import clsx from 'clsx';

import styles from './Button.module.scss';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  fullWidth?: boolean;
  variant?: 'primary' | 'callback' | 'primary_with_icon' | 'link' | 'secondary';
} & ComponentPropsWithoutRef<T>;

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      as: Component = 'button',
      className,
      fullWidth,
      type = 'button',
      variant = 'primary',
      ...rest
    } = props;
    const cn = clsx(
      styles.button,
      styles[variant],
      variant === 'link' ? 'button-secondary' : 'button-primary',
      fullWidth && styles.fullWidth,
      className
    );

    return <Component className={cn} ref={ref} type={type} {...rest} />;
  }
);

Button.displayName = 'Button';
