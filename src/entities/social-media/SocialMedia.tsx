import { TelegramIcon, ViberIcon, WhatsappIcon } from '@/shared/assets/icons';
import React from 'react';
import clsx from 'clsx';
import s from './SocialMedia.module.scss';
import { SettingT } from '@/shared/types';
import Link from 'next/link';

export const SocialMedia = ({
  className,
  setting,
}: {
  className?: string;
  setting: SettingT | null;
}) => {
  return (
    <div className={clsx(s.container, className)}>
      <Link
        href={`viber://chat?number=%2B${setting?.viber.replace(/^\+/, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
      >
        <ViberIcon />
      </Link>
      <Link
        href={`https://wa.me/${setting?.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsappIcon />
      </Link>
      <Link
        href={`https://t.me/${setting?.telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <TelegramIcon />
      </Link>
    </div>
  );
};
