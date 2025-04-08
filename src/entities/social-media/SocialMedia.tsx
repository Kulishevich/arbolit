import { TelegramIcon, ViberIcon, WhatsappIcon } from '@/shared/assets/icons';
import React from 'react';
import s from './SocialMedia.module.scss';

export const SocialMedia = () => {
  return (
    <div className={s.container}>
      <ViberIcon />
      <WhatsappIcon />
      <TelegramIcon />
    </div>
  );
};
