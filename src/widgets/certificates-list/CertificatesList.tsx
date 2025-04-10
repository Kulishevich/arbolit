import { CertificateCard } from '@/entities/certificate-card';
import { Pagination } from '@/shared/ui/pagination';
import React from 'react';
import s from './CertificatesList.module.scss';

const certificates = new Array(12).fill('');

export const CertificatesList = () => {
  return (
    <div className={s.container}>
      <div className={s.galleryList}>
        {certificates.map((_, index) => (
          <CertificateCard key={index} />
        ))}
      </div>
      <Pagination totalPages="10" />
    </div>
  );
};
