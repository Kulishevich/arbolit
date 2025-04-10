import { GalleryCard } from '@/entities/gallery-card';
import React from 'react';
import { Pagination } from '@/shared/ui/pagination';
import s from './PhotoGallery.module.scss';

const items = new Array(9).fill('');

export const PhotoGallery = () => {
  return (
    <div className={s.container}>
      <div className={s.galleryList}>
        {items.map((_, index) => (
          <GalleryCard key={index} />
        ))}
      </div>
      <Pagination totalPages="10" />
    </div>
  );
};
