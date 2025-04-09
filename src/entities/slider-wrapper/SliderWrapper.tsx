import React, { ReactNode } from 'react';
import s from './SliderWrapper.module.scss';
import { Slider } from '@/shared/ui/slider';

export const SliderWrapper = ({
  title,
  children,
  variant,
}: {
  title: string;
  children: ReactNode;
  variant?: 'news' | 'product' | 'discount' | 'сertificate';
}) => {
  const itemWidth = () => {
    switch (variant) {
      case 'сertificate':
        return 336;
      case 'news':
        return 672;
    }
    return 330;
  };

  return (
    <div className={s.container}>
      <h2 className="h2">{title}</h2>
      <Slider itemWidth={itemWidth()}>{children}</Slider>
    </div>
  );
};
