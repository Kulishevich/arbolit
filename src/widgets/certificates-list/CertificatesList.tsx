import { CertificateCard } from '@/entities/certificate-card';
import React from 'react';
import s from './CertificatesList.module.scss';
import { ImageResponseT } from '@/shared/types';

export const CertificatesList = async () => {
  const certificates: ImageResponseT[] = await fetch(
    `${process.env.API_URL}/certificates`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <div className={s.container}>
      <div className={s.galleryList}>
        {certificates &&
          certificates.map((elem, index) => (
            <CertificateCard key={index} certificate={elem} />
          ))}
      </div>
      {/* <Pagination totalPages="10" /> */}
    </div>
  );
};
