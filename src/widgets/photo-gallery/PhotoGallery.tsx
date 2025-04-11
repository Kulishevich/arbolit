import { GalleryCard } from '@/entities/gallery-card';
import React from 'react';
import s from './PhotoGallery.module.scss';
import { ImageResponseT } from '@/shared/types';

export const PhotoGallery = async () => {
  const photos: ImageResponseT[] = await fetch(`${process.env.API_URL}/gallery`)
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <div className={s.container}>
      <div className={s.galleryList}>
        {photos &&
          photos.map((elem, index) => <GalleryCard key={index} photo={elem} />)}
      </div>
      {/* <Pagination totalPages="10" /> */}
    </div>
  );
};
