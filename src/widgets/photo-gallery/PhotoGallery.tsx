import { GalleryCard } from '@/entities/gallery-card';
import React from 'react';
import s from './PhotoGallery.module.scss';
import { Pagination } from '@/shared/ui/pagination';

const items = new Array(9).fill('');

export const PhotoGallery = () => {
  return (
    <div className={s.container}>
      <div className={s.galleryList}>
        {items.map((elem, index) => (
          <GalleryCard />
        ))}
      </div>
      <Pagination totalPages="10" />
    </div>
  );
};
