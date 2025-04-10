import React, { ReactNode } from 'react';
import s from './SliderWrapper.module.scss';
import { Slider } from '@/shared/ui/slider';

export const SliderWrapper = ({
  title,
  children,
  variant,
}: {
  title?: string;
  children: ReactNode;
  variant?: 'news' | 'product' | 'discount' | 'certificate' | 'reviews';
}) => {
  const itemWidth = () => {
    switch (variant) {
      case 'certificate':
        return 336;
      case 'news':
        return 672;
      case 'reviews':
        return 1322;
    }
    return 330;
  };

  return (
    <div className={s.container}>
      {title && <h2 className="h2">{title}</h2>}
      <Slider itemWidth={itemWidth()}>{children}</Slider>
    </div>
  );
};
