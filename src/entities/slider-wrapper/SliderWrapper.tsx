'use client';
import React, { ReactNode } from 'react';
import s from './SliderWrapper.module.scss';
import { Slider } from '@/shared/ui/slider';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const SliderWrapper = ({
  title,
  children,
  variant,
}: {
  title?: string;
  children: ReactNode;
  variant?: 'news' | 'product' | 'discount' | 'certificate' | 'reviews';
}) => {
  const { isMobile } = useBreakpoint();

  const itemWidth = () => {
    switch (variant) {
      case 'certificate':
        return !isMobile ? 336 : 175;
      case 'news':
        return !isMobile ? 672 : 351;
      case 'reviews':
        return !isMobile ? 1322 : 351;
    }
    return 330;
  };

  return (
    <div className={s.container}>
      {title && <h2 className="h2">{title}</h2>}
      <Slider middleArrows={variant === 'reviews'} itemWidth={itemWidth()}>
        {children}
      </Slider>
    </div>
  );
};
