import { TelegramIcon, ViberIcon, WhatsappIcon } from '@/shared/assets/icons';
import React from 'react';
import clsx from 'clsx';
import s from './SocialMedia.module.scss';

export const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.container, className)}>
      <ViberIcon />
      <WhatsappIcon />
      <TelegramIcon />
    </div>
  );
};
