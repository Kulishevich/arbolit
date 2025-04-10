import React from 'react';
import s from './NewsCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import { slugifyWithOpts } from '@/shared/lib/utils/slugifyWithOpts';
import { parseDate } from '@/shared/lib/utils/parcsDate';

interface NewsCardProps {
  id: number;
  title: string;
  publication_date: string;
  photo_path: string;
  isLow?: boolean;
}

export const NewsCard = ({
  id,
  title,
  publication_date,
  photo_path,
  isLow = false,
}: NewsCardProps) => {
  return (
    <div className={clsx(s.container, { [s.low]: isLow })}>
      <div className={s.imageContainer}>
        <Image src={`${process.env.STORE_URL}/${photo_path}`} fill alt="news" />
        <div className={s.overlay}>
          <Button
            as="a"
            href={`/news/${slugifyWithOpts(title)}_${id}`}
            fullWidth
          >
            Подробнее
          </Button>
        </div>
      </div>
      <span className="button-secondary">{parseDate(publication_date)}</span>
      <p className={clsx({ ['h4']: !isLow, ['h5']: isLow })}>{title}</p>
    </div>
  );
};
