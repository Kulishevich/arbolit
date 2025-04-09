import Image from 'next/image';
import React from 'react';
import s from './CertificateCard.module.scss';

export const CertificateCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={'/certificate.png'} fill alt="certificate" />
      </div>
      <p className="body-2">
        Решение о сертификации арболитовых блоков по ГОСТ
      </p>
    </div>
  );
};
