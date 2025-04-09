import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

export const NewsCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={'/news.jfif'} fill alt="news" />
        <div className={s.overlay}>
          <Button fullWidth>Подробнее</Button>
        </div>
      </div>
      <span className="button-secondary">01.02.2025</span>
      <p className="h4">сколько стоит построить дом из арболита?</p>
    </div>
  );
};
