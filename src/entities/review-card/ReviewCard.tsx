import React from 'react';
import styles from './ReviewCard.module.scss';
import Image from 'next/image';
import phone from '@/shared/assets/images/phone.png';
import { QuotesIcon } from '@/shared/assets/icons';
import clsx from 'clsx';

interface ReviewCardProps {
  name: string;
  text: string;
  image: string;
}

export const ReviewCard = ({ name, text, image }: ReviewCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        <QuotesIcon />
        <div className={clsx(styles.name, 'h4')}>{name}</div>
        <div className={clsx(styles.text, 'body-1')}>{text}</div>
      </div>

      <div className={styles.image}>
        <Image
          src={image}
          alt="review"
          className={styles.reviewImage}
          width={345}
          height={710}
        />
        <Image
          src={phone}
          alt="phone"
          className={styles.phoneImage}
          width={345}
          height={710}
        />
      </div>
    </div>
  );
};
